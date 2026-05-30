# TransJogja Navigator

Sistem navigasi cerdas untuk jaringan bus Trans Jogja berbasis web. Temukan rute bus tercepat, halte terdekat, dan estimasi waktu perjalanan — gratis, tanpa login, langsung pakai.

**Live Demo:** [navigator.vercel.app](https://navigator.vercel.app)

---

## Fitur

- **Pencarian Rute Otomatis** — Algoritma BFS (Breadth-First Search) menemukan rute bus tercepat dari halte asal ke tujuan, termasuk rute dengan transit antar jalur
- **GPS Realtime** — Deteksi lokasi otomatis dan tampilkan 3 halte terdekat lengkap dengan arah jalan kaki mengikuti jalan nyata
- **Estimasi Waktu & Jarak** — Kalkulasi otomatis estimasi waktu perjalanan dan jarak tempuh setiap segmen rute
- **Eksplorasi Jalur** — Lihat semua 20 jalur Trans Jogja di peta interaktif dengan urutan halte lengkap
- **Data Akurat dari OSM** — 447+ halte dengan koordinat langsung dari OpenStreetMap, tepat di badan jalan
- **Mobile Friendly** — Bottom sheet di HP, peta tetap terlihat penuh

---

## Tech Stack

| Teknologi | Kegunaan |
|---|---|
| HTML / CSS / JavaScript | Frontend — pure vanilla, no framework |
| [Leaflet.js](https://leafletjs.com/) | Peta interaktif |
| [Leaflet Routing Machine](https://www.liedman.net/leaflet-routing-machine/) | Kalkulasi rute jalan nyata via OSRM |
| [OSRM](https://project-osrm.org/) | Routing engine (foot & driving profile) |
| [OpenStreetMap](https://www.openstreetmap.org/) | Data halte & peta dasar |
| [CARTO Voyager](https://carto.com/) | Tile layer peta |
| [Vercel](https://vercel.com/) | Hosting & deployment |

---

## Cara Pakai

1. Buka halaman landing, klik **Mulai Navigasi**
2. Pilih halte asal dan tujuan dari dropdown pencarian
3. Klik **Cari Rute Tercepat**
4. Rute tampil di peta dengan estimasi jarak dan waktu per segmen
5. Aktifkan GPS untuk melihat halte terdekat dan arah jalan kaki

---

## Struktur File

```
transjogja-navigator/
├── landing.html        # Halaman landing
├── index.html          # Aplikasi utama (peta + sidebar)
├── script.js           # Logic: peta, GPS, BFS routing, dropdown
├── data_halte.js       # Database halte & jalur (dari OpenStreetMap)
├── fetch_halte.js      # Script update data halte dari Overpass API
├── fetch_routes.js     # Script update data jalur dari Overpass API
└── README.md
```

---

## Update Data Halte

Data halte disimpan lokal di `data_halte.js`. Untuk memperbarui dari OpenStreetMap:

```bash
node fetch_halte.js    # Ambil ulang semua halte
node fetch_routes.js   # Update data jalur per halte
```

Tidak perlu API key — menggunakan [Overpass API](https://overpass-api.de/) yang gratis.

---

## Deploy ke Vercel

Karena pure static HTML, deploy ke Vercel sangat mudah:

1. Push repo ke GitHub
2. Import di [vercel.com](https://vercel.com)
3. Vercel otomatis detect sebagai static site — tidak perlu konfigurasi apapun
4. Done

---

## Algoritma Routing

Pencarian rute menggunakan **BFS (Breadth-First Search)** pada graf halte Trans Jogja:

- Setiap halte adalah node, setiap jalur bus adalah edge
- BFS menjamin rute dengan jumlah transit minimum ditemukan terlebih dahulu
- Mendukung multi-transit (ganti bus lebih dari sekali)
- Rute jalan kaki dari lokasi user ke halte awal dihitung via OSRM dengan profil `foot`

---

## Developer

**Vano Athalla**

- Instagram: [@vanoathalla_](https://www.instagram.com/vanoathalla_)
- GitHub: [github.com/vanoathalla](https://github.com/vanoathalla)

---

## Lisensi

Data halte & jalur © [OpenStreetMap Contributors](https://www.openstreetmap.org/copyright) (ODbL)  
Tile peta © [CARTO](https://carto.com/)
