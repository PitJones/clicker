import { gameZone } from "../gameZone.js";
import { clicker } from "./clicker.js";
import { getSpeed } from "./speedClick.js";

const moveButton = () => {
  const bounds = gameZone.getBoundsForGames();
  const randomSizeButton = 50 + Math.floor(Math.random() * 40);

  clicker.img.style.width = `${randomSizeButton}px`;
  clicker.img.style.height = `${randomSizeButton}px`;

  const maxX = bounds.width - clicker.img.offsetWidth;
  const maxY = bounds.height - clicker.img.offsetHeight;

  const randomX = maxX * Math.random();
  const randomY = maxY * Math.random();

  clicker.button.style.left = `${randomX}px`;
  clicker.button.style.top = `${randomY}px`;
};

let clickCount = 0;

clicker.button.addEventListener("click", () => {
  const clickSound = clicker.sound;
  clickSound.currentTime = 0;
  clickSound.play();
  clickCount++;
  moveButton();
  clicker.count.textContent = clickCount;
  getSpeed();
});

export { moveButton };
