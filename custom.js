// global
let div = null;

//generate a color code function
function generateCode(color) {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return {red,
    green,
    blue}
}
function hexColorCode({red, green, blue}){
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

const button = document.querySelector('#colorChanger');
//button event for color change
button.addEventListener('click', (event) => { changeColor(event)});
function changeColor(event) {
    const color = generateCode();
    const hex = hexColorCode(color).toUpperCase();
    const element = document.getElementById('body');
    
    
    element.style.background = hex;
    document.getElementById('text').value = hex;
    
    const colorText = document.getElementById('color-text');
}



//default value when page is loaded
window.addEventListener('load', function () {
    document.getElementById('text').value = "#000000";
    document.getElementById('color-text').vlaue = "#000000";
})

//copy button event handle
document.getElementById('copyBtn').addEventListener('click', function () {
    const text = document.getElementById('text');
    if (text.value.length == 7 || text.value.length == 6) {
        navigator.clipboard.writeText(text.value.toUpperCase());
    }

    if (div != null) {
        div.remove();
        div = null;
    }
    toastMessege(text.value);
})

// toast messege container 
function toastMessege(msg) {
    div = document.createElement('div');
    div.innerHTML = msg;
    const thecolor = document.getElementById('text').value;

    // const colour = colorCode();//from colorCode function taking hex value
    if (isValidHEX(thecolor)) {
        document.body.appendChild(div);
    } //else {
    //     alert('the color code is not valid');
    // }

    div.className = 'toastContainer animation-coming';
    div.addEventListener('click', function () {
        this.classList.remove('animation-coming');
        this.classList.add('animation-going');
        this.addEventListener('animationend', function () {
            this.parentNode.removeChild(div);
        })
    })

}
//is hex value is valid?
function isValidHEX(color) {
    if (color.length == 7) {
        let regex = /#[A-Za-z0-9]{6}$/i;
        return regex;
    }
}
//input field keyup event
document.getElementById('text').addEventListener('keyup', function (event) {
    const value = event.target.value;
    if (value && isValidHEX(value)) {
        document.getElementById('body').style.background = value;
    }
})

//input type color 
const inputColor = document.getElementById('color-text');
inputColor.addEventListener('input', function(){
    const inputColor = this.value;
    document.getElementById('body').style.background = inputColor;
    document.getElementById('text').value = inputColor;

})