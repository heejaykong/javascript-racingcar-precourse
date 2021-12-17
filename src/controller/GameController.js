import { $, ID, ERROR_MSG } from '../utils/constants.js';
import { template as carNamesInputTemplate } from '../view/templates/carNamesInputTemplate.js';
import { template as racingCountInputTemplate } from '../view/templates/racingCountInputTemplate.js';
import { template as racingResultTemplate } from '../view/templates/racingResultTemplate.js';
import { paintRacingStage, clearInput } from '../view/InputView.js';
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
      const cars = createCars(this.names);
      racingResultTemplate();

      for (let i = 0; i < racingCountInput; i++) {
        paintRacingStage(cars);
      }
    }
  };
}
