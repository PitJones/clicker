export const gameZone = {
  get zone() {
    return document.querySelector(".field-for-game");
  },

  getRectangle() {
    return this.zone.getBoundingClientRect();
  },

  getBoundsForGames() {
    const rect = this.getRectangle();

    return {
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    };
  },
};
