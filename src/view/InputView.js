import { $, ID, ERROR_MSG } from '../utils/constants.js';
import { validateCarNames, validateCountInput } from '../utils/validations.js';
import { createCars } from '../utils/createCars.js';
import { template } from './templates/racingCountInputTemplate.js';

let names = [];

export const handleCarNamesSubmit = (e) => {
  e.preventDefault();
  const carNamesInput = $(`#${ID.CAR_NAMES_INPUT}`).value;
  const splitNames = carNamesInput.split(',').map((name) => name.trim());
  const isValid = validateCarNames(splitNames);
  if (!isValid) {
    alert(ERROR_MSG.CAR_NAMES_SUBMIT);
  }
  if (isValid) {
    names = splitNames;
    template();
    $(`#${ID.RACING_COUNT_SUBMIT}`).addEventListener('click', handleRacingCountSubmit);
  }
};

export const handleRacingCountSubmit = (e) => {
  e.preventDefault();
  const racingCountInput = $(`#${ID.RACING_COUNT_INPUT}`).value;
  const isValid = validateCountInput(racingCountInput);
  if (!isValid) {
    alert(ERROR_MSG.RACING_COUNT_SUBMIT);
  }
  if (isValid) {
    console.log(names);
    const cars = createCars(names);
    console.log(cars);
  }
};

export const clearInput = ($element) => {
  $element.value = '';
};
