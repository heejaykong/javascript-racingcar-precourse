import { $, ID, ERROR_MSG } from '../utils/constants.js';
import { template as carNamesInputTemplate } from '../view/templates/carNamesInputTemplate.js';
import { template as racingCountInputTemplate } from '../view/templates/racingCountInputTemplate.js';
// import { handleCarNamesSubmit, clearInput } from '../view/InputView.js';
import { validateCarNames, validateCountInput } from '../utils/validations.js';
import { createCars } from '../utils/createCars.js';

export default class GameController {
  constructor() {
    this.names = [];
    this.init();
  }

  init = () => {
    $(`#${ID.APP}`).innerHTML = carNamesInputTemplate;
    $(`#${ID.CAR_NAMES_SUBMIT}`).addEventListener('click', this.handleCarNamesSubmit);
  };

  handleCarNamesSubmit = (e) => {
    e.preventDefault();
    const carNamesInput = $(`#${ID.CAR_NAMES_INPUT}`).value;
    const splitNames = carNamesInput.split(',').map((name) => name.trim());
    const isValid = validateCarNames(splitNames);
    if (!isValid) {
      alert(ERROR_MSG.CAR_NAMES_SUBMIT);
    }
    if (isValid) {
      this.names = splitNames;
      racingCountInputTemplate();
      $(`#${ID.RACING_COUNT_SUBMIT}`).addEventListener(
        'click',
        this.handleRacingCountSubmit
      );
    }
  };
  handleRacingCountSubmit = (e) => {
    e.preventDefault();
    const racingCountInput = $(`#${ID.RACING_COUNT_INPUT}`).value;
    const isValid = validateCountInput(racingCountInput);
    if (!isValid) {
      alert(ERROR_MSG.RACING_COUNT_SUBMIT);
    }
    if (isValid) {
      console.log(this.names);
      const cars = createCars(this.names);
      console.log(cars);
    }
  };
}
