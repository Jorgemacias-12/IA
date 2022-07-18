// const wrapper = document.getElementById("wrapper"),
//     testElement = document.getElementById("colorElement"),
//     checkbox = document.getElementById("checkbox");
// let isDarkModeEnabled = !1;
// const tab1_content = `<label for="color-picker" class="label">Color: </label>     
//                       <input id="color-picker" class="input jscolor" data-jscolor=""> 
//                       `;
// const tab2_content =
//     `<div class="about">
//             <h1 class="about-title">        ¡Hola! bienvenido a la pagina.    </h1>
//                 <p class="about-p">        
//                     Esta página nace de mi primera interacción con la inteligencia artificial usando javacsript del lado del ciente.    </p>    <p class="about-p">        El problema que trato de solucionar es la opacidad del texto de un contenedor con un color de fondo dado        por el usuario. A lo cual la red neuronal debe de poder reconocer el color de fondo y cambiar el color de texto        entre blanco y negro.    
//                 </p>
//                 <p class="about-p"> 
//                        He utilizado las siguientes liberias para hacer posible el sitio web:    
//                 </p>    
//                 <ul class="about-list">
//                     <li class="about-li"><a href="https://brain.js.org/#/" target="_blank" class="about-a">Libreria Brain JS</a></li>
//                     <li class="about-li"><a href="https://jscolor.com/" target="_blank" class="about-a">Libreria JSColor</a></li>
//                 </ul>        
//                 <p class="about-p">        
//                     Además de tomar la idea del siguiente creador de contenido: <a class="link" href="https://www.youtube.com/watch?v=UNFFLJPW7KQ" target="_blank">video</a>
//                 </p>
//         </div>`;
// function enableDarkMode(e) {
//     isDarkModeEnabled = e;
//     let t = document.getElementsByTagName("div"),
//         a = document.getElementsByClassName("button"),
//         n = document.getElementById("theme-indicator");
//     e && (n.classList.add("fa-sun"), n.classList.remove("fa-moon")), e || (n.classList.add("fa-moon"), n.classList.remove("fa-sun"));
//     for (let a = 0; a < t.length; a++)
//         e && t[a].classList.contains("theme") && t[a].classList.add("dark-bg"),
//             !e && t[a].classList.contains("theme") && t[a].classList.remove("dark-bg"),
//             e && t[a].classList.contains("theme-inner") && t[a].classList.add("dark-min-bg"),
//             !e && t[a].classList.contains("theme-inner") && t[a].classList.remove("dark-min-bg");
//     for (counter = 0; counter < a.length; counter++)
//         e && (a[counter].classList.add("dark-min-bg"), a[counter].classList.add("button-dark"), a[counter].classList.contains("active") && (a[counter].classList.remove("active"), a[counter].classList.add("button-dark-active"))),
//             e ||
//             (a[counter].classList.remove("dark-min-bg"),
//                 a[counter].classList.remove("button-dark"),
//                 a[counter].classList.contains("button-dark-active") && (a[counter].classList.remove("button-dark-active"), a[counter].classList.add("active")));
// }
// const installColorPicker = () => {
//     jscolor.install(),
//         document.getElementById("color-picker").addEventListener("input", (e) => {
//             ColorInput(e.target);
//         });
// };
// function inserHTMLContent(e, t) {
//     e.innerHTML = t;
// }
// function changeTab(e) {
//     let t = e.target,
//         a = document.getElementsByClassName("button");
//     for (let e = 0; e < a.length; e++)
//         (a[e].classList = "button"),
//             isDarkModeEnabled && (a[e].classList.remove("button-dark-active"), a[e].classList.add("button-dark"), a[e].classList.add("dark-min-bg"), t.classList.add("button-dark-active")),
//             isDarkModeEnabled || (a[e].classList.remove("dark-min-bg"), a[e].classList.remove("active"), t.classList.add("active"));
//     "tab-1" === t.id && (inserHTMLContent(wrapper, tab1_content), installColorPicker(), wrapper.classList.remove("wrapper-400")), "tab-2" === t.id && (wrapper.classList.add("wrapper-400"), inserHTMLContent(wrapper, tab2_content));
// }
// function convertToRGBArray(e) {
//     return e.replace("rgb(", "").replace(")", "").split(",");
// }
// function hexToRgb(e) {
//     var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
//     return t ? `rgb(${parseInt(t[1], 16)}, ${parseInt(t[2], 16)}, ${parseInt(t[3], 16)})` : "";
// }
// function ColorInput(e) {
//     let t = convertToRGBArray(hexToRgb(e.value));
//     (suggestedFGColor = update(t)), (testElement.style.backgroundColor = e.value), suggestedFGColor > 0.5 ? (testElement.style.color = "white") : (testElement.style.color = "black");
// }

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