const heading = document.querySelector('h1');
const v = document.querySelector('.center');
v.style.textAlign = 'center';
//heading.style.textAlign = 'center';
const button = document.querySelector('button');
//button.style.margin = 'auto';

function createColor() {
    return Math.floor(Math.random() * 256);
}

function change() {
    const text = `rgb(${createColor()},${createColor()},${createColor()})`;
    heading.innerText = text;
    document.body.style.backgroundColor = text;
}

button.addEventListener('click', change);

