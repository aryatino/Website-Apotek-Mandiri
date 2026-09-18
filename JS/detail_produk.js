// ==========================================
// DATA PRODUK
// ==========================================

// Semua produk kita simpan di dalam object.
// Setiap produk mempunyai ID yang berbeda.

const produk = {

    "vitamin-c": {

        nama: "Vitamin C 1000mg Premium",

        kategori: "Suplemen Harian",

        harga: 20000,

        gambar: "assets/vitamin c.jpeg",

        manfaat:
            "Membantu memenuhi kebutuhan Vitamin C harian dan membantu memelihara daya tahan tubuh.",

        dosis:
            "Gunakan sesuai aturan yang tercantum pada kemasan produk.",

        peringatan:
            "Jangan mengonsumsi melebihi dosis yang dianjurkan. Hentikan penggunaan jika terjadi reaksi yang tidak sesuai dan konsultasikan dengan tenaga kesehatan."

    },


    "paracetamol": {

        nama: "Paracetamol 500mg",

        kategori: "Obat Bebas",

        harga: 5000,

        gambar: "/assets/paracetamol.jpg",

        manfaat:
            "Digunakan untuk membantu meredakan demam dan nyeri ringan hingga sedang.",

        dosis:
            "Gunakan sesuai aturan pada kemasan. Jangan melebihi dosis yang dianjurkan.",

        peringatan:
            "Perhatikan kandungan paracetamol dari obat lain yang sedang digunakan agar tidak terjadi penggunaan berlebihan."

    },


    "masker": {

        nama: "Masker Medis 3-Ply",

        kategori: "Alat Kesehatan",

        harga: 35000,

        gambar: "assets/masker-medis.jpg",

        manfaat:
            "Membantu melindungi saluran pernapasan dari debu dan partikel di lingkungan.",

        dosis:
            "Gunakan masker dengan benar hingga menutupi hidung, mulut, dan dagu.",

        peringatan:
            "Ganti masker jika sudah kotor, rusak, atau lembap."

    },


    "vitamin-d3": {

        nama: "Vitamin D3 1000 IU",

        kategori: "Vitamin",

        harga: 25000,

        gambar: "assets/vitamin-d3-1000-iu.avif",

        manfaat:
            "Membantu memenuhi kebutuhan Vitamin D tubuh.",

        dosis:
            "Gunakan sesuai petunjuk penggunaan pada kemasan.",

        peringatan:
            "Jangan mengonsumsi melebihi dosis yang dianjurkan."

    },


    "antasida": {

        nama: "Antasida Doen",

        kategori: "Obat Bebas",

        harga: 8000,

        gambar: "assets/antasida-doen.jpg",

        manfaat:
            "Membantu meredakan gejala yang berhubungan dengan kelebihan asam lambung.",

        dosis:
            "Gunakan sesuai aturan penggunaan yang tercantum pada kemasan.",

        peringatan:
            "Jika keluhan terus berlanjut atau memburuk, konsultasikan dengan tenaga kesehatan."

    },


    "ibuprofen": {

        nama: "Ibuprofen 200mg",

        kategori: "Obat Bebas",

        harga: 12000,

        gambar: "assets/ibuprofen.jpg",

        manfaat:
            "Digunakan untuk membantu meredakan nyeri dan peradangan.",

        dosis:
            "Gunakan sesuai aturan yang tercantum pada kemasan.",

        peringatan:
            "Perhatikan petunjuk penggunaan dan konsultasikan dengan tenaga kesehatan jika memiliki kondisi khusus."

    },


    "vitamin-b": {

        nama: "Vitamin B Complex",

        kategori: "Vitamin",

        harga: 18000,

        gambar: "assets/vitamin-b-complex.avif",

        manfaat:
            "Membantu memenuhi kebutuhan beberapa jenis vitamin B dalam tubuh.",

        dosis:
            "Gunakan sesuai petunjuk penggunaan pada kemasan.",

        peringatan:
            "Jangan mengonsumsi melebihi dosis yang dianjurkan."

    },


    "hand-sanitizer": {

        nama: "Hand Sanitizer 100ml",

        kategori: "Kebersihan",

        harga: 10000,

        gambar: "assets/handsanitizer.jpg",

        manfaat:
            "Membantu membersihkan tangan ketika air dan sabun tidak tersedia.",

        dosis:
            "Gunakan secukupnya pada permukaan tangan dan gosok hingga kering.",

        peringatan:
            "Hanya untuk penggunaan luar. Hindari kontak dengan mata."

    }

    "plester-kertas": {

        nama: "Onemed Isopore Plester Kertas Medical",

        kategori: "Kebersihan",

        harga: 12000,

        gambar: "assets/plester-kertas.jpg",

        manfaat:
            "Membantu membersihkan tangan ketika air dan sabun tidak tersedia.",

        dosis:
            "Gunakan secukupnya pada permukaan tangan dan gosok hingga kering.",

        peringatan:
            "Hanya untuk penggunaan luar. Hindari kontak dengan mata."

    }

};


