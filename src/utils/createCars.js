import Car from '../model/Car.js';

export const createCars = (carNames) => {
  return carNames.map((name) => new Car(name));
};
