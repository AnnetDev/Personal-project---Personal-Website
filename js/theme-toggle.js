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
    const contactsSection = document.querySelector('[data-id="contacts"]');

    // Function to apply theme
    const applyTheme = (isLight) => {
        const elements = [pageBody, header, heroSection, skillsSection, projectsSection, footer, contactsSection];
        elements.forEach(element => {
            element.classList.toggle('light-mode', isLight);
        });
        themeToggleBtnSun.classList.toggle('active', isLight);
        themeToggleBtnMoon.classList.toggle('active', !isLight);
    };

    document.addEventListener('DOMContentLoaded', () => {
        // Check if theme preference exists in localStorage
        const isLightMode = localStorage.getItem('theme') === 'light';
        applyTheme(isLightMode);

        themeToggleBtn.addEventListener('click', () => {
            const isCurrentlyLight = pageBody.classList.contains('light-mode');
            const newTheme = isCurrentlyLight ? 'dark' : 'light';
            
            // Save theme preference
            localStorage.setItem('theme', newTheme);
            
            // Apply theme
            applyTheme(!isCurrentlyLight);
        });
    });
}