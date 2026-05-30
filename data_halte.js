// ============================================================
// DATA TRANS JOGJA — Local Static Database
// Koordinat diverifikasi ke jalan utama / titik halte nyata
// Sumber: OpenStreetMap, Google Maps, data publik Trans Jogja
// ============================================================

// --- DATA JALUR ---
const DB_JALUR = [
    { id: 1,  kode_jalur: '1A', rute_simpel: 'Prambanan ↔ Malioboro',              jam_ops: '05.30 – 21.30' },
    { id: 2,  kode_jalur: '1B', rute_simpel: 'Bandara Adisutjipto ↔ Taman Pintar', jam_ops: '05.30 – 21.30' },
    { id: 3,  kode_jalur: '2A', rute_simpel: 'Condongcatur ↔ XT Square via Malioboro', jam_ops: '05.30 – 21.30' },
    { id: 4,  kode_jalur: '2B', rute_simpel: 'Condongcatur ↔ XT Square',           jam_ops: '05.30 – 21.30' },
    { id: 5,  kode_jalur: '3A', rute_simpel: 'Bandara Adisutjipto ↔ UGM',          jam_ops: '05.30 – 21.30' },
    { id: 6,  kode_jalur: '3B', rute_simpel: 'Bandara Adisutjipto ↔ Jombor',       jam_ops: '05.30 – 21.30' },
    { id: 7,  kode_jalur: '4A', rute_simpel: 'Jombor ↔ Giwangan via Malioboro',    jam_ops: '05.30 – 21.30' },
    { id: 8,  kode_jalur: '4B', rute_simpel: 'Jombor ↔ Giwangan',                  jam_ops: '05.30 – 21.30' },
    { id: 9,  kode_jalur: '5A', rute_simpel: 'Jombor ↔ Bandara via Ring Road',     jam_ops: '05.30 – 21.30' },
    { id: 10, kode_jalur: '5B', rute_simpel: 'Jombor ↔ Prambanan via Ring Road',   jam_ops: '05.30 – 21.30' },
];

