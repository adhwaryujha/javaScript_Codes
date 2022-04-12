const h1 = document.querySelector('h1');
const select = document.querySelector('#maxScore')
let max = 7;
select.addEventListener('change', (e) => {
    max = parseInt(e.target.value);
})

const btn1 = document.querySelector('#playerOne');
const btn2 = document.querySelector('#playerTwo');
const btn3 = document.querySelector('#reset');

let score1 = 0, score2 = 0;

btn1.addEventListener('click', () => {
    score1++;
    h1.innerText = `${score1} to ${score2}`;
    if (score1 === max) {
        btn1.disabled = true;
        btn2.disabled = true;
    }
})

btn2.addEventListener('click', () => {
    score2++;
    h1.innerText = `${score1} to ${score2}`;
    if (score2 === max) {
        btn1.disabled = true;
        btn2.disabled = true;
    }
})

btn3.addEventListener('click', () => {
    h1.innerText = `Reset done, Do again`;
    btn1.disabled = false;
    btn2.disabled = false;
    score1 = 0;
    score2 = 0;
})


