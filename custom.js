function colorCode() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

const button = document.querySelector('#colorChanger');
button.addEventListener('click', function () {
    const color = colorCode();
    const element = document.getElementById('body');
    element.style.background = color;
    document.getElementById('text').value = color;
})
window.addEventListener('load', function(){
    document.getElementById('text').value = "#000000";
})

document.getElementById('copyBtn').addEventListener('click', function () {
    const text = document.getElementById('text');
    navigator.clipboard.writeText(text.value);
    alert(`COPIED: ${text.value}`)
})
