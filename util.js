const wrapper = document.getElementById('wrapper');
const testElement = document.getElementById('colorElement');


let JSColorinstance;

const tab1_content =
    `<label for="" class="label">Color: </label>
     <input data-jscolor="" class="input jscolor" id="color-picker">
    `;
const tab2_content = ``;

function convertToRGBArray(input) {
    let inner = input.replace('rgb(', '');
    let newValue = inner.replace(')', '').split(",");
    return newValue;
}


function loadHTML(htmlString, elementWrapper) {
    elementWrapper.innerHTML = htmlString;
}

function changeTab(e) {
    let element = e.target;
    let buttons = document.getElementsByClassName('button');
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].classList.contains('active')) {
            buttons[i].classList.remove('active');
        }
    }
    if (e.target.id === 'tab-1') {
        element.classList.add('active');
        loadHTML(tab1_content, wrapper);
        JSColorinstance = new JSColor(document.getElementById('color-picker'), {})
    }
    if (e.target.id === 'tab-2') {
        element.classList.add('active');
        loadHTML(tab2_content, wrapper);
    }
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