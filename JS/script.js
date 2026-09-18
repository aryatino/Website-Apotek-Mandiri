// ==========================================
// Apotek Sehat - Script JavaScript
// ==========================================


// ========================================
// 1. SMOOTH SCROLL NAVBAR
// ========================================

// Mengambil semua link yang menuju ke bagian dalam halaman
const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {

    // Mencegah halaman langsung lompat
    event.preventDefault();

    // Mengambil ID tujuan
    const targetId = this.getAttribute("href");

    // Mencari section berdasarkan ID
    const targetSection = document.querySelector(targetId);

    // Kalau section ditemukan, scroll dengan halus
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// ========================================
// 2. ANIMASI CARD SAAT MUNCUL DI LAYAR
// ========================================

// Mengambil semua card layanan dan produk
const cards = document.querySelectorAll(
  ".feature-card, .product-card"
);

// Observer untuk mendeteksi ketika card masuk layar
const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        // Menambahkan class animasi
        entry.target.classList.add(
          "animate__animated",
          "animate__fadeInUp"
        );

        // Supaya animasi tidak dijalankan berulang
        observer.unobserve(entry.target);
      }

    });

  },
  {
    threshold: 0.2
  }
);


// Jalankan observer untuk setiap card
cards.forEach((card) => {
  observer.observe(card);
});


// // ========================================
// // 3. TOMBOL "LIHAT DETAIL" (DITUTUP KARENA PINDAH KE HALAMAN BARU)
// // ========================================

// const productButtons = document.querySelectorAll(".btn-product");
// productButtons.forEach((button) => {
//   button.addEventListener("click", function () { ... });
// });


// ========================================
// 4. TOMBOL "CARI OBAT"
// ========================================

const cariObatButton = document.querySelector(
  '.btn-primary[href="#produk"]'
);

if (cariObatButton) {

  cariObatButton.addEventListener("click", function (event) {

    event.preventDefault();

    // Scroll ke bagian produk
    document.querySelector("#produk").scrollIntoView({
      behavior: "smooth"
    });

  });

}


// ========================================
// 5. EFEK NAVBAR SAAT SCROLL
// ========================================

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

  // Kalau halaman sudah discroll lebih dari 50px
  if (window.scrollY > 50) {

    header.classList.add("scrolled");

  } else {

    header.classList.remove("scrolled");

  }

});


// ========================================
// 6. TAHUN FOOTER OTOMATIS
// ========================================

// Supaya tahun footer selalu mengikuti tahun sekarang
const footerText = document.querySelector("footer p");

if (footerText) {

  const currentYear = new Date().getFullYear();

  footerText.innerHTML =
    `&copy; ${currentYear} Apotek Sehat.
    Sesuai standar Kemenkes & Badan Pengawas Obat.`;

}


// ========================================
// 7. EFEK VIDEO HERO
// ========================================

const heroVideo = document.querySelector(".hero-video");

if (heroVideo) {

  // Memastikan video mulai dari awal
  heroVideo.currentTime = 0;

  // Mencoba menjalankan video
  heroVideo.play().catch(() => {

    // Beberapa browser bisa memblokir autoplay.
    // Tidak masalah, video tetap bisa digunakan.
    console.log("Autoplay video dibatasi oleh browser.");

  });

}


// ========================================
// 8. EFEK KETIKA WEBSITE SELESAI DIMUAT
// ========================================

window.addEventListener("load", function () {

  console.log("Apotek Sehat berhasil dimuat!");

});


// ==========================================================================
// 9. TAMBAHAN BARU: FITUR PENCARIAN & FILTER KATEGORI OBAT
// ==========================================================================

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById('search-input');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  // Jalankan pencarian saat pengguna mengetik
  if (searchInput) {
    searchInput.addEventListener('input', saringProduk);
  }

  // Jalankan filter saat tombol kategori diklik
  filterButtons.forEach(button => {
    button.addEventListener('click', function () {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      saringProduk();
    });
  });

  // Fungsi Pusat untuk Menggabungkan Pencarian Teks & Filter Kategori
  function saringProduk() {
    const kataKunci = searchInput ? searchInput.value.toLowerCase().trim() : "";
    const tombolAktif = document.querySelector('.filter-btn.active');
    const kategoriDipilih = tombolAktif ? tombolAktif.getAttribute('data-category') : "semua";

    productCards.forEach(card => {
      const namaObat = card.getAttribute('data-name') ? card.getAttribute('data-name').toLowerCase() : "";
      const kategoriProduk = card.getAttribute('data-category');

      const cocokKataKunci = namaObat.includes(kataKunci);
      const cocokKategori = (kategoriDipilih === 'semua' || kategoriProduk === kategoriDipilih);

      // Obat muncul hanya jika COCOK dengan ketikan DAN COCOK dengan kategori yang dipilih
      if (cocokKataKunci && cocokKategori) {
        card.style.display = 'flex';
        card.classList.add('animate__animated', 'animate__fadeIn');
      } else {
        card.style.display = 'none';
      }
    });
  }
});
