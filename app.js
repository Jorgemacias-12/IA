const input_colorPicker = document.getElementById('color-picker');

const boxExample = document.getElementById('colorElement');

const pickerInstance = new JSColor(input_colorPicker, {});

let suggestedFGColor;

const convertToRGBArray = (input) => {
    let inner = input.replace('rgb(', '');
    let newValue = inner.replace(')', '').split(",");
    return newValue;
}

input_colorPicker.addEventListener('input', () => {
    let color = convertToRGBArray(pickerInstance.toRGBString(input_colorPicker.value));
    suggestedFGColor = update(color);
    boxExample.style.backgroundColor = input_colorPicker.value;
    if (suggestedFGColor > .5) boxExample.style.color = 'white';
    else boxExample.style.color = 'black';
    
});
