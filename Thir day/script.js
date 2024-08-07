// Espera a que el DOM se haya cargado completamente antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const openButton = document.getElementById('open');
    const closeButton = document.getElementById('close');
    const nav = document.querySelector('nav');
    openButton.addEventListener('click', () => {
        // Añade la clase 'show-nav' al contenedor, desencadenando la rotación
        container.classList.add('show-nav');
        // Añade un listener para detectar el final de la transición del contenedor
        container.addEventListener('transitionend', function handleTransitionEnd() {
            nav.classList.add('show');
            // Elimina el listener para evitar que se ejecute múltiples veces
            container.removeEventListener('transitionend', handleTransitionEnd);
        });
    });
    //Lo mismo que openButton pero para volver la pagina web a u posicion original
    closeButton.addEventListener('click', () => {
        nav.classList.remove('show');
        nav.addEventListener('transitionend', function handleNavTransitionEnd() {
            container.classList.remove('show-nav');
            nav.removeEventListener('transitionend', handleNavTransitionEnd);
        });
    });
});
