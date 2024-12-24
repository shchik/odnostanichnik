import { stages } from "./data/stages.js";

function renderSecondBlock() {
  let HTML = "";
  console.log(stages);
  stages.forEach((stage, index) => {
    HTML += `<div class="one-stage">
              <p class="time">${stage.week}</p>
              <p class="one-stage-title">${stage.title}</p>
              <p class="one-stage-info">
                ${stage.info}
              </p>
            </div>`;
  });
  document.querySelector(".stages-grid").innerHTML = HTML;

  document.querySelector(".leave-request").addEventListener("click", () => {
    document.querySelector(".overlay").style.display = "flex";
    document.getElementById("username1").value = "Ваше имя";
    document.getElementById("phone1").value = "Ваш телефон";
    document.getElementById("message1").value = "Ваше сообщение";
  });

  document.querySelector(".close-modal-form").addEventListener("click", () => {
    document.querySelector(".overlay").style.display = "none";
  });
}

renderSecondBlock();
