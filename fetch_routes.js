/**
 * fetch_routes.js — Ambil relasi rute Trans Jogja dari OSM
 * lalu update jalur_terkait di data_halte.js yang sudah ada
 * Jalankan: node fetch_routes.js
 */
const https = require('https');
const fs    = require('fs');

// Query ringan: hanya relasi, tanpa geometry
const QUERY = '[out:json][timeout:40];relation["type"="route"]["route"="bus"]["network"="Trans Jogja"](-7.95,110.25,-7.60,110.55);out body;';

function post(query) {
    return new Promise((resolve, reject) => {
        const body = 'data=' + encodeURIComponent(query);
        const opts = {
            hostname: 'overpass-api.de', path: '/api/interpreter', method: 'POST',
            headers: { 'Content-Type':'application/x-www-form-urlencoded', 'Content-Length':Buffer.byteLength(body), 'User-Agent':'TransJogjaNav/2.0' }
        };
        const req = https.request(opts, (res) => {
            let d = '';
            res.on('data', c => d += c);
            res.on('end', () => {
                try { resolve(JSON.parse(d)); }
                catch(e) { reject(new Error('Parse: ' + d.slice(0,150))); }
            });
        });
        req.on('error', reject);
        req.setTimeout(45000, () => { req.destroy(); reject(new Error('timeout')); });
        req.write(body); req.end();
    });
}

async function main() {
    console.log('Mengambil relasi rute Trans Jogja dari OSM...');
    const data = await post(QUERY);

    const relations = data.elements.filter(e => e.type === 'relation');
    console.log(`Relasi ditemukan: ${relations.length}`);

    // Bangun map: nodeId → Set(kode_jalur)
    const nodeToRoutes = {};
    const jalurMeta    = {};

    relations.forEach(rel => {
        const ref = (rel.tags?.ref || '').toUpperCase().trim();
        if (!ref) { console.log('  Relasi tanpa ref:', rel.tags?.name); return; }

        jalurMeta[ref] = {
            kode_jalur: ref,
            rute_simpel: rel.tags?.name || `Jalur ${ref}`,
            jam_ops: '05.30 – 21.30'
        };

        (rel.members || []).forEach(m => {
            if (m.type !== 'node') return;
            if (!nodeToRoutes[m.ref]) nodeToRoutes[m.ref] = new Set();
            nodeToRoutes[m.ref].add(ref);
        });
    });

    console.log('Jalur:', Object.keys(jalurMeta).sort().join(', '));
    console.log('Node dengan jalur:', Object.keys(nodeToRoutes).length);

    // Load data_halte.js yang sudah ada
    const src = fs.readFileSync('data_halte.js', 'utf8');
    const mod = new Function(src + '; return { DB_HALTE, DB_JALUR };');
    const { DB_HALTE } = mod();

    // Kita perlu osm_id — ambil ulang stops untuk dapat id
    console.log('\nMengambil ulang stops untuk mapping osm_id...');
    const STOP_QUERY = '[out:json][timeout:25];node["highway"="bus_stop"]["network"="Trans Jogja"](-7.95,110.25,-7.60,110.55);out body;';
    const stopData = await post(STOP_QUERY);
    console.log(`Stops dengan network Trans Jogja: ${stopData.elements.length}`);

    // Bangun map: (lat,lon rounded) → osm_id
    const coordToOsmId = {};
    stopData.elements.forEach(n => {
        const key = `${Math.round(n.lat*100000)/100000},${Math.round(n.lon*100000)/100000}`;
        coordToOsmId[key] = n.id;
    });

    // Update jalur_terkait di setiap halte
    let updated = 0;
    DB_HALTE.forEach(h => {
        const key = `${h.latitude},${h.longitude}`;
        const osmId = coordToOsmId[key];
        if (osmId && nodeToRoutes[osmId]) {
            const jalur = [...nodeToRoutes[osmId]].sort();
            if (jalur.length > 0) {
                h.jalur_terkait = jalur;
                updated++;
            }
        }
    });

    console.log(`Halte diupdate jalurnya: ${updated} dari ${DB_HALTE.length}`);

    // Bangun DB_JALUR final
    const DEFAULT_JALUR = [
        { kode_jalur:'1A', rute_simpel:'Prambanan ↔ Malioboro',              jam_ops:'05.30 – 21.30' },
        { kode_jalur:'1B', rute_simpel:'Bandara Adisutjipto ↔ Taman Pintar', jam_ops:'05.30 – 21.30' },
        { kode_jalur:'2A', rute_simpel:'Condongcatur ↔ XT Square via Malioboro', jam_ops:'05.30 – 21.30' },
        { kode_jalur:'2B', rute_simpel:'Condongcatur ↔ XT Square',           jam_ops:'05.30 – 21.30' },
        { kode_jalur:'3A', rute_simpel:'Bandara Adisutjipto ↔ UGM',          jam_ops:'05.30 – 21.30' },
        { kode_jalur:'3B', rute_simpel:'Bandara Adisutjipto ↔ Jombor',       jam_ops:'05.30 – 21.30' },
        { kode_jalur:'4A', rute_simpel:'Jombor ↔ Giwangan via Malioboro',    jam_ops:'05.30 – 21.30' },
        { kode_jalur:'4B', rute_simpel:'Jombor ↔ Giwangan',                  jam_ops:'05.30 – 21.30' },
        { kode_jalur:'5A', rute_simpel:'Jombor ↔ Bandara via Ring Road',     jam_ops:'05.30 – 21.30' },
        { kode_jalur:'5B', rute_simpel:'Jombor ↔ Prambanan via Ring Road',   jam_ops:'05.30 – 21.30' },
    ];

    const fromOSM = Object.values(jalurMeta).sort((a,b) => a.kode_jalur.localeCompare(b.kode_jalur, undefined, {numeric:true}));
    const DB_JALUR = (fromOSM.length >= 5 ? fromOSM : DEFAULT_JALUR).map((j,i) => ({id:i+1,...j}));

    // Tulis ulang data_halte.js
    const now = new Date().toISOString().slice(0,10);
    const out = `// ============================================================
// DATA TRANS JOGJA — Diambil dari OpenStreetMap via Overpass API
// Tanggal: ${now} | Halte: ${DB_HALTE.length} | Jalur: ${DB_JALUR.length}
// Koordinat 100% dari OSM — akurat di jalan utama
// Update: node fetch_halte.js && node fetch_routes.js
// ============================================================

const DB_JALUR = ${JSON.stringify(DB_JALUR, null, 4)};

const DB_HALTE = ${JSON.stringify(DB_HALTE, null, 4)};
`;

    fs.writeFileSync('data_halte.js', out, 'utf8');
    console.log(`\ndata_halte.js diperbarui dengan data jalur!`);

    // Preview halte dengan jalur
    const withRoutes = DB_HALTE.filter(h => h.jalur_terkait.length > 0);
    console.log(`Halte dengan jalur terisi: ${withRoutes.length}`);
    console.log('Contoh:');
    withRoutes.slice(0,8).forEach(h =>
        console.log(`  ${h.nama_halte} → [${h.jalur_terkait.join(',')}]`)
    );
}

main().catch(e => { console.error('Fatal:', e.message); process.exit(1); });
