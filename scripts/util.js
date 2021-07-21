const wrapper = document.getElementById("wrapper"),
    testElement = document.getElementById("colorElement"),
    checkbox = document.getElementById("checkbox");
let isDarkModeEnabled = !1;
const tab1_content = `<label for="color-picker" class="label">Color: </label>     
                      <input id="color-picker" class="input jscolor" data-jscolor=""> 
                      `;
const tab2_content =
    `<div class="about">
            <h1 class="about-title">        ¡Hola! bienvenido a la pagina.    </h1>
                <p class="about-p">        
                    Esta página nace de mi primera interacción con la inteligencia artificial usando javacsript del lado del ciente.    </p>    <p class="about-p">        El problema que trato de solucionar es la opacidad del texto de un contenedor con un color de fondo dado        por el usuario. A lo cual la red neuronal debe de poder reconocer el color de fondo y cambiar el color de texto        entre blanco y negro.    
                </p>
                <p class="about-p"> 
                       He utilizado las siguientes liberias para hacer posible el sitio web:    
                </p>    
                <ul class="about-list">
                    <li class="about-li"><a href="https://brain.js.org/#/" target="_blank" class="about-a">Libreria Brain JS</a></li>
                    <li class="about-li"><a href="https://jscolor.com/" target="_blank" class="about-a">Libreria JSColor</a></li>
                </ul>        
                <p class="about-p">        
                    Además de tomar la idea del siguiente creador de contenido: <a class="link" href="https://www.youtube.com/watch?v=UNFFLJPW7KQ" target="_blank">video</a>
                </p>
        </div>`;
function enableDarkMode(e) {
    isDarkModeEnabled = e;
    let t = document.getElementsByTagName("div"),
        a = document.getElementsByClassName("button"),
        n = document.getElementById("theme-indicator");
    e && (n.classList.add("fa-sun"), n.classList.remove("fa-moon")), e || (n.classList.add("fa-moon"), n.classList.remove("fa-sun"));
    for (let a = 0; a < t.length; a++)
        e && t[a].classList.contains("theme") && t[a].classList.add("dark-bg"),
            !e && t[a].classList.contains("theme") && t[a].classList.remove("dark-bg"),
            e && t[a].classList.contains("theme-inner") && t[a].classList.add("dark-min-bg"),
            !e && t[a].classList.contains("theme-inner") && t[a].classList.remove("dark-min-bg");
    for (counter = 0; counter < a.length; counter++)
        e && (a[counter].classList.add("dark-min-bg"), a[counter].classList.add("button-dark"), a[counter].classList.contains("active") && (a[counter].classList.remove("active"), a[counter].classList.add("button-dark-active"))),
            e ||
            (a[counter].classList.remove("dark-min-bg"),
                a[counter].classList.remove("button-dark"),
                a[counter].classList.contains("button-dark-active") && (a[counter].classList.remove("button-dark-active"), a[counter].classList.add("active")));
}
const installColorPicker = () => {
    jscolor.install(),
        document.getElementById("color-picker").addEventListener("input", (e) => {
            ColorInput(e.target);
        });
};
function inserHTMLContent(e, t) {
    e.innerHTML = t;
}
function changeTab(e) {
    let t = e.target,
        a = document.getElementsByClassName("button");
    for (let e = 0; e < a.length; e++)
        (a[e].classList = "button"),
            isDarkModeEnabled && (a[e].classList.remove("button-dark-active"), a[e].classList.add("button-dark"), a[e].classList.add("dark-min-bg"), t.classList.add("button-dark-active")),
            isDarkModeEnabled || (a[e].classList.remove("dark-min-bg"), a[e].classList.remove("active"), t.classList.add("active"));
    "tab-1" === t.id && (inserHTMLContent(wrapper, tab1_content), installColorPicker(), wrapper.classList.remove("wrapper-400")), "tab-2" === t.id && (wrapper.classList.add("wrapper-400"), inserHTMLContent(wrapper, tab2_content));
}
function convertToRGBArray(e) {
    return e.replace("rgb(", "").replace(")", "").split(",");
}
function hexToRgb(e) {
    var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    return t ? `rgb(${parseInt(t[1], 16)}, ${parseInt(t[2], 16)}, ${parseInt(t[3], 16)})` : "";
}
function ColorInput(e) {
    let t = convertToRGBArray(hexToRgb(e.value));
    (suggestedFGColor = update(t)), (testElement.style.backgroundColor = e.value), suggestedFGColor > 0.5 ? (testElement.style.color = "white") : (testElement.style.color = "black");
}
