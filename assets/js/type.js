// Esperar que la animación termine y luego aplicar la clase 'finished'
document.getElementById("typewriter").addEventListener("animationend", function () {
    this.classList.add("finished");
});
