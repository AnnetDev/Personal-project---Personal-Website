export const toggleBurgerMenu = () => {
    const menuButton = document.querySelector('[data-id="burger-menu"]');
    const headerNav = document.querySelector('[data-id="header-nav"]');
    const pageBody = document.querySelector('body');

    document.addEventListener("DOMContentLoaded", () => {
        menuButton.addEventListener('click', () => {
            headerNav.classList.toggle('open');
            pageBody.classList.toggle('overlay-active');
            pageBody.classList.toggle('overlay-no-scroll');
            menuButton.classList.toggle('open');
        });
    });
};