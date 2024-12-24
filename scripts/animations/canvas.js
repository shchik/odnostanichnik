import { Column } from "./column.js";

// Получаем элементы canvas
const canvas1 = document.getElementById("canvas1");
const context1 = canvas1.getContext("2d");

const canvas2 = document.getElementById("canvas2");
const context2 = canvas2.getContext("2d");

const FONT_SIZE = 30;
let columns1 = [];
let columns2 = [];
let columnsCount = 0;

// Инициализация канвасов и анимация
initCanvasSize(canvas1);
columns1 = initColumns(canvas1, context1);

initCanvasSize(canvas2);
columns2 = initColumns(canvas2, context2);

// Анимация для канвасов
function animate() {
  animateCanvas(canvas1, context1, columns1);
  animateCanvas(canvas2, context2, columns2);
  requestAnimationFrame(animate); // Обновляем анимацию для обоих канвасов
}

function animateCanvas(canvas, context, columns) {
  context.fillStyle = "rgba(0, 0, 0, 0.05)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "green";
  context.font = `bold ${FONT_SIZE}px monospace`;

  columns.forEach((column) => column.drawSymbol());
}

function initCanvasSize(canvas) {
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
}

function initColumns(canvas, context) {
  columnsCount = canvas.width / FONT_SIZE;
  let columns = [];
  for (let i = 0; i < columnsCount; i++) {
    columns.push(new Column(i * FONT_SIZE, FONT_SIZE, canvas.height, context));
  }
  return columns;
}

animate();

window.addEventListener("resize", () => {
  initCanvasSize(canvas1);
  columns1 = initColumns(canvas1, context1);

  initCanvasSize(canvas2);
  columns2 = initColumns(canvas2, context2);

  context1.clearRect(0, 0, canvas1.width, canvas1.height);
  context2.clearRect(0, 0, canvas2.width, canvas2.height);
});
