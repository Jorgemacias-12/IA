const colorPicker = document.getElementById('color-picker');
const colorBox = document.getElementById('colorElement');

window.onload = () => {
    document.getElementById('tab-1').addEventListener('click', (e) => { changeTab(e) });
    document.getElementById('tab-2').addEventListener('click', (e) => { changeTab(e) });
    colorPicker.addEventListener('input', (e) => {ColorInput(e.target)});
}
