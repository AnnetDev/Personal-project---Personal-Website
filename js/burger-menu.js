export const toggleBurgerMenu = () => {
    const menuButton = document.querySelector('[data-id="burger-menu"]');
    const headerNav = document.querySelector('[data-id="header-nav"]');
    const pageBody = document.querySelector('body');
    const headerMenu = document.querySelector('[data-id="header-menu"]');

    function closeMenu () {
        headerNav.classList.remove('open');
        pageBody.classList.remove('overlay-active');
        pageBody.classList.remove('overlay-no-scroll');
        menuButton.classList.remove('open');
    }
    
    function toggleMenu () {
        headerNav.classList.toggle('open');
            pageBody.classList.toggle('overlay-active');
            pageBody.classList.toggle('overlay-no-scroll');
            menuButton.classList.toggle('open');
    }

    document.addEventListener("DOMContentLoaded", (event) => {
        menuButton.addEventListener('click', () => {
            event.stopPropagation();
            toggleMenu();
        });

        headerMenu.addEventListener('click', (event) => {
            event.stopPropagation();
            if (event.target.tagName === 'A') {
                closeMenu();
            }
        });
    });
};