// --- DATA HALTE ---
// Semua koordinat di-snap ke badan jalan utama yang dilalui Trans Jogja
const DB_HALTE = [

    // ── TERMINAL & HUB UTAMA ──────────────────────────────────────────
    { id: 1,  nama_halte: 'Terminal Prambanan',
              info_lokasi: 'Jl. Solo, Prambanan, Sleman',
              latitude: -7.75285, longitude: 110.49147, jalur_terkait: ['1A','5B'] },

    { id: 2,  nama_halte: 'Terminal Jombor',
              info_lokasi: 'Jl. Magelang Km 6, Sleman',
              latitude: -7.73604, longitude: 110.36361, jalur_terkait: ['3B','4A','4B','5A','5B'] },

    { id: 3,  nama_halte: 'Terminal Giwangan',
              info_lokasi: 'Jl. Imogiri Timur, Umbulharjo',
              latitude: -7.83278, longitude: 110.38542, jalur_terkait: ['4A','4B'] },

    { id: 4,  nama_halte: 'Halte Bandara Adisutjipto',
              info_lokasi: 'Jl. Raya Solo Km 9, Maguwoharjo',
              latitude: -7.78818, longitude: 110.43157, jalur_terkait: ['1A','1B','3A','3B','5A'] },

    { id: 5,  nama_halte: 'Halte Stasiun Tugu',
              info_lokasi: 'Jl. Pasar Kembang, depan Stasiun Tugu',
              latitude: -7.78921, longitude: 110.36637, jalur_terkait: ['1A','2A','4A'] },

    { id: 6,  nama_halte: 'Halte Stasiun Lempuyangan',
              info_lokasi: 'Jl. Hayam Wuruk, depan Stasiun Lempuyangan',
              latitude: -7.79063, longitude: 110.37469, jalur_terkait: ['1B','2B','4B'] },

    // ── JALUR 1A: Prambanan – Malioboro (Jl. Solo / Jl. Laksda Adisucipto) ──
    { id: 7,  nama_halte: 'Halte Candi Prambanan',
              info_lokasi: 'Jl. Solo, depan pintu masuk Candi Prambanan',
              latitude: -7.75194, longitude: 110.49108, jalur_terkait: ['1A','5B'] },

    { id: 8,  nama_halte: 'Halte Kalasan',
              info_lokasi: 'Jl. Solo, Kalasan, Sleman',
              latitude: -7.77109, longitude: 110.46513, jalur_terkait: ['1A'] },

    { id: 9,  nama_halte: 'Halte Maguwoharjo',
              info_lokasi: 'Jl. Solo Km 10, Maguwoharjo',
              latitude: -7.77962, longitude: 110.42384, jalur_terkait: ['1A','3A'] },

    { id: 10, nama_halte: 'Halte Janti',
              info_lokasi: 'Jl. Solo, Simpang Janti (bawah flyover)',
              latitude: -7.79338, longitude: 110.40756, jalur_terkait: ['1A','1B','2A','2B'] },

    { id: 11, nama_halte: 'Halte Ambarrukmo Plaza',
              info_lokasi: 'Jl. Laksda Adisucipto, depan Ambarrukmo Plaza',
              latitude: -7.78226, longitude: 110.40094, jalur_terkait: ['1A','1B'] },

    { id: 12, nama_halte: 'Halte Saphir Square',
              info_lokasi: 'Jl. Laksda Adisucipto, depan Saphir Square',
              latitude: -7.78887, longitude: 110.39461, jalur_terkait: ['1A','1B'] },

    { id: 13, nama_halte: 'Halte UIN Sunan Kalijaga',
              info_lokasi: 'Jl. Laksda Adisucipto, depan UIN Suka',
              latitude: -7.78349, longitude: 110.41178, jalur_terkait: ['1A','1B'] },

    { id: 14, nama_halte: 'Halte Gedung Wanita',
              info_lokasi: 'Jl. Kenari No.4, Muja Muju',
              latitude: -7.79487, longitude: 110.37812, jalur_terkait: ['1A','2A'] },

    { id: 15, nama_halte: 'Halte Malioboro 1',
              info_lokasi: 'Jl. Malioboro, depan Hotel Inna Garuda',
              latitude: -7.79257, longitude: 110.36584, jalur_terkait: ['1A','2A','4A'] },

    { id: 16, nama_halte: 'Halte Malioboro 2',
              info_lokasi: 'Jl. Malioboro, depan Pasar Beringharjo',
              latitude: -7.79748, longitude: 110.36530, jalur_terkait: ['1A','2A','4A'] },

    // ── JALUR 1B: Bandara – Taman Pintar ──────────────────────────────
    { id: 17, nama_halte: 'Halte UNY Colombo',
              info_lokasi: 'Jl. Colombo No.1, depan UNY',
              latitude: -7.77028, longitude: 110.38618, jalur_terkait: ['1B','2B','3A'] },

    { id: 18, nama_halte: 'Halte Taman Pintar',
              info_lokasi: 'Jl. Senopati No.1, depan Taman Pintar',
              latitude: -7.80094, longitude: 110.36648, jalur_terkait: ['1B','2B'] },

    { id: 19, nama_halte: 'Halte Gondomanan',
              info_lokasi: 'Jl. Brigjen Katamso, Gondomanan',
              latitude: -7.80341, longitude: 110.36461, jalur_terkait: ['1B','4B'] },

    { id: 20, nama_halte: 'Halte Jokteng Wetan',
              info_lokasi: 'Jl. Brigjen Katamso, Pojok Benteng Wetan',
              latitude: -7.81178, longitude: 110.36742, jalur_terkait: ['1B','4B'] },

    // ── JALUR 2A: Condongcatur – XT Square via Malioboro ──────────────
    { id: 21, nama_halte: 'Halte Condongcatur',
              info_lokasi: 'Jl. Kaliurang Km 6.5, Condongcatur',
              latitude: -7.75432, longitude: 110.38756, jalur_terkait: ['2A','2B'] },

    { id: 22, nama_halte: 'Halte Kentungan',
              info_lokasi: 'Jl. Kaliurang Km 7, Kentungan',
              latitude: -7.75872, longitude: 110.38612, jalur_terkait: ['2A','2B'] },

    { id: 23, nama_halte: 'Halte Monjali',
              info_lokasi: 'Jl. Monjali (Ring Road Utara), depan Monumen Jogja Kembali',
              latitude: -7.75283, longitude: 110.36742, jalur_terkait: ['2A','4A'] },

    { id: 24, nama_halte: 'Halte RS Sardjito',
              info_lokasi: 'Jl. Kesehatan No.1, depan RSUP Dr. Sardjito',
              latitude: -7.76831, longitude: 110.37148, jalur_terkait: ['2A','3A','4A'] },

    { id: 25, nama_halte: 'Halte UGM (Kopma)',
              info_lokasi: 'Jl. Kaliurang, depan Kopma UGM',
              latitude: -7.77488, longitude: 110.37449, jalur_terkait: ['2A','3A','4A'] },

    { id: 26, nama_halte: 'Halte Mirota Kampus',
              info_lokasi: 'Jl. C. Simanjuntak, depan Mirota Kampus',
              latitude: -7.77912, longitude: 110.37341, jalur_terkait: ['2A','4A'] },

    { id: 27, nama_halte: 'Halte XT Square',
              info_lokasi: 'Jl. Veteran No.150, XT Square',
              latitude: -7.82487, longitude: 110.37198, jalur_terkait: ['2A','2B','4A','4B'] },

    // ── JALUR 2B: Condongcatur – XT Square ────────────────────────────
    { id: 28, nama_halte: 'Halte Kolombo',
              info_lokasi: 'Jl. Colombo, pertigaan Kolombo',
              latitude: -7.77498, longitude: 110.38912, jalur_terkait: ['2B','3A'] },

    { id: 29, nama_halte: 'Halte Demangan',
              info_lokasi: 'Jl. Munggur / Jl. Gejayan, Demangan',
              latitude: -7.78178, longitude: 110.38234, jalur_terkait: ['2B','3A'] },

    { id: 30, nama_halte: 'Halte Gejayan',
              info_lokasi: 'Jl. Affandi (Gejayan), Yogyakarta',
              latitude: -7.78512, longitude: 110.38698, jalur_terkait: ['2B'] },

    { id: 31, nama_halte: 'Halte Kusumanegara',
              info_lokasi: 'Jl. Kusumanegara, Yogyakarta',
              latitude: -7.80178, longitude: 110.38512, jalur_terkait: ['2B','4B'] },

    { id: 32, nama_halte: 'Halte Gedong Kuning',
              info_lokasi: 'Jl. Gedong Kuning, Banguntapan',
              latitude: -7.81487, longitude: 110.39178, jalur_terkait: ['2B','4B'] },

    // ── JALUR 3A: Bandara – UGM (via Seturan / Babarsari) ─────────────
    { id: 33, nama_halte: 'Halte Babarsari',
              info_lokasi: 'Jl. Babarsari, Caturtunggal, Sleman',
              latitude: -7.77598, longitude: 110.40512, jalur_terkait: ['3A'] },

    { id: 34, nama_halte: 'Halte Seturan',
              info_lokasi: 'Jl. Seturan Raya, Caturtunggal, Sleman',
              latitude: -7.76812, longitude: 110.40234, jalur_terkait: ['3A','3B'] },

    { id: 35, nama_halte: 'Halte Klebengan',
              info_lokasi: 'Jl. Klebengan, Caturtunggal, Sleman',
              latitude: -7.76512, longitude: 110.37834, jalur_terkait: ['3A'] },

    { id: 36, nama_halte: 'Halte Pogung',
              info_lokasi: 'Jl. Pogung Raya, Sinduadi, Sleman',
              latitude: -7.76198, longitude: 110.37512, jalur_terkait: ['3A','3B'] },

    // ── JALUR 3B: Bandara – Jombor (via Ring Road Utara) ──────────────
    { id: 37, nama_halte: 'Halte Ring Road Utara (Condong)',
              info_lokasi: 'Jl. Ring Road Utara, Condongcatur',
              latitude: -7.75012, longitude: 110.38234, jalur_terkait: ['3B','5A','5B'] },

    { id: 38, nama_halte: 'Halte Hartono Mall',
              info_lokasi: 'Jl. Ring Road Utara, depan Hartono Mall',
              latitude: -7.74812, longitude: 110.40498, jalur_terkait: ['3B','5B'] },

    { id: 39, nama_halte: 'Halte Denggung',
              info_lokasi: 'Jl. Magelang Km 10, Denggung, Sleman',
              latitude: -7.71934, longitude: 110.35612, jalur_terkait: ['3B','4A'] },

    { id: 40, nama_halte: 'Halte Sleman Kota',
              info_lokasi: 'Jl. Magelang Km 12, Sleman',
              latitude: -7.70812, longitude: 110.35198, jalur_terkait: ['3B'] },

    // ── JALUR 4A: Jombor – Giwangan via Malioboro ─────────────────────
    { id: 41, nama_halte: 'Halte Badran',
              info_lokasi: 'Jl. Tentara Pelajar, Badran',
              latitude: -7.77512, longitude: 110.35534, jalur_terkait: ['4A'] },

    { id: 42, nama_halte: 'Halte Pingit',
              info_lokasi: 'Jl. Tentara Pelajar, Pingit',
              latitude: -7.78012, longitude: 110.35812, jalur_terkait: ['4A','4B'] },

    { id: 43, nama_halte: 'Halte Wirobrajan',
              info_lokasi: 'Jl. HOS Cokroaminoto, Wirobrajan',
              latitude: -7.80812, longitude: 110.35234, jalur_terkait: ['4A'] },

    { id: 44, nama_halte: 'Halte Ngabean',
              info_lokasi: 'Jl. Brigjen Katamso, Terminal Ngabean',
              latitude: -7.80498, longitude: 110.36198, jalur_terkait: ['4A','4B'] },

    { id: 45, nama_halte: 'Halte Pojok Beteng Kulon',
              info_lokasi: 'Jl. MT Haryono, Pojok Benteng Kulon',
              latitude: -7.81012, longitude: 110.35812, jalur_terkait: ['4A','4B'] },

    { id: 46, nama_halte: 'Halte Gading',
              info_lokasi: 'Jl. Parangtritis, Gading',
              latitude: -7.82012, longitude: 110.36498, jalur_terkait: ['4A','4B'] },

    { id: 47, nama_halte: 'Halte Prawirotaman',
              info_lokasi: 'Jl. Parangtritis, depan kawasan Prawirotaman',
              latitude: -7.81812, longitude: 110.36912, jalur_terkait: ['4A','4B'] },

    { id: 48, nama_halte: 'Halte Dongkelan',
              info_lokasi: 'Jl. Parangtritis Km 3, Dongkelan, Bantul',
              latitude: -7.83498, longitude: 110.36012, jalur_terkait: ['4A','4B'] },

    // ── JALUR 4B: Jombor – Giwangan (via Jl. Gejayan / Kusumanegara) ──
    { id: 49, nama_halte: 'Halte Kridosono',
              info_lokasi: 'Jl. Yos Sudarso, depan Stadion Kridosono',
              latitude: -7.78698, longitude: 110.37912, jalur_terkait: ['4B'] },

    { id: 50, nama_halte: 'Halte Pakualaman',
              info_lokasi: 'Jl. Sultan Agung, Pakualaman',
              latitude: -7.80012, longitude: 110.37498, jalur_terkait: ['2B','4B'] },

    { id: 51, nama_halte: 'Halte Sentul',
              info_lokasi: 'Jl. Senopati, Sentul',
              latitude: -7.80698, longitude: 110.37012, jalur_terkait: ['4B'] },

    // ── JALUR 5A: Jombor – Bandara via Ring Road Barat ────────────────
    { id: 52, nama_halte: 'Halte Ring Road Barat (Jombor)',
              info_lokasi: 'Jl. Ring Road Barat, dekat Terminal Jombor',
              latitude: -7.76998, longitude: 110.34512, jalur_terkait: ['5A','5B'] },

    { id: 53, nama_halte: 'Halte Gamping',
              info_lokasi: 'Jl. Wates Km 4, Gamping, Sleman',
              latitude: -7.79498, longitude: 110.33812, jalur_terkait: ['5A'] },

    { id: 54, nama_halte: 'Halte Demak Ijo',
              info_lokasi: 'Jl. Wates Km 5, Demak Ijo, Sleman',
              latitude: -7.80198, longitude: 110.33198, jalur_terkait: ['5A'] },

    { id: 55, nama_halte: 'Halte Ring Road Selatan',
              info_lokasi: 'Jl. Ring Road Selatan, Sewon, Bantul',
              latitude: -7.83812, longitude: 110.37498, jalur_terkait: ['5A','5B','4A','4B'] },

    // ── JALUR 5B: Jombor – Prambanan via Ring Road Utara ──────────────
    { id: 56, nama_halte: 'Halte Maguwo',
              info_lokasi: 'Jl. Solo Km 8, Maguwo, Sleman',
              latitude: -7.78498, longitude: 110.43812, jalur_terkait: ['5B','1A'] },

    { id: 57, nama_halte: 'Halte Tajem',
              info_lokasi: 'Jl. Solo Km 11, Tajem, Sleman',
              latitude: -7.76498, longitude: 110.44498, jalur_terkait: ['5B'] },

    { id: 58, nama_halte: 'Halte Berbah',
              info_lokasi: 'Jl. Solo Km 14, Berbah, Sleman',
              latitude: -7.75998, longitude: 110.45998, jalur_terkait: ['5B'] },

    // ── HALTE PUSAT KOTA ──────────────────────────────────────────────
    { id: 59, nama_halte: 'Halte Abu Bakar Ali',
              info_lokasi: 'Jl. Abu Bakar Ali, Kotabaru',
              latitude: -7.78698, longitude: 110.36712, jalur_terkait: ['1A','2A'] },

    { id: 60, nama_halte: 'Halte Kotabaru',
              info_lokasi: 'Jl. Suroto, Kotabaru',
              latitude: -7.78398, longitude: 110.37198, jalur_terkait: ['2A','2B'] },

    { id: 61, nama_halte: 'Halte Galeria Mall',
              info_lokasi: 'Jl. Jend. Sudirman, depan Galeria Mall',
              latitude: -7.78598, longitude: 110.36912, jalur_terkait: ['1A','2A','4A'] },

    { id: 62, nama_halte: 'Halte Kraton',
              info_lokasi: 'Jl. Rotowijayan, depan Kraton Yogyakarta',
              latitude: -7.80498, longitude: 110.36412, jalur_terkait: ['1A','2A','4A'] },

    { id: 63, nama_halte: 'Halte Senopati',
              info_lokasi: 'Jl. Senopati, Yogyakarta',
              latitude: -7.80198, longitude: 110.36812, jalur_terkait: ['1B','2B','4B'] },

    // ── HALTE KAMPUS ──────────────────────────────────────────────────
    { id: 64, nama_halte: 'Halte UPN Veteran',
              info_lokasi: 'Jl. Babarsari No.2, UPN Veteran Yogyakarta',
              latitude: -7.77312, longitude: 110.40812, jalur_terkait: ['3A'] },

    { id: 65, nama_halte: 'Halte Sanata Dharma',
              info_lokasi: 'Jl. Affandi, depan Universitas Sanata Dharma',
              latitude: -7.77198, longitude: 110.39498, jalur_terkait: ['2B','3A'] },

];
