export const themeToggle = () => {
    const pageBody = document.querySelector('body');
    const themeToggleBtn = document.querySelector('[data-id="theme-toggle"]');
    const themeToggleBtnSun = document.querySelector('[data-id="theme-toggle-sun"]');
    const themeToggleBtnMoon = document.querySelector('[data-id="theme-toggle-moon"]');
    const header = document.querySelector('[data-id="header"]');
    const footer = document.querySelector('[data-id="footer"]');
    const heroSection = document.querySelector('[data-id="hero"]');
    const skillsSection = document.querySelector('[data-id="skills"]');
    const projectsSection = document.querySelector('[data-id="projects"]');

    document.addEventListener('DOMContentLoaded', () => {

        themeToggleBtn.addEventListener('click', () =>{
            pageBody.classList.toggle('light-mode');
            themeToggleBtnSun.classList.toggle('active');
            themeToggleBtnMoon.classList.toggle('active');
            header.classList.toggle('light-mode');
            heroSection.classList.toggle('light-mode');
            skillsSection.classList.toggle('light-mode');
            projectsSection.classList.toggle('light-mode');
            footer.classList.toggle('light-mode');

        });
    });
}