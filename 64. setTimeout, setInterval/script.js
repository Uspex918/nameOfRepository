const btn = document.querySelector('.btn');
 
function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0,
        down = true;
 
    setTimeout(frame, 10);
    function frame() {
        
        if (pos === 300) down = false;
        if (pos === 0) down = true;

        pos += down ? 1 : -1;

        elem.style.top = pos + "px";
        elem.style.left = pos + "px";
        
        console.log(down, pos)
        setTimeout(frame, 10);
    }
}
 
btn.addEventListener('click', myAnimation);

// btn.addEventListener("click", () => {
//     // const timerId = setTimeout(logger, 2000)
//     timerId = setInterval(logger, 100)

// })

// function logger() {
//     if (i == 50){
//         clearInterval(timerId)
//     }
//     console.log("text")
//     i++
// }

// let id = setTimeout(function log(){
//     console.log("Hi")
//     id = setTimeout(log, 2000)
// })

// function log() {
//   console.log('тик');
//   setTimeout(log, 2000);
// }

// log();