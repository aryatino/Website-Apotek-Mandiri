// ========================================
// APOTEK SEHAT - JAVASCRIPT
// ========================================


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
// // 3. TOMBOL "LIHAT DETAIL"
// // ========================================

// const productButtons = document.querySelectorAll(".btn-product");

// productButtons.forEach((button) => {

//   button.addEventListener("click", function () {

//     // Mengambil nama produk dari card
//     const productCard = this.closest(".product-card");

//     const productName =
//       productCard.querySelector("h3").textContent;

//     const productPrice =
//       productCard.querySelector(".price").textContent;

//     const category =
//       productCard.querySelector(".category").textContent;


//     // Menampilkan informasi produk
//     alert(
//       "DETAIL PRODUK\n\n" +
//       "Produk: " + productName + "\n" +
//       "Kategori: " + category + "\n" +
//       "Harga: " + productPrice + "\n\n" +
//       "Silakan hubungi apoteker untuk informasi lebih lanjut."
//     );

//   });

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