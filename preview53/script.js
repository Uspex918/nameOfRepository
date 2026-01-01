'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block)

// block?.textContent = "123"

// console.log(1+2)

const userData = {
    name: "Ivan",
    age: null,
    skills: {
        js: "JS"
    }, 
    say: function(){
        console.log("Hello")
    }
}

userData.say()
userData.may?.()
console.log(userData.skills?.js)
