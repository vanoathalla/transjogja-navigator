// ============================================================
// DATA TRANS JOGJA — Local Static Database
// Tidak perlu server/internet untuk load data ini
// Sumber: Data publik Trans Jogja / OpenStreetMap
// ============================================================

// --- DATA JALUR ---
const DB_JALUR = [
    { id: 1, kode_jalur: '1A', rute_simpel: 'Prambanan ↔ Malioboro', jam_ops: '05.30 – 21.30' },
    { id: 2, kode_jalur: '1B', rute_simpel: 'Bandara Adisutjipto ↔ Taman Pintar', jam_ops: '05.30 – 21.30' },
    { id: 3, kode_jalur: '2A', rute_simpel: 'Condongcatur ↔ XT Square via Malioboro', jam_ops: '05.30 – 21.30' },
    { id: 4, kode_jalur: '2B', rute_simpel: 'Condongcatur ↔ XT Square', jam_ops: '05.30 – 21.30' },
    { id: 5, kode_jalur: '3A', rute_simpel: 'Bandara Adisutjipto ↔ UGM', jam_ops: '05.30 – 21.30' },
    { id: 6, kode_jalur: '3B', rute_simpel: 'Bandara Adisutjipto ↔ Jombor', jam_ops: '05.30 – 21.30' },
    { id: 7, kode_jalur: '4A', rute_simpel: 'Jombor ↔ Giwangan via Malioboro', jam_ops: '05.30 – 21.30' },
    { id: 8, kode_jalur: '4B', rute_simpel: 'Jombor ↔ Giwangan', jam_ops: '05.30 – 21.30' },
    { id: 9, kode_jalur: '5A', rute_simpel: 'Jombor ↔ Bandara via Ring Road', jam_ops: '05.30 – 21.30' },
    { id: 10, kode_jalur: '5B', rute_simpel: 'Jombor ↔ Prambanan via Ring Road', jam_ops: '05.30 – 21.30' },
];

