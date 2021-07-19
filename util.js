const wrapper = document.getElementById('wrapper');
const testElement = document.getElementById('colorElement');
const checkbox = document.getElementById('checkbox');

let isDarkModeEnabled = false;

let JSColorinstance;

const tab1_content =
    `<label for="color-picker" class="label">Color: </label>
     <input id="color-picker" class="input jscolor" data-jscolor="">
    `;
const tab2_content =
    `<div class="about">
    <h1 class="about-title">
        ¡Hola! bienvenido a la pagina.
    </h1>

    <p class="about-p">
        Esta página nace de mi primera interacción con la inteligencia artificial usando javacsript del lado del ciente.
    </p>

    <p class="about-p">
        El problema que trato de solucionar es la opacidad del texto de un contenedor con un color de fondo dado
        por el usuario. A lo cual la red neuronal debe de poder reconocer el color de fondo y cambiar el color de texto
        entre blanco y negro.
    </p>

    <p class="about-p">
        He utilizado las siguientes liberias para hacer posible el sitio web:
    </p>

    <ul class="about-list">
        <li class="about-li"><a href="https://brain.js.org/#/" class="about-a">Libreria Brain JS</a></li>
        <li class="about-li"><a href="https://jscolor.com/" class="about-a">Libreria JSColor</a></li>
    </ul>
    
    <p class="about-p">
        Además de tomar la idea del siguiente creador de contenido: <a class="link" href="https://www.youtube.com/watch?v=UNFFLJPW7KQ" target="_blank">video</a>
    </p>

</div>`;

function enableDarkMode(enabled) {
    isDarkModeEnabled = enabled;
    console.log(`value recivied => ${enabled}`)
    console.log(`value sended => ${isDarkModeEnabled}`)
    let containers = document.getElementsByTagName('div');
    let buttons = document.getElementsByClassName('button');
    let icon = document.getElementById('theme-indicator');
    // Icon change due to the theme indicator
    if (enabled) { icon.classList.add('fa-sun'); icon.classList.remove('fa-moon'); }
    if (!enabled) { icon.classList.add('fa-moon'); icon.classList.remove('fa-sun'); }
    // Loop wich iterates through all divs in the page
    for (let counter = 0; counter < containers.length; counter++) {
        if (enabled && containers[counter].classList.contains('theme')) {
            containers[counter].classList.add('dark-bg');
        }
        if (!enabled && containers[counter].classList.contains('theme')) {
            containers[counter].classList.remove('dark-bg');
        }
        if (enabled && containers[counter].classList.contains('theme-inner')) {
            containers[counter].classList.add('dark-min-bg');
        }
        if (!enabled && containers[counter].classList.contains('theme-inner')) {
            containers[counter].classList.remove('dark-min-bg');
        }
    }
    for (counter = 0; counter < buttons.length; counter++) {
        if (enabled) {
            buttons[counter].classList.add('dark-min-bg');
            buttons[counter].classList.add('button-dark');
            if (buttons[counter].classList.contains('active')) {
                buttons[counter].classList.remove('active');
                buttons[counter].classList.add('button-dark-active');
            }
        }
        if (!enabled) {
            buttons[counter].classList.remove('dark-min-bg');
            buttons[counter].classList.remove('button-dark');
            if (buttons[counter].classList.contains('button-dark-active')) {
                buttons[counter].classList.remove('button-dark-active');
                buttons[counter].classList.add('active');
            }

        }
    }
}

const installColorPicker = () => {
    jscolor.install();
    document.getElementById('color-picker').addEventListener('input', (e) => {
        ColorInput(e.target);
    });
}

function inserHTMLContent(parent, content) {
    parent.innerHTML = content;
}

function changeTab(event) {
    // Get the current pressed tab
    let tabTarget = event.target;
    // Get all buttons available that contains the class button
    let buttons = document.getElementsByClassName('button');

    for (let counter = 0; counter < buttons.length; counter++) {

        //Reset all classes currently added

        buttons[counter].classList = 'button';

        if (isDarkModeEnabled) {
            buttons[counter].classList.remove('button-dark-active');
            buttons[counter].classList.add('dark-min-bg');
            tabTarget.classList.add('button-dark-active');
        }

        if (!isDarkModeEnabled) {
            buttons[counter].classList.remove('dark-min-bg');
            buttons[counter].classList.remove('active');
            tabTarget.classList.add('active');
        }

    }

    if (tabTarget.id === 'tab-1') {
        // Call to function to insert HTML content
        inserHTMLContent(wrapper, tab1_content);
        installColorPicker();
        wrapper.classList.remove('wrapper-400');
    }

    if (tabTarget.id === 'tab-2') {
        // Call to function to insert HTML content
        wrapper.classList.add('wrapper-400');
        inserHTMLContent(wrapper, tab2_content);
    }

}

function convertToRGBArray(input) {
    let inner = input.replace('rgb(', '');
    let newValue = inner.replace(')', '').split(",");
    return newValue;
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : '';
}

function ColorInput(input) {
    let color = convertToRGBArray(hexToRgb(input.value));
    suggestedFGColor = update(color);
    testElement.style.backgroundColor = input.value;
    if (suggestedFGColor > .5) testElement.style.color = 'white';
    else testElement.style.color = 'black';
}