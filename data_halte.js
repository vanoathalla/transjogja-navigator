// ============================================================
// DATA TRANS JOGJA — Diambil dari OpenStreetMap via Overpass API
// Tanggal: 2026-05-30 | Halte: 447 | Jalur: 20
// Koordinat 100% dari OSM — akurat di jalan utama
// Update: node fetch_halte.js && node fetch_routes.js
// ============================================================

const DB_JALUR = [
    {
        "id": 1,
        "kode_jalur": "1A",
        "rute_simpel": "Transjogja 1A: Terminal Prambanan → Malioboro",
        "jam_ops": "05.30 – 21.30"
    },
    {
        "id": 2,
        "kode_jalur": "1B",
        "rute_simpel": "Transjogja 1B: Bandara Adisucipto → Ngabean",
        "jam_ops": "05.30 – 21.30"
    },
    {
        "id": 3,
        "kode_jalur": "2A",
        "rute_simpel": "Transjogja 2A: Terminal Condongcatur → XT Square",
        "jam_ops": "05.30 – 21.30"
    },
    {
        "id": 4,
        "kode_jalur": "2B",
        "rute_simpel": "Transjogja 2B: Terminal Condongcatur → XT Square",
        "jam_ops": "05.30 – 21.30"
    },
    {
        "id": 5,
        "kode_jalur": "3A",
        "rute_simpel": "Transjogja 3A: Terminal Giwangan → Terminal Condongcatur",
        "jam_ops": "05.30 – 21.30"
    },
    {
        "id": 6,
        "kode_jalur": "3B",
        "rute_simpel": "Transjogja 3B: Terminal Giwangan → Terminal Condongcatur",
        "jam_ops": "05.30 – 21.30"
    },
    {
        "id": 7,
        "kode_jalur": "4A",
        "rute_simpel": "Transjogja 4A: Terminal Giwangan → Terminal Condongcatur",
        "jam_ops": "05.30 – 21.30"
    },
    {
        "id": 8,
        "kode_jalur": "4B",
        "rute_simpel": "Transjogja 4B: Terminal Giwangan → Terminal Condongcatur",
        "jam_ops": "05.30 – 21.30"
    },
    {
        "id": 9,
        "kode_jalur": "5A",
        "rute_simpel": "Transjogja 5A: Terminal Jombor → Janti",
        "jam_ops": "05.30 – 21.30"
    },
    {
        "id": 10,
        "kode_jalur": "5B",
        "rute_simpel": "Transjogja 5B: Terminal Jombor → Bandara Adisutjipto",
        "jam_ops": "05.30 – 21.30"
    },
    {
        "id": 11,
        "kode_jalur": "6",
        "rute_simpel": "Transjogja 6: Gamping → Malioboro",
        "jam_ops": "05.30 – 21.30"
    },
    {
        "id": 12,
        "kode_jalur": "8",
        "rute_simpel": "Transjogja 8: Terminal Jombor → Malioboro",
        "jam_ops": "05.30 – 21.30"
    },
    {
        "id": 13,
        "kode_jalur": "9",
        "rute_simpel": "Transjogja 9: Terminal Giwangan → Terminal Jombor",
        "jam_ops": "05.30 – 21.30"
    },
    {
        "id": 14,
        "kode_jalur": "10",
        "rute_simpel": "Transjogja 10: Gamping → Kusumanegara",
        "jam_ops": "05.30 – 21.30"
    },
    {
        "id": 15,
        "kode_jalur": "11",
        "rute_simpel": "Transjogja 11: Terminal Giwangan → Cik di Tiro",
        "jam_ops": "05.30 – 21.30"
    },
    {
        "id": 16,
        "kode_jalur": "12",
        "rute_simpel": "Transjogja 12: Condongcatur → Pakem",
        "jam_ops": "05.30 – 21.30"
    },
    {
        "id": 17,
        "kode_jalur": "13",
        "rute_simpel": "Transjogja 13: Godean → Malioboro",
        "jam_ops": "05.30 – 21.30"
    },
    {
        "id": 18,
        "kode_jalur": "14",
        "rute_simpel": "Transjogja 14: Adisutjipto → Pakem",
        "jam_ops": "05.30 – 21.30"
    },
    {
        "id": 19,
        "kode_jalur": "15",
        "rute_simpel": "Transjogja 15: Terminal Palbapang → Malioboro",
        "jam_ops": "05.30 – 21.30"
    },
    {
        "id": 20,
        "kode_jalur": "L1",
        "rute_simpel": "Transjogja L1: Terminal Jombor → Malioboro",
        "jam_ops": "05.30 – 21.30"
    }
];

