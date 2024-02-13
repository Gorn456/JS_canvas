const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Zmienna do przechowywania stanu figury
let isVisible = false;

// Rysowanie figury
function drawFigure() {
  ctx.beginPath();
  ctx.arc(250, 250, 100, 0, 2 * Math.PI);
  ctx.fillStyle = "red";

  if (isVisible) {
    ctx.fill();
  }
}

// Funkcja obsługi zdarzenia mousemove
canvas.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;

  // Sprawdzenie, czy współrzędne myszy znajdują się wewnątrz figury
  const isInside = ctx.isPointInPath(x, y);

  // Aktualizacja stanu figury
  isVisible = isInside;

  // Wyczyszczenie canvasu i ponowne narysowanie figury
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawFigure();
});

drawFigure();