// --- DATA HALTE ---
// Format: { id, nama_halte, info_lokasi, latitude, longitude, jalur_terkait[] }
const DB_HALTE = [
    // ===================== TERMINAL & HUB UTAMA =====================
    { id: 1,  nama_halte: 'Terminal Prambanan',        info_lokasi: 'Terminal Bus Prambanan, Sleman',         latitude: -7.75200, longitude: 110.49300, jalur_terkait: ['1A', '5B'] },
    { id: 2,  nama_halte: 'Terminal Jombor',           info_lokasi: 'Terminal Jombor, Jl. Magelang, Sleman',  latitude: -7.73771, longitude: 110.36152, jalur_terkait: ['3B', '4A', '4B', '5A', '5B'] },
    { id: 3,  nama_halte: 'Terminal Giwangan',         info_lokasi: 'Terminal Bus Giwangan, Bantul',          latitude: -7.83200, longitude: 110.38500, jalur_terkait: ['4A', '4B'] },
    { id: 4,  nama_halte: 'Bandara Adisutjipto',       info_lokasi: 'Bandara Internasional Adisutjipto',      latitude: -7.78800, longitude: 110.43200, jalur_terkait: ['1A', '1B', '3A', '3B', '5A'] },
    { id: 5,  nama_halte: 'Stasiun Tugu',              info_lokasi: 'Stasiun Kereta Tugu, Jl. Pasar Kembang', latitude: -7.78930, longitude: 110.36450, jalur_terkait: ['1A', '2A', '4A'] },
    { id: 6,  nama_halte: 'Stasiun Lempuyangan',       info_lokasi: 'Stasiun Lempuyangan, Jl. Lempuyangan',  latitude: -7.79100, longitude: 110.37400, jalur_terkait: ['1B', '2B'] },

    // ===================== JALUR 1A: Prambanan – Malioboro =====================
    { id: 7,  nama_halte: 'Halte Kalasan',             info_lokasi: 'Jl. Solo, Kalasan, Sleman',              latitude: -7.77200, longitude: 110.46800, jalur_terkait: ['1A'] },
    { id: 8,  nama_halte: 'Halte Maguwoharjo',         info_lokasi: 'Jl. Solo, Maguwoharjo, Sleman',          latitude: -7.77800, longitude: 110.42500, jalur_terkait: ['1A', '3A'] },
    { id: 9,  nama_halte: 'Halte Janti (Bawah)',       info_lokasi: 'Simpang Janti, Jl. Solo',                latitude: -7.79200, longitude: 110.40800, jalur_terkait: ['1A', '1B', '2A', '2B'] },
    { id: 10, nama_halte: 'Halte Ambarrukmo Plaza',    info_lokasi: 'Depan Ambarrukmo Plaza, Jl. Solo',       latitude: -7.78200, longitude: 110.40120, jalur_terkait: ['1A', '1B'] },
    { id: 11, nama_halte: 'Halte Gedung Wanita',       info_lokasi: 'Jl. Kenari, Yogyakarta',                 latitude: -7.79500, longitude: 110.37800, jalur_terkait: ['1A', '2A'] },
    { id: 12, nama_halte: 'Halte Malioboro 1',         info_lokasi: 'Depan Hotel Inna Garuda, Jl. Malioboro', latitude: -7.79257, longitude: 110.36584, jalur_terkait: ['1A', '2A', '4A'] },
    { id: 13, nama_halte: 'Halte Malioboro 2',         info_lokasi: 'Depan Pasar Beringharjo, Jl. Malioboro', latitude: -7.79800, longitude: 110.36500, jalur_terkait: ['1A', '2A', '4A'] },

    // ===================== JALUR 1B: Bandara – Taman Pintar =====================
    { id: 14, nama_halte: 'Halte Taman Pintar',        info_lokasi: 'Jl. Senopati, Yogyakarta',               latitude: -7.80100, longitude: 110.36600, jalur_terkait: ['1B', '2B'] },
    { id: 15, nama_halte: 'Halte Gondomanan',          info_lokasi: 'Jl. Brigjen Katamso, Yogyakarta',        latitude: -7.80300, longitude: 110.36400, jalur_terkait: ['1B', '4B'] },
    { id: 16, nama_halte: 'Halte Jokteng Wetan',       info_lokasi: 'Pojok Benteng Wetan, Jl. Brigjen Katamso', latitude: -7.81200, longitude: 110.36700, jalur_terkait: ['1B', '4B'] },
    { id: 17, nama_halte: 'Halte UNY Colombo',         info_lokasi: 'Jl. Colombo, Depan UNY',                 latitude: -7.77028, longitude: 110.38618, jalur_terkait: ['1B', '2B', '3A'] },

    // ===================== JALUR 2A: Condongcatur – XT Square via Malioboro =====================
    { id: 18, nama_halte: 'Halte Condongcatur',        info_lokasi: 'Jl. Kaliurang Km 6, Condongcatur',       latitude: -7.75500, longitude: 110.38700, jalur_terkait: ['2A', '2B'] },
    { id: 19, nama_halte: 'Halte Kentungan',           info_lokasi: 'Jl. Kaliurang Km 7, Kentungan',          latitude: -7.75900, longitude: 110.38500, jalur_terkait: ['2A', '2B'] },
    { id: 20, nama_halte: 'Halte Monjali',             info_lokasi: 'Monumen Jogja Kembali, Jl. Monjali',     latitude: -7.75200, longitude: 110.36800, jalur_terkait: ['2A', '4A'] },
    { id: 21, nama_halte: 'Halte RS Sardjito',         info_lokasi: 'RSUP Dr. Sardjito, Jl. Kesehatan',       latitude: -7.76800, longitude: 110.37200, jalur_terkait: ['2A', '3A', '4A'] },
    { id: 22, nama_halte: 'Halte UGM (Kopma)',         info_lokasi: 'Lingkungan Kampus UGM, Bulaksumur',      latitude: -7.77488, longitude: 110.37449, jalur_terkait: ['2A', '3A', '4A'] },
    { id: 23, nama_halte: 'Halte Mirota Kampus',       info_lokasi: 'Jl. C. Simanjuntak, Terban',             latitude: -7.77900, longitude: 110.37300, jalur_terkait: ['2A', '4A'] },
    { id: 24, nama_halte: 'Halte XT Square',           info_lokasi: 'XT Square, Jl. Veteran, Yogyakarta',     latitude: -7.82500, longitude: 110.37200, jalur_terkait: ['2A', '2B', '4A', '4B'] },

    // ===================== JALUR 2B: Condongcatur – XT Square =====================
    { id: 25, nama_halte: 'Halte Demangan',            info_lokasi: 'Jl. Gejayan / Affandi, Demangan',        latitude: -7.78200, longitude: 110.38200, jalur_terkait: ['2B', '3A'] },
    { id: 26, nama_halte: 'Halte Kolombo',             info_lokasi: 'Jl. Colombo, Kolombo',                   latitude: -7.77500, longitude: 110.38900, jalur_terkait: ['2B', '3A'] },
    { id: 27, nama_halte: 'Halte Gejayan',             info_lokasi: 'Jl. Gejayan / Affandi, Yogyakarta',      latitude: -7.78500, longitude: 110.38700, jalur_terkait: ['2B'] },
    { id: 28, nama_halte: 'Halte Kusumanegara',        info_lokasi: 'Jl. Kusumanegara, Yogyakarta',           latitude: -7.80200, longitude: 110.38500, jalur_terkait: ['2B', '4B'] },
    { id: 29, nama_halte: 'Halte Gedong Kuning',       info_lokasi: 'Jl. Gedong Kuning, Banguntapan',         latitude: -7.81500, longitude: 110.39200, jalur_terkait: ['2B', '4B'] },

    // ===================== JALUR 3A: Bandara – UGM =====================
    { id: 30, nama_halte: 'Halte Babarsari',           info_lokasi: 'Jl. Babarsari, Sleman',                  latitude: -7.77600, longitude: 110.40500, jalur_terkait: ['3A'] },
    { id: 31, nama_halte: 'Halte Seturan',             info_lokasi: 'Jl. Seturan, Sleman',                    latitude: -7.76800, longitude: 110.40200, jalur_terkait: ['3A', '3B'] },
    { id: 32, nama_halte: 'Halte Pogung',              info_lokasi: 'Jl. Pogung, Sleman',                     latitude: -7.76200, longitude: 110.37500, jalur_terkait: ['3A', '3B'] },
    { id: 33, nama_halte: 'Halte Klebengan',           info_lokasi: 'Jl. Klebengan, Sleman',                  latitude: -7.76500, longitude: 110.37800, jalur_terkait: ['3A'] },

    // ===================== JALUR 3B: Bandara – Jombor =====================
    { id: 34, nama_halte: 'Halte Ring Road Utara',     info_lokasi: 'Jl. Ring Road Utara, Sleman',            latitude: -7.75000, longitude: 110.38000, jalur_terkait: ['3B', '5A', '5B'] },
    { id: 35, nama_halte: 'Halte Denggung',            info_lokasi: 'Jl. Magelang, Denggung, Sleman',         latitude: -7.73200, longitude: 110.35800, jalur_terkait: ['3B', '4A'] },
    { id: 36, nama_halte: 'Halte Sleman Kota',         info_lokasi: 'Pusat Kota Sleman, Jl. Magelang',        latitude: -7.71800, longitude: 110.35200, jalur_terkait: ['3B'] },

    // ===================== JALUR 4A: Jombor – Giwangan via Malioboro =====================
    { id: 37, nama_halte: 'Halte Pingit',              info_lokasi: 'Jl. Tentara Pelajar, Pingit',            latitude: -7.78000, longitude: 110.35800, jalur_terkait: ['4A', '4B'] },
    { id: 38, nama_halte: 'Halte Badran',              info_lokasi: 'Jl. Tentara Pelajar, Badran',            latitude: -7.77500, longitude: 110.35500, jalur_terkait: ['4A'] },
    { id: 39, nama_halte: 'Halte Ngabean',             info_lokasi: 'Terminal Ngabean, Jl. Brigjen Katamso',  latitude: -7.80500, longitude: 110.36200, jalur_terkait: ['4A', '4B'] },
    { id: 40, nama_halte: 'Halte Pojok Beteng Kulon',  info_lokasi: 'Pojok Benteng Kulon, Jl. MT Haryono',    latitude: -7.81000, longitude: 110.35800, jalur_terkait: ['4A', '4B'] },
    { id: 41, nama_halte: 'Halte Gading',              info_lokasi: 'Jl. Gading, Yogyakarta',                 latitude: -7.82000, longitude: 110.36500, jalur_terkait: ['4A', '4B'] },
    { id: 42, nama_halte: 'Halte Wirobrajan',          info_lokasi: 'Jl. HOS Cokroaminoto, Wirobrajan',       latitude: -7.80800, longitude: 110.35200, jalur_terkait: ['4A'] },

    // ===================== JALUR 4B: Jombor – Giwangan =====================
    { id: 43, nama_halte: 'Halte Kridosono',           info_lokasi: 'Stadion Kridosono, Jl. Yos Sudarso',     latitude: -7.78700, longitude: 110.37900, jalur_terkait: ['4B'] },
    { id: 44, nama_halte: 'Halte Lempuyangan',         info_lokasi: 'Jl. Hayam Wuruk, Lempuyangan',           latitude: -7.79300, longitude: 110.37600, jalur_terkait: ['4B', '2B'] },
    { id: 45, nama_halte: 'Halte Sentul',              info_lokasi: 'Jl. Senopati, Sentul',                   latitude: -7.80700, longitude: 110.37000, jalur_terkait: ['4B'] },

    // ===================== JALUR 5A: Jombor – Bandara via Ring Road =====================
    { id: 46, nama_halte: 'Halte Ring Road Barat',     info_lokasi: 'Jl. Ring Road Barat, Sleman',            latitude: -7.77000, longitude: 110.34500, jalur_terkait: ['5A', '5B'] },
    { id: 47, nama_halte: 'Halte Gamping',             info_lokasi: 'Jl. Wates, Gamping, Sleman',             latitude: -7.79500, longitude: 110.33800, jalur_terkait: ['5A'] },
    { id: 48, nama_halte: 'Halte Demak Ijo',           info_lokasi: 'Jl. Wates, Demak Ijo, Sleman',           latitude: -7.80200, longitude: 110.33200, jalur_terkait: ['5A'] },
    { id: 49, nama_halte: 'Halte Ring Road Selatan',   info_lokasi: 'Jl. Ring Road Selatan, Bantul',          latitude: -7.83800, longitude: 110.37500, jalur_terkait: ['5A', '5B', '4A', '4B'] },

    // ===================== JALUR 5B: Jombor – Prambanan via Ring Road =====================
    { id: 50, nama_halte: 'Halte Maguwo',              info_lokasi: 'Jl. Solo, Maguwo, Sleman',               latitude: -7.78500, longitude: 110.43800, jalur_terkait: ['5B', '1A'] },
    { id: 51, nama_halte: 'Halte Tajem',               info_lokasi: 'Jl. Solo, Tajem, Sleman',                latitude: -7.76500, longitude: 110.44500, jalur_terkait: ['5B'] },
    { id: 52, nama_halte: 'Halte Berbah',              info_lokasi: 'Jl. Solo, Berbah, Sleman',               latitude: -7.76000, longitude: 110.46000, jalur_terkait: ['5B'] },

    // ===================== HALTE PUSAT KOTA =====================
    { id: 53, nama_halte: 'Halte Kraton',              info_lokasi: 'Jl. Rotowijayan, depan Kraton Yogyakarta', latitude: -7.80500, longitude: 110.36400, jalur_terkait: ['1A', '2A', '4A'] },
    { id: 54, nama_halte: 'Halte Senopati',            info_lokasi: 'Jl. Senopati, Yogyakarta',               latitude: -7.80200, longitude: 110.36800, jalur_terkait: ['1B', '2B', '4B'] },
    { id: 55, nama_halte: 'Halte Abu Bakar Ali',       info_lokasi: 'Jl. Abu Bakar Ali, Yogyakarta',          latitude: -7.78700, longitude: 110.36700, jalur_terkait: ['1A', '2A'] },
    { id: 56, nama_halte: 'Halte Kotabaru',            info_lokasi: 'Jl. Suroto, Kotabaru, Yogyakarta',       latitude: -7.78400, longitude: 110.37200, jalur_terkait: ['2A', '2B'] },
    { id: 57, nama_halte: 'Halte Pakualaman',          info_lokasi: 'Jl. Sultan Agung, Pakualaman',           latitude: -7.80000, longitude: 110.37500, jalur_terkait: ['2B', '4B'] },
    { id: 58, nama_halte: 'Halte Prawirotaman',        info_lokasi: 'Jl. Prawirotaman, Yogyakarta',           latitude: -7.81800, longitude: 110.36900, jalur_terkait: ['4A', '4B'] },
    { id: 59, nama_halte: 'Halte Parangtritis',        info_lokasi: 'Jl. Parangtritis, Yogyakarta',           latitude: -7.82800, longitude: 110.36200, jalur_terkait: ['4A', '4B'] },
    { id: 60, nama_halte: 'Halte Dongkelan',           info_lokasi: 'Jl. Parangtritis, Dongkelan, Bantul',    latitude: -7.83500, longitude: 110.36000, jalur_terkait: ['4A', '4B'] },

    // ===================== HALTE KAMPUS & PENDIDIKAN =====================
    { id: 61, nama_halte: 'Halte UIN Sunan Kalijaga',  info_lokasi: 'Jl. Marsda Adisucipto, UIN Suka',       latitude: -7.78300, longitude: 110.41200, jalur_terkait: ['1A', '1B'] },
    { id: 62, nama_halte: 'Halte UPN Veteran',         info_lokasi: 'Jl. SWK 104, UPN Veteran Yogyakarta',   latitude: -7.75800, longitude: 110.38300, jalur_terkait: ['2A', '2B'] },
    { id: 63, nama_halte: 'Halte Sanata Dharma',       info_lokasi: 'Jl. Affandi, Kampus USD',               latitude: -7.77200, longitude: 110.39500, jalur_terkait: ['3A', '2B'] },
    { id: 64, nama_halte: 'Halte STIE YKPN',          info_lokasi: 'Jl. Seturan, STIE YKPN',                latitude: -7.76900, longitude: 110.40800, jalur_terkait: ['3A'] },

    // ===================== HALTE PUSAT PERBELANJAAN =====================
    { id: 65, nama_halte: 'Halte Galeria Mall',        info_lokasi: 'Jl. Jend. Sudirman, Galeria Mall',      latitude: -7.78600, longitude: 110.36900, jalur_terkait: ['1A', '2A', '4A'] },
    { id: 66, nama_halte: 'Halte Hartono Mall',        info_lokasi: 'Jl. Ring Road Utara, Hartono Mall',     latitude: -7.74800, longitude: 110.40500, jalur_terkait: ['3B', '5B'] },
    { id: 67, nama_halte: 'Halte Saphir Square',       info_lokasi: 'Jl. Laksda Adisucipto, Saphir Square',  latitude: -7.78900, longitude: 110.39500, jalur_terkait: ['1A', '1B'] },
    { id: 68, nama_halte: 'Halte Lippo Plaza',         info_lokasi: 'Jl. Laksda Adisucipto, Lippo Plaza',    latitude: -7.78700, longitude: 110.40000, jalur_terkait: ['1A', '1B'] },

    // ===================== HALTE WISATA =====================
    { id: 69, nama_halte: 'Halte Prambanan (Candi)',   info_lokasi: 'Depan Candi Prambanan, Jl. Solo',       latitude: -7.75200, longitude: 110.49100, jalur_terkait: ['1A', '5B'] },
    { id: 70, nama_halte: 'Halte Kaliurang',           info_lokasi: 'Jl. Kaliurang Km 22, Sleman',           latitude: -7.60500, longitude: 110.42500, jalur_terkait: ['2A', '2B'] },
];
