// togle class active
const navbarNav = document.querySelector(".navbar-nav");

// Fungsi Humburger {
// ketika hamburger menu di klick
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk keluar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// } fungsi humburger

//  keranjang / shoping cart
const Keranjang = document.querySelector("#keranjang");
//  keranjang / shoping cart dalam pesanan
const Keranjang_pesanan = document.querySelector("#keranjang/pesanan");

// contact
// const kontak = document.querySelector("#contact");
