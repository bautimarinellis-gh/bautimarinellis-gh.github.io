document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.slideshow img');
    const caption = document.getElementById('image-caption'); // Elemento del texto dinámico
    let current = 0;

    function showNextImage() {
        images[current].classList.remove('active');
        current = (current + 1) % images.length;
        images[current].classList.add('active');
        updateCaption();
    }

    function updateCaption() {
        caption.textContent = images[current].alt; // Actualiza el texto según el atributo "alt"
    }

    // Inicializar con la primera imagen activa y el texto correspondiente
    images[current].classList.add('active');
    updateCaption();

    // Cambiar imagen cada 3 segundos
    setInterval(showNextImage, 3000);
});
