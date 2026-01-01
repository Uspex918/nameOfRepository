'use strict';

const boxesQuery = document.querySelectorAll(".box")
const boxesGet = document.getElementsByClassName("box")

boxesQuery.forEach(e => {
    if (e.matches(".this")) console.log(e)
})

console.log(boxesQuery[0].closest(".wrapper"))



boxesQuery[0].remove()
boxesGet[0].remove()

for (let i = 0; i < 5; i++){
    const div  =document.createElement("div")
    div.classList.add("box")
    document.body.append(div)
}


console.log(boxesQuery)
console.log(boxesGet)


console.log(Array.from(boxesQuery))
console.log(Array.from(boxesGet))