const DB_HALTE = [
    {
        "id": 1,
        "nama_halte": "Abadi Hotel Jogja",
        "info_lokasi": "",
        "latitude": -7.79007,
        "longitude": 110.36324,
        "jalur_terkait": [
            "1B"
        ]
    },
    {
        "id": 2,
        "nama_halte": "Atakrib Jl. Magelang",
        "info_lokasi": "",
        "latitude": -7.7563,
        "longitude": 110.36213,
        "jalur_terkait": [
            "5A",
            "9",
            "L1"
        ]
    },
    {
        "id": 3,
        "nama_halte": "Barat Jembatan Moyudan (Toko Saerah)",
        "info_lokasi": "",
        "latitude": -7.77617,
        "longitude": 110.32774,
        "jalur_terkait": [
            "13"
        ]
    },
    {
        "id": 4,
        "nama_halte": "Barat Jembatan Moyudan (Toko Saerah) 2",
        "info_lokasi": "",
        "latitude": -7.77624,
        "longitude": 110.32778,
        "jalur_terkait": [
            "13"
        ]
    },
    {
        "id": 5,
        "nama_halte": "Barat Simpang Bantulan 2",
        "info_lokasi": "",
        "latitude": -7.77467,
        "longitude": 110.32149,
        "jalur_terkait": [
            "13"
        ]
    },
    {
        "id": 6,
        "nama_halte": "Batas Kota Jl. Monjali (Barat)",
        "info_lokasi": "",
        "latitude": -7.77056,
        "longitude": 110.36842,
        "jalur_terkait": [
            "2B"
        ]
    },
    {
        "id": 7,
        "nama_halte": "Batas Kota Jl. Monjali (Timur)",
        "info_lokasi": "",
        "latitude": -7.77051,
        "longitude": 110.36854,
        "jalur_terkait": [
            "2A"
        ]
    },
    {
        "id": 8,
        "nama_halte": "BKD (Selatan)",
        "info_lokasi": "",
        "latitude": -7.78248,
        "longitude": 110.35585,
        "jalur_terkait": [
            "8"
        ]
    },
    {
        "id": 9,
        "nama_halte": "Boulevard UII",
        "info_lokasi": "",
        "latitude": -7.68747,
        "longitude": 110.41715,
        "jalur_terkait": [
            "12",
            "14"
        ]
    },
    {
        "id": 10,
        "nama_halte": "BPD Gamping (Selatan)",
        "info_lokasi": "",
        "latitude": -7.80161,
        "longitude": 110.3187,
        "jalur_terkait": [
            "10",
            "6"
        ]
    },
    {
        "id": 11,
        "nama_halte": "BPD Kalasan",
        "info_lokasi": "",
        "latitude": -7.77856,
        "longitude": 110.45597,
        "jalur_terkait": [
            "1A"
        ]
    },
    {
        "id": 12,
        "nama_halte": "Cupuwatu",
        "info_lokasi": "",
        "latitude": -7.77866,
        "longitude": 110.45617,
        "jalur_terkait": [
            "1A"
        ]
    },
    {
        "id": 13,
        "nama_halte": "Daytrans Jl. Magelang",
        "info_lokasi": "",
        "latitude": -7.75627,
        "longitude": 110.36195,
        "jalur_terkait": [
            "5B",
            "9",
            "L1"
        ]
    },
    {
        "id": 14,
        "nama_halte": "Dinas Pendidikan Kota Yogyakarta",
        "info_lokasi": "",
        "latitude": -7.79572,
        "longitude": 110.37264,
        "jalur_terkait": [
            "4A"
        ]
    },
    {
        "id": 15,
        "nama_halte": "Disnakertrans DI Yogyakarta",
        "info_lokasi": "",
        "latitude": -7.76789,
        "longitude": 110.43154,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 16,
        "nama_halte": "Dusun Kenthi",
        "info_lokasi": "",
        "latitude": -7.7115,
        "longitude": 110.44872,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 17,
        "nama_halte": "Dusun Kenthi 2",
        "info_lokasi": "",
        "latitude": -7.71152,
        "longitude": 110.44877,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 18,
        "nama_halte": "Dusun Kledokan (Soto Brakot)",
        "info_lokasi": "",
        "latitude": -7.67257,
        "longitude": 110.41732,
        "jalur_terkait": [
            "12",
            "14"
        ]
    },
    {
        "id": 19,
        "nama_halte": "Dusun Kledokan (Soto Brakot) 2",
        "info_lokasi": "",
        "latitude": -7.6727,
        "longitude": 110.41739,
        "jalur_terkait": [
            "12",
            "14"
        ]
    },
    {
        "id": 20,
        "nama_halte": "Eks STIE Kerjasama",
        "info_lokasi": "",
        "latitude": -7.81667,
        "longitude": 110.38325,
        "jalur_terkait": [
            "2A",
            "4B"
        ]
    },
    {
        "id": 21,
        "nama_halte": "FIP UNY",
        "info_lokasi": "",
        "latitude": -7.8168,
        "longitude": 110.35583,
        "jalur_terkait": [
            "15"
        ]
    },
    {
        "id": 22,
        "nama_halte": "Fisipol UGM (Barat)",
        "info_lokasi": "",
        "latitude": -7.77579,
        "longitude": 110.37251,
        "jalur_terkait": [
            "5A"
        ]
    },
    {
        "id": 23,
        "nama_halte": "Fisipol UGM (Timur)",
        "info_lokasi": "",
        "latitude": -7.77583,
        "longitude": 110.37258,
        "jalur_terkait": [
            "5B"
        ]
    },
    {
        "id": 24,
        "nama_halte": "Flyover Lempuyangan",
        "info_lokasi": "",
        "latitude": -7.7908,
        "longitude": 110.3781,
        "jalur_terkait": [
            "10",
            "2B"
        ]
    },
    {
        "id": 25,
        "nama_halte": "Gereja Kota Baru",
        "info_lokasi": "",
        "latitude": -7.78938,
        "longitude": 110.37011,
        "jalur_terkait": [
            "13",
            "1A",
            "2A",
            "3A",
            "8",
            "L1"
        ]
    },
    {
        "id": 26,
        "nama_halte": "GKJ Wirobrajan (Timur)",
        "info_lokasi": "",
        "latitude": -7.80628,
        "longitude": 110.35078,
        "jalur_terkait": [
            "10"
        ]
    },
    {
        "id": 27,
        "nama_halte": "Halte A.M. Sangaji 2",
        "info_lokasi": "",
        "latitude": -7.7758,
        "longitude": 110.36801,
        "jalur_terkait": [
            "2A"
        ]
    },
    {
        "id": 28,
        "nama_halte": "Halte AA YKPN",
        "info_lokasi": "",
        "latitude": -7.78611,
        "longitude": 110.38313,
        "jalur_terkait": [
            "1A",
            "5A"
        ]
    },
    {
        "id": 29,
        "nama_halte": "Halte Abu Bakar Ali",
        "info_lokasi": "",
        "latitude": -7.79006,
        "longitude": 110.36632,
        "jalur_terkait": [
            "1B"
        ]
    },
    {
        "id": 30,
        "nama_halte": "Halte AM Sangaji 1",
        "info_lokasi": "",
        "latitude": -7.77738,
        "longitude": 110.36765,
        "jalur_terkait": [
            "2B"
        ]
    },
    {
        "id": 31,
        "nama_halte": "Halte Ambarrukmo Plaza 1",
        "info_lokasi": "",
        "latitude": -7.78335,
        "longitude": 110.40177,
        "jalur_terkait": [
            "1A",
            "5B"
        ]
    },
    {
        "id": 32,
        "nama_halte": "Halte Ambarrukmo Plaza 2",
        "info_lokasi": "",
        "latitude": -7.78315,
        "longitude": 110.40244,
        "jalur_terkait": [
            "1A",
            "5A"
        ]
    },
    {
        "id": 33,
        "nama_halte": "Halte APMD 1",
        "info_lokasi": "",
        "latitude": -7.79164,
        "longitude": 110.39315,
        "jalur_terkait": [
            "4B"
        ]
    },
    {
        "id": 34,
        "nama_halte": "Halte APMD 2",
        "info_lokasi": "",
        "latitude": -7.79117,
        "longitude": 110.39335,
        "jalur_terkait": [
            "4A"
        ]
    },
    {
        "id": 35,
        "nama_halte": "Halte Badan Kepegawaian DI Yogyakarta",
        "info_lokasi": "",
        "latitude": -7.78237,
        "longitude": 110.3561,
        "jalur_terkait": [
            "13",
            "8"
        ]
    },
    {
        "id": 36,
        "nama_halte": "Halte Bandara Adisutjipto",
        "info_lokasi": "",
        "latitude": -7.78452,
        "longitude": 110.43571,
        "jalur_terkait": [
            "14",
            "1A",
            "1B",
            "3A",
            "3B",
            "5B"
        ]
    },
    {
        "id": 37,
        "nama_halte": "Halte Bethesda",
        "info_lokasi": "",
        "latitude": -7.78307,
        "longitude": 110.37799,
        "jalur_terkait": [
            "1A",
            "2A",
            "4A",
            "5B"
        ]
    },
    {
        "id": 38,
        "nama_halte": "Halte BRI Cabang Bantul",
        "info_lokasi": "",
        "latitude": -7.88198,
        "longitude": 110.33226,
        "jalur_terkait": [
            "15"
        ]
    },
    {
        "id": 39,
        "nama_halte": "Halte Bulog",
        "info_lokasi": "",
        "latitude": -7.78497,
        "longitude": 110.37473,
        "jalur_terkait": [
            "11",
            "13",
            "2B",
            "3A",
            "4B",
            "5A",
            "5B"
        ]
    },
    {
        "id": 40,
        "nama_halte": "Halte Bus Kantor Kapanewon Bantul",
        "info_lokasi": "",
        "latitude": -7.88357,
        "longitude": 110.33188,
        "jalur_terkait": [
            "15"
        ]
    },
    {
        "id": 41,
        "nama_halte": "Halte Cik Di Tiro",
        "info_lokasi": "",
        "latitude": -7.78235,
        "longitude": 110.37513,
        "jalur_terkait": [
            "11",
            "2B",
            "3A",
            "5A"
        ]
    },
    {
        "id": 42,
        "nama_halte": "Halte Cokroaminoto SMA 1",
        "info_lokasi": "",
        "latitude": -7.79935,
        "longitude": 110.35207,
        "jalur_terkait": [
            "11",
            "13",
            "2B",
            "9"
        ]
    },
    {
        "id": 43,
        "nama_halte": "Halte De Britto",
        "info_lokasi": "",
        "latitude": -7.78306,
        "longitude": 110.39392,
        "jalur_terkait": [
            "1A",
            "4A",
            "5A"
        ]
    },
    {
        "id": 44,
        "nama_halte": "Halte Diponegoro",
        "info_lokasi": "",
        "latitude": -7.78293,
        "longitude": 110.36255,
        "jalur_terkait": [
            "11"
        ]
    },
    {
        "id": 45,
        "nama_halte": "Halte Eks. Stasiun KA Bantul",
        "info_lokasi": "",
        "latitude": -7.8874,
        "longitude": 110.32936,
        "jalur_terkait": [
            "15"
        ]
    },
    {
        "id": 46,
        "nama_halte": "Halte Gedong Kuning",
        "info_lokasi": "",
        "latitude": -7.81961,
        "longitude": 110.40109,
        "jalur_terkait": [
            "2A",
            "3A"
        ]
    },
    {
        "id": 47,
        "nama_halte": "Halte Gedong Kuning Banguntapan",
        "info_lokasi": "",
        "latitude": -7.8073,
        "longitude": 110.40225,
        "jalur_terkait": [
            "2B",
            "3B"
        ]
    },
    {
        "id": 48,
        "nama_halte": "Halte Gedung Juang 45",
        "info_lokasi": "",
        "latitude": -7.80221,
        "longitude": 110.39995,
        "jalur_terkait": [
            "1B",
            "2B"
        ]
    },
    {
        "id": 49,
        "nama_halte": "Halte Gedung Wanita",
        "info_lokasi": "",
        "latitude": -7.78323,
        "longitude": 110.3927,
        "jalur_terkait": [
            "1A",
            "4B",
            "5B"
        ]
    },
    {
        "id": 50,
        "nama_halte": "Halte Gembira Loka",
        "info_lokasi": "",
        "latitude": -7.8023,
        "longitude": 110.39876,
        "jalur_terkait": [
            "1B",
            "2A"
        ]
    },
    {
        "id": 51,
        "nama_halte": "Halte Gereja Pugeran",
        "info_lokasi": "",
        "latitude": -7.81666,
        "longitude": 110.35598,
        "jalur_terkait": [
            "15"
        ]
    },
    {
        "id": 52,
        "nama_halte": "Halte GIK UGM",
        "info_lokasi": "",
        "latitude": -7.7743,
        "longitude": 110.37516,
        "jalur_terkait": [
            "12",
            "3A",
            "4B"
        ]
    },
    {
        "id": 53,
        "nama_halte": "Halte Graha Asus Jakal",
        "info_lokasi": "",
        "latitude": -7.76255,
        "longitude": 110.38001,
        "jalur_terkait": [
            "12",
            "3A",
            "4B",
            "5A"
        ]
    },
    {
        "id": 54,
        "nama_halte": "Halte Hotel Vidi Jakal",
        "info_lokasi": "",
        "latitude": -7.76186,
        "longitude": 110.38014,
        "jalur_terkait": [
            "12",
            "3B",
            "4A",
            "5B"
        ]
    },
    {
        "id": 55,
        "nama_halte": "Halte Janti Selatan",
        "info_lokasi": "",
        "latitude": -7.78578,
        "longitude": 110.41044,
        "jalur_terkait": [
            "1A",
            "5A",
            "5B"
        ]
    },
    {
        "id": 56,
        "nama_halte": "Halte Janti Utara",
        "info_lokasi": "",
        "latitude": -7.7832,
        "longitude": 110.41164,
        "jalur_terkait": [
            "1A",
            "1B",
            "3A",
            "5A"
        ]
    },
    {
        "id": 57,
        "nama_halte": "Halte Jayakarta",
        "info_lokasi": "",
        "latitude": -7.78343,
        "longitude": 110.41938,
        "jalur_terkait": [
            "1A",
            "1B",
            "3B",
            "5B"
        ]
    },
    {
        "id": 58,
        "nama_halte": "Halte JEC",
        "info_lokasi": "",
        "latitude": -7.79853,
        "longitude": 110.40291,
        "jalur_terkait": [
            "1B",
            "3A"
        ]
    },
    {
        "id": 59,
        "nama_halte": "Halte Jl. Colombo (Samirono)",
        "info_lokasi": "",
        "latitude": -7.77769,
        "longitude": 110.38752,
        "jalur_terkait": [
            "12",
            "2B"
        ]
    },
    {
        "id": 60,
        "nama_halte": "Halte Jl. Colombo (UNY)",
        "info_lokasi": "",
        "latitude": -7.77772,
        "longitude": 110.3867,
        "jalur_terkait": [
            "12",
            "2A"
        ]
    },
    {
        "id": 61,
        "nama_halte": "Halte Jl. Jend. Sudirman (S)",
        "info_lokasi": "",
        "latitude": -7.78304,
        "longitude": 110.36955,
        "jalur_terkait": [
            "11",
            "1A"
        ]
    },
    {
        "id": 62,
        "nama_halte": "Halte Jl. Jend. Sudirman (U)",
        "info_lokasi": "",
        "latitude": -7.78285,
        "longitude": 110.36883,
        "jalur_terkait": [
            "11",
            "13",
            "3B"
        ]
    },
    {
        "id": 63,
        "nama_halte": "Halte Jl. Solo (Kalasan)",
        "info_lokasi": "",
        "latitude": -7.7699,
        "longitude": 110.46897,
        "jalur_terkait": [
            "1A"
        ]
    },
    {
        "id": 64,
        "nama_halte": "Halte Karanggede",
        "info_lokasi": "",
        "latitude": -7.87437,
        "longitude": 110.33579,
        "jalur_terkait": [
            "15"
        ]
    },
    {
        "id": 65,
        "nama_halte": "Halte Katamso 1",
        "info_lokasi": "",
        "latitude": -7.80865,
        "longitude": 110.36917,
        "jalur_terkait": [
            "2A"
        ]
    },
    {
        "id": 66,
        "nama_halte": "Halte Katamso 2",
        "info_lokasi": "",
        "latitude": -7.8027,
        "longitude": 110.36916,
        "jalur_terkait": [
            "2B"
        ]
    },
    {
        "id": 67,
        "nama_halte": "Halte Kenari 1",
        "info_lokasi": "",
        "latitude": -7.79752,
        "longitude": 110.38319,
        "jalur_terkait": [
            "2A"
        ]
    },
    {
        "id": 68,
        "nama_halte": "Halte Kenari 2",
        "info_lokasi": "",
        "latitude": -7.79746,
        "longitude": 110.38338,
        "jalur_terkait": [
            "2B"
        ]
    },
    {
        "id": 69,
        "nama_halte": "Halte Kepatihan (Jl. Mataram)",
        "info_lokasi": "",
        "latitude": -7.7942,
        "longitude": 110.36799,
        "jalur_terkait": [
            "10",
            "15",
            "1A",
            "1B",
            "6"
        ]
    },
    {
        "id": 70,
        "nama_halte": "Halte KHA Dahlan 1",
        "info_lokasi": "",
        "latitude": -7.80123,
        "longitude": 110.36018,
        "jalur_terkait": [
            "10",
            "13",
            "15",
            "2B",
            "3A",
            "6",
            "8"
        ]
    },
    {
        "id": 71,
        "nama_halte": "Halte KHA Dahlan 2",
        "info_lokasi": "",
        "latitude": -7.80118,
        "longitude": 110.36063,
        "jalur_terkait": [
            "10",
            "15",
            "1B",
            "3B",
            "6",
            "8"
        ]
    },
    {
        "id": 72,
        "nama_halte": "Halte Kol.Sugiono 1 (Pujokusuman)",
        "info_lokasi": "",
        "latitude": -7.81483,
        "longitude": 110.37007,
        "jalur_terkait": [
            "2A",
            "3A"
        ]
    },
    {
        "id": 73,
        "nama_halte": "Halte Kosudgama",
        "info_lokasi": "",
        "latitude": -7.77615,
        "longitude": 110.37864,
        "jalur_terkait": [
            "12",
            "2A"
        ]
    },
    {
        "id": 74,
        "nama_halte": "Halte Kotabaru",
        "info_lokasi": "",
        "latitude": -7.78467,
        "longitude": 110.37136,
        "jalur_terkait": [
            "11"
        ]
    },
    {
        "id": 75,
        "nama_halte": "Halte KR 1",
        "info_lokasi": "",
        "latitude": -7.78176,
        "longitude": 110.45055,
        "jalur_terkait": [
            "1A"
        ]
    },
    {
        "id": 76,
        "nama_halte": "Halte KR 2",
        "info_lokasi": "",
        "latitude": -7.78249,
        "longitude": 110.44878,
        "jalur_terkait": [
            "1A"
        ]
    },
    {
        "id": 77,
        "nama_halte": "Halte Kridosono",
        "info_lokasi": "",
        "latitude": -7.7873,
        "longitude": 110.37537,
        "jalur_terkait": [
            "10",
            "11",
            "13",
            "1A",
            "2A",
            "2B",
            "3A",
            "4A",
            "4B",
            "5A",
            "5B",
            "8",
            "L1"
        ]
    },
    {
        "id": 78,
        "nama_halte": "Halte Kusumanegara 3",
        "info_lokasi": "",
        "latitude": -7.80207,
        "longitude": 110.39305,
        "jalur_terkait": [
            "1B",
            "2B",
            "4B"
        ]
    },
    {
        "id": 79,
        "nama_halte": "Halte Kusumanegara 4",
        "info_lokasi": "",
        "latitude": -7.80217,
        "longitude": 110.39335,
        "jalur_terkait": [
            "10",
            "1B",
            "2A",
            "4A"
        ]
    },
    {
        "id": 80,
        "nama_halte": "Halte Lempuyangan Gudang (Utara)",
        "info_lokasi": "",
        "latitude": -7.7904,
        "longitude": 110.37365,
        "jalur_terkait": [
            "10",
            "2B",
            "4B"
        ]
    },
    {
        "id": 81,
        "nama_halte": "Halte LPP",
        "info_lokasi": "",
        "latitude": -7.78315,
        "longitude": 110.38612,
        "jalur_terkait": [
            "1A",
            "5B"
        ]
    },
    {
        "id": 82,
        "nama_halte": "Halte Maguwo Sambilegi",
        "info_lokasi": "",
        "latitude": -7.78336,
        "longitude": 110.43102,
        "jalur_terkait": [
            "14",
            "1A",
            "1B",
            "3A",
            "3B",
            "5B"
        ]
    },
    {
        "id": 83,
        "nama_halte": "Halte Malioboro 1",
        "info_lokasi": "",
        "latitude": -7.79081,
        "longitude": 110.36613,
        "jalur_terkait": [
            "10",
            "13",
            "15",
            "1A",
            "2A",
            "3A",
            "6",
            "8",
            "L1"
        ]
    },
    {
        "id": 84,
        "nama_halte": "Halte Malioboro 2",
        "info_lokasi": "",
        "latitude": -7.79519,
        "longitude": 110.36558,
        "jalur_terkait": [
            "10",
            "13",
            "15",
            "1A",
            "2A",
            "3A",
            "6",
            "8",
            "L1"
        ]
    },
    {
        "id": 85,
        "nama_halte": "Halte Malioboro 3",
        "info_lokasi": "",
        "latitude": -7.79985,
        "longitude": 110.36498,
        "jalur_terkait": [
            "10",
            "13",
            "15",
            "1A",
            "2A",
            "3A",
            "6",
            "8",
            "L1"
        ]
    },
    {
        "id": 86,
        "nama_halte": "Halte Mangkubumi 1",
        "info_lokasi": "",
        "latitude": -7.78473,
        "longitude": 110.36689,
        "jalur_terkait": [
            "1A",
            "2A",
            "8",
            "L1"
        ]
    },
    {
        "id": 87,
        "nama_halte": "Halte Mangkubumi 2",
        "info_lokasi": "",
        "latitude": -7.78765,
        "longitude": 110.36653,
        "jalur_terkait": [
            "1A",
            "2A",
            "8",
            "L1"
        ]
    },
    {
        "id": 88,
        "nama_halte": "Halte MMTC Yogya",
        "info_lokasi": "",
        "latitude": -7.75081,
        "longitude": 110.36217,
        "jalur_terkait": [
            "5B",
            "9",
            "L1"
        ]
    },
    {
        "id": 89,
        "nama_halte": "Halte MT Haryono 2 (SMA N 7)",
        "info_lokasi": "",
        "latitude": -7.81342,
        "longitude": 110.35812,
        "jalur_terkait": [
            "11",
            "3B",
            "9"
        ]
    },
    {
        "id": 90,
        "nama_halte": "Halte Muhammadiyah 3",
        "info_lokasi": "",
        "latitude": -7.82261,
        "longitude": 110.38968,
        "jalur_terkait": [
            "4A",
            "4B"
        ]
    },
    {
        "id": 91,
        "nama_halte": "Halte Museum Biologi",
        "info_lokasi": "",
        "latitude": -7.80168,
        "longitude": 110.37415,
        "jalur_terkait": [
            "1B",
            "4A"
        ]
    },
    {
        "id": 92,
        "nama_halte": "Halte Ngeksigondo (Diklat PU)",
        "info_lokasi": "",
        "latitude": -7.81892,
        "longitude": 110.395,
        "jalur_terkait": [
            "2A"
        ]
    },
    {
        "id": 93,
        "nama_halte": "Halte Ngeksigondo Basen",
        "info_lokasi": "",
        "latitude": -7.81912,
        "longitude": 110.39496,
        "jalur_terkait": [
            "2B"
        ]
    },
    {
        "id": 94,
        "nama_halte": "Halte Nitikan",
        "info_lokasi": "",
        "latitude": -7.82486,
        "longitude": 110.3799,
        "jalur_terkait": [
            "3B"
        ]
    },
    {
        "id": 95,
        "nama_halte": "Halte PA Muhammadiyah",
        "info_lokasi": "",
        "latitude": -7.81687,
        "longitude": 110.376,
        "jalur_terkait": [
            "3B"
        ]
    },
    {
        "id": 96,
        "nama_halte": "Halte Pakualaman",
        "info_lokasi": "",
        "latitude": -7.80162,
        "longitude": 110.37574,
        "jalur_terkait": [
            "1B",
            "4A"
        ]
    },
    {
        "id": 97,
        "nama_halte": "Halte Pakuwon Mall Jogja",
        "info_lokasi": "",
        "latitude": -7.75829,
        "longitude": 110.39948,
        "jalur_terkait": [
            "3A",
            "5A"
        ]
    },
    {
        "id": 98,
        "nama_halte": "Halte Panti Rapih",
        "info_lokasi": "",
        "latitude": -7.77624,
        "longitude": 110.37819,
        "jalur_terkait": [
            "12",
            "2B"
        ]
    },
    {
        "id": 99,
        "nama_halte": "Halte Park and RIde Gamping",
        "info_lokasi": "",
        "latitude": -7.80243,
        "longitude": 110.31477,
        "jalur_terkait": [
            "10",
            "6"
        ]
    },
    {
        "id": 100,
        "nama_halte": "Halte Pasar Kranggan",
        "info_lokasi": "",
        "latitude": -7.78283,
        "longitude": 110.36568,
        "jalur_terkait": [
            "11",
            "13",
            "3B",
            "8",
            "L1"
        ]
    },
    {
        "id": 101,
        "nama_halte": "Halte PDIN C Simanjuntak",
        "info_lokasi": "",
        "latitude": -7.78211,
        "longitude": 110.37255,
        "jalur_terkait": [
            "4B"
        ]
    },
    {
        "id": 102,
        "nama_halte": "Halte Portabel Dentes (Ruko Godean)",
        "info_lokasi": "",
        "latitude": -7.7798,
        "longitude": 110.34378,
        "jalur_terkait": [
            "13",
            "8"
        ]
    },
    {
        "id": 103,
        "nama_halte": "Halte Portabel Jalan Mayjen Sutoyo (Jokteng Wetan)",
        "info_lokasi": "",
        "latitude": -7.81469,
        "longitude": 110.3671,
        "jalur_terkait": [
            "3B",
            "9"
        ]
    },
    {
        "id": 104,
        "nama_halte": "Halte Portabel McD Jl. Godean",
        "info_lokasi": "",
        "latitude": -7.77937,
        "longitude": 110.34206,
        "jalur_terkait": [
            "13",
            "8"
        ]
    },
    {
        "id": 105,
        "nama_halte": "Halte Portabel Simpang Demak Ijo",
        "info_lokasi": "",
        "latitude": -7.77641,
        "longitude": 110.33195,
        "jalur_terkait": [
            "8"
        ]
    },
    {
        "id": 106,
        "nama_halte": "Halte Portabel Soragan 1",
        "info_lokasi": "",
        "latitude": -7.78104,
        "longitude": 110.34971,
        "jalur_terkait": [
            "13",
            "8"
        ]
    },
    {
        "id": 107,
        "nama_halte": "Halte Portabel Soragan 2",
        "info_lokasi": "",
        "latitude": -7.78127,
        "longitude": 110.35038,
        "jalur_terkait": [
            "13",
            "8"
        ]
    },
    {
        "id": 108,
        "nama_halte": "Halte Portabel Total Security (SP Demak Ijo)",
        "info_lokasi": "",
        "latitude": -7.77584,
        "longitude": 110.33196,
        "jalur_terkait": [
            "8"
        ]
    },
    {
        "id": 109,
        "nama_halte": "Halte Portabel Universitas Aisyiyah",
        "info_lokasi": "",
        "latitude": -7.76817,
        "longitude": 110.33442,
        "jalur_terkait": [
            "8"
        ]
    },
    {
        "id": 110,
        "nama_halte": "Halte Portabel Westlake 1",
        "info_lokasi": "",
        "latitude": -7.74979,
        "longitude": 110.34058,
        "jalur_terkait": [
            "8"
        ]
    },
    {
        "id": 111,
        "nama_halte": "Halte Portabel Westlake 2",
        "info_lokasi": "",
        "latitude": -7.74928,
        "longitude": 110.34117,
        "jalur_terkait": [
            "8"
        ]
    },
    {
        "id": 112,
        "nama_halte": "Halte Prayan 1",
        "info_lokasi": "",
        "latitude": -7.76355,
        "longitude": 110.39367,
        "jalur_terkait": [
            "12",
            "2B",
            "4A"
        ]
    },
    {
        "id": 113,
        "nama_halte": "Halte Prayan 2",
        "info_lokasi": "",
        "latitude": -7.76347,
        "longitude": 110.39349,
        "jalur_terkait": [
            "12",
            "2A",
            "4B"
        ]
    },
    {
        "id": 114,
        "nama_halte": "Halte PSKY",
        "info_lokasi": "",
        "latitude": -7.81624,
        "longitude": 110.38594,
        "jalur_terkait": [
            "2B",
            "4A"
        ]
    },
    {
        "id": 115,
        "nama_halte": "Halte Pusat Kuliner Belut Godean",
        "info_lokasi": "",
        "latitude": -7.76755,
        "longitude": 110.2934,
        "jalur_terkait": [
            "13"
        ]
    },
    {
        "id": 116,
        "nama_halte": "Halte Pusat Rehabilitasi Yakkum",
        "info_lokasi": "",
        "latitude": -7.69559,
        "longitude": 110.41795,
        "jalur_terkait": [
            "12",
            "14"
        ]
    },
    {
        "id": 117,
        "nama_halte": "Halte Raminten Boutique dan Cafe",
        "info_lokasi": "",
        "latitude": -7.67609,
        "longitude": 110.41718,
        "jalur_terkait": [
            "12",
            "14"
        ]
    },
    {
        "id": 118,
        "nama_halte": "Halte Ring Road Utara (Binamarga)",
        "info_lokasi": "",
        "latitude": -7.77445,
        "longitude": 110.43078,
        "jalur_terkait": [
            "14",
            "3B"
        ]
    },
    {
        "id": 119,
        "nama_halte": "Halte RRU (STIKES Guna Bangsa)",
        "info_lokasi": "",
        "latitude": -7.76071,
        "longitude": 110.40892,
        "jalur_terkait": [
            "3B",
            "5B"
        ]
    },
    {
        "id": 120,
        "nama_halte": "Halte RRU Instiper 2",
        "info_lokasi": "",
        "latitude": -7.76455,
        "longitude": 110.42354,
        "jalur_terkait": [
            "3A"
        ]
    },
    {
        "id": 121,
        "nama_halte": "Halte RRU Kentungan",
        "info_lokasi": "",
        "latitude": -7.75596,
        "longitude": 110.38465,
        "jalur_terkait": [
            "2B",
            "3B",
            "4A",
            "5B"
        ]
    },
    {
        "id": 122,
        "nama_halte": "Halte RRU Monjali 1",
        "info_lokasi": "",
        "latitude": -7.75045,
        "longitude": 110.36766,
        "jalur_terkait": [
            "2A",
            "2B",
            "5B"
        ]
    },
    {
        "id": 123,
        "nama_halte": "Halte RRU Monjali 2",
        "info_lokasi": "",
        "latitude": -7.75091,
        "longitude": 110.36882,
        "jalur_terkait": [
            "2A",
            "2B",
            "5A"
        ]
    },
    {
        "id": 124,
        "nama_halte": "Halte RRU TJ (UPN)",
        "info_lokasi": "",
        "latitude": -7.76066,
        "longitude": 110.40801,
        "jalur_terkait": [
            "3A",
            "5A"
        ]
    },
    {
        "id": 125,
        "nama_halte": "Halte RS dr. Yap",
        "info_lokasi": "",
        "latitude": -7.78118,
        "longitude": 110.37517,
        "jalur_terkait": [
            "11",
            "2A",
            "3B",
            "4A",
            "5B"
        ]
    },
    {
        "id": 126,
        "nama_halte": "Halte RS Panti Nugroho",
        "info_lokasi": "",
        "latitude": -7.66917,
        "longitude": 110.41757,
        "jalur_terkait": [
            "12",
            "14"
        ]
    },
    {
        "id": 127,
        "nama_halte": "Halte RS Sardjito (Barat)",
        "info_lokasi": "",
        "latitude": -7.76778,
        "longitude": 110.37418,
        "jalur_terkait": [
            "12",
            "3B",
            "4A",
            "5A"
        ]
    },
    {
        "id": 128,
        "nama_halte": "Halte RS Sardjito (Timur)",
        "info_lokasi": "",
        "latitude": -7.76777,
        "longitude": 110.3743,
        "jalur_terkait": [
            "12",
            "3A",
            "4B",
            "5B"
        ]
    },
    {
        "id": 129,
        "nama_halte": "Halte RSI Hidayatullah",
        "info_lokasi": "",
        "latitude": -7.81557,
        "longitude": 110.38748,
        "jalur_terkait": [
            "2A"
        ]
    },
    {
        "id": 130,
        "nama_halte": "Halte RSPAU DR. S. Hardjolukito",
        "info_lokasi": "",
        "latitude": -7.79735,
        "longitude": 110.41008,
        "jalur_terkait": [
            "1B",
            "3B"
        ]
    },
    {
        "id": 131,
        "nama_halte": "Halte Sahid J-Walk",
        "info_lokasi": "",
        "latitude": -7.77957,
        "longitude": 110.41467,
        "jalur_terkait": [
            "1B",
            "5A"
        ]
    },
    {
        "id": 132,
        "nama_halte": "Halte Sanata Dharma Gejayan (Realino)",
        "info_lokasi": "",
        "latitude": -7.77509,
        "longitude": 110.38927,
        "jalur_terkait": [
            "12",
            "2B",
            "4A"
        ]
    },
    {
        "id": 133,
        "nama_halte": "Halte Saudagaran",
        "info_lokasi": "",
        "latitude": -7.79249,
        "longitude": 110.35357,
        "jalur_terkait": [
            "11",
            "9"
        ]
    },
    {
        "id": 134,
        "nama_halte": "Halte Senopati 1",
        "info_lokasi": "",
        "latitude": -7.80154,
        "longitude": 110.36703,
        "jalur_terkait": [
            "2B"
        ]
    },
    {
        "id": 135,
        "nama_halte": "Halte Senopati 2",
        "info_lokasi": "",
        "latitude": -7.80141,
        "longitude": 110.36716,
        "jalur_terkait": [
            "10",
            "15",
            "1A",
            "1B",
            "2A",
            "6"
        ]
    },
    {
        "id": 136,
        "nama_halte": "Halte SGM",
        "info_lokasi": "",
        "latitude": -7.80028,
        "longitude": 110.39456,
        "jalur_terkait": [
            "4B"
        ]
    },
    {
        "id": 137,
        "nama_halte": "Halte Simpang Munggur",
        "info_lokasi": "",
        "latitude": -7.77393,
        "longitude": 110.31833,
        "jalur_terkait": [
            "13"
        ]
    },
    {
        "id": 138,
        "nama_halte": "Halte Simpang Munggur Sidomoyo",
        "info_lokasi": "",
        "latitude": -7.77398,
        "longitude": 110.3182,
        "jalur_terkait": [
            "13"
        ]
    },
    {
        "id": 139,
        "nama_halte": "Halte Simpang Nogotirto",
        "info_lokasi": "",
        "latitude": -7.77771,
        "longitude": 110.33417,
        "jalur_terkait": [
            "13",
            "8"
        ]
    },
    {
        "id": 140,
        "nama_halte": "Halte SMA 1 Yogyakarta",
        "info_lokasi": "",
        "latitude": -7.79902,
        "longitude": 110.35231,
        "jalur_terkait": [
            "11",
            "9"
        ]
    },
    {
        "id": 141,
        "nama_halte": "Halte SMA N 1 Bantul",
        "info_lokasi": "",
        "latitude": -7.89736,
        "longitude": 110.32302,
        "jalur_terkait": [
            "15"
        ]
    },
    {
        "id": 142,
        "nama_halte": "Halte SMKN 5",
        "info_lokasi": "",
        "latitude": -7.8003,
        "longitude": 110.39504,
        "jalur_terkait": [
            "10",
            "4A"
        ]
    },
    {
        "id": 143,
        "nama_halte": "Halte SMP N 11",
        "info_lokasi": "",
        "latitude": -7.79294,
        "longitude": 110.35334,
        "jalur_terkait": [
            "11",
            "13",
            "2B",
            "9"
        ]
    },
    {
        "id": 144,
        "nama_halte": "Halte SMP N 2 Bantul",
        "info_lokasi": "",
        "latitude": -7.87482,
        "longitude": 110.33577,
        "jalur_terkait": [
            "15"
        ]
    },
    {
        "id": 145,
        "nama_halte": "Halte SMPN 4 Pakem",
        "info_lokasi": "",
        "latitude": -7.66907,
        "longitude": 110.41767,
        "jalur_terkait": [
            "12",
            "14"
        ]
    },
    {
        "id": 146,
        "nama_halte": "Halte SPBU Gejayan",
        "info_lokasi": "",
        "latitude": -7.76079,
        "longitude": 110.39439,
        "jalur_terkait": [
            "12",
            "2A",
            "4B"
        ]
    },
    {
        "id": 147,
        "nama_halte": "Halte Stadion TGP",
        "info_lokasi": "",
        "latitude": -7.75703,
        "longitude": 110.29294,
        "jalur_terkait": [
            "13"
        ]
    },
    {
        "id": 148,
        "nama_halte": "Halte Stasiun Lempuyangan",
        "info_lokasi": "",
        "latitude": -7.79022,
        "longitude": 110.3774,
        "jalur_terkait": [
            "10",
            "2B",
            "4A"
        ]
    },
    {
        "id": 149,
        "nama_halte": "Halte Sugiono 2",
        "info_lokasi": "",
        "latitude": -7.81515,
        "longitude": 110.37182,
        "jalur_terkait": [
            "2B",
            "3B"
        ]
    },
    {
        "id": 150,
        "nama_halte": "Halte Tegal Gendu 1",
        "info_lokasi": "",
        "latitude": -7.82602,
        "longitude": 110.39184,
        "jalur_terkait": [
            "3A"
        ]
    },
    {
        "id": 151,
        "nama_halte": "Halte Tegal Gendu 2",
        "info_lokasi": "",
        "latitude": -7.82592,
        "longitude": 110.39133,
        "jalur_terkait": [
            "3B"
        ]
    },
    {
        "id": 152,
        "nama_halte": "Halte Tentara Pelajar 1 (SMP N 1 14)",
        "info_lokasi": "",
        "latitude": -7.78648,
        "longitude": 110.3599,
        "jalur_terkait": [
            "11",
            "2B",
            "3B",
            "8",
            "9",
            "L1"
        ]
    },
    {
        "id": 153,
        "nama_halte": "Halte Tentara Pelajar 2 (Samsat)",
        "info_lokasi": "",
        "latitude": -7.78717,
        "longitude": 110.35977,
        "jalur_terkait": [
            "11",
            "9"
        ]
    },
    {
        "id": 154,
        "nama_halte": "Halte Terminal Giwangan",
        "info_lokasi": "",
        "latitude": -7.83416,
        "longitude": 110.39179,
        "jalur_terkait": [
            "11",
            "3A",
            "3B",
            "4A",
            "4B",
            "9"
        ]
    },
    {
        "id": 155,
        "nama_halte": "Halte Transmart",
        "info_lokasi": "",
        "latitude": -7.78322,
        "longitude": 110.42018,
        "jalur_terkait": [
            "1A",
            "1B",
            "3A",
            "5B"
        ]
    },
    {
        "id": 156,
        "nama_halte": "Halte Tugu Adipura Bantul (Halte 2)",
        "info_lokasi": "",
        "latitude": -7.8892,
        "longitude": 110.32701,
        "jalur_terkait": [
            "15"
        ]
    },
    {
        "id": 157,
        "nama_halte": "Halte Tugu Adipura/Polres Bantul (Halte 2)",
        "info_lokasi": "",
        "latitude": -7.88949,
        "longitude": 110.32694,
        "jalur_terkait": [
            "15"
        ]
    },
    {
        "id": 158,
        "nama_halte": "Halte UIN Sunan Kalijaga 1",
        "info_lokasi": "",
        "latitude": -7.78594,
        "longitude": 110.39474,
        "jalur_terkait": [
            "4B"
        ]
    },
    {
        "id": 159,
        "nama_halte": "Halte UIN Sunan Kalijaga 2",
        "info_lokasi": "",
        "latitude": -7.78616,
        "longitude": 110.39486,
        "jalur_terkait": [
            "4A"
        ]
    },
    {
        "id": 160,
        "nama_halte": "Halte Universitas Ahmad Dahlan",
        "info_lokasi": "",
        "latitude": -7.8205,
        "longitude": 110.38855,
        "jalur_terkait": [
            "4A",
            "4B"
        ]
    },
    {
        "id": 161,
        "nama_halte": "Halte UNY Gejayan",
        "info_lokasi": "",
        "latitude": -7.77504,
        "longitude": 110.38913,
        "jalur_terkait": [
            "12",
            "2A",
            "4B"
        ]
    },
    {
        "id": 162,
        "nama_halte": "Halte Vokasi UGM",
        "info_lokasi": "",
        "latitude": -7.77449,
        "longitude": 110.37495,
        "jalur_terkait": [
            "12",
            "3B",
            "4A"
        ]
    },
    {
        "id": 163,
        "nama_halte": "Halte Wonocatur",
        "info_lokasi": "",
        "latitude": -7.79865,
        "longitude": 110.4064,
        "jalur_terkait": [
            "1B",
            "3B"
        ]
    },
    {
        "id": 164,
        "nama_halte": "Hokben Jakal (Barat)",
        "info_lokasi": "",
        "latitude": -7.75758,
        "longitude": 110.38196,
        "jalur_terkait": [
            "12",
            "3B",
            "4A",
            "5B"
        ]
    },
    {
        "id": 165,
        "nama_halte": "Hokben Jakal (Timur)",
        "info_lokasi": "",
        "latitude": -7.7579,
        "longitude": 110.38191,
        "jalur_terkait": [
            "12",
            "3A",
            "4B",
            "5A"
        ]
    },
    {
        "id": 166,
        "nama_halte": "Hotel Noola",
        "info_lokasi": "",
        "latitude": -7.81564,
        "longitude": 110.36845,
        "jalur_terkait": [
            "9"
        ]
    },
    {
        "id": 167,
        "nama_halte": "Hotel Utara (Timur)",
        "info_lokasi": "",
        "latitude": -7.78032,
        "longitude": 110.36096,
        "jalur_terkait": [
            "9",
            "L1"
        ]
    },
    {
        "id": 168,
        "nama_halte": "Indogrosir",
        "info_lokasi": "",
        "latitude": -7.75109,
        "longitude": 110.36237,
        "jalur_terkait": [
            "5A",
            "9",
            "L1"
        ]
    },
    {
        "id": 169,
        "nama_halte": "Indomaret Klajuran",
        "info_lokasi": "",
        "latitude": -7.77226,
        "longitude": 110.31175,
        "jalur_terkait": [
            "13"
        ]
    },
    {
        "id": 170,
        "nama_halte": "Indomaret Klajuran 2",
        "info_lokasi": "",
        "latitude": -7.77233,
        "longitude": 110.31175,
        "jalur_terkait": [
            "13"
        ]
    },
    {
        "id": 171,
        "nama_halte": "Indomaret Pokoh Sambiroto",
        "info_lokasi": "",
        "latitude": -7.73538,
        "longitude": 110.43458,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 172,
        "nama_halte": "Indomaret Pokoh Sambiroto 2",
        "info_lokasi": "",
        "latitude": -7.73565,
        "longitude": 110.43466,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 173,
        "nama_halte": "Jl. Perintis Kemerdekaan",
        "info_lokasi": "",
        "latitude": -7.81825,
        "longitude": 110.3923,
        "jalur_terkait": [
            "2A"
        ]
    },
    {
        "id": 174,
        "nama_halte": "Jl. Raya Kabunan",
        "info_lokasi": "",
        "latitude": -7.71317,
        "longitude": 110.44298,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 175,
        "nama_halte": "Jl. Raya Kabunan 2",
        "info_lokasi": "",
        "latitude": -7.71455,
        "longitude": 110.44194,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 176,
        "nama_halte": "Jlagran",
        "info_lokasi": "",
        "latitude": -7.7895,
        "longitude": 110.35886,
        "jalur_terkait": [
            "1B",
            "3B",
            "8",
            "L1"
        ]
    },
    {
        "id": 177,
        "nama_halte": "Kampus Terpadu UII",
        "info_lokasi": "",
        "latitude": -7.68728,
        "longitude": 110.41873,
        "jalur_terkait": [
            "12",
            "14"
        ]
    },
    {
        "id": 178,
        "nama_halte": "Kampus Terpadu UII (Halte 2)",
        "info_lokasi": "",
        "latitude": -7.68817,
        "longitude": 110.41878,
        "jalur_terkait": [
            "12",
            "14"
        ]
    },
    {
        "id": 179,
        "nama_halte": "Kampus Unriyo",
        "info_lokasi": "",
        "latitude": -7.74636,
        "longitude": 110.43415,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 180,
        "nama_halte": "Kampus Unriyo 2",
        "info_lokasi": "",
        "latitude": -7.74638,
        "longitude": 110.43422,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 181,
        "nama_halte": "Kantor Badan Kesatuan Bangsa & Politik",
        "info_lokasi": "",
        "latitude": -7.85677,
        "longitude": 110.34136,
        "jalur_terkait": [
            "15"
        ]
    },
    {
        "id": 182,
        "nama_halte": "Kantor Badan Kesatuan Bangsa & Politik (Halte 2)",
        "info_lokasi": "",
        "latitude": -7.85624,
        "longitude": 110.34135,
        "jalur_terkait": [
            "15"
        ]
    },
    {
        "id": 183,
        "nama_halte": "Kantor Desa Sidoarum",
        "info_lokasi": "",
        "latitude": -7.77557,
        "longitude": 110.32539,
        "jalur_terkait": [
            "13"
        ]
    },
    {
        "id": 184,
        "nama_halte": "Kantor Desa Sidoarum 2",
        "info_lokasi": "",
        "latitude": -7.77563,
        "longitude": 110.32532,
        "jalur_terkait": [
            "13"
        ]
    },
    {
        "id": 185,
        "nama_halte": "Kantor Desa Wedomartani",
        "info_lokasi": "",
        "latitude": -7.7314,
        "longitude": 110.43479,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 186,
        "nama_halte": "Kantor Desa Wedomartani (Halte 2)",
        "info_lokasi": "",
        "latitude": -7.73126,
        "longitude": 110.43487,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 187,
        "nama_halte": "Kantor Kalurahan Sukoharjo",
        "info_lokasi": "",
        "latitude": -7.70375,
        "longitude": 110.4251,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 188,
        "nama_halte": "Kantor Kalurahan Sukoharjo (Halte 2)",
        "info_lokasi": "",
        "latitude": -7.70382,
        "longitude": 110.42497,
        "jalur_terkait": []
    },
    {
        "id": 189,
        "nama_halte": "Kantor Kecamatan Godean (Halte 1)",
        "info_lokasi": "",
        "latitude": -7.76939,
        "longitude": 110.30013,
        "jalur_terkait": [
            "13"
        ]
    },
    {
        "id": 190,
        "nama_halte": "Kantor Kecamatan Godean (Halte 2)",
        "info_lokasi": "",
        "latitude": -7.76932,
        "longitude": 110.30019,
        "jalur_terkait": [
            "13"
        ]
    },
    {
        "id": 191,
        "nama_halte": "Kantor Kesehatan Pelabuhan Yogyakarta",
        "info_lokasi": "",
        "latitude": -7.78205,
        "longitude": 110.42977,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 192,
        "nama_halte": "Kantor Pos Demak Ijo",
        "info_lokasi": "",
        "latitude": -7.77807,
        "longitude": 110.33613,
        "jalur_terkait": [
            "13",
            "8"
        ]
    },
    {
        "id": 193,
        "nama_halte": "Kantor Pos Demak Ijo 2",
        "info_lokasi": "",
        "latitude": -7.77812,
        "longitude": 110.33608,
        "jalur_terkait": [
            "13",
            "8"
        ]
    },
    {
        "id": 194,
        "nama_halte": "Kantor Wilayah DJPb",
        "info_lokasi": "",
        "latitude": -7.78327,
        "longitude": 110.42402,
        "jalur_terkait": [
            "1A",
            "1B",
            "3A",
            "5B"
        ]
    },
    {
        "id": 195,
        "nama_halte": "Karangwaru (Barat)",
        "info_lokasi": "",
        "latitude": -7.7717,
        "longitude": 110.3612,
        "jalur_terkait": [
            "5B",
            "9",
            "L1"
        ]
    },
    {
        "id": 196,
        "nama_halte": "Kompi Senapan-C (Selatan)",
        "info_lokasi": "",
        "latitude": -7.7775,
        "longitude": 110.33299,
        "jalur_terkait": [
            "13",
            "8"
        ]
    },
    {
        "id": 197,
        "nama_halte": "Koramil Godean",
        "info_lokasi": "",
        "latitude": -7.77095,
        "longitude": 110.30674,
        "jalur_terkait": [
            "13"
        ]
    },
    {
        "id": 198,
        "nama_halte": "Koramil Godean 2",
        "info_lokasi": "",
        "latitude": -7.77102,
        "longitude": 110.30668,
        "jalur_terkait": [
            "13"
        ]
    },
    {
        "id": 199,
        "nama_halte": "KPPN (Jl. Cendana)",
        "info_lokasi": "",
        "latitude": -7.80118,
        "longitude": 110.38428,
        "jalur_terkait": [
            "2A"
        ]
    },
    {
        "id": 200,
        "nama_halte": "KS Tubun",
        "info_lokasi": "",
        "latitude": -7.79786,
        "longitude": 110.35652,
        "jalur_terkait": [
            "1B"
        ]
    },
    {
        "id": 201,
        "nama_halte": "KUA Depok (Barat)",
        "info_lokasi": "",
        "latitude": -7.75556,
        "longitude": 110.43374,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 202,
        "nama_halte": "KUA Depok (Timur)",
        "info_lokasi": "",
        "latitude": -7.75547,
        "longitude": 110.4339,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 203,
        "nama_halte": "Lapangan Klidon",
        "info_lokasi": "",
        "latitude": -7.7042,
        "longitude": 110.42642,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 204,
        "nama_halte": "Lapangan Klidon 2",
        "info_lokasi": "",
        "latitude": -7.70413,
        "longitude": 110.42643,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 205,
        "nama_halte": "Letjen Suprapto",
        "info_lokasi": "",
        "latitude": -7.79088,
        "longitude": 110.3575,
        "jalur_terkait": [
            "1B"
        ]
    },
    {
        "id": 206,
        "nama_halte": "Makam Gajah (Selatan)",
        "info_lokasi": "",
        "latitude": -7.802,
        "longitude": 110.38733,
        "jalur_terkait": [
            "1B",
            "2A"
        ]
    },
    {
        "id": 207,
        "nama_halte": "Makam Gajah (Utara)",
        "info_lokasi": "",
        "latitude": -7.80192,
        "longitude": 110.38746,
        "jalur_terkait": [
            "1B",
            "2B"
        ]
    },
    {
        "id": 208,
        "nama_halte": "Makam Santren",
        "info_lokasi": "",
        "latitude": -7.76971,
        "longitude": 110.39068,
        "jalur_terkait": [
            "12",
            "2B",
            "4A"
        ]
    },
    {
        "id": 209,
        "nama_halte": "Mako Lanal Yogyakarta",
        "info_lokasi": "",
        "latitude": -7.79225,
        "longitude": 110.39094,
        "jalur_terkait": [
            "10"
        ]
    },
    {
        "id": 210,
        "nama_halte": "MAN 1 Yogyakarta",
        "info_lokasi": "",
        "latitude": -7.77716,
        "longitude": 110.37393,
        "jalur_terkait": [
            "4B"
        ]
    },
    {
        "id": 211,
        "nama_halte": "MAN 2 Sleman",
        "info_lokasi": "",
        "latitude": -7.75038,
        "longitude": 110.43449,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 212,
        "nama_halte": "MAN 2 Sleman (Halte 2)",
        "info_lokasi": "",
        "latitude": -7.75047,
        "longitude": 110.43458,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 213,
        "nama_halte": "Neutron Yogyakarta Godean",
        "info_lokasi": "",
        "latitude": -7.77195,
        "longitude": 110.31043,
        "jalur_terkait": [
            "13"
        ]
    },
    {
        "id": 214,
        "nama_halte": "Neutron Yogyakarta Godean (Halte 2)",
        "info_lokasi": "",
        "latitude": -7.77187,
        "longitude": 110.31026,
        "jalur_terkait": [
            "13"
        ]
    },
    {
        "id": 215,
        "nama_halte": "Ombudsman",
        "info_lokasi": "",
        "latitude": -7.76949,
        "longitude": 110.39061,
        "jalur_terkait": [
            "12",
            "2A",
            "4B"
        ]
    },
    {
        "id": 216,
        "nama_halte": "Pasar Angkasa (Timur)",
        "info_lokasi": "",
        "latitude": -7.79181,
        "longitude": 110.41028,
        "jalur_terkait": []
    },
    {
        "id": 217,
        "nama_halte": "Pasar Bantul",
        "info_lokasi": "",
        "latitude": -7.88506,
        "longitude": 110.33125,
        "jalur_terkait": [
            "15"
        ]
    },
    {
        "id": 218,
        "nama_halte": "Pasar Bantul (Halte 2)",
        "info_lokasi": "",
        "latitude": -7.88518,
        "longitude": 110.33093,
        "jalur_terkait": []
    },
    {
        "id": 219,
        "nama_halte": "Pasar Gamping",
        "info_lokasi": "",
        "latitude": -7.80076,
        "longitude": 110.32352,
        "jalur_terkait": [
            "10",
            "6"
        ]
    },
    {
        "id": 220,
        "nama_halte": "Pasar Pingit (Selatan)",
        "info_lokasi": "",
        "latitude": -7.78288,
        "longitude": 110.35906,
        "jalur_terkait": [
            "8"
        ]
    },
    {
        "id": 221,
        "nama_halte": "Pasar Pingit (Utara)",
        "info_lokasi": "",
        "latitude": -7.78267,
        "longitude": 110.35872,
        "jalur_terkait": [
            "13",
            "8"
        ]
    },
    {
        "id": 222,
        "nama_halte": "Pasar Sentul (Selatan)",
        "info_lokasi": "",
        "latitude": -7.80175,
        "longitude": 110.37675,
        "jalur_terkait": [
            "1B",
            "4A"
        ]
    },
    {
        "id": 223,
        "nama_halte": "Pasar Stan",
        "info_lokasi": "",
        "latitude": -7.76078,
        "longitude": 110.43299,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 224,
        "nama_halte": "Pasar Tlogorejo",
        "info_lokasi": "",
        "latitude": -7.77879,
        "longitude": 110.33954,
        "jalur_terkait": [
            "13",
            "8"
        ]
    },
    {
        "id": 225,
        "nama_halte": "PDAM Monjali (Barat)",
        "info_lokasi": "",
        "latitude": -7.75565,
        "longitude": 110.36979,
        "jalur_terkait": [
            "2B",
            "5A"
        ]
    },
    {
        "id": 226,
        "nama_halte": "Polsek Umbulharjo",
        "info_lokasi": "",
        "latitude": -7.81695,
        "longitude": 110.38509,
        "jalur_terkait": [
            "4A",
            "4B"
        ]
    },
    {
        "id": 227,
        "nama_halte": "Portabel BSI",
        "info_lokasi": "",
        "latitude": -7.80276,
        "longitude": 110.32536,
        "jalur_terkait": [
            "6"
        ]
    },
    {
        "id": 228,
        "nama_halte": "Portabel Lapangan Kasihan 2",
        "info_lokasi": "",
        "latitude": -7.8262,
        "longitude": 110.32901,
        "jalur_terkait": [
            "6"
        ]
    },
    {
        "id": 229,
        "nama_halte": "Portabel Nogotirto",
        "info_lokasi": "",
        "latitude": -7.76373,
        "longitude": 110.3362,
        "jalur_terkait": [
            "8"
        ]
    },
    {
        "id": 230,
        "nama_halte": "Portabel Pasty 2",
        "info_lokasi": "",
        "latitude": -7.8257,
        "longitude": 110.35457,
        "jalur_terkait": [
            "15"
        ]
    },
    {
        "id": 231,
        "nama_halte": "Portabel SPBU Dukuh 2",
        "info_lokasi": "",
        "latitude": -7.81928,
        "longitude": 110.35569,
        "jalur_terkait": [
            "15"
        ]
    },
    {
        "id": 232,
        "nama_halte": "Portabel Tejokusuman (Tamansari)",
        "info_lokasi": "",
        "latitude": -7.80794,
        "longitude": 110.35601,
        "jalur_terkait": [
            "10",
            "11",
            "15",
            "3B",
            "6",
            "9"
        ]
    },
    {
        "id": 233,
        "nama_halte": "Portabel Teras Malioboro",
        "info_lokasi": "",
        "latitude": -7.79179,
        "longitude": 110.36755,
        "jalur_terkait": [
            "10",
            "15",
            "1A",
            "1B",
            "6"
        ]
    },
    {
        "id": 234,
        "nama_halte": "Portabel UTY Ring Road Utara 1",
        "info_lokasi": "",
        "latitude": -7.74709,
        "longitude": 110.35667,
        "jalur_terkait": [
            "8"
        ]
    },
    {
        "id": 235,
        "nama_halte": "Portabel UTY Ringroad Utara 2",
        "info_lokasi": "",
        "latitude": -7.74734,
        "longitude": 110.35655,
        "jalur_terkait": [
            "8"
        ]
    },
    {
        "id": 236,
        "nama_halte": "Portable Dusun Ngawen",
        "info_lokasi": "",
        "latitude": -7.74483,
        "longitude": 110.34399,
        "jalur_terkait": [
            "8"
        ]
    },
    {
        "id": 237,
        "nama_halte": "Portable Jl. Mayjen Sutoyo (Pasar Gading)",
        "info_lokasi": "",
        "latitude": -7.81428,
        "longitude": 110.36426,
        "jalur_terkait": [
            "3B",
            "9"
        ]
    },
    {
        "id": 238,
        "nama_halte": "Portable Pasar Kalasan",
        "info_lokasi": "",
        "latitude": -7.76863,
        "longitude": 110.47036,
        "jalur_terkait": [
            "1A"
        ]
    },
    {
        "id": 239,
        "nama_halte": "Portable Tamansari",
        "info_lokasi": "",
        "latitude": -7.80995,
        "longitude": 110.35605,
        "jalur_terkait": [
            "11",
            "15",
            "3A",
            "9"
        ]
    },
    {
        "id": 240,
        "nama_halte": "Progo",
        "info_lokasi": "",
        "latitude": -7.79801,
        "longitude": 110.36931,
        "jalur_terkait": [
            "10",
            "15",
            "1A",
            "1B",
            "6"
        ]
    },
    {
        "id": 241,
        "nama_halte": "Pusat Rehabilitasi YAKKUM (Halte 2)",
        "info_lokasi": "",
        "latitude": -7.69539,
        "longitude": 110.41818,
        "jalur_terkait": [
            "12",
            "14"
        ]
    },
    {
        "id": 242,
        "nama_halte": "Puskesmas Ngemplak 2",
        "info_lokasi": "",
        "latitude": -7.70299,
        "longitude": 110.4446,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 243,
        "nama_halte": "Puskesmas Ngemplak 2 (Halte 2)",
        "info_lokasi": "",
        "latitude": -7.70297,
        "longitude": 110.44446,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 244,
        "nama_halte": "Raminten Boutique & Cafe (Halte 2)",
        "info_lokasi": "",
        "latitude": -7.67612,
        "longitude": 110.41728,
        "jalur_terkait": [
            "12",
            "14"
        ]
    },
    {
        "id": 245,
        "nama_halte": "RS Bhayangkara",
        "info_lokasi": "",
        "latitude": -7.7673,
        "longitude": 110.47146,
        "jalur_terkait": [
            "1A"
        ]
    },
    {
        "id": 246,
        "nama_halte": "RS Kemasan",
        "info_lokasi": "",
        "latitude": -7.71355,
        "longitude": 110.44787,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 247,
        "nama_halte": "RS Kemasan (Halte 2)",
        "info_lokasi": "",
        "latitude": -7.71375,
        "longitude": 110.44771,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 248,
        "nama_halte": "RSU Gramedika",
        "info_lokasi": "",
        "latitude": -7.70113,
        "longitude": 110.41696,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 249,
        "nama_halte": "RSU Gramedika 2",
        "info_lokasi": "",
        "latitude": -7.70109,
        "longitude": 110.41699,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 250,
        "nama_halte": "Santren",
        "info_lokasi": "",
        "latitude": -7.76637,
        "longitude": 110.39191,
        "jalur_terkait": [
            "12",
            "2A",
            "4B"
        ]
    },
    {
        "id": 251,
        "nama_halte": "SD N 1 Depok",
        "info_lokasi": "",
        "latitude": -7.76071,
        "longitude": 110.43287,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 252,
        "nama_halte": "SD Negeri Selomulyo",
        "info_lokasi": "",
        "latitude": -7.70232,
        "longitude": 110.42056,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 253,
        "nama_halte": "SD Negeri Selomulyo (Halte 2)",
        "info_lokasi": "",
        "latitude": -7.70221,
        "longitude": 110.42045,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 254,
        "nama_halte": "SDN 1 Demak Ijo",
        "info_lokasi": "",
        "latitude": -7.7782,
        "longitude": 110.33677,
        "jalur_terkait": [
            "13",
            "8"
        ]
    },
    {
        "id": 255,
        "nama_halte": "SDN 1 Demak Ijo 2",
        "info_lokasi": "",
        "latitude": -7.77827,
        "longitude": 110.33678,
        "jalur_terkait": [
            "13",
            "8"
        ]
    },
    {
        "id": 256,
        "nama_halte": "SDN Gedongtengen",
        "info_lokasi": "",
        "latitude": -7.79259,
        "longitude": 110.35698,
        "jalur_terkait": [
            "1B"
        ]
    },
    {
        "id": 257,
        "nama_halte": "SDN Kintelan",
        "info_lokasi": "",
        "latitude": -7.81198,
        "longitude": 110.3689,
        "jalur_terkait": [
            "2A"
        ]
    },
    {
        "id": 258,
        "nama_halte": "SDN Percobaan 3 Pakem",
        "info_lokasi": "",
        "latitude": -7.66843,
        "longitude": 110.41772,
        "jalur_terkait": [
            "12",
            "14"
        ]
    },
    {
        "id": 259,
        "nama_halte": "Selokan Mataram Maguwo",
        "info_lokasi": "",
        "latitude": -7.77098,
        "longitude": 110.43113,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 260,
        "nama_halte": "Simpang Babadan",
        "info_lokasi": "",
        "latitude": -7.72324,
        "longitude": 110.43541,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 261,
        "nama_halte": "Simpang Babadan 2",
        "info_lokasi": "",
        "latitude": -7.72337,
        "longitude": 110.43543,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 262,
        "nama_halte": "Simpang Besi Jangkang",
        "info_lokasi": "",
        "latitude": -7.69985,
        "longitude": 110.41552,
        "jalur_terkait": [
            "12",
            "14"
        ]
    },
    {
        "id": 263,
        "nama_halte": "Simpang Besi Jangkang 2",
        "info_lokasi": "",
        "latitude": -7.70026,
        "longitude": 110.41538,
        "jalur_terkait": [
            "12",
            "14"
        ]
    },
    {
        "id": 264,
        "nama_halte": "Simpang Cepit",
        "info_lokasi": "",
        "latitude": -7.86367,
        "longitude": 110.3395,
        "jalur_terkait": [
            "15"
        ]
    },
    {
        "id": 265,
        "nama_halte": "Simpang Cepit (Halte2)",
        "info_lokasi": "",
        "latitude": -7.86333,
        "longitude": 110.33945,
        "jalur_terkait": [
            "15"
        ]
    },
    {
        "id": 266,
        "nama_halte": "Simpang Dogolan",
        "info_lokasi": "",
        "latitude": -7.68405,
        "longitude": 110.41911,
        "jalur_terkait": [
            "12",
            "14"
        ]
    },
    {
        "id": 267,
        "nama_halte": "Simpang Dogolan 2",
        "info_lokasi": "",
        "latitude": -7.68414,
        "longitude": 110.41922,
        "jalur_terkait": [
            "12",
            "14"
        ]
    },
    {
        "id": 268,
        "nama_halte": "Simpang Dongkelan",
        "info_lokasi": "",
        "latitude": -7.82928,
        "longitude": 110.35401,
        "jalur_terkait": [
            "15"
        ]
    },
    {
        "id": 269,
        "nama_halte": "Simpang Dongkelan (Halte 2)",
        "info_lokasi": "",
        "latitude": -7.8302,
        "longitude": 110.35377,
        "jalur_terkait": [
            "15"
        ]
    },
    {
        "id": 270,
        "nama_halte": "Simpang Gesikan",
        "info_lokasi": "",
        "latitude": -7.77358,
        "longitude": 110.31649,
        "jalur_terkait": [
            "13"
        ]
    },
    {
        "id": 271,
        "nama_halte": "Simpang Gesikan 2",
        "info_lokasi": "",
        "latitude": -7.77361,
        "longitude": 110.31643,
        "jalur_terkait": [
            "13"
        ]
    },
    {
        "id": 272,
        "nama_halte": "Simpang Godean Nogotirto",
        "info_lokasi": "",
        "latitude": -7.77767,
        "longitude": 110.33427,
        "jalur_terkait": [
            "13",
            "8"
        ]
    },
    {
        "id": 273,
        "nama_halte": "Simpang Kabunan",
        "info_lokasi": "",
        "latitude": -7.71857,
        "longitude": 110.43854,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 274,
        "nama_halte": "Simpang Kasongan",
        "info_lokasi": "",
        "latitude": -7.84861,
        "longitude": 110.3435,
        "jalur_terkait": [
            "15"
        ]
    },
    {
        "id": 275,
        "nama_halte": "Simpang Kasongan (Halte 2)",
        "info_lokasi": "",
        "latitude": -7.84635,
        "longitude": 110.34449,
        "jalur_terkait": [
            "15"
        ]
    },
    {
        "id": 276,
        "nama_halte": "Simpang Losari (Cozy)",
        "info_lokasi": "",
        "latitude": -7.7048,
        "longitude": 110.43315,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 277,
        "nama_halte": "Simpang Mandungan (Iwak Kalen)",
        "info_lokasi": "",
        "latitude": -7.76999,
        "longitude": 110.30292,
        "jalur_terkait": [
            "13"
        ]
    },
    {
        "id": 278,
        "nama_halte": "Simpang Mandungan (Iwak Kalen) 2",
        "info_lokasi": "",
        "latitude": -7.77009,
        "longitude": 110.30291,
        "jalur_terkait": [
            "13"
        ]
    },
    {
        "id": 279,
        "nama_halte": "Simpang Pasar Jangkang",
        "info_lokasi": "",
        "latitude": -7.70211,
        "longitude": 110.44743,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 280,
        "nama_halte": "Simpang Pasar Jangkang (Halte 2)",
        "info_lokasi": "",
        "latitude": -7.70204,
        "longitude": 110.44739,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 281,
        "nama_halte": "Simpang Polsek Godean",
        "info_lokasi": "",
        "latitude": -7.77148,
        "longitude": 110.30899,
        "jalur_terkait": [
            "13"
        ]
    },
    {
        "id": 282,
        "nama_halte": "Simpang Polsek Godean 2",
        "info_lokasi": "",
        "latitude": -7.77159,
        "longitude": 110.30896,
        "jalur_terkait": [
            "13"
        ]
    },
    {
        "id": 283,
        "nama_halte": "Simpang Selomartani",
        "info_lokasi": "",
        "latitude": -7.7223,
        "longitude": 110.43816,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 284,
        "nama_halte": "Simpang Selomartani 2",
        "info_lokasi": "",
        "latitude": -7.7224,
        "longitude": 110.43801,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 285,
        "nama_halte": "Simpang Tajem Kabunan",
        "info_lokasi": "",
        "latitude": -7.71897,
        "longitude": 110.43821,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 286,
        "nama_halte": "SMA Budi Mulia Dua",
        "info_lokasi": "",
        "latitude": -7.74282,
        "longitude": 110.43416,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 287,
        "nama_halte": "SMA Budi Mulia Dua (Halte 2)",
        "info_lokasi": "",
        "latitude": -7.74315,
        "longitude": 110.43426,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 288,
        "nama_halte": "SMA N 1 Bantul",
        "info_lokasi": "",
        "latitude": -7.89817,
        "longitude": 110.32276,
        "jalur_terkait": [
            "15"
        ]
    },
    {
        "id": 289,
        "nama_halte": "SMA Negeri 2 Ngaglik",
        "info_lokasi": "",
        "latitude": -7.70491,
        "longitude": 110.43497,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 290,
        "nama_halte": "SMA Negeri 2 Ngaglik (Halte 2)",
        "info_lokasi": "",
        "latitude": -7.70482,
        "longitude": 110.43494,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 291,
        "nama_halte": "SMAN 1 Kasihan (Barat)",
        "info_lokasi": "",
        "latitude": -7.81837,
        "longitude": 110.34821,
        "jalur_terkait": [
            "6"
        ]
    },
    {
        "id": 292,
        "nama_halte": "SMAN 1 Kasihan (Timur)",
        "info_lokasi": "",
        "latitude": -7.81842,
        "longitude": 110.34827,
        "jalur_terkait": [
            "6"
        ]
    },
    {
        "id": 293,
        "nama_halte": "SMKN 1 Depok",
        "info_lokasi": "",
        "latitude": -7.76522,
        "longitude": 110.43145,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 294,
        "nama_halte": "SMKN 1 Depok (Halte 2)",
        "info_lokasi": "",
        "latitude": -7.76563,
        "longitude": 110.43152,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 295,
        "nama_halte": "SMP 3 Gamping",
        "info_lokasi": "",
        "latitude": -7.77205,
        "longitude": 110.33315,
        "jalur_terkait": [
            "8"
        ]
    },
    {
        "id": 296,
        "nama_halte": "SPBU Condongcatur",
        "info_lokasi": "",
        "latitude": -7.75968,
        "longitude": 110.39521,
        "jalur_terkait": [
            "12",
            "2B",
            "4A"
        ]
    },
    {
        "id": 297,
        "nama_halte": "SPBU Mindi",
        "info_lokasi": "",
        "latitude": -7.70486,
        "longitude": 110.43104,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 298,
        "nama_halte": "SPBU Mindi 2",
        "info_lokasi": "",
        "latitude": -7.70478,
        "longitude": 110.43111,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 299,
        "nama_halte": "SPBU Monjali (Barat)",
        "info_lokasi": "",
        "latitude": -7.76016,
        "longitude": 110.36939,
        "jalur_terkait": [
            "2B",
            "5A"
        ]
    },
    {
        "id": 300,
        "nama_halte": "SPBU Monjali (Timur)",
        "info_lokasi": "",
        "latitude": -7.76011,
        "longitude": 110.36953,
        "jalur_terkait": [
            "2A",
            "5B"
        ]
    },
    {
        "id": 301,
        "nama_halte": "Stasiun Yogyakarta",
        "info_lokasi": "",
        "latitude": -7.78971,
        "longitude": 110.36177,
        "jalur_terkait": [
            "1B",
            "3B",
            "8",
            "L1"
        ]
    },
    {
        "id": 302,
        "nama_halte": "Superindo Urip Sumoharjo",
        "info_lokasi": "",
        "latitude": -7.78311,
        "longitude": 110.38234,
        "jalur_terkait": [
            "1A",
            "5B"
        ]
    },
    {
        "id": 303,
        "nama_halte": "Susteran Novisiat",
        "info_lokasi": "",
        "latitude": -7.7659,
        "longitude": 110.39233,
        "jalur_terkait": [
            "12",
            "2B",
            "4A"
        ]
    },
    {
        "id": 304,
        "nama_halte": "Taman Makam Pahlawan (Selatan)",
        "info_lokasi": "",
        "latitude": -7.80191,
        "longitude": 110.3822,
        "jalur_terkait": [
            "1B"
        ]
    },
    {
        "id": 305,
        "nama_halte": "Taman Makam Pahlawan (Utara)",
        "info_lokasi": "",
        "latitude": -7.80183,
        "longitude": 110.38349,
        "jalur_terkait": [
            "1B"
        ]
    },
    {
        "id": 306,
        "nama_halte": "Terminal Condong Catur",
        "info_lokasi": "",
        "latitude": -7.75669,
        "longitude": 110.39582,
        "jalur_terkait": [
            "12",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B"
        ]
    },
    {
        "id": 307,
        "nama_halte": "Terminal Jombor",
        "info_lokasi": "",
        "latitude": -7.74742,
        "longitude": 110.36145,
        "jalur_terkait": [
            "2A",
            "2B",
            "5A",
            "5B",
            "8",
            "9",
            "L1"
        ]
    },
    {
        "id": 308,
        "nama_halte": "Terminal Ngabean",
        "info_lokasi": "",
        "latitude": -7.80364,
        "longitude": 110.35631,
        "jalur_terkait": [
            "10",
            "11",
            "13",
            "15",
            "1B",
            "2B",
            "3A",
            "3B",
            "6",
            "8",
            "9"
        ]
    },
    {
        "id": 309,
        "nama_halte": "Terminal Pakem",
        "info_lokasi": "",
        "latitude": -7.66684,
        "longitude": 110.4202,
        "jalur_terkait": [
            "12",
            "14"
        ]
    },
    {
        "id": 310,
        "nama_halte": "Terminal Palbapang",
        "info_lokasi": "",
        "latitude": -7.90528,
        "longitude": 110.31838,
        "jalur_terkait": [
            "15"
        ]
    },
    {
        "id": 311,
        "nama_halte": "Terminal Prambanan",
        "info_lokasi": "",
        "latitude": -7.75561,
        "longitude": 110.4898,
        "jalur_terkait": [
            "1A"
        ]
    },
    {
        "id": 312,
        "nama_halte": "Timoho (Barat)",
        "info_lokasi": "",
        "latitude": -7.79682,
        "longitude": 110.39255,
        "jalur_terkait": [
            "10",
            "4B"
        ]
    },
    {
        "id": 313,
        "nama_halte": "Timoho (Timur)",
        "info_lokasi": "",
        "latitude": -7.79526,
        "longitude": 110.39285,
        "jalur_terkait": [
            "10",
            "4A"
        ]
    },
    {
        "id": 314,
        "nama_halte": "Timur Jembatan Yapah",
        "info_lokasi": "",
        "latitude": -7.70508,
        "longitude": 110.43936,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 315,
        "nama_halte": "Timur Jembatan Yapah 2",
        "info_lokasi": "",
        "latitude": -7.70499,
        "longitude": 110.43943,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 316,
        "nama_halte": "Timur Simpang Bantulan",
        "info_lokasi": "",
        "latitude": -7.77478,
        "longitude": 110.32224,
        "jalur_terkait": [
            "13"
        ]
    },
    {
        "id": 317,
        "nama_halte": "TJ RRU (JIH)",
        "info_lokasi": "",
        "latitude": -7.75876,
        "longitude": 110.40306,
        "jalur_terkait": [
            "3B",
            "5B"
        ]
    },
    {
        "id": 318,
        "nama_halte": "TPB Abu Bakar Ali",
        "info_lokasi": "",
        "latitude": -7.78925,
        "longitude": 110.37008,
        "jalur_terkait": [
            "10",
            "1A",
            "2A",
            "8",
            "L1"
        ]
    },
    {
        "id": 319,
        "nama_halte": "TPB AMIK BSI",
        "info_lokasi": "",
        "latitude": -7.80272,
        "longitude": 110.32506,
        "jalur_terkait": [
            "6"
        ]
    },
    {
        "id": 320,
        "nama_halte": "TPB Among Rogo Kota 1",
        "info_lokasi": "",
        "latitude": -7.79847,
        "longitude": 110.38488,
        "jalur_terkait": [
            "2B"
        ]
    },
    {
        "id": 321,
        "nama_halte": "TPB Among Rogo Kota 2",
        "info_lokasi": "",
        "latitude": -7.79845,
        "longitude": 110.38479,
        "jalur_terkait": [
            "2A"
        ]
    },
    {
        "id": 322,
        "nama_halte": "TPB Apotek Muji Sehat",
        "info_lokasi": "",
        "latitude": -7.81449,
        "longitude": 110.32419,
        "jalur_terkait": [
            "6"
        ]
    },
    {
        "id": 323,
        "nama_halte": "TPB Babarsari (Selatan)",
        "info_lokasi": "",
        "latitude": -7.77399,
        "longitude": 110.41221,
        "jalur_terkait": [
            "1B",
            "5A"
        ]
    },
    {
        "id": 324,
        "nama_halte": "TPB Babarsari (Utara)",
        "info_lokasi": "",
        "latitude": -7.77388,
        "longitude": 110.41218,
        "jalur_terkait": [
            "5B"
        ]
    },
    {
        "id": 325,
        "nama_halte": "TPB Banguntapan 1 Gedong Kuning",
        "info_lokasi": "",
        "latitude": -7.808,
        "longitude": 110.4021,
        "jalur_terkait": [
            "2A",
            "3A"
        ]
    },
    {
        "id": 326,
        "nama_halte": "TPB BKPM",
        "info_lokasi": "",
        "latitude": -7.80036,
        "longitude": 110.40239,
        "jalur_terkait": [
            "1B",
            "3B"
        ]
    },
    {
        "id": 327,
        "nama_halte": "TPB Blok O",
        "info_lokasi": "",
        "latitude": -7.79733,
        "longitude": 110.40982,
        "jalur_terkait": [
            "1B",
            "3A"
        ]
    },
    {
        "id": 328,
        "nama_halte": "TPB BRI UMY",
        "info_lokasi": "",
        "latitude": -7.81606,
        "longitude": 110.32435,
        "jalur_terkait": [
            "6"
        ]
    },
    {
        "id": 329,
        "nama_halte": "TPB Demangan",
        "info_lokasi": "",
        "latitude": -7.78302,
        "longitude": 110.38866,
        "jalur_terkait": [
            "1A",
            "4A",
            "5A"
        ]
    },
    {
        "id": 330,
        "nama_halte": "TPB Dishub DIY",
        "info_lokasi": "",
        "latitude": -7.77807,
        "longitude": 110.4151,
        "jalur_terkait": [
            "5B"
        ]
    },
    {
        "id": 331,
        "nama_halte": "TPB Dr. Sutomo Kota",
        "info_lokasi": "",
        "latitude": -7.79578,
        "longitude": 110.37772,
        "jalur_terkait": [
            "2A"
        ]
    },
    {
        "id": 332,
        "nama_halte": "TPB Edotel Kalasan",
        "info_lokasi": "",
        "latitude": -7.75682,
        "longitude": 110.48272,
        "jalur_terkait": [
            "1A"
        ]
    },
    {
        "id": 333,
        "nama_halte": "TPB Eks Borobudur Plaza 2",
        "info_lokasi": "",
        "latitude": -7.77883,
        "longitude": 110.36207,
        "jalur_terkait": [
            "2B",
            "5A"
        ]
    },
    {
        "id": 334,
        "nama_halte": "TPB Eks. Bioskop Mataram",
        "info_lokasi": "",
        "latitude": -7.7923,
        "longitude": 110.37786,
        "jalur_terkait": [
            "2A"
        ]
    },
    {
        "id": 335,
        "nama_halte": "TPB Fak. Kedokteran UGM",
        "info_lokasi": "",
        "latitude": -7.77154,
        "longitude": 110.37543,
        "jalur_terkait": [
            "12",
            "3B",
            "4A",
            "5A"
        ]
    },
    {
        "id": 336,
        "nama_halte": "TPB Fak. Peternakan UGM",
        "info_lokasi": "",
        "latitude": -7.77136,
        "longitude": 110.37522,
        "jalur_terkait": [
            "12",
            "3A",
            "4B",
            "5B"
        ]
    },
    {
        "id": 337,
        "nama_halte": "TPB Fakultas Biologi UGM",
        "info_lokasi": "",
        "latitude": -7.76529,
        "longitude": 110.37704,
        "jalur_terkait": [
            "12",
            "3A",
            "4B"
        ]
    },
    {
        "id": 338,
        "nama_halte": "TPB Gambiran 1",
        "info_lokasi": "",
        "latitude": -7.817,
        "longitude": 110.39088,
        "jalur_terkait": [
            "2B"
        ]
    },
    {
        "id": 339,
        "nama_halte": "TPB Gambiran 2",
        "info_lokasi": "",
        "latitude": -7.81686,
        "longitude": 110.39101,
        "jalur_terkait": [
            "2A"
        ]
    },
    {
        "id": 340,
        "nama_halte": "TPB Gedung Madu Candhya 1",
        "info_lokasi": "",
        "latitude": -7.82885,
        "longitude": 110.34433,
        "jalur_terkait": [
            "6"
        ]
    },
    {
        "id": 341,
        "nama_halte": "TPB Gedung Madu Candhya 2",
        "info_lokasi": "",
        "latitude": -7.82852,
        "longitude": 110.34432,
        "jalur_terkait": [
            "6"
        ]
    },
    {
        "id": 342,
        "nama_halte": "TPB Gudang SGM",
        "info_lokasi": "",
        "latitude": -7.8271,
        "longitude": 110.38994,
        "jalur_terkait": [
            "3A",
            "3B",
            "4A",
            "4B"
        ]
    },
    {
        "id": 343,
        "nama_halte": "TPB Gudang SGM 2",
        "info_lokasi": "",
        "latitude": -7.82725,
        "longitude": 110.39004,
        "jalur_terkait": [
            "3A",
            "3B",
            "4A",
            "4B"
        ]
    },
    {
        "id": 344,
        "nama_halte": "TPB Hayam Wuruk 2",
        "info_lokasi": "",
        "latitude": -7.79457,
        "longitude": 110.37281,
        "jalur_terkait": [
            "4B"
        ]
    },
    {
        "id": 345,
        "nama_halte": "TPB Hotel Utara Kota",
        "info_lokasi": "",
        "latitude": -7.78037,
        "longitude": 110.36086,
        "jalur_terkait": [
            "2B",
            "9",
            "L1"
        ]
    },
    {
        "id": 346,
        "nama_halte": "TPB Hyundai",
        "info_lokasi": "",
        "latitude": -7.78354,
        "longitude": 110.42833,
        "jalur_terkait": [
            "1A",
            "1B",
            "3B",
            "5B"
        ]
    },
    {
        "id": 347,
        "nama_halte": "TPB Jl. Glagahsari",
        "info_lokasi": "",
        "latitude": -7.80744,
        "longitude": 110.38794,
        "jalur_terkait": [
            "4A"
        ]
    },
    {
        "id": 348,
        "nama_halte": "TPB Jl. Letjen S. Parman",
        "info_lokasi": "",
        "latitude": -7.80813,
        "longitude": 110.35226,
        "jalur_terkait": [
            "10",
            "6"
        ]
    },
    {
        "id": 349,
        "nama_halte": "TPB Jl. Mayjen Sutoyo (Plengkung Gading)",
        "info_lokasi": "",
        "latitude": -7.81413,
        "longitude": 110.36396,
        "jalur_terkait": [
            "3A",
            "9"
        ]
    },
    {
        "id": 350,
        "nama_halte": "TPB Jl. Mayor Suryotomo 1",
        "info_lokasi": "",
        "latitude": -7.79925,
        "longitude": 110.36928,
        "jalur_terkait": [
            "10",
            "15",
            "1A",
            "1B",
            "6"
        ]
    },
    {
        "id": 351,
        "nama_halte": "TPB Jl. Pramuka",
        "info_lokasi": "",
        "latitude": -7.81846,
        "longitude": 110.38732,
        "jalur_terkait": [
            "4A",
            "4B"
        ]
    },
    {
        "id": 352,
        "nama_halte": "TPB Jl. Veteran",
        "info_lokasi": "",
        "latitude": -7.81523,
        "longitude": 110.38914,
        "jalur_terkait": [
            "2B"
        ]
    },
    {
        "id": 353,
        "nama_halte": "TPB Jogja City Mall 1",
        "info_lokasi": "",
        "latitude": -7.75301,
        "longitude": 110.3621,
        "jalur_terkait": [
            "5B",
            "9",
            "L1"
        ]
    },
    {
        "id": 354,
        "nama_halte": "TPB Jogja City Mall 2",
        "info_lokasi": "",
        "latitude": -7.75325,
        "longitude": 110.36227,
        "jalur_terkait": [
            "5A",
            "9",
            "L1"
        ]
    },
    {
        "id": 355,
        "nama_halte": "TPB Jogjatronik",
        "info_lokasi": "",
        "latitude": -7.80591,
        "longitude": 110.36932,
        "jalur_terkait": [
            "2A"
        ]
    },
    {
        "id": 356,
        "nama_halte": "TPB Kantor Cagar Budaya",
        "info_lokasi": "",
        "latitude": -7.75657,
        "longitude": 110.48248,
        "jalur_terkait": [
            "1A"
        ]
    },
    {
        "id": 357,
        "nama_halte": "TPB Karangjati (AM Sangaji)",
        "info_lokasi": "",
        "latitude": -7.76441,
        "longitude": 110.36908,
        "jalur_terkait": [
            "2B"
        ]
    },
    {
        "id": 358,
        "nama_halte": "TPB Karangjati 2 (AM Sangaji)",
        "info_lokasi": "",
        "latitude": -7.76415,
        "longitude": 110.36925,
        "jalur_terkait": [
            "2A"
        ]
    },
    {
        "id": 359,
        "nama_halte": "TPB Karangwaru",
        "info_lokasi": "",
        "latitude": -7.77371,
        "longitude": 110.36115,
        "jalur_terkait": [
            "5B",
            "9",
            "L1"
        ]
    },
    {
        "id": 360,
        "nama_halte": "TPB Karangwaru (Polsek Tegalrejo)",
        "info_lokasi": "",
        "latitude": -7.77229,
        "longitude": 110.36135,
        "jalur_terkait": [
            "5A",
            "9",
            "L1"
        ]
    },
    {
        "id": 361,
        "nama_halte": "TPB Kehutanan Gedongkuning",
        "info_lokasi": "",
        "latitude": -7.81813,
        "longitude": 110.40182,
        "jalur_terkait": [
            "2B",
            "3B"
        ]
    },
    {
        "id": 362,
        "nama_halte": "TPB KH. Wahid Hasyim 1",
        "info_lokasi": "",
        "latitude": -7.89197,
        "longitude": 110.32545,
        "jalur_terkait": [
            "15"
        ]
    },
    {
        "id": 363,
        "nama_halte": "TPB KH. Wahid Hasyim 2",
        "info_lokasi": "",
        "latitude": -7.8918,
        "longitude": 110.3254,
        "jalur_terkait": [
            "15"
        ]
    },
    {
        "id": 364,
        "nama_halte": "TPB Kledokan Babarsari",
        "info_lokasi": "",
        "latitude": -7.77829,
        "longitude": 110.40856,
        "jalur_terkait": [
            "1B"
        ]
    },
    {
        "id": 365,
        "nama_halte": "TPB Lap Kasihan",
        "info_lokasi": "",
        "latitude": -7.82501,
        "longitude": 110.32809,
        "jalur_terkait": [
            "6"
        ]
    },
    {
        "id": 366,
        "nama_halte": "TPB Lap. Karang Kotagede",
        "info_lokasi": "",
        "latitude": -7.82243,
        "longitude": 110.39644,
        "jalur_terkait": [
            "3B"
        ]
    },
    {
        "id": 367,
        "nama_halte": "TPB Lapangan Karang",
        "info_lokasi": "",
        "latitude": -7.82235,
        "longitude": 110.39635,
        "jalur_terkait": [
            "3A"
        ]
    },
    {
        "id": 368,
        "nama_halte": "TPB Lowanu",
        "info_lokasi": "",
        "latitude": -7.81704,
        "longitude": 110.37603,
        "jalur_terkait": [
            "3A"
        ]
    },
    {
        "id": 369,
        "nama_halte": "TPB Makam Sorogenen",
        "info_lokasi": "",
        "latitude": -7.7834,
        "longitude": 110.44128,
        "jalur_terkait": [
            "1A"
        ]
    },
    {
        "id": 370,
        "nama_halte": "TPB Manna Kampus",
        "info_lokasi": "",
        "latitude": -7.78323,
        "longitude": 110.41468,
        "jalur_terkait": [
            "1A",
            "1B",
            "3A",
            "5B"
        ]
    },
    {
        "id": 371,
        "nama_halte": "TPB MT Haryono 1 (Jokteng Kulon)",
        "info_lokasi": "",
        "latitude": -7.81322,
        "longitude": 110.35728,
        "jalur_terkait": [
            "11",
            "3A",
            "9"
        ]
    },
    {
        "id": 372,
        "nama_halte": "TPB Muallimin",
        "info_lokasi": "",
        "latitude": -7.80786,
        "longitude": 110.35104,
        "jalur_terkait": [
            "10",
            "6"
        ]
    },
    {
        "id": 373,
        "nama_halte": "TPB Nyutran Tamansiswa",
        "info_lokasi": "",
        "latitude": -7.81095,
        "longitude": 110.3769,
        "jalur_terkait": [
            "4A"
        ]
    },
    {
        "id": 374,
        "nama_halte": "TPB Olive Kentucky",
        "info_lokasi": "",
        "latitude": -7.80426,
        "longitude": 110.38873,
        "jalur_terkait": [
            "4B"
        ]
    },
    {
        "id": 375,
        "nama_halte": "TPB Pakuwon Mall 2",
        "info_lokasi": "",
        "latitude": -7.75798,
        "longitude": 110.39933,
        "jalur_terkait": [
            "3B",
            "5B"
        ]
    },
    {
        "id": 376,
        "nama_halte": "TPB Panti Rapih",
        "info_lokasi": "",
        "latitude": -7.77788,
        "longitude": 110.37587,
        "jalur_terkait": [
            "11",
            "2B",
            "3A",
            "5A"
        ]
    },
    {
        "id": 377,
        "nama_halte": "TPB Pasar Belut Godean 1",
        "info_lokasi": "",
        "latitude": -7.76748,
        "longitude": 110.29363,
        "jalur_terkait": [
            "13"
        ]
    },
    {
        "id": 378,
        "nama_halte": "TPB Pasar Demangan",
        "info_lokasi": "",
        "latitude": -7.77954,
        "longitude": 110.38844,
        "jalur_terkait": [
            "4A"
        ]
    },
    {
        "id": 379,
        "nama_halte": "TPB Pasar Gamping",
        "info_lokasi": "",
        "latitude": -7.8006,
        "longitude": 110.32373,
        "jalur_terkait": [
            "10",
            "6"
        ]
    },
    {
        "id": 380,
        "nama_halte": "TPB Pasar Giwangan 1",
        "info_lokasi": "",
        "latitude": -7.83173,
        "longitude": 110.39001,
        "jalur_terkait": [
            "3A",
            "3B",
            "4A",
            "4B"
        ]
    },
    {
        "id": 381,
        "nama_halte": "TPB Pasar Giwangan 2",
        "info_lokasi": "",
        "latitude": -7.83245,
        "longitude": 110.3902,
        "jalur_terkait": [
            "3A",
            "3B",
            "4A",
            "4B"
        ]
    },
    {
        "id": 382,
        "nama_halte": "TPB Pasar Induk Godean",
        "info_lokasi": "",
        "latitude": -7.76679,
        "longitude": 110.2912,
        "jalur_terkait": [
            "13"
        ]
    },
    {
        "id": 383,
        "nama_halte": "TPB Pasar Induk Godean 1",
        "info_lokasi": "",
        "latitude": -7.76661,
        "longitude": 110.291,
        "jalur_terkait": [
            "13"
        ]
    },
    {
        "id": 384,
        "nama_halte": "TPB Pasar Kranggan Yogya",
        "info_lokasi": "",
        "latitude": -7.78181,
        "longitude": 110.36723,
        "jalur_terkait": [
            "2A"
        ]
    },
    {
        "id": 385,
        "nama_halte": "TPB Pasar Legi",
        "info_lokasi": "",
        "latitude": -7.80917,
        "longitude": 110.35016,
        "jalur_terkait": [
            "6"
        ]
    },
    {
        "id": 386,
        "nama_halte": "TPB Pasar Lempuyangan",
        "info_lokasi": "",
        "latitude": -7.79241,
        "longitude": 110.37344,
        "jalur_terkait": [
            "4A"
        ]
    },
    {
        "id": 387,
        "nama_halte": "TPB Pasar Sepeda Tanjungsari",
        "info_lokasi": "",
        "latitude": -7.8164,
        "longitude": 110.38033,
        "jalur_terkait": [
            "2B",
            "4A"
        ]
    },
    {
        "id": 388,
        "nama_halte": "TPB Pasar Serangan",
        "info_lokasi": "",
        "latitude": -7.80109,
        "longitude": 110.35422,
        "jalur_terkait": [
            "11",
            "13",
            "2B",
            "9"
        ]
    },
    {
        "id": 389,
        "nama_halte": "TPB Pasty",
        "info_lokasi": "",
        "latitude": -7.82568,
        "longitude": 110.35445,
        "jalur_terkait": [
            "15"
        ]
    },
    {
        "id": 390,
        "nama_halte": "TPB PDAM Monjali",
        "info_lokasi": "",
        "latitude": -7.75597,
        "longitude": 110.36995,
        "jalur_terkait": [
            "2A",
            "5B"
        ]
    },
    {
        "id": 391,
        "nama_halte": "TPB Pegadaian",
        "info_lokasi": "",
        "latitude": -7.8228,
        "longitude": 110.40021,
        "jalur_terkait": [
            "3B"
        ]
    },
    {
        "id": 392,
        "nama_halte": "TPB Perpusda Samsat Kota Yogya",
        "info_lokasi": "",
        "latitude": -7.78803,
        "longitude": 110.35797,
        "jalur_terkait": [
            "11",
            "2B",
            "3B",
            "8",
            "9",
            "L1"
        ]
    },
    {
        "id": 393,
        "nama_halte": "TPB Pilar 1 Gedong Kuning Kota",
        "info_lokasi": "",
        "latitude": -7.81344,
        "longitude": 110.40202,
        "jalur_terkait": [
            "2A",
            "3A"
        ]
    },
    {
        "id": 394,
        "nama_halte": "TPB Polsek Depok Timur",
        "info_lokasi": "",
        "latitude": -7.76238,
        "longitude": 110.41549,
        "jalur_terkait": [
            "3B"
        ]
    },
    {
        "id": 395,
        "nama_halte": "TPB Poltekkes BSI",
        "info_lokasi": "",
        "latitude": -7.81438,
        "longitude": 110.40215,
        "jalur_terkait": [
            "2B",
            "3B"
        ]
    },
    {
        "id": 396,
        "nama_halte": "TPB Ponpes Hamatul Quran",
        "info_lokasi": "",
        "latitude": -7.82883,
        "longitude": 110.33251,
        "jalur_terkait": [
            "6"
        ]
    },
    {
        "id": 397,
        "nama_halte": "TPB Purawisata",
        "info_lokasi": "",
        "latitude": -7.80818,
        "longitude": 110.36908,
        "jalur_terkait": [
            "2B"
        ]
    },
    {
        "id": 398,
        "nama_halte": "TPB RE Martadinata",
        "info_lokasi": "",
        "latitude": -7.80102,
        "longitude": 110.35321,
        "jalur_terkait": [
            "11",
            "9"
        ]
    },
    {
        "id": 399,
        "nama_halte": "TPB RRI Gejayan",
        "info_lokasi": "",
        "latitude": -7.77953,
        "longitude": 110.38827,
        "jalur_terkait": [
            "4B"
        ]
    },
    {
        "id": 400,
        "nama_halte": "TPB RRU Instiper 1",
        "info_lokasi": "",
        "latitude": -7.76424,
        "longitude": 110.42354,
        "jalur_terkait": [
            "3B"
        ]
    },
    {
        "id": 401,
        "nama_halte": "TPB RRU Manggung",
        "info_lokasi": "",
        "latitude": -7.75812,
        "longitude": 110.38638,
        "jalur_terkait": [
            "2A",
            "3A",
            "4B",
            "5A"
        ]
    },
    {
        "id": 402,
        "nama_halte": "TPB RRU PJN",
        "info_lokasi": "",
        "latitude": -7.76939,
        "longitude": 110.43106,
        "jalur_terkait": [
            "14",
            "3A"
        ]
    },
    {
        "id": 403,
        "nama_halte": "TPB RS Bersalin Fajar",
        "info_lokasi": "",
        "latitude": -7.81082,
        "longitude": 110.34963,
        "jalur_terkait": [
            "6"
        ]
    },
    {
        "id": 404,
        "nama_halte": "TPB RS. Bhayangkara",
        "info_lokasi": "",
        "latitude": -7.76671,
        "longitude": 110.47169,
        "jalur_terkait": [
            "1A"
        ]
    },
    {
        "id": 405,
        "nama_halte": "TPB RSU PKU Muhammadiyah Gamping",
        "info_lokasi": "",
        "latitude": -7.80188,
        "longitude": 110.31675,
        "jalur_terkait": [
            "10",
            "6"
        ]
    },
    {
        "id": 406,
        "nama_halte": "TPB S3 PSKY Umbulharjo",
        "info_lokasi": "",
        "latitude": -7.81575,
        "longitude": 110.38635,
        "jalur_terkait": [
            "4B"
        ]
    },
    {
        "id": 407,
        "nama_halte": "TPB Simpang Diklat DIY",
        "info_lokasi": "",
        "latitude": -7.82852,
        "longitude": 110.33162,
        "jalur_terkait": [
            "6"
        ]
    },
    {
        "id": 408,
        "nama_halte": "TPB SMA 5",
        "info_lokasi": "",
        "latitude": -7.82244,
        "longitude": 110.39903,
        "jalur_terkait": [
            "3A"
        ]
    },
    {
        "id": 409,
        "nama_halte": "TPB SMA Muhammadiyah 3",
        "info_lokasi": "",
        "latitude": -7.80671,
        "longitude": 110.35051,
        "jalur_terkait": [
            "10"
        ]
    },
    {
        "id": 410,
        "nama_halte": "TPB SMK Seni 1",
        "info_lokasi": "",
        "latitude": -7.81442,
        "longitude": 110.34905,
        "jalur_terkait": [
            "6"
        ]
    },
    {
        "id": 411,
        "nama_halte": "TPB SMK Seni 2",
        "info_lokasi": "",
        "latitude": -7.81541,
        "longitude": 110.34875,
        "jalur_terkait": [
            "6"
        ]
    },
    {
        "id": 412,
        "nama_halte": "TPB SMK Tajem Ringroad",
        "info_lokasi": "",
        "latitude": -7.76651,
        "longitude": 110.43115,
        "jalur_terkait": [
            "3B"
        ]
    },
    {
        "id": 413,
        "nama_halte": "TPB SMKN 2 Godean",
        "info_lokasi": "",
        "latitude": -7.76169,
        "longitude": 110.29138,
        "jalur_terkait": [
            "13"
        ]
    },
    {
        "id": 414,
        "nama_halte": "TPB SMP 9 Basen",
        "info_lokasi": "",
        "latitude": -7.8197,
        "longitude": 110.39784,
        "jalur_terkait": [
            "2A"
        ]
    },
    {
        "id": 415,
        "nama_halte": "TPB SMP Kanisius Kota",
        "info_lokasi": "",
        "latitude": -7.7956,
        "longitude": 110.37785,
        "jalur_terkait": [
            "10",
            "2B"
        ]
    },
    {
        "id": 416,
        "nama_halte": "TPB SMP N 6 Yogyakarta",
        "info_lokasi": "",
        "latitude": -7.77804,
        "longitude": 110.36689,
        "jalur_terkait": [
            "5B"
        ]
    },
    {
        "id": 417,
        "nama_halte": "TPB SMPN 1 Godean",
        "info_lokasi": "",
        "latitude": -7.76221,
        "longitude": 110.29104,
        "jalur_terkait": [
            "13"
        ]
    },
    {
        "id": 418,
        "nama_halte": "TPB SMPN 1 Yogyakarta",
        "info_lokasi": "",
        "latitude": -7.77755,
        "longitude": 110.37574,
        "jalur_terkait": [
            "11",
            "2A",
            "3B",
            "4A",
            "5B"
        ]
    },
    {
        "id": 419,
        "nama_halte": "TPB Sorogenen (Wirosaban)",
        "info_lokasi": "",
        "latitude": -7.82472,
        "longitude": 110.37918,
        "jalur_terkait": [
            "3A"
        ]
    },
    {
        "id": 420,
        "nama_halte": "TPB SPBU Dukuh 1",
        "info_lokasi": "",
        "latitude": -7.8187,
        "longitude": 110.35566,
        "jalur_terkait": [
            "15"
        ]
    },
    {
        "id": 421,
        "nama_halte": "TPB STSRD Visi Tamansiswa",
        "info_lokasi": "",
        "latitude": -7.81378,
        "longitude": 110.37653,
        "jalur_terkait": [
            "4B"
        ]
    },
    {
        "id": 422,
        "nama_halte": "TPB Suroto 1",
        "info_lokasi": "",
        "latitude": -7.7845,
        "longitude": 110.37464,
        "jalur_terkait": [
            "5B"
        ]
    },
    {
        "id": 423,
        "nama_halte": "TPB Tambak Bayan 1",
        "info_lokasi": "",
        "latitude": -7.77733,
        "longitude": 110.41511,
        "jalur_terkait": [
            "1B",
            "5A"
        ]
    },
    {
        "id": 424,
        "nama_halte": "TPB Tarumartani",
        "info_lokasi": "",
        "latitude": -7.79056,
        "longitude": 110.38198,
        "jalur_terkait": [
            "10"
        ]
    },
    {
        "id": 425,
        "nama_halte": "TPB Tegal Turi 1",
        "info_lokasi": "",
        "latitude": -7.82538,
        "longitude": 110.38706,
        "jalur_terkait": [
            "3A"
        ]
    },
    {
        "id": 426,
        "nama_halte": "TPB Tegal Turi 2",
        "info_lokasi": "",
        "latitude": -7.82542,
        "longitude": 110.3868,
        "jalur_terkait": [
            "3B"
        ]
    },
    {
        "id": 427,
        "nama_halte": "TPB Teknik UGM 1",
        "info_lokasi": "",
        "latitude": -7.76408,
        "longitude": 110.37474,
        "jalur_terkait": [
            "5B"
        ]
    },
    {
        "id": 428,
        "nama_halte": "TPB Teknik UGM 2",
        "info_lokasi": "",
        "latitude": -7.76426,
        "longitude": 110.37458,
        "jalur_terkait": [
            "5A"
        ]
    },
    {
        "id": 429,
        "nama_halte": "TPB TNI AL 1",
        "info_lokasi": "",
        "latitude": -7.79261,
        "longitude": 110.39231,
        "jalur_terkait": [
            "10"
        ]
    },
    {
        "id": 430,
        "nama_halte": "TPB TVRI",
        "info_lokasi": "",
        "latitude": -7.76537,
        "longitude": 110.36152,
        "jalur_terkait": [
            "5B",
            "9",
            "L1"
        ]
    },
    {
        "id": 431,
        "nama_halte": "TPB TVRI (Eksisting)",
        "info_lokasi": "",
        "latitude": -7.76527,
        "longitude": 110.36169,
        "jalur_terkait": [
            "5A",
            "9",
            "L1"
        ]
    },
    {
        "id": 432,
        "nama_halte": "TPB UMY 1",
        "info_lokasi": "",
        "latitude": -7.81073,
        "longitude": 110.32446,
        "jalur_terkait": [
            "6"
        ]
    },
    {
        "id": 433,
        "nama_halte": "TPB UMY 2",
        "info_lokasi": "",
        "latitude": -7.81095,
        "longitude": 110.3246,
        "jalur_terkait": [
            "6"
        ]
    },
    {
        "id": 434,
        "nama_halte": "TPB Universitas Alma Ata",
        "info_lokasi": "",
        "latitude": -7.81844,
        "longitude": 110.32419,
        "jalur_terkait": [
            "6"
        ]
    },
    {
        "id": 435,
        "nama_halte": "TPB UNU Yogyakarta",
        "info_lokasi": "",
        "latitude": -7.81976,
        "longitude": 110.37646,
        "jalur_terkait": [
            "3A"
        ]
    },
    {
        "id": 436,
        "nama_halte": "TPB UTY Glagahsari",
        "info_lokasi": "",
        "latitude": -7.80556,
        "longitude": 110.38843,
        "jalur_terkait": [
            "4A"
        ]
    },
    {
        "id": 437,
        "nama_halte": "TPB Widya Wiwaha 1",
        "info_lokasi": "",
        "latitude": -7.82283,
        "longitude": 110.37767,
        "jalur_terkait": [
            "3A"
        ]
    },
    {
        "id": 438,
        "nama_halte": "TPB Widya Wiwaha 2",
        "info_lokasi": "",
        "latitude": -7.82264,
        "longitude": 110.37753,
        "jalur_terkait": [
            "3B"
        ]
    },
    {
        "id": 439,
        "nama_halte": "TPB Wirobrajan 1",
        "info_lokasi": "",
        "latitude": -7.80177,
        "longitude": 110.35157,
        "jalur_terkait": [
            "10"
        ]
    },
    {
        "id": 440,
        "nama_halte": "TPB Wirogunan Tamsis 1",
        "info_lokasi": "",
        "latitude": -7.80376,
        "longitude": 110.37823,
        "jalur_terkait": [
            "4A"
        ]
    },
    {
        "id": 441,
        "nama_halte": "TPB Wirogunan Tamsis 2",
        "info_lokasi": "",
        "latitude": -7.80424,
        "longitude": 110.37826,
        "jalur_terkait": [
            "4B"
        ]
    },
    {
        "id": 442,
        "nama_halte": "TPB Wolter Monginsidi",
        "info_lokasi": "",
        "latitude": -7.77785,
        "longitude": 110.36679,
        "jalur_terkait": [
            "2B",
            "5A"
        ]
    },
    {
        "id": 443,
        "nama_halte": "Trans Jogja",
        "info_lokasi": "",
        "latitude": -7.76496,
        "longitude": 110.37712,
        "jalur_terkait": [
            "12",
            "3B",
            "4A"
        ]
    },
    {
        "id": 444,
        "nama_halte": "Tugu Batas Desa Yapah",
        "info_lokasi": "",
        "latitude": -7.70413,
        "longitude": 110.44211,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 445,
        "nama_halte": "Tugu Batas Desa Yapah 2",
        "info_lokasi": "",
        "latitude": -7.7037,
        "longitude": 110.44268,
        "jalur_terkait": [
            "14"
        ]
    },
    {
        "id": 446,
        "nama_halte": "UKDW",
        "info_lokasi": "",
        "latitude": -7.786,
        "longitude": 110.37876,
        "jalur_terkait": [
            "2A",
            "4A"
        ]
    },
    {
        "id": 447,
        "nama_halte": "UTY Glagahsari (Barat)",
        "info_lokasi": "",
        "latitude": -7.80538,
        "longitude": 110.38839,
        "jalur_terkait": [
            "4B"
        ]
    }
];
