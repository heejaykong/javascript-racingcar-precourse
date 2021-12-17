import { $, ID } from '../utils/constants.js';

export const paintRacingStage = (cars) => {
  cars.map((car) => {
    car.run();
    paintRacingCar(car.name, car.forwardCount);
  });
  $(`#${ID.APP}`).append(document.createElement('br'));
};

export const paintRacingCar = (name, forwardCount) => {
  const $span = document.createElement('span');
  const $br = document.createElement('br');
  $span.innerHTML = `${name}: ${'-'.repeat(forwardCount)}`;

  $(`#${ID.APP}`).append($span, $br);
};

export const paintWinners = (winnersObj) => {
  const winners = winnersObj.map(({ name }) => name);
  const $p = document.createElement('p');
  $p.innerHTML = `
    최종 우승자:<span id=${ID.RACING_WINNERS}>${winners.join()}</span>
  `;

  $(`#${ID.APP}`).append($p);
};
