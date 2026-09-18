// =====================================================
// LOGOUT SYSTEM
// =====================================================

// Ambil tombol logout
const logoutButton = document.getElementById("logoutButton");


// Pastikan tombol ditemukan
if (logoutButton) {

    // Jalankan ketika tombol diklik
    logoutButton.addEventListener("click", function () {

        // Hapus status login
        localStorage.removeItem("isLoggedIn");

        // Hapus username
        localStorage.removeItem("username");

        // Kembali ke halaman login
        window.location.href = "login_screen.html";

    });

}