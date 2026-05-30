/**
 * fetch_halte.js — Ambil halte Trans Jogja dari OpenStreetMap
 * Jalankan: node fetch_halte.js
 */
const https = require('https');
const fs    = require('fs');

const STOP_QUERY = '[out:json][timeout:25];node["highway"="bus_stop"](-7.95,110.25,-7.60,110.55);out body;';

function post(query) {
    return new Promise((resolve, reject) => {
        const body = 'data=' + encodeURIComponent(query);
        const opts = {
            hostname: 'overpass-api.de', path: '/api/interpreter', method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(body),
                'User-Agent': 'TransJogjaNav/2.0'
            }
        };
        const req = https.request(opts, (res) => {
            let d = '';
            res.on('data', c => d += c);
            res.on('end', () => {
                try { resolve(JSON.parse(d)); }
                catch(e) { reject(new Error('Parse error: ' + d.slice(0,120))); }
            });
        });
        req.on('error', reject);
        req.setTimeout(30000, () => { req.destroy(); reject(new Error('timeout')); });
        req.write(body); req.end();
    });
}

// Deteksi apakah halte ini milik Trans Jogja
function isTransJogja(tags) {
    const net  = (tags.network  || '').toLowerCase();
    const op   = (tags.operator || '').toLowerCase();
    const name = (tags.name     || '').toLowerCase();

    if (net.includes('trans jogja') || net.includes('transjogja')) return true;
    if (op.includes('trans jogja')  || op.includes('jogja tugu'))  return true;
    if (name.includes('trans jogja') || /\bhalte\s+(tj|rru)\b/i.test(name)) return true;
    if (/\btj\s+rru\b/i.test(name) || /\brru\s+\w/i.test(name)) return true;
    return false;
}

// Parse kode jalur dari tag ref / route_ref
function parseJalurFromTag(str) {
    if (!str) return [];
    return [...new Set(
        str.split(/[;,\/\s]+/)
           .map(s => { const m = s.trim().toUpperCase().match(/^(\d{1,2}[AB]?)$/); return m?m[1]:null; })
           .filter(Boolean)
    )];
}

// Coba parse jalur dari nama halte (misal "Halte TJ 1A Monjali")
function parseJalurFromName(name) {
    const matches = name.toUpperCase().match(/\b(\d{1,2}[AB])\b/g);
    return matches ? [...new Set(matches)] : [];
}

async function main() {
    console.log('Mengambil data bus stop dari OpenStreetMap...');
    const data = await post(STOP_QUERY);
    console.log(`Total bus stop di Yogyakarta: ${data.elements.length}`);

    const seen      = new Map();
    const halteList = [];

    data.elements.forEach(node => {
        if (!node.tags?.name) return;
        if (!isTransJogja(node.tags)) return;

        // Bersihkan nama
        let nama = node.tags.name
            .replace(/^halte\s+tj\s+/i,   'Halte ')
            .replace(/^halte\s+trans\s*jogja\s*/i, 'Halte ')
            .replace(/\s{2,}/g, ' ')
            .trim();
        if (!nama) return;

        const key = nama.toLowerCase().replace(/\s+/g,' ');

        const jalurTerkait = [
            ...parseJalurFromTag(node.tags.ref || node.tags.route_ref || ''),
            ...parseJalurFromName(node.tags.name)
        ];
        const jalurUniq = [...new Set(jalurTerkait)].sort();

        if (seen.has(key)) {
            const ex = seen.get(key);
            ex.jalur_terkait = [...new Set([...ex.jalur_terkait, ...jalurUniq])].sort();
            return;
        }

        const h = {
            id: 0,
            nama_halte: nama,
            info_lokasi: node.tags['addr:street'] || node.tags.description || '',
            latitude:  Math.round(node.lat * 100000) / 100000,
            longitude: Math.round(node.lon * 100000) / 100000,
            jalur_terkait: jalurUniq
        };
        seen.set(key, h);
        halteList.push(h);
    });

    halteList.sort((a,b) => a.nama_halte.localeCompare(b.nama_halte));
    halteList.forEach((h,i) => h.id = i + 1);

    console.log(`Halte Trans Jogja terfilter: ${halteList.length}`);

    // Jalur default (bisa diupdate dari OSM relasi nanti)
    const DB_JALUR = [
        { id:1,  kode_jalur:'1A', rute_simpel:'Prambanan ↔ Malioboro',              jam_ops:'05.30 – 21.30' },
        { id:2,  kode_jalur:'1B', rute_simpel:'Bandara Adisutjipto ↔ Taman Pintar', jam_ops:'05.30 – 21.30' },
        { id:3,  kode_jalur:'2A', rute_simpel:'Condongcatur ↔ XT Square via Malioboro', jam_ops:'05.30 – 21.30' },
        { id:4,  kode_jalur:'2B', rute_simpel:'Condongcatur ↔ XT Square',           jam_ops:'05.30 – 21.30' },
        { id:5,  kode_jalur:'3A', rute_simpel:'Bandara Adisutjipto ↔ UGM',          jam_ops:'05.30 – 21.30' },
        { id:6,  kode_jalur:'3B', rute_simpel:'Bandara Adisutjipto ↔ Jombor',       jam_ops:'05.30 – 21.30' },
        { id:7,  kode_jalur:'4A', rute_simpel:'Jombor ↔ Giwangan via Malioboro',    jam_ops:'05.30 – 21.30' },
        { id:8,  kode_jalur:'4B', rute_simpel:'Jombor ↔ Giwangan',                  jam_ops:'05.30 – 21.30' },
        { id:9,  kode_jalur:'5A', rute_simpel:'Jombor ↔ Bandara via Ring Road',     jam_ops:'05.30 – 21.30' },
        { id:10, kode_jalur:'5B', rute_simpel:'Jombor ↔ Prambanan via Ring Road',   jam_ops:'05.30 – 21.30' },
    ];

    const now = new Date().toISOString().slice(0,10);
    const out = `// ============================================================
// DATA TRANS JOGJA — Diambil dari OpenStreetMap via Overpass API
// Tanggal: ${now} | Halte: ${halteList.length} | Jalur: ${DB_JALUR.length}
// Koordinat 100% dari OSM — akurat di jalan utama
// Update data: node fetch_halte.js
// ============================================================

const DB_JALUR = ${JSON.stringify(DB_JALUR, null, 4)};

const DB_HALTE = ${JSON.stringify(halteList, null, 4)};
`;

    fs.writeFileSync('data_halte.js', out, 'utf8');
    console.log(`\ndata_halte.js berhasil ditulis!`);
    console.log(`  ${halteList.length} halte | ${DB_JALUR.length} jalur`);
    console.log('\nContoh 5 halte pertama:');
    halteList.slice(0,5).forEach(h =>
        console.log(`  [${h.id}] ${h.nama_halte} (${h.latitude}, ${h.longitude}) jalur:[${h.jalur_terkait.join(',')||'-'}]`)
    );
}

main().catch(e => { console.error('Fatal:', e.message); process.exit(1); });
