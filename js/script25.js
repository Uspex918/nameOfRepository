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