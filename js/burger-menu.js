export const toggleBurgerMenu = () => {
    const menuButton = document.querySelector('[data-id="burger-menu"]');
    const headerNav = document.querySelector('[data-id="header-nav"]');
    const pageBody = document.querySelector('body');
    const headerMenu = document.querySelector('[data-id="header-menu"]');

    function closeMenu() {
        headerNav.classList.remove('open');
        headerNav.setAttribute('inert', ''); // убираем из таб-навигации
        pageBody.classList.remove('overlay-active');
        pageBody.classList.remove('overlay-no-scroll');
        menuButton.classList.remove('open');
        document.removeEventListener('keydown', trapFocus);
        // убираем фокус со всех элементов внутри меню
        const active = headerNav.querySelector(':focus');
        if (active) active.blur();

        // возвращаем фокус на кнопку
        menuButton.focus();    }

    function toggleMenu() {
        headerNav.classList.toggle('open');
        pageBody.classList.toggle('overlay-active');
        pageBody.classList.toggle('overlay-no-scroll');
        menuButton.classList.toggle('open');

        if (headerNav.classList.contains('open')) {
            headerNav.removeAttribute('inert'); 
            document.addEventListener('keydown', trapFocus);
            menuButton.focus();
        } else {
            headerNav.setAttribute('inert', '');
            document.removeEventListener('keydown', trapFocus);
            // и здесь тоже на всякий случай сбросить фокус
            const active = headerNav.querySelector(':focus');
            if (active) active.blur();
            menuButton.focus();        }
    }

    function trapFocus(event) {
        if (event.key !== 'Tab') return;

        const focusable = headerNav.querySelectorAll(
            'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const focusableArray = Array.from(focusable);
        const firstEl = focusableArray[0];
        const lastEl = focusableArray[focusableArray.length - 1];

        if (event.shiftKey) {
            if (document.activeElement === firstEl) {
                event.preventDefault();
                menuButton.focus();
            }
        } else {
            if (document.activeElement === lastEl) {
                event.preventDefault();
                menuButton.focus();
            }
        }
    }

    document.addEventListener("DOMContentLoaded", (event) => {
        if (window.innerWidth < 768) {
            headerNav.setAttribute('inert', '');
        } else {
            headerNav.removeAttribute('inert');
        }        menuButton.addEventListener('click', () => {
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

    window.addEventListener('resize', () => {
        if (window.innerWidth < 768) {
            headerNav.setAttribute('inert', '');
        } else {
            headerNav.removeAttribute('inert');
        }
    });
    
};