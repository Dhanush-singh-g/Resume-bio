// --- 1. Set Current Year in Footer ---
document.getElementById('current-year').textContent = new Date().getFullYear();


// --- 2. Active Navigation Link Highlighter ---
document.addEventListener('DOMContentLoaded', () => {
    // Get the full path of the current page (e.g., /my-repo/index.html)
    const currentPath = window.location.pathname; 
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        // Extract the filename from the link's href (e.g., 'index.html')
        const linkFile = link.getAttribute('href'); 

        // Check if the current path ENDS with the link's file name. 
        // This handles cases where the path might start with the repo name on GitHub Pages.
        if (currentPath.endsWith(linkFile)) {
            link.classList.add('active');
        }
    });
});