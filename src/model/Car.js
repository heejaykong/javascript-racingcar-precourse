import { RULES } from '../utils/constants.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.forwardCount = 0;
  }

  run = () => {
    const randomNumber = this.generateRandomNumber();
    if (randomNumber > RULES.MIN_GO_FORWARD) {
      this.goForward();
    }
  };

  generateRandomNumber = () => {
    const randomNumber = MissionUtils.Random.pickNumberInRange(
      RULES.MIN_RANDOM_NUMBER,
      RULES.MAX_RANDOM_NUMBER
    );
    return randomNumber;
  };

  goForward = () => {
    this.forwardCount += 1;
  };
}
