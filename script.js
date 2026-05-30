// ============================================================
// TransJogja Navigator — script.js
// Smart Routing System v2.0
// Data: Local static (data_halte.js) — no server needed
// ============================================================

// ============================================================
// 2. MAP SETUP
// ============================================================
const map = L.map('map', { zoomControl: false }).setView([-7.7956, 110.3695], 13);

L.control.zoom({ position: 'bottomright' }).addTo(map);

// Tile layer — CartoDB Positron (lebih bersih & profesional)
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> © <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
}).addTo(map);

let markerCluster = L.markerClusterGroup({
    maxClusterRadius: 40,
    iconCreateFunction: function(cluster) {
        const count = cluster.getChildCount();
        return L.divIcon({
            html: `<div style="background:linear-gradient(135deg,#16a34a,#15803d);color:white;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;border:2px solid white;box-shadow:0 2px 8px rgba(22,163,74,0.4);">${count}</div>`,
            className: '', iconSize: [32, 32]
        });
    }
});
map.addLayer(markerCluster);

// Layer Groups
let exploreLayer = L.featureGroup().addTo(map);
let userPathLayer = L.featureGroup().addTo(map);
let routeLayers = [];

// ============================================================
// 3. GLOBAL STATE
// ============================================================
let dbJalur = [], dbHalte = [];
let userLat = null, userLng = null;
let userMarker = null, userAccuracyCircle = null;
let activeRouteCode = null;
let watchId = null;

// ============================================================
// 4. WARNA JALUR
// ============================================================
const routeColors = {
    '1A': '#EF4444', '1B': '#DC2626',
    '2A': '#F59E0B', '2B': '#D97706',
    '3A': '#10B981', '3B': '#059669',
    '4A': '#3B82F6', '4B': '#2563EB',
    '5A': '#8B5CF6', '5B': '#7C3AED',
    '6A': '#EC4899', '6B': '#DB2777',
    '8':  '#6366F1', '9':  '#14B8A6',
    '10': '#F43F5E', '11': '#84CC16',
    '12': '#A3E635', '13': '#06B6D4',
    '14': '#A855F7', '15': '#FB923C'
};
const defaultColor = '#64748B';

// ============================================================
// 5. ICONS
// ============================================================
const iconHalte = L.divIcon({
    className: '',
    html: `<div style="width:14px;height:14px;border-radius:50%;background:#F5A623;border:2.5px solid white;box-shadow:0 2px 6px rgba(0,0,0,0.25);"></div>`,
    iconSize: [14, 14], iconAnchor: [7, 7]
});

const iconUser = L.divIcon({
    className: '',
    html: `<div style="width:18px;height:18px;border-radius:50%;background:#2563EB;border:3px solid white;box-shadow:0 0 0 4px rgba(37,99,235,0.25),0 2px 8px rgba(37,99,235,0.4);"></div>`,
    iconSize: [18, 18], iconAnchor: [9, 9]
});

const iconTransit = L.divIcon({
    className: '',
    html: `<div style="width:26px;height:26px;border-radius:50%;background:white;border:2px solid #374151;display:flex;align-items:center;justify-content:center;font-size:13px;box-shadow:0 2px 8px rgba(0,0,0,0.2);">🔄</div>`,
    iconSize: [26, 26], iconAnchor: [13, 13]
});

// ============================================================
// 6. GPS CONTROL BUTTON
// ============================================================
const LocateControl = L.Control.extend({
    options: { position: 'bottomright' },
    onAdd: function() {
        const btn = L.DomUtil.create('div', 'leaflet-bar leaflet-control');
        btn.style.cssText = 'background:white;width:36px;height:36px;cursor:pointer;display:flex;align-items:center;justify-content:center;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15);margin-bottom:8px;font-size:18px;transition:all 0.2s;';
        btn.innerHTML = '🎯';
        btn.title = 'Ke Lokasi Saya';
        btn.onmouseover = () => btn.style.background = '#f0fdf4';
        btn.onmouseout = () => btn.style.background = 'white';
        btn.onclick = () => startGPS(true);
        return btn;
    }
});
map.addControl(new LocateControl());

