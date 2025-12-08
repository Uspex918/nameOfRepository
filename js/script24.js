'use strict';

const box = document.getElementById("box"),
      btns = document.getElementsByTagName("button"),
      circles = document.getElementsByClassName("circle"),
      hearts = document.querySelectorAll(".heart"),
      oneHeart = document.querySelector(".heart"),
      wrapper = document.querySelector(".wrapper")

      box.style.backgroundColor = "blue"
      box.style.width = "100px"
      const cvet = "black"
      box.style.cssText = `background-color: ${cvet}`



      btns[1].style.borderRadius = "100%"
      btns[1].style.backgroundColor = "red"

      circles[0].style.backgroundColor = "red"
      for (let i = 0; i < hearts.length; i++) {
        circles[i].style.backgroundColor = "green"
      }

    hearts.forEach(e=>{
        e.style.backgroundColor = "blue"
    })


const divEl = document.createElement("div")
const textEl = document.createTextNode("Тут был я")

divEl.classList.add("black")
// wrapper.prepend(divEl)
divEl.prepend(textEl)

// hearts[0].before(divEl)

// circles[0].remove()

// circles[0].replaceWith(hearts[0])
// hearts[0].replaceWith(circles[0])
const iv = document.createElement("div")
iv.classList.add("black")
wrapper.prepend(iv)
iv.innerHTML = "<h1>Привет Мир!</h1>"
iv.insertAdjacentHTML("afterend", "<h2>Hello</h2>")
// iv.textContent = "Привет Мир!"
// const container = document.getElementById('container');

// container.insertAdjacentHTML('beforebegin', '<h2>Заголовок перед контейнером</h2>');
// container.insertAdjacentHTML('afterbegin', '<p>Добавлен в начало контейнера</p>');
// container.insertAdjacentHTML('beforeend', '<p>Добавлен в конец контейнера</p>');
// container.insertAdjacentHTML('afterend', '<h3>После контейнера</h3>');


// wrapper.appendChild(iv)
// wrapper.insertBefore(iv,hearts[0])
// hearts[1].before(iv)
// hearts[1].remove()

      console.log(box)
      console.log(btns)
      console.log(circles)
      console.log(hearts)
      console.log(oneHeart)
      console.log(wrapper)