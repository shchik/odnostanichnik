import { examples } from "./data/examples.js";

let currentIndex = 2; // Текущий индекс блока, который показывается
const totalExamples = examples.length; // Общее количество блоков

function renderExamples() {
  let HTML = "";

  examples.forEach((example, index) => {
    HTML += `
      <div class="one-example ${
        index === currentIndex ? "main-example" : ""
      }" style="transform: translateX(${(index - currentIndex) * 1}%)">
        <img src="${example.img}" class="tv-image" />
        <p class="example-info">${example.info}</p>
        <button class="href-to-site">Ссылка на сайт</button>
      </div>
    `;
  });
  document.querySelector(".js-examples").innerHTML = HTML;
}

// Функция для смены примеров влево
function slideLeft() {
  currentIndex = currentIndex === 0 ? totalExamples - 1 : currentIndex - 1; // Переходим к последнему примеру
  renderExamples(); // Перерисовываем блоки
}

function slideRight() {
  currentIndex = currentIndex === 4 ? 0 : currentIndex + 1;
  renderExamples(); // Перерисовываем блоки
}

document.getElementById("prev").addEventListener("click", slideLeft);
document.getElementById("next").addEventListener("click", slideRight);

renderExamples();
