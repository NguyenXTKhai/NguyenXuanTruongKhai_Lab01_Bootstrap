const menuButton = document.querySelector(".studio-toggler");
const menu = menuButton ? document.querySelector(menuButton.dataset.menuTarget) : null;
const menuLinks = document.querySelectorAll("#mainNav .nav-link");

function closeMenu() {
  if (!menuButton || !menu) return;
  menu.classList.remove("show");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open menu");
}

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("show");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}
