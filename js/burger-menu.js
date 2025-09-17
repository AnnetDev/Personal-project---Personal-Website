export const toggleBurgerMenu = () => {
    const menuButton = document.querySelector('[data-id="burger-menu"]');
    const headerNav = document.querySelector('[data-id="header-nav"]');
    const pageBody = document.querySelector('body');
    const headerMenu = document.querySelector('[data-id="header-menu"]');
    const themeToggleBtnSun = document.querySelector('[data-id="theme-toggle-sun"]');
    const themeToggleBtnMoon = document.querySelector('[data-id="theme-toggle-moon"]');


    let isMobile = window.innerWidth < 768;

    function closeMenu() {
        headerNav.classList.remove('open');
        pageBody.classList.remove('overlay-active', 'overlay-no-scroll');
        menuButton.classList.remove('open');
        document.removeEventListener('keydown', trapFocus);

        if (isMobile) {
            headerNav.setAttribute('inert', '');
        }
    }

    function toggleMenu() {
        if (!isMobile) return;

        headerNav.classList.toggle('open');
        pageBody.classList.toggle('overlay-active');
        pageBody.classList.toggle('overlay-no-scroll');
        menuButton.classList.toggle('open');

        if (headerNav.classList.contains('open')) {
            headerNav.removeAttribute('inert');
            document.addEventListener('keydown', trapFocus);
        } else {
            headerNav.setAttribute('inert', '');
            document.removeEventListener('keydown', trapFocus);
        }
    }

    function trapFocus(event) {
        if (event.key !== 'Tab') return;

        const focusable = headerNav.querySelectorAll(
            'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable.length) return;

        const firstEl = focusable[0];
        const lastEl = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === firstEl) {
            event.preventDefault();
            menuButton.focus();
        } else if (!event.shiftKey && document.activeElement === lastEl) {
            event.preventDefault();
            menuButton.focus();
        }
    }

    function setupMenu() {
        isMobile = window.innerWidth < 768;

        if (isMobile) {
            headerNav.setAttribute('inert', '');
            menuButton.addEventListener('click', toggleMenu);
            headerMenu.addEventListener('click', onMenuClick);
        } else {
            headerNav.classList.remove('open');
            pageBody.classList.remove('overlay-active', 'overlay-no-scroll');
            menuButton.classList.remove('open');
            headerNav.removeAttribute('inert');
            document.removeEventListener('keydown', trapFocus);

            menuButton.removeEventListener('click', toggleMenu);
            headerMenu.removeEventListener('click', onMenuClick);
        }
    }

    function onMenuClick(event) {
        const target = event.target;

        if (target.tagName === 'A') {
            closeMenu();
        }
    
        if (
            target === themeToggleBtnSun ||
            target === themeToggleBtnMoon ||
            target.closest('[data-id="theme-toggle-sun"]') ||
            target.closest('[data-id="theme-toggle-moon"]')
        ) {
            closeMenu();
        }
    }

    document.addEventListener("DOMContentLoaded", setupMenu);

    window.addEventListener('resize', setupMenu);
};
