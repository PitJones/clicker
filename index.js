import { clicker } from "./clicker/clicker.js";
import { moveButton } from "./clicker/moveButton.js";
import { gameZone } from "./gameZone.js";

const ui = {
  start: {
    managerbox: document.getElementById("manager-box"),
    page: document.getElementById("start-page"),
    inputName: document.getElementById("input-userName"),
    button: document.getElementById("ready-button"),
  },
  select: {
    page: document.getElementById("game-selection"),
    question: document.getElementById("choise-game-question"),
    clicker: document.getElementById("clicker"),
    game2: document.getElementById("game2"),
  },
};

ui.start.button.addEventListener("click", () => {
  const name = ui.start.inputName.value.trim();

  if (!name) {
    alert("Пожалуйста, введите имя");
    return;
  }

  ui.start.page.classList.add("hidden");
  ui.select.page.classList.remove("hidden");
  ui.select.question.textContent = `Какую игру выберешь, ${name}?`;
});

ui.select.clicker.addEventListener("click", () => {
  ui.start.managerbox.classList.remove("fogged-overlay");
  ui.select.page.classList.add("hidden");

  clicker.button.classList.remove("hidden");
  clicker.button.style.display = "flex";
  gameZone.zone.classList.add("sponge-cursor");
  clicker.button.classList.add("sponge-cursor");

  moveButton();
});