// ============================================================
// 7. GPS REALTIME
// ============================================================
function startGPS(forceCenter = false) {
    if (!navigator.geolocation) {
        showToast('Browser tidak mendukung GPS.', 'error');
        return;
    }
    if (watchId) navigator.geolocation.clearWatch(watchId);

    updateGPSStatus('searching');

    watchId = navigator.geolocation.watchPosition(
        (pos) => {
            const { latitude, longitude, accuracy } = pos.coords;
            userLat = latitude; userLng = longitude;
            updateGPSStatus('active');

            if (userMarker) {
                userMarker.setLatLng([userLat, userLng]);
                userAccuracyCircle.setLatLng([userLat, userLng]);
                userAccuracyCircle.setRadius(accuracy);
            } else {
                userMarker = L.marker([userLat, userLng], { icon: iconUser, zIndexOffset: 1000 })
                    .addTo(map)
                    .bindPopup('<b>📍 Lokasi Anda</b><br><small>Akurasi: ' + Math.round(accuracy) + 'm</small>');
                userAccuracyCircle = L.circle([userLat, userLng], {
                    radius: accuracy, color: '#2563EB', fillColor: '#2563EB',
                    fillOpacity: 0.08, weight: 1
                }).addTo(map);
                if (!forceCenter) map.flyTo([userLat, userLng], 15, { duration: 1.5 });
            }
            if (forceCenter) map.flyTo([userLat, userLng], 17, { duration: 1.5 });
            calculateNearby();
        },
        (err) => {
            updateGPSStatus('error');
            console.warn('GPS Error:', err.message);
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
}

function updateGPSStatus(status) {
    const icon = document.getElementById('gpsIcon');
    const text = document.getElementById('gpsText');
    if (!icon || !text) return;
    const states = {
        searching: { icon: '🔄', text: 'Mencari...' },
        active:    { icon: '📍', text: 'GPS Aktif' },
        error:     { icon: '❌', text: 'GPS Error' }
    };
    const s = states[status] || states.searching;
    icon.textContent = s.icon;
    text.textContent = s.text;
}

// ============================================================
// 8. INIT APP
// ============================================================
// Query Supabase dengan timeout — DIGANTI: load dari data lokal
function fetchWithTimeout(promise, ms = 8000) {
    const timeout = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('timeout')), ms)
    );
    return Promise.race([promise, timeout]);
}

async function initApp(isRetry = false) {
    try {
        setLoadingText('Memuat data halte & jalur...');

        // Load dari data lokal — instant, no network needed
        dbJalur = DB_JALUR;
        dbHalte = DB_HALTE;
        dbHalte.sort((a, b) => a.nama_halte.localeCompare(b.nama_halte));

        setLoadingText('Menyiapkan antarmuka...');
        setupSearchInput('startHalte');
        setupSearchInput('endHalte');
        setupExplorationUI();

        setLoadingText(`Memuat ${dbHalte.length} halte...`);
        renderMarkers();
        startGPS();

        // Fade out loading
        const loadingEl = document.getElementById('loading');
        loadingEl.style.transition = 'opacity 0.5s';
        loadingEl.style.opacity = '0';
        setTimeout(() => loadingEl.style.display = 'none', 500);

    } catch (e) {
        console.error('initApp error:', e.message);
        const loadingEl = document.getElementById('loading');
        loadingEl.innerHTML = `
            <div style="text-align:center;position:relative;z-index:1;padding:24px;">
                <div style="font-size:48px;margin-bottom:16px;">😕</div>
                <h2 style="color:white;font-size:18px;font-weight:700;margin:0 0 8px;">Gagal Memuat</h2>
                <p style="color:rgba(255,255,255,0.6);font-size:13px;margin:0 0 24px;">${e.message}</p>
                <button onclick="location.reload()" style="background:#F5A623;color:#1a1a2e;border:none;padding:12px 28px;border-radius:10px;font-size:14px;font-weight:700;cursor:pointer;">
                    🔄 Coba Lagi
                </button>
            </div>
        `;
    }
}

