const header = document.getElementById("site-header");
const nav = document.getElementById("site-nav");
const toggle = document.querySelector(".nav-toggle");

function setNav(open) {
  nav.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
  document.body.classList.toggle("nav-open", open);
}

toggle.addEventListener("click", () => {
  setNav(toggle.getAttribute("aria-expanded") !== "true");
});

nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    setNav(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav.classList.contains("is-open")) {
    setNav(false);
    toggle.focus();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    setNav(false);
  }
});

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
