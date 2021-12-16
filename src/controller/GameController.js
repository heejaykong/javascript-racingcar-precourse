import { $, ID } from '../utils/constants.js';
import { template } from '../view/templates/carNamesInputTemplate.js';
import { handleCarNamesSubmit, clearInput } from '../view/InputView.js';

export default class GameController {
  constructor() {
    this.init();
  }

  init = () => {
    $(`#${ID.APP}`).innerHTML = template;
    $(`#${ID.CAR_NAMES_SUBMIT}`).addEventListener('click', handleCarNamesSubmit);
  };
}
