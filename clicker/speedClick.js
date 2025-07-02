import { clicker } from "./clicker.js";

let lastClickTime = 0;

export const getSpeed = () => {
  const currentTime = Date.now();
  const timeBetweenClicks = ((currentTime - lastClickTime) / 1000).toFixed(2);
  clicker.speedClick.textContent = timeBetweenClicks;
  lastClickTime = currentTime;
};
