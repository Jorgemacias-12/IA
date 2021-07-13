const input_colorPicker = document.getElementById('color-picker');

const pickerInstance = new JSColor(input_colorPicker, {});

input_colorPicker.addEventListener('input', (e) => {
    console.log('Color is updating');
    let colorValue = input_colorPicker.value;
    console.log(pickerInstance.toRGBString(colorValue));
});