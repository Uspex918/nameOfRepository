window.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelector(".box")

    box.addEventListener("touchstart", (e) => {
        e.preventDefault()

        console.log("Start")
    })
    box.addEventListener("touchmove", (e) => {
        e.preventDefault()

        // console.log("Move")
        console.log(e.touches[0].pageX)
        console.log(e.targetTouches[0].pageX)
        // console.log(e.changedTouches)
    })
    box.addEventListener("touchend", (e) => {
        e.preventDefault()

        console.log("End")
    })
    box.addEventListener("touchcancel", (e) => {
        e.preventDefault()

        console.log("Cancel")
    })

})


