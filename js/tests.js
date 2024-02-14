function scaleImage(image, canvas) {
  const scaleX = canvas.width / image.width;
  const scaleY = canvas.height / image.height;
  const scale = Math.min(scaleX, scaleY);

  const newWidth = image.width * scale;
  const newHeight = image.height * scale;

  return [newWidth, newHeight];
}

let canvas = document.querySelector("canvas")

// canvas.width = window.innerWidth
// canvas.height = window.innerHeight
const defaultWidth = 2048
const defaultHeight = 1536

canvas.width = defaultWidth
canvas.height = defaultHeight

let c = canvas.getContext("2d")


let elementDisplayed = false
let menuDisplayed = false
let cardDisplayed = false

const Circle = {
  x: canvas.width / 3 ,
  y: canvas.height / 1.6 ,
  radius: 100
}

function realTime() {
  let currentTime = new Date()
  let hours = currentTime.getHours()
  let minutes = currentTime.getMinutes()
  let seconds = currentTime.getSeconds()

  minutes = (minutes < 10 ? "0" : "") + minutes
  seconds = (seconds < 10 ? "0" : "") + seconds
  let formattedTime = `${hours}:${minutes}:${seconds}`
  document.getElementById("currentTime").innerHTML = formattedTime
}

document.getElementById("b1").addEventListener("click", (event) => {
  let lowerMenu = document.getElementById("characterCard")
  lowerMenu.classList.toggle('active')
  if (!cardDisplayed) {
    cardDisplayed = true
    // document.documentElement.style.setProperty("--scroll-bar-size", 0) -> nie działa :(
    setTimeout(() => {
      console.log("Dupa")
      document.documentElement.style.setProperty("--scroll-bar-size", 0)}, 0.000001)
  }
  else {
    cardDisplayed = false
    setTimeout(() => {
      console.log("Dupa2")
      document.documentElement.style.setProperty("--scroll-bar-size", "1.5vh")}, 0.000001)
  }

})

window.addEventListener("mousemove", (event) => {
  show(event.pageX, event.pageY)
})

window.addEventListener("click", (event) => {
  if ((event.pageX - Circle.x) ** 2 + (event.pageY - Circle.y) ** 2 < Circle.radius ** 2 && !menuDisplayed && !cardDisplayed) {
    console.log("Dupa2")
    menuDisplayed = true
    document.getElementById("sideMenu").style.right = "0"
    document.documentElement.style.setProperty("--scroll-bar-size", 0)
  }
  else if (((window.innerWidth * 0.695) - event.clientX > 0
    || (window.innerHeight * 0.04) - event.clientY > 0
    || (window.innerHeight * 0.945) - event.clientY < 0)
    && menuDisplayed && !cardDisplayed) {
    menuDisplayed = false
    document.getElementById("sideMenu").style.right = "-50vw"
    document.documentElement.style.setProperty("--scroll-bar-size", "1.5vh")
  }
})

window.addEventListener("resize", () => {
  if (window.innerWidth >= canvas.width && window.innerHeight >= canvas.height) {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    c.drawImage(img, 0, 0, canvas.width, canvas.height)
    // draw()
  }
  if (window.innerWidth < defaultWidth && window.innerHeight < defaultHeight) {
    canvas.width = defaultWidth
    canvas.height = defaultHeight
    c.drawImage(img, 0, 0, canvas.width, canvas.height)
    // draw()
  }
})

function draw() {
  // c.beginPath()
  // c.arc(Circle.x, Circle.y, 100, 0, Math.PI * 2, false)
  // c.stroke()
}

let img = new Image()

img.onload = () => {
 //  const [width, height] = scaleImage(img, canvas)
  c.drawImage(img, 0, 0, canvas.width, canvas.height)}
img.src = "../img/map.jpg"

// setTimeout(draw, 10)

// window.addEventListener("load", draw)

function show(x, y) {
  if ((x - Circle.x) ** 2 + (y - Circle.y) ** 2 < Circle.radius ** 2) {
    if (!elementDisplayed && !cardDisplayed) {
      elementDisplayed = true
      c.beginPath()
      c.arc(Circle.x, Circle.y, Circle.radius, 0, Math.PI * 2, false)
      c.fillStyle = "rgba(255, 255, 255, 0.4)"
      c.fill()
      document.body.classList.toggle("active")
      // c.stroke()
    }
  }
  else if (elementDisplayed) {
    elementDisplayed = false
    document.body.classList.toggle("active")
    c.reset()
    c.drawImage(img, 0, 0, canvas.width, canvas.height)
  }
}

setInterval(realTime, 1000)

