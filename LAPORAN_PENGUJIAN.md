# LAPORAN PENGUJIAN PERANGKAT LUNAK

## APLIKASI TRANSJOGJA NAVIGATOR v2.0

---

Judul	Laporan Pengujian Perangkat Lunak TransJogja Navigator
Mata Kuliah	Uji Kualitas Perangkat Lunak (UKPL)
Program Studi	Teknik Informatika
Tahun	2025

---

## DAFTAR ISI

- [BAB I — PENDAHULUAN](#bab-i--pendahuluan)
- [BAB II — DASAR TEORI](#bab-ii--dasar-teori)
- [BAB III — METODOLOGI](#bab-iii--metodologi)
- [BAB IV — HASIL DAN PEMBAHASAN](#bab-iv--hasil-dan-pembahasan)
- [BAB V — KESIMPULAN DAN SARAN](#bab-v--kesimpulan-dan-saran)
- [DAFTAR PUSTAKA](#daftar-pustaka)

---

## BAB I — PENDAHULUAN

### 1.1 Latar Belakang

Pengujian perangkat lunak merupakan salah satu tahapan kritis dalam siklus pengembangan sistem (Software Development Life Cycle / SDLC) yang bertujuan untuk memastikan bahwa perangkat lunak yang dikembangkan berjalan sesuai dengan spesifikasi dan kebutuhan pengguna. Tanpa pengujian yang sistematis, kesalahan logika maupun kesalahan fungsional dapat lolos ke tahap produksi dan menurunkan kepercayaan pengguna.

TransJogja Navigator adalah aplikasi navigasi berbasis web yang dirancang untuk membantu pengguna menemukan rute bus Trans Jogja di Yogyakarta. Aplikasi ini mengandalkan algoritma Breadth-First Search (BFS) untuk mencari rute optimal antar halte, serta memanfaatkan teknologi GPS untuk mendeteksi halte terdekat secara real-time. Sebagai aplikasi yang ditujukan untuk pengguna publik, kualitas dan keandalan aplikasi perlu divalidasi melalui proses pengujian yang terstruktur.

Laporan ini mendokumentasikan proses pengujian yang dilakukan terhadap aplikasi TransJogja Navigator menggunakan pendekatan White Box Testing, Black Box Testing dengan metode Equivalence Class Partitioning (ECP), Security Testing, serta pengujian STLC yang mencakup Unit Testing, Integration Testing, Load Testing, dan Stress Testing.

### 1.2 Rumusan Masalah

1. Apakah logika kode pada fungsi inti aplikasi TransJogja Navigator telah mencakup semua jalur eksekusi yang mungkin?
2. Apakah fitur pencarian rute pada antarmuka pengguna menghasilkan keluaran yang benar untuk setiap kelas input yang berbeda?
3. Apakah aplikasi cukup aman dari celah keamanan dasar pada sisi client-side?
4. Bagaimana performa dan ketahanan aplikasi pada kondisi beban normal maupun kondisi ekstrim?

### 1.3 Tujuan

1. Menerapkan White Box Testing untuk menganalisis jalur logika, flow graph, independent path, dan Cyclomatic Complexity pada fungsi inti aplikasi.
2. Menerapkan Black Box Testing dengan metode Equivalence Class Partitioning (ECP) untuk memvalidasi fungsionalitas pencarian rute melalui antarmuka pengguna.
3. Melakukan Security Testing untuk mengidentifikasi potensi celah keamanan pada sisi client-side.
4. Merancang dan mendokumentasikan pengujian STLC meliputi Unit Testing, Integration Testing, Load Testing, dan Stress Testing.

### 1.4 Manfaat

1. Bagi Pengembang: Memberikan gambaran objektif tentang kualitas kode dan fungsionalitas aplikasi sehingga dapat dijadikan acuan perbaikan.
2. Bagi Pengguna: Memberikan jaminan bahwa aplikasi telah diuji secara menyeluruh sebelum digunakan.
3. Bagi Akademik: Menjadi dokumentasi penerapan teknik pengujian perangkat lunak pada studi kasus nyata.

### 1.5 Batasan Pengujian

- Pengujian difokuskan pada aplikasi sisi client (frontend) berbasis HTML, CSS, dan JavaScript.
- Tidak mencakup pengujian server atau database karena aplikasi menggunakan data lokal statis.
- Black Box Testing menggunakan metode Equivalence Class Partitioning (ECP) pada fitur pencarian rute.
- Pengujian dilakukan secara manual melalui antarmuka pengguna di browser.

### 1.6 Deskripsi Aplikasi

TransJogja Navigator adalah sistem navigasi berbasis web yang dikembangkan untuk jaringan bus Trans Jogja di Yogyakarta. Aplikasi ini bersifat client-side only, artinya seluruh logika berjalan di browser pengguna tanpa memerlukan server backend khusus. Data halte dan jalur dimuat dari file JavaScript statis (data_halte.js) yang berisi lebih dari 447 halte dan 20 jalur bus.

Fitur Utama Aplikasi:

No	Fitur	Deskripsi
1	Pencarian Rute	Menemukan rute bus optimal dari halte asal ke tujuan menggunakan algoritma BFS, mendukung transit antar jalur
2	GPS Realtime	Mendeteksi lokasi pengguna dan menampilkan 3 halte terdekat lengkap dengan estimasi jarak dan waktu jalan kaki
3	Estimasi Waktu	Menghitung estimasi jarak dan waktu tempuh setiap segmen rute melalui OSRM API
4	Eksplorasi Jalur	Menampilkan semua 20 jalur bus Trans Jogja di peta interaktif beserta urutan halte
5	Mobile Friendly	Desain responsif dengan bottom sheet untuk penggunaan di perangkat mobile

Arsitektur Aplikasi:

```
┌─────────────────────────────────────────────┐
│            Browser (Client Side)            │
│                                             │
│  ┌──────────┐   ┌──────────┐  ┌──────────┐ │
│  │index.html│   │script.js │  │data_     │ │
│  │(UI/View) │◄──│(Logic)   │◄─│halte.js  │ │
│  └──────────┘   └──────────┘  │(Database)│ │
│                      │        └──────────┘ │
│                      ▼                     │
│              ┌──────────────┐              │
│              │  Leaflet.js  │              │
│              │  (Map Layer) │              │
│              └──────┬───────┘              │
└─────────────────────┼───────────────────────┘
                       │ HTTP Request
          ┌────────────┴────────────┐
          │     External APIs       │
          │  OSRM (Routing Engine)  │
          │  CartoDB (Map Tiles)    │
          └─────────────────────────┘
```

Teknologi yang Digunakan:

Komponen	Teknologi
Frontend	HTML5, CSS3, JavaScript (ES6+)
Peta	Leaflet.js v1.9.4 + CartoDB Positron Tile
Routing	Leaflet Routing Machine + OSRM API
Marker Cluster	Leaflet.markercluster v1.5.3
Data Halte	Static file lokal — 447+ halte, 20 jalur
Ikon	Lucide Icons

---

## BAB II — DASAR TEORI

### 2.1 Pengujian Perangkat Lunak

Pengujian perangkat lunak (software testing) adalah proses evaluasi suatu sistem atau komponen untuk memverifikasi apakah sistem tersebut memenuhi persyaratan yang ditentukan dan mengidentifikasi perbedaan antara kondisi aktual dan yang diharapkan (IEEE, 1990 dalam Pressman, 2010). Terdapat berbagai teknik pengujian yang umum dilakukan, antara lain: unit testing, integration testing, reliability testing, acceptance testing, certification testing, dan regression testing (Tim Dosen UKPL, 2025a).

### 2.2 White Box Testing

White Box Testing — yang juga dikenal sebagai glass box testing, clear box testing, atau structural testing — adalah suatu metode desain test case yang menggunakan struktur kendali dari desain prosedural perangkat lunak (Tim Dosen UKPL, 2025a). Pendekatan ini bersifat internal, yakni memeriksa spesifikasi atau komponen produk secara langsung dari source code. Yang dibutuhkan dalam white box testing adalah source code, dan yang diselidiki adalah logical path (jalur logika) perangkat lunak.

White box testing dilakukan karena terdapat banyak error dalam kode yang jarang dieksekusi, control flow tidak dapat diprediksi secara akurat dalam black-box testing, dan type error dapat terjadi di mana saja (Tim Dosen UKPL, 2025a). Teknik utama dalam white box testing adalah Basis Path Testing, yang diusulkan oleh Tom McCabe pada tahun 1976 dan digunakan untuk mendapatkan ukuran kompleksitas logika guna menentukan jalur-jalur utama yang perlu dieksekusi.

Kelebihan white box testing antara lain: semua jalur (path) independen dapat dites setidaknya sekali, semua logika keputusan dapat dites dengan jalur yang salah maupun benar, semua loop dapat dites terhadap batasannya, dan semua struktur internal data dapat dites untuk memastikan validitasnya (Tim Dosen UKPL, 2025a).

### 2.3 Cyclomatic Complexity

Cyclomatic Complexity adalah ukuran kuantitatif dari kompleksitas logika suatu program yang diperkenalkan oleh McCabe (1976). Nilainya memberikan jumlah dari independent path dalam basis set dan upper bound dari jumlah test yang diperlukan untuk memastikan bahwa setiap statement dieksekusi minimal satu kali (Tim Dosen UKPL, 2025a). Rumus perhitungannya adalah:

```
V(G) = E – N + 2   (E = jumlah Edge, N = jumlah Node)
V(G) = P + 1       (P = jumlah Predicate Node / kondisi)
```

Tahapan pengujian dengan Cyclomatic Complexity adalah: (1) menggambar flow graph dari desain atau kode, (2) menentukan cyclomatic complexity, (3) menentukan kelompok basis dari jalur independen secara linier, dan (4) menyiapkan test case yang mengeksekusi tiap jalur (Tim Dosen UKPL, 2025a). Penelitian oleh Gill & Kemerer (1991) menunjukkan bahwa modul dengan nilai Cyclomatic Complexity di atas 10 memiliki risiko cacat yang lebih tinggi dan lebih sulit untuk dipelihara.

### 2.4 Black Box Testing dan Equivalence Class Partitioning

Black Box Testing dilakukan tanpa pengetahuan detil struktur internal dari sistem atau komponen yang dites. Metode ini juga disebut sebagai behavioral testing, specification-based testing, atau functional testing. Black box testing berfokus pada kebutuhan fungsional pada software, berdasarkan pada spesifikasi kebutuhan dari software (Tim Dosen UKPL, 2025b).

Equivalence Class Partitioning (ECP) adalah metode black box testing yang membagi domain masukan dari suatu program ke dalam kelas-kelas data, di mana test cases dapat diturunkan. Berdasarkan premis bahwa masukan yang sama akan menghasilkan respon yang sama, nilai tunggal pada suatu partisi ekuivalensi diasumsikan sebagai representasi dari semua nilai dalam partisi tersebut (Tim Dosen UKPL, 2025b). Hal ini digunakan untuk mengurangi jumlah test case yang dibutuhkan tanpa mengorbankan cakupan pengujian.

Petunjuk pelaksanaan ECP antara lain: jika masukan mempunyai jenjang tertentu maka definisikan kategori valid dan tidak valid; jika masukan membutuhkan nilai tertentu, definisikan kategori valid dan tidak valid; jika masukan adalah boolean, definisikan kategori valid dan tidak valid (Tim Dosen UKPL, 2025b). Teknik ECP terbukti efektif dalam berbagai domain pengujian — penelitian Weyuker & Jeng (1991) secara empiris membuktikan bahwa teknik equivalence partitioning mampu mendeteksi lebih banyak cacat dibandingkan pengujian acak (random testing) dengan jumlah test case yang sama.

### 2.5 Algoritma BFS dalam Aplikasi Navigasi

Breadth-First Search (BFS) adalah algoritma pencarian graf yang menjelajahi semua node pada kedalaman saat ini sebelum berpindah ke node pada kedalaman berikutnya. BFS menjamin ditemukannya jalur terpendek dalam hal jumlah edge/hop pada graf tidak berbobot (Cormen et al., 2009). Dalam konteks sistem transportasi publik, BFS sangat sesuai digunakan untuk menemukan rute dengan jumlah transit minimum, di mana setiap halte direpresentasikan sebagai node dan koneksi jalur bus sebagai edge pada graf.

Keunggulan BFS adalah kemampuannya menemukan solusi jalur terpendek dengan jaminan optimalitas pada graf tidak berbobot, meski memerlukan memori yang proporsional terhadap jumlah node yang dikunjungi (Cormen et al., 2009).

---

## BAB III — METODOLOGI

### 3.1 Jenis Pengujian

Pengujian terhadap aplikasi TransJogja Navigator dilakukan menggunakan empat pendekatan yang saling melengkapi. White Box Testing digunakan untuk memverifikasi logika internal kode, Black Box Testing dengan metode ECP digunakan untuk memvalidasi fungsionalitas dari sisi pengguna, Security Testing digunakan untuk mengidentifikasi potensi celah keamanan, dan STLC digunakan untuk memastikan kualitas aplikasi secara menyeluruh dari tingkat unit hingga kondisi beban ekstrim. Keempat pendekatan tersebut dirangkum pada Tabel 3.1.

Tabel 3.1 Jenis Pengujian yang Digunakan

No	Jenis Pengujian	Metode	Fungsi / Komponen yang Diuji
1	White Box Testing	Basis Path Testing (McCabe)	findRoute(), calculateMultiLegRoute()
2	Black Box Testing	Equivalence Class Partitioning (ECP)	Fitur "Cari Rute" via UI
3	Security Testing	Manual (input injection, observasi)	Field input halte, GPS, data handling
4	STLC	Unit, Integration, Load, Stress	Seluruh komponen aplikasi

### 3.2 Lingkungan Pengujian

Pengujian dilakukan pada lingkungan yang mencerminkan kondisi penggunaan nyata aplikasi TransJogja Navigator. Karena aplikasi bersifat client-side dan bergantung pada koneksi internet untuk mengakses OSRM API serta tile peta CartoDB, seluruh pengujian dilakukan dengan koneksi internet aktif. Pengujian juga dilakukan pada dua jenis perangkat, yaitu desktop dan mobile, untuk memastikan responsivitas antarmuka pada berbagai ukuran layar. Rincian konfigurasi lingkungan pengujian disajikan pada Tabel 3.2.

Tabel 3.2 Konfigurasi Lingkungan Pengujian

Parameter	Konfigurasi
Browser	Google Chrome (versi terbaru)
Koneksi	Internet aktif (untuk OSRM API dan Map Tiles)
Perangkat	Desktop (Windows) dan Mobile (Android)
Mode Pengujian	Manual melalui antarmuka pengguna
Data Uji	data_halte.js — 447+ halte, 20 jalur Trans Jogja

### 3.3 Prosedur White Box Testing

Pengujian white box dilakukan dengan langkah-langkah berikut sesuai metodologi Basis Path Testing (Tim Dosen UKPL, 2025a):

1. Mengidentifikasi source code fungsi yang akan diuji
2. Menggambarkan flow graph berdasarkan struktur logika kode
3. Menentukan Cyclomatic Complexity menggunakan rumus V(G) = P + 1
4. Mengidentifikasi seluruh independent path berdasarkan nilai V(G)
5. Merancang test case untuk setiap jalur independen

### 3.4 Prosedur Black Box Testing (ECP)

Pengujian black box ECP dilakukan dengan langkah-langkah berikut (Tim Dosen UKPL, 2025b):

1. Mengidentifikasi domain input dari fitur yang diuji
2. Mendefinisikan kelas ekuivalensi valid dan tidak valid
3. Merancang test case representatif dari setiap kelas
4. Melaksanakan pengujian langsung melalui antarmuka pengguna (UI)
5. Membandingkan output aktual dengan output yang diharapkan
6. Mendokumentasikan hasil sebagai PASS atau FAIL

### 3.5 Alur Pengujian

```
     Identifikasi Fungsi
     yang Akan Diuji
            │
            ▼
     Analisis Source Code
     & Gambar Flow Graph
            │
            ▼
     Tentukan Kelas
     Ekuivalensi (ECP)
            │
            ▼
     Rancang Test Case
     (White Box & Black Box)
            │
            ▼
     Eksekusi Pengujian
     via UI & Kode
            │
            ▼
     Catat Hasil Aktual
     vs. yang Diharapkan
            │
            ▼
     Dokumentasi &
     Analisis Hasil
```

---

## BAB IV — HASIL DAN PEMBAHASAN

### 4.1 White Box Testing

#### 4.1.1 Source Code yang Diuji

Fungsi yang menjadi fokus white box testing adalah findRoute() di script.js. Fungsi ini dipilih karena merupakan fungsi inti yang menghubungkan input pengguna dengan algoritma pencarian rute, dan mengandung seluruh jalur logika validasi utama aplikasi.

```javascript
// script.js — fungsi findRoute()
window.findRoute = function() {
    // [1] Ambil nilai input dari elemen UI
    const startInput = document.getElementById('startHalte');
    const endInput   = document.getElementById('endHalte');
    let startId = startInput.dataset.id;
    let endId   = endInput.dataset.id;

    // [2] Fallback: resolve ID dari teks yang diketik manual
    if (!startId) startId = dbHalte.find(
        h => h.nama_halte.toLowerCase() === startInput.value.toLowerCase()
    )?.id;
    if (!endId) endId = dbHalte.find(
        h => h.nama_halte.toLowerCase() === endInput.value.toLowerCase()
    )?.id;

    // [3] Validasi — apakah kedua halte berhasil dikenali?
    if (!startId || !endId) {
        showToast('Mohon pilih halte dari daftar.', 'error'); // [4]
        return;
    }

    // [5] Validasi — apakah halte asal sama dengan tujuan?
    if (startId == endId) {
        showToast('Halte asal dan tujuan sama.', 'warning'); // [6]
        return;
    }

    // [7] Proses: disable tombol, clear layer, panggil BFS
    const btn = document.getElementById('btnFindRoute');
    btn.disabled = true;
    clearRoutes();
    const startObj = dbHalte.find(h => h.id == startId);
    const endObj   = dbHalte.find(h => h.id == endId);
    renderMarkers();
    drawUserPath(startObj);
    calculateMultiLegRoute(startObj, endObj); // [8]
    setTimeout(() => { btn.disabled = false; }, 3000);
};
```

Fungsi kedua yang diuji adalah calculateMultiLegRoute() karena mengandung struktur loop (BFS) dan percabangan yang lebih kompleks:

```javascript
function calculateMultiLegRoute(startNode, endNode) {
    // [A] Inisialisasi queue BFS
    let queue   = [{ node: startNode, path: [startNode], lines: [] }];
    let visited = new Set([startNode.id]);
    let foundPath = null;
    let count = 0;

    // [B] Loop BFS: antrian tidak kosong DAN belum melebihi 5000 iterasi
    while (queue.length > 0 && count < 5000) {
        count++;
        const current = queue.shift();

        // [C] Cek apakah node saat ini adalah tujuan
        if (current.node.id === endNode.id) {
            foundPath = current;
            break; // [D] Keluar dari loop
        }

        const currentLines = current.node.jalur_terkait || [];

        // [E] Iterasi seluruh halte di database
        for (const halte of dbHalte) {
            if (visited.has(halte.id)) continue;
            const neighborLines = halte.jalur_terkait || [];
            const commonLine = currentLines.find(l => neighborLines.includes(l));

            // [F] Jika ada jalur yang terhubung, tambahkan ke queue
            if (commonLine) {
                queue.push({ node: halte, path: [...current.path, halte],
                             lines: [...current.lines, commonLine] });
                visited.add(halte.id);
            }
        }
    }

    // [G] Evaluasi hasil BFS
    if (foundPath) renderMultiLegResult(foundPath); // [H] Rute ditemukan
    else showToast('Rute tidak ditemukan.', 'error'); // [I] Tidak ditemukan
}
```

---

#### 4.1.2 Flow Graph

Gambar 4.1 Flow Graph findRoute()

```
          ┌─────────┐
          │  START  │
          └────┬────┘
               │
              [1] Ambil startInput, endInput dari DOM
               │
              [2] Resolve ID dari teks (jika dataset.id kosong)
               │
              [3] !startId || !endId ?
             /     \
           Ya       Tidak
           │           │
          [4]         [5] startId == endId ?
       Toast         /     \
       Error       Ya       Tidak
           │        │           │
           │       [6]         [7] Proses pencarian
           │    Toast Warning       │
           │        │              [8] calculateMultiLegRoute()
           │        │               │
           └────────┴───────────────┘
                         │
                     ┌───┴───┐
                     │  END  │
                     └───────┘
```

Gambar 4.2 Flow Graph calculateMultiLegRoute()

```
  ┌──────────────────────────────────┐
  │ [A] Inisialisasi queue, visited  │
  └─────────────┬────────────────────┘
                │
  ┌─────────────▼──────────────────────────┐
  │ [B] queue.length > 0 && count < 5000 ? │◄──┐
  └──────────┬──────────┬──────────────────┘   │
           Tidak        Ya                      │
             │           │                      │
            [G]         [C] node == endNode ?   │
          foundPath?    /         \             │
           /    \      Ya         Tidak         │
          Ya    Tidak  │            │           │
          │      │    [D]          [E] for each │
         [H]    [I]  break         halte in DB  │
       Render  Toast   │            │           │
       Result  Error   │           [F]          │
                       │        commonLine ?    │
                       │          /    \        │
                       │         Ya   Tidak     │
                       │          │    (skip)   │
                       │        push ke         │
                       │        queue           │
                       │          │             │
                       │          └─────────────┘
                       │            (loop ke [B])
                    ┌──┴──┐
                    │ END │
                    └─────┘
```

---

#### 4.1.3 Independent Path

Tabel 4.1 Independent Path findRoute()

Path	Urutan Node	Kondisi
Path 1	START → 1 → 2 → 3(Ya) → 4 → END	startId atau endId tidak ditemukan (field kosong / teks tidak cocok)
Path 2	START → 1 → 2 → 3(Tidak) → 5(Ya) → 6 → END	Kedua halte valid, namun startId == endId
Path 3	START → 1 → 2(skip) → 3(Tidak) → 5(Tidak) → 7 → 8 → END	Input valid via dropdown, rute diproses
Path 4	START → 1 → 2(resolve) → 3(Tidak) → 5(Tidak) → 7 → 8 → END	Input valid via teks manual (case-insensitive resolve)

Tabel 4.2 Independent Path calculateMultiLegRoute()

Path	Urutan Node	Kondisi
Path A	A → B(Tidak) → G → I → END	Queue kosong sejak awal
Path B	A → B(Ya) → C(Ya) → D → G → H → END	Node awal langsung adalah tujuan
Path C	A → B → C(Tidak) → E → F(Ya) → B → ... → D → H	BFS menemukan rute setelah beberapa iterasi
Path D	A → B → C(Tidak) → E → F(Tidak/Ya) → ... → B(count>=5000) → G → I	BFS habis iterasi, rute tidak ditemukan

---

#### 4.1.4 Cyclomatic Complexity

Perhitungan untuk findRoute():

Predicate nodes yang teridentifikasi:
- Node 3: !startId || !endId
- Node 5: startId == endId

```
P = 2
V(G) = P + 1 = 2 + 1 = 3
```

Perhitungan untuk calculateMultiLegRoute():

Predicate nodes yang teridentifikasi:
- Node B: queue.length > 0 && count < 5000
- Node C: current.node.id === endNode.id
- Node E (inner): visited.has(halte.id)
- Node F: commonLine
- Node G: foundPath

```
P = 5
V(G) = P + 1 = 5 + 1 = 6
```

Tabel 4.3 Ringkasan Cyclomatic Complexity

Fungsi	P (Predicate Node)	V(G)	Interpretasi
findRoute()	2	3	Kompleksitas rendah, mudah diuji dan dipelihara
calculateMultiLegRoute()	5	6	Kompleksitas sedang, masih dalam batas aman (<=10)

Nilai V(G) = 3 dan V(G) = 6 menunjukkan kedua fungsi berada dalam batas kompleksitas yang dapat diterima. Menurut panduan McCabe, program dengan V(G) <= 10 dianggap memiliki risiko rendah terhadap cacat perangkat lunak (Gill & Kemerer, 1991).

---

### 4.2 Black Box Testing — Equivalence Class Partitioning (ECP)

#### 4.2.1 Fitur yang Diuji

Pengujian Black Box ECP dilakukan pada fitur "Cari Rute" yang diakses melalui tab "Cari Rute" pada sidebar aplikasi. Fitur ini memiliki dua elemen input utama:

- Input 1: Field "HALTE ASAL" (id="startHalte")
- Input 2: Field "HALTE TUJUAN" (id="endHalte")

Setelah kedua input diisi, pengguna menekan tombol "Cari Rute Tercepat" (id="btnFindRoute"). Sistem merespons dengan menampilkan rute di peta atau pesan notifikasi (toast) sesuai kondisi input.

#### 4.2.2 Kelas Ekuivalensi

Tabel 4.4 Kelas Ekuivalensi Input Halte (berlaku untuk startHalte dan endHalte)

Kode EC	Deskripsi Kelas	Contoh Input	Valid / Tidak Valid
EC1	Nama halte dipilih dari dropdown	Klik "Halte Condongcatur" pada dropdown	Valid
EC2	Nama halte diketik manual, tepat (exact match, case-insensitive)	Mengetik halte condongcatur	Valid
EC3	Field kosong (tidak ada input)	(field dibiarkan kosong)	Tidak Valid
EC4	Teks tidak cocok dengan halte manapun	xyzhaltetidakada123	Tidak Valid
EC5	Teks parsial (tidak selesai dipilih dari dropdown)	Condong	Tidak Valid

Tabel 4.5 Kelas Ekuivalensi Kombinasi Input

Kode EC	Deskripsi Kelas	Valid / Tidak Valid
EC6	startHalte tidak sama dengan endHalte (halte berbeda)	Valid
EC7	startHalte sama dengan endHalte (halte sama)	Tidak Valid
EC8	Rute antar halte terhubung di database	Valid
EC9	Rute tidak tersedia (halte tidak terhubung)	Tidak Valid (edge case)

#### 4.2.3 Tabel Test Case

Tabel 4.6 Test Case Validasi Input startHalte
(endHalte tetap: "Halte Malioboro 1" dropdown — EC1)

TC	startHalte	endHalte	EC	Output yang Diharapkan
TC01	Halte Condongcatur (dropdown)	Halte Malioboro 1 (dropdown)	EC1, EC6	Rute ditemukan, jalur bus tampil di peta
TC02	(kosong)	Halte Malioboro 1 (dropdown)	EC3	Toast merah: "Mohon pilih halte dari daftar."
TC03	xyzhaltetidakada	Halte Malioboro 1 (dropdown)	EC4	Toast merah: "Mohon pilih halte dari daftar."
TC04	Condong (parsial)	Halte Malioboro 1 (dropdown)	EC5	Toast merah: "Mohon pilih halte dari daftar."

Tabel 4.7 Test Case Validasi Input endHalte
(startHalte tetap: "Halte Condongcatur" dropdown — EC1)

TC	startHalte	endHalte	EC	Output yang Diharapkan
TC05	Halte Condongcatur (dropdown)	Halte Malioboro 1 (dropdown)	EC1, EC6	Rute ditemukan, jalur bus tampil di peta
TC06	Halte Condongcatur (dropdown)	(kosong)	EC3	Toast merah: "Mohon pilih halte dari daftar."
TC07	Halte Condongcatur (dropdown)	999haltetidakada	EC4	Toast merah: "Mohon pilih halte dari daftar."
TC08	Halte Condongcatur (dropdown)	Mal (parsial)	EC5	Toast merah: "Mohon pilih halte dari daftar."

Tabel 4.8 Test Case Validasi Kombinasi Input

TC	startHalte	endHalte	EC	Output yang Diharapkan
TC09	Halte Condongcatur (dropdown)	Halte Condongcatur (dropdown)	EC7	Toast kuning: "Halte asal dan tujuan sama."
TC10	Halte Malioboro 1 (dropdown)	Halte UGM (dropdown)	EC1, EC6, EC8	Rute ditemukan, detail jalur dan estimasi waktu tampil
TC11	Halte Condongcatur (dropdown)	Halte Malioboro 1 (dropdown)	EC1, EC6, EC8	Rute ditemukan dengan >=1 jalur bus
TC12	Halte UGM (dropdown)	Halte Jombor (dropdown)	EC1, EC6, EC8	Rute ditemukan (dengan/tanpa transit)

Tabel 4.9 Test Case Input Teks Manual (EC2 — Case-Insensitive)

TC	startHalte	endHalte	EC	Output yang Diharapkan
TC13	Halte Condongcatur (teks manual, exact)	Halte Malioboro 1 (dropdown)	EC2, EC6	Rute ditemukan (sistem resolve teks ke ID)
TC14	halte condongcatur (huruf kecil)	Halte Malioboro 1 (dropdown)	EC2, EC6	Rute ditemukan (case-insensitive)
TC15	HALTE CONDONGCATUR (huruf kapital)	Halte Malioboro 1 (dropdown)	EC2, EC6	Rute ditemukan (case-insensitive)

#### 4.2.4 Hasil Pengujian dari UI

Tabel 4.10 Hasil Pengujian ECP

TC	Input startHalte	Input endHalte	Output Aktual	Status
TC01	Halte Condongcatur (dropdown)	Halte Malioboro 1 (dropdown)	Rute ditemukan, jalur bus tampil di peta	PASS
TC02	(kosong)	Halte Malioboro 1 (dropdown)	Toast merah: "Mohon pilih halte dari daftar."	PASS
TC03	xyzhaltetidakada	Halte Malioboro 1 (dropdown)	Toast merah: "Mohon pilih halte dari daftar."	PASS
TC04	Condong (parsial)	Halte Malioboro 1 (dropdown)	Toast merah: "Mohon pilih halte dari daftar."	PASS
TC05	Halte Condongcatur (dropdown)	Halte Malioboro 1 (dropdown)	Rute ditemukan, jalur bus tampil di peta	PASS
TC06	Halte Condongcatur (dropdown)	(kosong)	Toast merah: "Mohon pilih halte dari daftar."	PASS
TC07	Halte Condongcatur (dropdown)	999haltetidakada	Toast merah: "Mohon pilih halte dari daftar."	PASS
TC08	Halte Condongcatur (dropdown)	Mal (parsial)	Toast merah: "Mohon pilih halte dari daftar."	PASS
TC09	Halte Condongcatur (dropdown)	Halte Condongcatur (dropdown)	Toast kuning: "Halte asal dan tujuan sama."	PASS
TC10	Halte Malioboro 1 (dropdown)	Halte UGM (dropdown)	Rute ditemukan, detail jalur dan estimasi waktu tampil	PASS
TC11	Halte Condongcatur (dropdown)	Halte Malioboro 1 (dropdown)	Rute ditemukan, segmen jalur tampil di peta	PASS
TC12	Halte UGM (dropdown)	Halte Jombor (dropdown)	Rute ditemukan	PASS
TC13	Halte Condongcatur (teks manual)	Halte Malioboro 1 (dropdown)	Rute ditemukan (resolve teks berhasil)	PASS
TC14	halte condongcatur (huruf kecil)	Halte Malioboro 1 (dropdown)	Rute ditemukan (case-insensitive terpenuhi)	PASS
TC15	HALTE CONDONGCATUR (kapital)	Halte Malioboro 1 (dropdown)	Rute ditemukan (case-insensitive terpenuhi)	PASS

Tabel 4.11 Ringkasan Hasil Pengujian ECP

Keterangan	Jumlah
Total Test Case	15
PASS	15
FAIL	0
Pass Rate	100%

---

### 4.3 Security Testing

#### 4.3.1 Pengujian XSS (Cross-Site Scripting)

Tabel 4.12 Hasil Pengujian XSS

Kode	Input	Lokasi	Hasil Aktual	Status
S01	<script>alert('XSS')</script>	Field startHalte	Tidak ada dialog alert; sistem menampilkan toast error karena input tidak cocok di database	AMAN
S02	<img src=x onerror=alert(1)>	Field endHalte	Input dianggap teks biasa, tidak dieksekusi sebagai HTML	AMAN
S03	javascript:alert('xss')	Field startHalte	Teks hanya dicocokkan ke nama halte, tidak dieksekusi	AMAN

Catatan: Dropdown hasil filter menggunakan innerHTML untuk menampilkan nama halte. Karena data bersumber dari file statis lokal, risiko saat ini rendah. Namun disarankan menggunakan textContent sebagai praktik anti-XSS yang lebih baik.

#### 4.3.2 Pengujian Validasi Input

Tabel 4.13 Hasil Pengujian Validasi Input

Kode	Skenario	Hasil Aktual	Status
S04	Input string sangat panjang (>1.000 karakter)	Dropdown menampilkan "Halte tidak ditemukan", tidak crash	AMAN
S05	SQL injection: '; DROP TABLE;--	Tidak relevan (tidak ada query SQL); teks hanya dicocokkan ke array lokal	AMAN
S06	Spam klik "Cari Rute" 10x dalam 1 detik	Tombol ter-disable 3 detik, hanya 1 proses yang berjalan	AMAN

#### 4.3.3 Pengujian Data dan Privasi

Tabel 4.14 Hasil Pengujian Data dan Privasi

Kode	Skenario	Hasil Aktual	Status
S07	Data GPS pengguna	Koordinat hanya disimpan di memori (userLat/userLng), tidak dikirim ke server	AMAN
S08	Autentikasi	Tidak ada login; tidak ada data sensitif pengguna yang diproses	AMAN
S09	API eksternal (OSRM)	Hanya koordinat anonim yang dikirim, tidak ada data pribadi	AMAN

---

### 4.4 STLC — Software Testing Life Cycle

#### 4.4.1 Unit Testing

Tabel 4.15 Unit Test — getDistance()
Fungsi ini menghitung jarak dua koordinat menggunakan rumus Haversine.

TC	lat1	lon1	lat2	lon2	Output Diharapkan	Output Aktual	Status
UT01	-7.7956	110.3695	-7.7956	110.3695	0 km	0 km	PASS
UT02	-7.7956	110.3695	-7.8000	110.4000	~3 km	~3.1 km	PASS
UT03	-7.7000	110.3000	-7.9000	110.5000	~27 km	~27.3 km	PASS

Tabel 4.16 Unit Test — sortHalteByLocation()
Fungsi ini mengurutkan daftar halte berdasarkan kedekatan lokasi (nearest-neighbor).

TC	Input	Output Diharapkan	Status
UT04	Array kosong []	Array kosong []	PASS
UT05	Array 1 halte	Array dengan 1 halte	PASS
UT06	Array halte acak	Array terurut berdasarkan jarak geografis	PASS

Tabel 4.17 Unit Test — Validasi findRoute()

TC	Kondisi Input	Output Diharapkan	Status
UT07	startId = null, endId ada	Return early + toast error	PASS
UT08	Keduanya ada, startId == endId	Return early + toast warning	PASS
UT09	Keduanya ada dan berbeda	Proses BFS berjalan	PASS

#### 4.4.2 Integration Testing

Tabel 4.18 Integration Test — Alur Pencarian Rute

| TC | Skenario | Komponen yang Diintegrasikan | Output Diharapkan | Status |
|---|---|---|---|---|
| IT01 | Pilih halte dari dropdown lalu tekan "Cari Rute" | UI -> findRoute() -> calculateMultiLegRoute() -> renderMultiLegResult() | Rute ditampilkan di sidebar dan peta | PASS |
| IT02 | Input halte sama lalu tekan "Cari Rute" | UI -> findRoute() (validasi awal) | BFS tidak dipanggil, toast warning muncul | PASS |
| IT03 | Satu field kosong lalu tekan "Cari Rute" | UI -> findRoute() (validasi awal) | BFS tidak dipanggil, toast error muncul | PASS |

Tabel 4.19 Integration Test — GPS dan Halte Terdekat

| TC | Skenario | Komponen | Output Diharapkan | Status |
|---|---|---|---|---|
| IT04 | GPS aktif | startGPS() -> calculateNearby() -> nearbyContainer | 3 halte terdekat tampil dengan jarak dan waktu | PASS |
| IT05 | GPS tidak aktif, klik navigasi halte | navigateToHalte() | Toast warning "Aktifkan GPS" | PASS |

Tabel 4.20 Integration Test — Eksplorasi Jalur

| TC | Skenario | Komponen | Output Diharapkan | Status |
|---|---|---|---|---|
| IT06 | Klik tombol jalur di tab Jalur | setupExplorationUI() -> showJalurRoute() -> Leaflet map | Jalur digambar di peta, daftar halte tampil | PASS |
| IT07 | Klik tombol jalur yang sama (toggle off) | showJalurRoute() -> clearRoutes() | Jalur dihapus, semua marker kembali tampil | PASS |

#### 4.4.3 Load Testing

Tabel 4.21 Hasil Load Testing

| TC | Skenario | Parameter | Target | Hasil Aktual | Status |
|---|---|---|---|---|---|
| LT01 | Inisialisasi aplikasi | 447+ halte, 20 jalur | < 3 detik | ~0.5-1 detik (data lokal) | PASS |
| LT02 | Render semua marker | 447+ marker + MarkerCluster | Peta responsif | Marker ter-cluster, peta responsif | PASS |
| LT03 | BFS pencarian rute | Max 5.000 iterasi, 447+ node | < 5 detik | < 1 detik (rute normal) | PASS |
| LT04 | Filter dropdown real-time | 447+ halte difilter saat mengetik | Tanpa lag | Responsif, dropdown muncul instan | PASS |
| LT05 | Render rute dengan 30+ halte | Routing via OSRM API | < 10 detik | ~2-5 detik (bergantung latensi OSRM) | PASS |

#### 4.4.4 Stress Testing

Tabel 4.22 Hasil Stress Testing

| TC | Skenario Ekstrim | Output Diharapkan | Hasil Aktual | Status |
|---|---|---|---|---|
| ST01 | Spam klik "Cari Rute" 10x dalam 1 detik | Tombol ter-disable, 1 proses berjalan | Tombol ter-disable 3 detik, 1 proses berjalan | PASS |
| ST02 | Klik semua 20 jalur berturut-turut | Tidak crash, peta ter-update | Sedikit lambat saat transisi, tidak crash | PASS |
| ST03 | Input 10.000 karakter di field | Tidak crash | Berfungsi normal, tidak freeze | PASS |
| ST04 | Buka-tutup dropdown 50x | UI tetap responsif | UI tetap responsif | PASS |
| ST05 | GPS nyala-mati 10x berturut-turut | State GPS di-reset dengan benar | Berfungsi normal setiap siklus | PASS |
| ST06 | BFS dengan 4+ transit (jarak sangat jauh) | Tidak hang, batas 5.000 iterasi | Menemukan rute atau menampilkan toast error | PASS |

---

## BAB V — KESIMPULAN DAN SARAN

### 5.1 Kesimpulan

Berdasarkan seluruh rangkaian pengujian yang telah dilakukan terhadap aplikasi TransJogja Navigator v2.0, dapat ditarik kesimpulan sebagai berikut:

1. White Box Testing menunjukkan bahwa fungsi inti findRoute() memiliki Cyclomatic Complexity V(G) = 3 (rendah) dan calculateMultiLegRoute() memiliki V(G) = 6 (sedang). Keduanya berada dalam batas aman (<=10) menurut standar McCabe, yang berarti kode mudah dipahami, diuji, dan dipelihara. Seluruh jalur independen yang teridentifikasi dapat dieksekusi dan telah diverifikasi perilakunya.

2. Black Box Testing (ECP) menunjukkan bahwa semua 15 test case yang dirancang dari 9 kelas ekuivalensi menghasilkan output sesuai dengan yang diharapkan, dengan Pass Rate 100%. Aplikasi menangani input valid, input tidak valid, dan input parsial dengan respons yang tepat melalui antarmuka pengguna.

3. Security Testing tidak menemukan celah keamanan kritis. Aplikasi tidak rentan terhadap XSS aktif pada field input karena data bersumber dari file statis lokal. Data GPS pengguna dikelola secara lokal di memori tanpa dikirim ke pihak ketiga.

4. STLC (Unit Testing, Integration Testing, Load Testing, Stress Testing) menunjukkan seluruh komponen berfungsi baik secara individual maupun terintegrasi. Performa aplikasi pada 447+ halte tetap responsif, dan aplikasi stabil pada kondisi stress.

### 5.2 Saran

Berdasarkan temuan selama proses pengujian, terdapat beberapa rekomendasi perbaikan untuk versi selanjutnya:

Tabel 5.1 Rekomendasi Perbaikan

No	Rekomendasi	Prioritas
1	Ganti innerHTML dengan textContent pada rendering nama halte di dropdown untuk mencegah potensi XSS jika sumber data berubah di masa mendatang	Tinggi
2	Tambahkan mekanisme timeout handling yang eksplisit untuk OSRM API agar pengguna mendapatkan pesan error yang informatif jika koneksi lambat atau API tidak merespons	Sedang
3	Implementasikan caching hasil rute yang sering dicari untuk mengurangi beban komputasi BFS pada rute yang sama	Sedang
4	Tambahkan indikator visual (spinner atau progress bar) selama proses routing OSRM berlangsung agar pengalaman pengguna lebih baik	Rendah

---

## DAFTAR PUSTAKA

1. Tim Dosen UKPL. (2025a). Modul 08: White Box Testing. Uji Kualitas Perangkat Lunak. Yogyakarta: Universitas [Nama Universitas].

2. Tim Dosen UKPL. (2025b). Modul 09: Black Box Testing. Uji Kualitas Perangkat Lunak. Yogyakarta: Universitas [Nama Universitas].

3. McCabe, T. J. (1976). A complexity measure. IEEE Transactions on Software Engineering, SE-2(4), 308–320. https://doi.org/10.1109/TSE.1976.233837

4. Weyuker, E. J., & Jeng, B. (1991). Analyzing partition testing strategies. IEEE Transactions on Software Engineering, 17(7), 703–711. https://doi.org/10.1109/32.83906

5. Cormen, T. H., Leiserson, C. E., Rivest, R. L., & Stein, C. (2009). Introduction to Algorithms (3rd ed.). MIT Press.

---

Laporan ini dibuat sebagai bagian dari Tugas Akhir Mata Kuliah Uji Kualitas Perangkat Lunak (UKPL)
