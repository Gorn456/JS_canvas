let canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight


let c = canvas.getContext("2d")
let radius = 30
let x = Math.random() * innerWidth
let y = Math.random() * innerHeight
let dx = (Math.random() - 0.5) * 20
let dy = (Math.random() - 0.5) * 20
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, innerWidth, innerHeight)
  c.beginPath()
  c.arc(x, y, radius, 0, Math.PI * 2, false)
  c.strokeStyle = "blue"
  c.fillStyle = "blue"
  c.fill()
  c.stroke()

  if (x + radius > innerWidth || x - radius < 0)  dx = -dx
  if (y + radius > innerHeight || y - radius < 0) dy = -dy
  y += dy
  x += dx

}

animate()

