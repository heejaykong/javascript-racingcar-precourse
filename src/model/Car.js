export default class Car {
  constructor(name) {
    this.name = name;
    this.forwardCount = 0;
  }

  generateRandomNumber = () => {
    return;
  };

  goForward = () => {
    this.forwardCount += 1;
  };
}
