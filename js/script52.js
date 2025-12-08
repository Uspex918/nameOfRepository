'use strict';

const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 100;

function changeParams(elem, h, w) {
    elem.style.height = `${h ??  200}px`;
    elem.style.width = `${w ?? 200}px`;
    elem.innerHTML  = (h ?? 200) * (w ?? 200);
}

changeParams(box, newHeight, newWidth);

let userName = 4
let userKye = 0.1

console.log(userName && userKye && "User")