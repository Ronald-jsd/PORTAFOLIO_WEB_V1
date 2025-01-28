var themeToggle = document.getElementById('theme-toggle'); // Boton - cambio de tema
var sunIcon = document.getElementById('sun-icon'); // sol
var moonIcon = document.getElementById('moon-icon'); // luna

//verificacion del tema guardado en el almacenamiento local
var currentTheme = localStorage.getItem('theme'); 
if (currentTheme === null) {
    currentTheme = 'dark-mode';
}

document.body.classList.add(currentTheme);
updateIcons(currentTheme);

themeToggle.addEventListener('click', function() {
    if (document.body.classList.contains('light-mode')) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        // Actualizacion de la variable para mostrar el nuevo tema
        currentTheme = 'dark-mode'; 
    } 
    else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        currentTheme = 'light-mode';
    }

    localStorage.setItem('theme', currentTheme);
    updateIcons(currentTheme);
});

function updateIcons(theme) {
    if (theme === 'light-mode') {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    } 
    else {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    }
}
