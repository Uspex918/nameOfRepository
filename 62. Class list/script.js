'use strict';

const btns = document.querySelectorAll("button"),
      wrapper = document.querySelector(".btn-block")

// console.log(btns[0].classList.length)
// console.log(btns[0].classList.item(1))
// console.log(btns[0].classList.add("red"))
// console.log(btns[1].classList.add("white"))
// console.log(btns[0].classList.remove("blue"))
// console.log(btns[0].classList.toggle("blue"))

// if (btns[1].classList.contains('white')){
//     console.log("Белый")
// }

btns[0].addEventListener("click", () => {
    // if (!btns[1].classList.contains("red")){
    //     btns[1].classList.toggle("red")
    // } else {
    //     btns[1].classList.toggle("red")
    // }
    btns[1].classList.toggle("red")

})

wrapper.addEventListener("click", (event) => {
    if (event.target && event.target.matches("button")){
        console.log("Hello World!")
    }
})
// btns.forEach(btn => {
//     btn.addEventListener("click", () => {
//         console.log("Hello World!")
//     })
// })

const btn = document.createElement("button")
btn.classList.add("red")
wrapper.append(btn)