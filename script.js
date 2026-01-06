// ============================================
// 1. FITUR HAMBURGER MENU (RESPONSIF HP)
// ============================================
// Mengambil elemen tombol burger dan menu navigasi
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

// Saat tombol burger diklik
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        // Tambahkan/Hapus class 'active' pada menu
        // Ini yang membuat menu muncul/hilang di HP
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// ============================================
// 2. FITUR STICKY NAVBAR (SAAT SCROLL)
// ============================================
// Saat layar discroll ke bawah, navbar akan berubah warna/bayangan
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    // Jika scroll lebih dari 0, tambah class 'sticky'
    header.classList.toggle('sticky', window.scrollY > 0);
});

// ============================================
// 3. MENUTUP MENU SAAT LINK DIKLIK
// ============================================
// Supaya saat user klik salah satu menu, navigasi otomatis tertutup
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navMenu.classList.remove('active');
}));