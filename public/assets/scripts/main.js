/**
 * Airea - interacciones del Landing Page.
 * Menú de navegación adaptable a dispositivos móviles.
 */
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const navActions = document.querySelector(".nav-actions");

    if (!menuButton || !navLinks || !navActions) {
        return;
    }

    const closeMenu = () => {
        navLinks.classList.remove("is-open");
        navActions.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir menú");
    };

    menuButton.addEventListener("click", () => {
        const isExpanded = menuButton.getAttribute("aria-expanded") === "true";

        navLinks.classList.toggle("is-open", !isExpanded);
        navActions.classList.toggle("is-open", !isExpanded);
        menuButton.setAttribute("aria-expanded", String(!isExpanded));
        menuButton.setAttribute(
            "aria-label",
            isExpanded ? "Abrir menú" : "Cerrar menú"
        );
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 900) {
            closeMenu();
        }
    });
});