function setLoadingText(msg) {
    const el = document.getElementById('loadingText');
    if (el) el.textContent = msg;
}

// ============================================================
// 9. SEARCH DROPDOWN
// ============================================================
function setupSearchInput(elementId) {
    const oldInput = document.getElementById(elementId);
    if (!oldInput) return;

    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'position:relative;width:100%;';

    const input = document.createElement('input');
    input.type = 'text';
    input.id = elementId;
    input.className = 'halte-input';
    input.placeholder = 'Pilih atau ketik nama halte...';
    input.autocomplete = 'off';

    const list = document.createElement('ul');
    list.className = 'search-list hidden';

    oldInput.parentNode.replaceChild(wrapper, oldInput);
    wrapper.appendChild(input);
    wrapper.appendChild(list);

    const renderList = (filterText = '') => {
        list.innerHTML = '';
        const filtered = filterText
            ? dbHalte.filter(h => h.nama_halte.toLowerCase().includes(filterText.toLowerCase()))
            : dbHalte;

        if (filtered.length === 0) {
            list.innerHTML = '<li style="text-align:center;color:#9ca3af;padding:14px;font-size:12px;">Halte tidak ditemukan</li>';
        } else {
            filtered.forEach(h => {
                const li = document.createElement('li');
                const jalurList = Array.isArray(h.jalur_terkait) ? h.jalur_terkait : [];
                const badges = jalurList.slice(0, 4).map(j => {
                    const c = routeColors[j] || defaultColor;
                    return `<span style="background:${c};color:white;font-size:9px;font-weight:700;padding:1px 5px;border-radius:10px;margin-left:2px;">${j}</span>`;
                }).join('');
                li.innerHTML = `<span style="font-weight:600;">${h.nama_halte}</span>${badges ? '<br><span style="margin-top:2px;display:inline-block;">' + badges + '</span>' : ''}`;
                li.onmousedown = (e) => {
                    e.preventDefault();
                    input.value = h.nama_halte;
                    input.dataset.id = h.id;
                    list.classList.add('hidden');
                };
                list.appendChild(li);
            });
        }
        list.classList.remove('hidden');
    };

    input.addEventListener('click', (e) => {
        e.stopPropagation();
        const isHidden = list.classList.contains('hidden');
        document.querySelectorAll('.search-list').forEach(el => el.classList.add('hidden'));
        if (isHidden) renderList(input.value);
    });

    input.addEventListener('input', () => {
        document.querySelectorAll('.search-list').forEach(el => el.classList.add('hidden'));
        renderList(input.value);
    });

    document.addEventListener('click', (e) => {
        if (!wrapper.contains(e.target)) list.classList.add('hidden');
    });
}

// ============================================================
// 10. EKSPLORASI JALUR
// ============================================================
function setupExplorationUI() {
    const grid = document.getElementById('jalurGrid');
    if (!grid) return;
    grid.innerHTML = '';

    dbJalur.sort((a, b) => a.kode_jalur.localeCompare(b.kode_jalur, undefined, { numeric: true }));

    dbJalur.forEach(j => {
        const color = routeColors[j.kode_jalur] || defaultColor;
        const btn = document.createElement('button');
        btn.className = 'jalur-btn';
        btn.id = `jalurBtn_${j.kode_jalur}`;
        btn.innerText = j.kode_jalur;
        btn.style.cssText = `color:${color};border-color:${color};background:transparent;`;
        btn.onclick = () => showJalurRoute(j);
        grid.appendChild(btn);
    });
}

