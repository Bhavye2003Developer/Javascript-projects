const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")

window.addEventListener("mousemove", (event) => {
    console.log(event)
    context.fillRect(event.clientX, event.clientY, 10,10)
})