// ==========================================
// MENGAMBIL ID PRODUK DARI URL
// ==========================================

// Contoh:
//
// detail_produk.html?id=paracetamol
//
// Yang diambil JavaScript adalah:
// paracetamol

const urlParams = new URLSearchParams(
    window.location.search
);


const idProduk = urlParams.get("id");


// ==========================================
// MENCARI PRODUK
// ==========================================

const dataProduk = produk[idProduk];


// ==========================================
// MENGAMBIL ELEMENT HTML
// ==========================================

const gambarProduk =
    document.getElementById("gambar-produk");

const namaProduk =
    document.getElementById("nama-produk");

const kategoriProduk =
    document.getElementById("kategori-produk");

const hargaProduk =
    document.getElementById("harga-produk");

const manfaatProduk =
    document.getElementById("manfaat-produk");

const dosisProduk =
    document.getElementById("dosis-produk");

const peringatanProduk =
    document.getElementById("peringatan-produk");


// ==========================================
// MENAMPILKAN PRODUK
// ==========================================

if (dataProduk) {

    // Menampilkan gambar
    gambarProduk.src =
        dataProduk.gambar;


    // Menampilkan nama
    namaProduk.textContent =
        dataProduk.nama;


    // Menampilkan kategori
    kategoriProduk.textContent =
        dataProduk.kategori;


    // Menampilkan harga
    hargaProduk.textContent =
        formatHarga(dataProduk.harga);


    // Menampilkan manfaat
    manfaatProduk.textContent =
        dataProduk.manfaat;


    // Menampilkan dosis
    dosisProduk.textContent =
        dataProduk.dosis;


    // Menampilkan peringatan
    peringatanProduk.textContent =
        dataProduk.peringatan;


    // Mengubah judul browser
    document.title =
        dataProduk.nama + " - Apotek Sehat";

} else {

    // ======================================
    // KALAU PRODUK TIDAK DITEMUKAN
    // ======================================

    namaProduk.textContent =
        "Produk Tidak Ditemukan";


    kategoriProduk.textContent =
        "Tidak tersedia";


    hargaProduk.textContent =
        "-";


    manfaatProduk.textContent =
        "Produk yang Anda cari tidak tersedia.";


    dosisProduk.textContent =
        "-";


    peringatanProduk.textContent =
        "Silakan kembali ke halaman utama.";

}


// ==========================================
// FORMAT HARGA
// ==========================================

function formatHarga(harga) {

    return new Intl.NumberFormat(
        "id-ID",
        {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0
        }
    ).format(harga);

}


// ==========================================
// JUMLAH PRODUK
// ==========================================

let jumlah =
    1;


// ==========================================
// FUNGSI UBAH JUMLAH
// ==========================================

function ubahJumlah(perubahan) {

    jumlah += perubahan;


    // Minimal jumlah = 1
    if (jumlah < 1) {

        jumlah = 1;

    }


    // Maksimal jumlah = 99
    if (jumlah > 99) {

        jumlah = 99;

    }


    // Menampilkan jumlah terbaru
    document.getElementById(
        "jumlah-beli"
    ).value = jumlah;

}


// ==========================================
// TAMBAH KE KERANJANG
// ==========================================

function tambahKeranjang() {

    if (!dataProduk) {

        alert(
            "Produk tidak ditemukan."
        );

        return;

    }


    const totalHarga =
        dataProduk.harga * jumlah;


    alert(
        dataProduk.nama +
        " sebanyak " +
        jumlah +
        " berhasil ditambahkan ke keranjang!\n\n" +
        "Total: " +
        formatHarga(totalHarga)
    );

}


// ==========================================
// KIRIM ULASAN
// ==========================================

function kirimUlasan() {

    const input =
        document.getElementById(
            "input-ulasan"
        );


    const isiUlasan =
        input.value.trim();


    // Cek apakah kosong
    if (isiUlasan === "") {

        alert(
            "Silakan tulis ulasan terlebih dahulu."
        );

        return;

    }


    alert(
        "Ulasan berhasil dikirim!"
    );


    // Kosongkan textarea
    input.value = "";

}