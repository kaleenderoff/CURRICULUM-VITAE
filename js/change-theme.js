const themeToggle = document.getElementById('theme-toggle');
let darkMode = false;

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme', darkMode);
    darkMode = !darkMode;

    // Cambiar el ícono dependiendo del estado del tema
    if (darkMode) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Ícono de sol para tema claro
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Ícono de luna para tema oscuro
    }
});