function showJalurRoute(jalurData) {
    const color = routeColors[jalurData.kode_jalur] || defaultColor;

    // Toggle off
    if (activeRouteCode === jalurData.kode_jalur) {
        clearRoutes();
        renderMarkers();
        document.getElementById('jalurDetail').style.display = 'none';
        activeRouteCode = null;
        // Reset button style
        const btn = document.getElementById(`jalurBtn_${jalurData.kode_jalur}`);
        if (btn) { btn.classList.remove('selected'); btn.style.cssText = `color:${color};border-color:${color};background:transparent;`; }
        return;
    }

    // Reset all buttons
    dbJalur.forEach(j => {
        const c = routeColors[j.kode_jalur] || defaultColor;
        const b = document.getElementById(`jalurBtn_${j.kode_jalur}`);
        if (b) { b.classList.remove('selected'); b.style.cssText = `color:${c};border-color:${c};background:transparent;`; }
    });

    // Activate selected
    const activeBtn = document.getElementById(`jalurBtn_${jalurData.kode_jalur}`);
    if (activeBtn) {
        activeBtn.classList.add('selected');
        activeBtn.style.cssText = `color:white;border-color:${color};background:${color};`;
    }

    activeRouteCode = jalurData.kode_jalur;
    clearRoutes();
    markerCluster.clearLayers();

    let rawHaltes = dbHalte.filter(h => {
        const routes = Array.isArray(h.jalur_terkait) ? h.jalur_terkait : [];
        return routes.includes(jalurData.kode_jalur);
    });

    if (rawHaltes.length === 0) {
        showToast('Belum ada data halte untuk jalur ini.', 'warning');
        return;
    }

    let sortedHaltes = sortHalteByLocation(rawHaltes);
    const waypoints = [];

    sortedHaltes.forEach(h => {
        L.circleMarker([h.latitude, h.longitude], {
            radius: 7, fillColor: color, color: 'white', weight: 2.5, fillOpacity: 1
        }).addTo(exploreLayer).bindPopup(`<b>${h.nama_halte}</b><br><small>Jalur ${jalurData.kode_jalur}</small>`);
        waypoints.push(L.latLng(h.latitude, h.longitude));
    });

    let routingWaypoints = waypoints.length > 25
        ? waypoints.filter((_, i) => i % 2 === 0).concat([waypoints[waypoints.length - 1]])
        : waypoints;

    const control = L.Routing.control({
        waypoints: routingWaypoints,
        lineOptions: { styles: [{ color, opacity: 0.85, weight: 5 }] },
        createMarker: () => null,
        addWaypoints: false, draggableWaypoints: false,
        fitSelectedRoutes: true, showAlternatives: false,
        containerClassName: 'hidden'
    }).addTo(map);
    routeLayers.push(control);

    // Update sidebar detail
    const detailBox = document.getElementById('jalurDetail');
    const headerBox = document.getElementById('headerDetailJalur');
    detailBox.style.display = 'block';
    headerBox.style.background = `linear-gradient(135deg, ${color}, ${color}cc)`;

    document.getElementById('detailKodeJalur').innerText = `Jalur ${jalurData.kode_jalur}`;
    document.getElementById('detailRute').innerText = jalurData.rute_simpel || 'Rute Trans Jogja';
    document.getElementById('detailJam').innerText = '🕒 ' + (jalurData.jam_ops || '05.30 – 21.30');

    const listContainer = document.getElementById('listHalteExplorasi');
    listContainer.innerHTML = '';
    sortedHaltes.forEach((h, i) => {
        const isFirst = i === 0;
        const isLast = i === sortedHaltes.length - 1;
        listContainer.innerHTML += `
            <div style="display:flex;align-items:flex-start;gap:10px;padding:6px 0;cursor:pointer;" onclick="focusMap(${h.latitude},${h.longitude})">
                <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0;padding-top:2px;">
                    <div style="width:12px;height:12px;border-radius:50%;background:${isFirst||isLast?color:'white'};border:2px solid ${color};flex-shrink:0;"></div>
                    ${!isLast ? `<div style="width:2px;flex:1;min-height:16px;background:${color}33;margin-top:2px;"></div>` : ''}
                </div>
                <div style="padding-bottom:${!isLast?'8px':'0'};">
                    <p style="font-size:12px;font-weight:${isFirst||isLast?'700':'500'};color:${isFirst||isLast?'#111827':'#374151'};margin:0;line-height:1.4;">${h.nama_halte}</p>
                    ${isFirst ? '<span style="font-size:10px;color:#16a34a;font-weight:600;">Terminal Awal</span>' : ''}
                    ${isLast ? '<span style="font-size:10px;color:#dc2626;font-weight:600;">Terminal Akhir</span>' : ''}
                </div>
            </div>`;
    });
}

