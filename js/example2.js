let canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let c = canvas.getContext("2d")

function Circle(x, y, dx, dy, radius) {
  this.x = x
  this.y = y
  this.dx = dx
  this.dy = dy
  this.radius = radius
  this.color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`

  this.draw = () => {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.strokeStyle = this.color
    c.fillStyle = this.color
    c.fill()
    c.stroke()
  }

  this.update = () => {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0)  this.dx = - this.dx
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) this.dy = - this.dy
    this.y += this.dy
    this.x += this.dx

    this.draw()
  }
}

let CircleArray = []
let numberOfCircles = 100

for (let i = 0; i < numberOfCircles; i++) {
  let radius = 30
  let x = Math.random() * (innerWidth - radius * 2) + radius
  let y = Math.random() * (innerHeight - radius * 2) + radius
  let dx = (Math.random() - 0.5) * 20
  let dy = (Math.random() - 0.5) * 20
  CircleArray.push(new Circle(x, y, dx, dy, radius))
}

function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, innerWidth, innerHeight)
  CircleArray.forEach((el) => {el.update()})
}
console.log(CircleArray)
animate()

