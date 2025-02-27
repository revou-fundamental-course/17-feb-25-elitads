// Ini Javascript External

document.getElementById("membershipForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah reload halaman

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();
    let message = document.getElementById("message");

    // Validasi jika input kosong
    if (!name || !email || !password || !confirmPassword) {
        message.textContent = "All fields must be filled in";
        return;
    }

    // Validasi format email
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        message.textContent = "Email is not valid";
        return;
    }

    // Validasi panjang password
    if (password.length < 6) {
        message.textContent = "Password must contain at least 6 characters";
        return;
    }

    // Validasi password dan konfirmasi password harus sama
    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match";
        return;
    }

    // Jika semua validasi lolos, tampilkan pop-up
    alert("🎉 Registration Successful!");
    message.textContent = ""; // Bersihkan pesan kesalahan jika berhasil
});

// For Index Identifier
let indexBanner = 0;

showBanner ();

function nextBanner () {
    // Increment indexBanner
    indexBanner += 1;
    showBanner();
}

function showBanner() {
    let banner = document.getElementsByClassName('main-banner');
    
    // Reset Condition
    if (indexBanner > banner.length - 1) {
        indexBanner = 0;
    }

    // Loop untuk hide semua
    for (let i = 0; i < banner.length; i++) {
        banner[i].style.display = 'none';
    }

    // Show Banner
    banner[indexBanner].style.display = 'block';
}

// Auto Play
setInterval(nextBanner, 3000);