// ============================================================
// 11. ALGORITMA RUTE (BFS MULTI-TRANSIT)
// ============================================================
window.findRoute = function() {
    const startInput = document.getElementById('startHalte');
    const endInput = document.getElementById('endHalte');

    let startId = startInput.dataset.id;
    let endId = endInput.dataset.id;

    if (!startId) startId = dbHalte.find(h => h.nama_halte.toLowerCase() === startInput.value.toLowerCase())?.id;
    if (!endId) endId = dbHalte.find(h => h.nama_halte.toLowerCase() === endInput.value.toLowerCase())?.id;

    if (!startId || !endId) { showToast('Mohon pilih halte dari daftar.', 'error'); return; }
    if (startId == endId) { showToast('Halte asal dan tujuan sama.', 'warning'); return; }

    const btn = document.getElementById('btnFindRoute');
    btn.disabled = true;
    btn.innerHTML = '<span style="display:inline-block;animation:spin 0.8s linear infinite;">⏳</span> Mencari rute...';

    clearRoutes();
    activeRouteCode = null;
    document.getElementById('jalurDetail').style.display = 'none';

    const startObj = dbHalte.find(h => h.id == startId);
    const endObj = dbHalte.find(h => h.id == endId);

    renderMarkers();
    drawUserPath(startObj);
    calculateMultiLegRoute(startObj, endObj);

    setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = '🔍 Cari Rute Tercepat';
    }, 3000);
};

function drawUserPath(startHalte) {
    userPathLayer.clearLayers();
    if (!userLat || !userLng) {
        showToast('GPS belum aktif. Aktifkan GPS untuk melihat rute jalan kaki.', 'warning');
        return;
    }

    const control = L.Routing.control({
        waypoints: [L.latLng(userLat, userLng), L.latLng(startHalte.latitude, startHalte.longitude)],
        lineOptions: { styles: [{ color: '#94a3b8', opacity: 0.9, weight: 5, dashArray: '8, 12' }] },
        createMarker: () => null,
        addWaypoints: false, draggableWaypoints: false,
        fitSelectedRoutes: false, showAlternatives: false,
        containerClassName: 'hidden',
        router: L.Routing.osrmv1({ serviceUrl: 'https://router.project-osrm.org/route/v1', profile: 'foot' })
    });

    control.on('routesfound', function(e) {
        const summary = e.routes[0].summary;
        const meters = summary.totalDistance;
        const minutes = Math.ceil(meters / 75);
        const distText = meters < 1000 ? `${Math.round(meters)} m` : `${(meters / 1000).toFixed(1)} km`;
        const coords = e.routes[0].coordinates;
        const mid = coords[Math.floor(coords.length / 2)];

        L.tooltip({ permanent: true, direction: 'center', className: 'route-tooltip' })
            .setLatLng([mid.lat, mid.lng])
            .setContent(`🚶 ${distText} · ${minutes} mnt`)
            .addTo(userPathLayer);
    });

    control.addTo(map);
    routeLayers.push(control);
    map.fitBounds(L.latLngBounds([[userLat, userLng], [startHalte.latitude, startHalte.longitude]]), { padding: [80, 80] });
}

