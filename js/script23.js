'use strict';
const box = document.getElementById("box")

console.log(box)



const btns = document.getElementsByTagName("button");
console.log(btns); // HTMLCollection

const circle = document.getElementsByClassName("circle")
console.log(circle)




const hearts = document.querySelectorAll(".heart");
console.log(hearts); // NodeList

hearts.forEach(item => {
    console.log(item)
})

const oneHeart = document.querySelector(".heart")
console.log(oneHeart)

const oneButton = document.querySelector("button")
console.log(oneButton)


