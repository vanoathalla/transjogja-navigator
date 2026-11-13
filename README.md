# TransJogja Navigator

> Sistem navigasi cerdas untuk jaringan bus Trans Jogja berbasis web — gratis, tanpa login, langsung pakai.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-navigator.vercel.app-16a34a?style=flat-square&logo=vercel)](https://navigator.vercel.app)
[![HTML](https://img.shields.io/badge/Frontend-Vanilla%20JS-f7df1e?style=flat-square&logo=javascript)](https://github.com/vanoathalla/transjogja-navigator)
[![Leaflet](https://img.shields.io/badge/Map-Leaflet.js-199900?style=flat-square)](https://leafletjs.com/)
[![License: ODbL](https://img.shields.io/badge/Data-ODbL%20(OSM)-blue?style=flat-square)](https://www.openstreetmap.org/copyright)

TransJogja Navigator membantu penumpang bus Trans Jogja menemukan rute tercepat antar halte, menampilkan halte terdekat dari lokasi pengguna, dan memberikan estimasi waktu perjalanan — semua di satu halaman, tanpa perlu install aplikasi.

---

## Fitur Utama

### 🗺️ Pencarian Rute Otomatis
Masukkan halte asal dan tujuan, tekan cari — algoritma BFS langsung menemukan jalur bus paling efisien, termasuk rute dengan 1 atau lebih kali transit antar jalur. Hasil ditampilkan di peta dengan detail per segmen (jalur, halte, estimasi waktu & jarak).

### 📍 GPS Realtime
Aktifkan GPS untuk melihat posisi kamu di peta secara langsung. Aplikasi otomatis menghitung 3 halte Trans Jogja terdekat beserta jarak dan petunjuk arah jalan kaki mengikuti jalan nyata (via OSRM).

### 🚌 Eksplorasi Jalur
Lihat dan telusuri semua 20 jalur Trans Jogja (1A, 1B, 2A, 2B, ... dst) di peta interaktif. Setiap jalur tampil dengan warna berbeda dan urutan halte lengkap.

### ⏱️ Estimasi Waktu & Jarak
Setiap segmen rute dilengkapi estimasi jarak tempuh dan waktu perjalanan yang dihitung otomatis berdasarkan data koordinat halte.

### 📱 Mobile Friendly
Layout responsif dengan bottom sheet di perangkat mobile — peta tetap terlihat penuh, panel kontrol bisa dibuka/tutup dengan swipe.

### 🔄 Data Offline-ready
447+ halte dengan koordinat akurat dari OpenStreetMap disimpan lokal di `data_halte.js`. Tidak butuh request ke server untuk mencari rute.

---

## Tech Stack

| Teknologi | Peran |
|---|---|
| HTML / CSS / JavaScript | Frontend — pure vanilla, zero framework |
| [Leaflet.js](https://leafletjs.com/) | Rendering peta interaktif |
| [Leaflet Routing Machine](https://www.liedman.net/leaflet-routing-machine/) | Kalkulasi rute jalan nyata via OSRM |
| [Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster) | Clustering marker halte |
| [OSRM](https://project-osrm.org/) | Routing engine — profil `foot` & `driving` |
| [OpenStreetMap](https://www.openstreetmap.org/) | Sumber data halte & base map |
| [CARTO Voyager](https://carto.com/) | Tile layer peta |
| [Vercel](https://vercel.com/) | Hosting & deployment (static site) |

---

## Cara Pakai

1. Buka halaman landing → klik **Mulai Navigasi**
2. Pilih **Halte Asal** dan **Halte Tujuan** dari dropdown pencarian (bisa ketik nama halte)
3. Klik **Cari Rute Tercepat**
4. Rute tampil di peta — klik setiap segmen untuk detail jalur, halte, estimasi waktu & jarak
5. Aktifkan tombol **GPS** di pojok kanan atas untuk melihat posisi kamu dan 3 halte terdekat
6. Tab **Jalur** untuk mengeksplorasi semua rute Trans Jogja di peta

---

## Algoritma Routing

Pencarian rute menggunakan **BFS (Breadth-First Search)** pada graf halte Trans Jogja:

```
Node   = setiap halte Trans Jogja
Edge   = koneksi antar halte dalam satu jalur bus
Weight = jumlah transit (ganti bus)
```

BFS menjamin rute dengan **jumlah transit minimum** ditemukan terlebih dahulu. Jika ada beberapa rute dengan jumlah transit sama, dipilih berdasarkan estimasi jarak terpendek.

Multi-transit didukung penuh — misalnya Halte A → ganti di Halte B → Halte C. Rute jalan kaki dari posisi GPS user ke halte terdekat dihitung terpisah via OSRM dengan profil `foot`.

---

## Struktur File

```
transjogja-navigator/
├── landing.html        # Halaman landing / intro
├── index.html          # Aplikasi utama (peta + sidebar + semua UI)
├── script.js           # Semua logic: inisialisasi peta, GPS, BFS routing, dropdown search
├── data_halte.js       # Database halte & jalur lokal (dari OpenStreetMap)
├── fetch_halte.js      # Script Node.js — update data halte dari Overpass API
├── fetch_routes.js     # Script Node.js — update data jalur dari Overpass API
└── README.md
```

---

## Update Data Halte

Data halte disimpan lokal di `data_halte.js` agar tidak butuh request ke server saat runtime. Untuk memperbarui dari OpenStreetMap (jika ada halte baru atau perubahan rute):

```bash
node fetch_halte.js    # Ambil ulang semua halte Trans Jogja
node fetch_routes.js   # Update data jalur beserta urutan halte
```

Tidak perlu API key — menggunakan [Overpass API](https://overpass-api.de/) yang gratis dan terbuka.

---

## Deploy ke Vercel

Karena pure static HTML/CSS/JS (tidak ada backend, tidak ada build step), deploy ke Vercel sangat sederhana:

1. Fork atau push repo ini ke GitHub
2. Buka [vercel.com](https://vercel.com) → **Add New Project** → pilih repo ini
3. Vercel otomatis mendeteksi sebagai static site — tidak perlu konfigurasi apapun
4. Deploy selesai dalam hitungan detik

---

## Developer

**Vano Athalla**

- Instagram: [@vanoathalla_](https://www.instagram.com/vanoathalla_)
- GitHub: [github.com/vanoathalla](https://github.com/vanoathalla)

---

## Lisensi & Atribusi

- Data halte & jalur © [OpenStreetMap Contributors](https://www.openstreetmap.org/copyright) (ODbL)
- Tile peta © [CARTO](https://carto.com/)
- Routing engine by [OSRM](https://project-osrm.org/)
