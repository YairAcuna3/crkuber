export function initMobileMenu() {
  const btnsMenu = document.querySelectorAll(".btnMenu");
  const divMenu = document.getElementById("divMenu");
  const sidebar = divMenu?.querySelector("div");

  const openMenu = () => {
    divMenu?.classList.remove("invisible");
    setTimeout(() => divMenu?.classList.add("opacity-100"), 20);
  };

  const closeMenu = () => {
    divMenu?.classList.remove("opacity-100");
    setTimeout(() => divMenu?.classList.add("invisible"), 300);
  };

  btnsMenu.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (divMenu?.classList.contains("invisible")) {
        openMenu();
      } else {
        closeMenu();
      }
    });
  });

  divMenu?.addEventListener("click", (e) => {
    if (sidebar && e.target instanceof Node && !sidebar.contains(e.target)) {
      closeMenu();
    }
  });
}
