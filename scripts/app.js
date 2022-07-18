// DOMContent loaded event

function App() {
    // Inicializar el comportamiento de las pestañas 
    loadTabs();
    // Inicializar tema de la página
    initTheme();
    // Aplicar tema almacenado
    applyTheme();
}

document.addEventListener('DOMContentLoaded', App);