import GameController from './controller/GameController.js';

export default class RacingCarGame {
  constructor() {
    this.init();
  }

  init = () => {
    const controller = new GameController();
    controller.init();
  };
}