function calculateMultiLegRoute(startNode, endNode) {
    let queue = [{ node: startNode, path: [startNode], lines: [] }];
    let visited = new Set([startNode.id]);
    let foundPath = null;
    let count = 0;

    while (queue.length > 0 && count < 5000) {
        count++;
        const current = queue.shift();
        if (current.node.id === endNode.id) { foundPath = current; break; }

        const currentLines = Array.isArray(current.node.jalur_terkait) ? current.node.jalur_terkait : [];
        for (const halte of dbHalte) {
            if (visited.has(halte.id)) continue;
            const neighborLines = Array.isArray(halte.jalur_terkait) ? halte.jalur_terkait : [];
            const commonLine = currentLines.find(line => neighborLines.includes(line));
            if (commonLine) {
                const prevLine = current.lines[current.lines.length - 1];
                const lineToUse = neighborLines.includes(prevLine) ? prevLine : commonLine;
                queue.push({ node: halte, path: [...current.path, halte], lines: [...current.lines, lineToUse] });
                visited.add(halte.id);
            }
        }
    }

    if (foundPath) renderMultiLegResult(foundPath);
    else showToast('Rute tidak ditemukan. Coba kombinasi halte lain.', 'error');
}

function renderMultiLegResult(result) {
    const container = document.getElementById('resultContainer');
    container.style.display = 'block';
    container.classList.add('animate-in');

    document.getElementById('resStartHalte').innerText = result.path[0].nama_halte;

    // Build segments
    let segments = [];
    let currentSegment = { line: result.lines[0], from: result.path[0], to: null, stops: [] };
    for (let i = 0; i < result.lines.length; i++) {
        const line = result.lines[i];
        const nextNode = result.path[i + 1];
        if (line !== currentSegment.line) {
            currentSegment.to = result.path[i];
            segments.push(currentSegment);
            currentSegment = { line, from: result.path[i], to: null, stops: [] };
        }
        currentSegment.stops.push(nextNode);
    }
    currentSegment.to = result.path[result.path.length - 1];
    segments.push(currentSegment);

    // Summary
    document.getElementById('routeSummary').innerText =
        `${segments.length} jalur bus · ${result.path.length - 1} perhentian${segments.length > 1 ? ' · ' + (segments.length - 1) + 'x transit' : ''}`;

    // Render segments
    const segContainer = document.getElementById('resSegments');
    segContainer.innerHTML = '';

    segments.forEach((seg, idx) => {
        const color = routeColors[seg.line] || defaultColor;
        const stepNum = idx + 2;

        // Segment card HTML
        segContainer.innerHTML += `
            <div class="route-card" style="margin-bottom:8px;">
                <div class="accordion-header accordion-open" onclick="toggleAccordion(this)">
                    <div style="display:flex;align-items:center;gap:8px;">
                        <span style="width:22px;height:22px;background:${color};color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0;">${stepNum}</span>
                        <span style="color:#374151;">Bus Jalur <b>${seg.line}</b></span>
                        <span style="font-size:10px;background:${color}20;color:${color};padding:2px 7px;border-radius:20px;font-weight:600;">${seg.stops.length} halte</span>
                    </div>
                    <svg class="accordion-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                </div>
                <div class="accordion-body">
                    <div style="background:#f9fafb;border-radius:8px;padding:10px;margin-bottom:8px;">
                        <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;">
                            <div style="width:8px;height:8px;border-radius:50%;background:${color};flex-shrink:0;"></div>
                            <span style="font-size:12px;color:#6b7280;">Naik di: <b style="color:#111827;">${seg.from.nama_halte}</b></span>
                        </div>
                        <div style="width:2px;height:12px;background:${color}40;margin-left:3px;"></div>
                        <div style="display:flex;align-items:center;gap:6px;">
                            <div style="width:8px;height:8px;border-radius:4px;background:${color};flex-shrink:0;"></div>
                            <span style="font-size:12px;color:#6b7280;">Turun di: <b style="color:#111827;">${seg.to.nama_halte}</b></span>
                        </div>
                    </div>
                    <div style="font-size:11px;color:#9ca3af;font-style:italic;" id="seg-detail-${idx}">⏳ Menghitung jarak & waktu...</div>
                </div>
            </div>`;

        // Draw route on map
        const waypoints = [L.latLng(seg.from.latitude, seg.from.longitude)];
        seg.stops.forEach(s => waypoints.push(L.latLng(s.latitude, s.longitude)));
        let routingWp = waypoints.length > 20
            ? waypoints.filter((_, i) => i % 2 === 0).concat([waypoints[waypoints.length - 1]])
            : waypoints;

        const control = L.Routing.control({
            waypoints: routingWp,
            lineOptions: { styles: [{ color, opacity: 0.9, weight: 6 }] },
            createMarker: (i, wp) => {
                if (idx > 0 && i === 0) {
                    return L.marker(wp.latLng, { icon: iconTransit })
                        .bindPopup(`<b>🔄 Transit</b><br>${seg.from.nama_halte}`);
                }
                return null;
            },
            addWaypoints: false, draggableWaypoints: false,
            fitSelectedRoutes: false, showAlternatives: false,
            containerClassName: 'hidden',
            router: L.Routing.osrmv1({ serviceUrl: 'https://router.project-osrm.org/route/v1', profile: 'driving' })
        });

        control.on('routesfound', function(e) {
            const meters = e.routes[0].summary.totalDistance;
            const busMin = Math.ceil(meters / 416) + seg.stops.length;
            const distText = meters < 1000 ? `${Math.round(meters)} m` : `${(meters / 1000).toFixed(1)} km`;
            const coords = e.routes[0].coordinates;
            const mid = coords[Math.floor(coords.length / 2)];

            L.tooltip({ permanent: true, direction: 'center', className: 'route-tooltip' })
                .setLatLng([mid.lat, mid.lng])
                .setContent(`<span style="color:${color};">🚌 ${seg.line}</span> · ${distText} · ${busMin} mnt`)
                .addTo(map);

            const detailEl = document.getElementById(`seg-detail-${idx}`);
            if (detailEl) detailEl.innerHTML = `📏 ${distText} &nbsp;·&nbsp; ⏱️ ~${busMin} menit`;
        });

        control.addTo(map);
        routeLayers.push(control);
    });

    // Scroll to result
    container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ============================================================
// 12. HELPER FUNCTIONS
// ============================================================
function clearRoutes() {
    routeLayers.forEach(control => { try { map.removeControl(control); } catch(e) {} });
    routeLayers = [];
    exploreLayer.clearLayers();
    userPathLayer.clearLayers();
    // Hapus semua tooltip dari map
    map.eachLayer(layer => {
        if (layer instanceof L.Tooltip && layer.options.permanent) map.removeLayer(layer);
    });
}

function renderMarkers() {
    markerCluster.clearLayers();
    dbHalte.forEach(h => {
        const jalurList = Array.isArray(h.jalur_terkait) ? h.jalur_terkait : [];
        const badges = jalurList.map(j => {
            const c = routeColors[j] || defaultColor;
            return `<span style="background:${c};color:white;font-size:9px;font-weight:700;padding:1px 5px;border-radius:10px;margin:1px;display:inline-block;">${j}</span>`;
        }).join('');

        const m = L.marker([h.latitude, h.longitude], { icon: iconHalte });
        m.bindPopup(`
            <div style="min-width:160px;">
                <p style="font-weight:700;font-size:13px;margin:0 0 4px;color:#111827;">${h.nama_halte}</p>
                <p style="font-size:11px;color:#6b7280;margin:0 0 6px;">${h.info_lokasi || ''}</p>
                <div>${badges}</div>
            </div>
        `, { maxWidth: 220 });

        m.on('click', () => {
            const startIn = document.getElementById('startHalte');
            const endIn = document.getElementById('endHalte');
            if (!startIn.value) { startIn.value = h.nama_halte; startIn.dataset.id = h.id; }
            else { endIn.value = h.nama_halte; endIn.dataset.id = h.id; }
        });
        markerCluster.addLayer(m);
    });
}

function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180) * Math.cos(lat2*Math.PI/180) * Math.sin(dLon/2)**2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

