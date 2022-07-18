const $ = (id) => {
    return document.getElementById(id);
}

function convertToRGBArray(e) {
    return e.replace("rgb(", "").replace(")", "").split(",");
}

function hexToRgb(e) {
    var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    return t ? `rgb(${parseInt(t[1], 16)}, ${parseInt(t[2], 16)}, ${parseInt(t[3], 16)})` : "";
}

function updateColor() {
    
    let font_color;
    let background_color;

    let previewElementRef = $('previewColor');
    
    let color = $('color-picker').value;

    background_color = color;

    color = hexToRgb(color);

    color = convertToRGBArray(color);
    
    font_color = update(color);

    font_color = font_color > 0.5 ? "white" : "black";

    previewElementRef.style.backgroundColor = background_color;
    previewElementRef.style.color = font_color;

}

async function loadContent(contentID) {

    let contentURL = {
        'tab-1': `${window.location.href}/templates/color.html`,
        'tab-2': `${window.location.href}/templates/about.html`,
    }

    let templateContent;

    // * HTML Reference to previewColor
    let color_preview = $('previewColor');

    switch (contentID) {

        case 'tab-1':

            templateContent = await fetch(contentURL[contentID]);
            templateContent = await templateContent.text();

            // Aparecer el elemento para previsualizar el fondo de color 
            // y su color de letra
            color_preview.classList = "preview appear";

            break;

        case 'tab-2':

            templateContent = await fetch(contentURL[contentID]);
            templateContent = await templateContent.text();

            // Desaparecer el elemento donde se puede previsualizar el color 
            color_preview.classList = "preview disappear";

            break;

    }

    $('wrapper').innerHTML = templateContent;

    jscolor.install(); // Solo para tab-1


}

function changeTab(event, buttons) {

    buttons.forEach(buttons => buttons.classList = "button");

    let currentTab = event.currentTarget;

    currentTab.classList = "button active";

    loadContent(currentTab.id);

}

function loadTabs() {

    // Obtener los pestañas del html

    let buttonTabs = document.querySelectorAll('.button');

    // Iterar por cada boton y añadir el evento que maneja la acción
    buttonTabs.forEach(button => button.addEventListener('click', (buttonEvent) => {

        changeTab(buttonEvent, buttonTabs);

    }));

}

function initTheme() {

    let checkbox = $('theme-indicator');

    let isThemeChanged;

    let icon;

    let theme = "light";

    checkbox.addEventListener('change', () => {

        isThemeChanged = false;

        isThemeChanged = checkbox.checked;

        icon = isThemeChanged ? "checkbox fas fa-sun" : "checkbox fas fa-moon";

        checkbox.classList = icon;

        theme = isThemeChanged ? "dark" : "light";

        document.body.classList = theme;
        
        localStorage.setItem('theme', theme);
        localStorage.setItem('state', isThemeChanged);

    });

}

function applyTheme() {

    if (localStorage.length == 0) return;

    let isThemeChanged;
    let theme;
    let icon;
    
    let checkboxRef;

    checkboxRef = $('theme-indicator');

    isThemeChanged = localStorage.getItem('state');
    theme = localStorage.getItem('theme');
    
    icon = isThemeChanged ? "checkbox fas fa-sun" : "checkbox fas fa-moon";

    checkboxRef.classList = icon;

    document.body.classList = theme;

}

// Exportaciones

window.loadTabs = loadTabs;
window.initTheme = initTheme;
window.updateColor = updateColor;
window.applyTheme = applyTheme;