const btn = document.getElementById('btn');
const color = document.getElementById('color');
btn.addEventListener("click", function () {
    btn.textContent = "Change Color";
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgbColor = `rgb(${r},${g},${b})`
    document.body.style.backgroundColor =  rgbColor;
    color.textContent = `Changed Color is:${rgbColor}`;
})