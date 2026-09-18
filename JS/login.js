const loginForm = document.getElementById("loginForm");

const usernameInput = document.getElementById("username");

const passwordInput = document.getElementById("password");

const togglePassword = document.getElementById("togglePassword");

// =========================================================
// SHOW / HIDE PASSWORD
// =========================================================

togglePassword.addEventListener("click", function () {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        togglePassword.textContent = "🙈";

    } else {

        passwordInput.type = "password";

        togglePassword.textContent = "👁";

    }

});

// =========================================================
// LOGIN
// =========================================================

loginForm.addEventListener("submit", function (event) {

    // Mencegah halaman refresh
    event.preventDefault();

    const username = usernameInput.value.trim();

    const password = passwordInput.value;

    // Username dan password dummy
    if (username === "admin" && password === "admin123") {

        // Simpan status bahwa user sudah login
        localStorage.setItem("isLoggedIn", "true");

        // Simpan username
        localStorage.setItem("username", username);

        alert("Login berhasil! Selamat datang di Apotek Sehat.");

        // Masuk ke halaman utama
        window.location.href = "index.html";

    } else {

        alert("Username atau password salah.");

    }

});

// =========================================================
// LUPA PASSWORD
// =========================================================

const forgotPassword = document.getElementById("forgotPassword");

forgotPassword.addEventListener("click", function (event) {

    event.preventDefault();

    alert("Fitur lupa password belum tersedia.");

});