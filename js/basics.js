let canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let c = canvas.getContext("2d")

// rectangles

c.fillStyle = "rgba(255, 0, 0, 0.5)"
c.fillRect(100, 100, 100, 100)

c.fillStyle = "rgba(0, 255, 0, 0.5)"
c.fillRect(205, 100, 100, 100)

c.fillStyle = "rgba(0, 0, 255, 0.5)"
c.fillRect(310, 100, 100, 100)

c.fillStyle = "rgba(0, 0, 255, 1)"
c.fillRect(100, 205, 100, 100)

c.fillStyle = "rgba(0, 255, 0, 1)"
c.fillRect(205, 205, 100, 100)

c.fillStyle = "rgba(255, 0, 0, 1)"
c.fillRect(310, 205, 100, 100)

// lines

c.lineWidth = 5

c.beginPath()
c.moveTo(100, 310)
c.lineTo(410, 310)
c.strokeStyle = "red"
c.stroke()

c.beginPath()
c.moveTo(100, 95)
c.lineTo(410, 95)
c.strokeStyle = "green"
c.stroke()

c.beginPath()
c.moveTo(95, 100)
c.lineTo(95, 305)
c.strokeStyle = "blue"
c.stroke()

c.beginPath()
c.moveTo(415, 100)
c.lineTo(415, 305)
c.strokeStyle = "blue"
c.stroke()

// circle / arc

c.beginPath()
c.arc(250, 500, 100, 0, Math.PI * 2, false)
c.strokeStyle = "#aa46ec"
c.fillStyle = "#aa46ec"
c.fill()
c.stroke()

for (let i = 0; i < 5; i++) {
  let x = Math.random() * window.innerWidth
  let y = Math.random() * window.innerHeight
  c.beginPath()
  c.arc(x, y, 30,  0, Math.PI * 2, false)
  let color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`
  c.strokeStyle = color
  c.fillStyle = color
  c.fill()
  c.stroke()
}