function calculateNearby() {
    if (!userLat) return;
    const withDist = dbHalte.map(h => ({ ...h, dist: getDistance(userLat, userLng, h.latitude, h.longitude) }));
    withDist.sort((a, b) => a.dist - b.dist);
    const top3 = withDist.slice(0, 3);
    const container = document.getElementById('nearbyContainer');
    container.innerHTML = '';

    top3.forEach((h, i) => {
        const jalurList = Array.isArray(h.jalur_terkait) ? h.jalur_terkait : [];
        const badges = jalurList.slice(0, 3).map(j => {
            const c = routeColors[j] || defaultColor;
            return `<span style="background:${c};color:white;font-size:9px;font-weight:700;padding:1px 5px;border-radius:10px;">${j}</span>`;
        }).join(' ');

        const distM = h.dist * 1000;
        const distText = distM < 1000 ? `${Math.round(distM)} m` : `${h.dist.toFixed(1)} km`;
        const walkMin = Math.ceil(distM / 75);

        container.innerHTML += `
            <div class="nearby-card" onclick="focusMap(${h.latitude},${h.longitude})" style="margin-bottom:6px;">
                <div style="width:28px;height:28px;border-radius:50%;background:${i===0?'#fef3c7':'#f3f4f6'};display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;">
                    ${i===0?'⭐':'🚏'}
                </div>
                <div style="flex:1;min-width:0;">
                    <p style="font-size:12px;font-weight:600;color:#111827;margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${h.nama_halte}</p>
                    <div style="display:flex;align-items:center;gap:6px;margin-top:3px;">
                        <span style="font-size:10px;color:#6b7280;">📏 ${distText} · 🚶 ${walkMin} mnt</span>
                    </div>
                    <div style="margin-top:3px;">${badges}</div>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
            </div>`;
    });
}

