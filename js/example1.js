let canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let c = canvas.getContext("2d")

function drawCircles(n) {

  for (let i = 0; i < n; i++) {
    let x = Math.random() * window.innerWidth
    let y = Math.random() * window.innerHeight
    c.beginPath()
    c.arc(x, y, 30, 0, Math.PI * 2, false)
    let color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`
    c.strokeStyle = color
    c.fillStyle = color
    c.fill()
    c.stroke()
  }
}
let n = 1
setInterval(() => {drawCircles(n) ; n++}, 1500)
