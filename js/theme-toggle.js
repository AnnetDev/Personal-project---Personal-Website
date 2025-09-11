export const themeToggle = () => {
    const pageBody = document.querySelector('body');
    const themeToggleBtn = document.querySelector('[data-id="theme-toggle"]');
    const themeToggleBtnSun = document.querySelector('[data-id="theme-toggle-sun"]');
    const themeToggleBtnMoon = document.querySelector('[data-id="theme-toggle-moon"]');
    const header = document.querySelector('[data-id="header"]');

    document.addEventListener('DOMContentLoaded', () => {

        themeToggleBtn.addEventListener('click', () =>{
            pageBody.classList.toggle('light-mode');
            themeToggleBtnSun.classList.toggle('active');
            themeToggleBtnMoon.classList.toggle('active');
            header.classList.toggle('light-mode');
        });
    });
}