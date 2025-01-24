// Función de desplazamiento suave al hacer clic en la flecha
document.querySelector('.scroll-down').addEventListener('click', function (e) {
    e.preventDefault();  // Evita el comportamiento predeterminado

    // Desplazarse a la sección "About Me" de forma suave
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
});