function sortHalteByLocation(halteList) {
    if (halteList.length === 0) return [];
    let startNode = halteList.find(h => h.nama_halte.includes('Terminal') || h.nama_halte.includes('Bandara')) || halteList[0];
    let sorted = [startNode];
    let current = startNode;
    let remaining = halteList.filter(h => h.id !== startNode.id);

    while (remaining.length > 0) {
        let nearest = null, minDist = Infinity;
        remaining.forEach(h => {
            const d = getDistance(current.latitude, current.longitude, h.latitude, h.longitude);
            if (d < minDist) { minDist = d; nearest = h; }
        });
        if (nearest) {
            sorted.push(nearest); current = nearest;
            remaining = remaining.filter(h => h.id !== nearest.id);
        } else {
            sorted = sorted.concat(remaining); break;
        }
    }
    return sorted;
}

function focusMap(lat, lng) {
    map.flyTo([lat, lng], 17, { duration: 1.2 });
}

// Toast notification
function showToast(message, type = 'info') {
    const colors = { info: '#2563eb', error: '#dc2626', warning: '#d97706', success: '#16a34a' };
    const icons = { info: 'ℹ️', error: '❌', warning: '⚠️', success: '✅' };
    const toast = document.createElement('div');
    toast.style.cssText = `
        position:fixed;bottom:24px;right:24px;z-index:9999;
        background:white;border-left:4px solid ${colors[type]};
        border-radius:10px;padding:12px 16px;
        box-shadow:0 8px 24px rgba(0,0,0,0.15);
        font-size:13px;font-weight:500;color:#374151;
        display:flex;align-items:center;gap:8px;
        max-width:280px;
        animation:fadeIn 0.3s ease;
    `;
    toast.innerHTML = `<span>${icons[type]}</span><span>${message}</span>`;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.transition = 'opacity 0.3s';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

// ============================================================
// 13. GLOBAL EXPORTS & EVENT LISTENERS
// ============================================================
window.swapHalte = function() {
    const s = document.getElementById('startHalte');
    const e = document.getElementById('endHalte');
    const tempVal = s.value, tempId = s.dataset.id;
    s.value = e.value; s.dataset.id = e.dataset.id;
    e.value = tempVal; e.dataset.id = tempId;
};

window.focusMap = focusMap;
window.startGPS = startGPS;
window.clearRoutes = clearRoutes;
window.renderMarkers = renderMarkers;

// ============================================================
// 14. BOOT
// ============================================================
initApp();
