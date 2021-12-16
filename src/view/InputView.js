import { $, ID, ERROR_MSG } from '../utils/constants.js';
import { validateCarNames } from '../utils/validations.js';

export const handleCarNamesSubmit = (e) => {
  e.preventDefault();

  const carNamesInput = $(`#${ID.CAR_NAMES_INPUT}`).value;
  const isValid = validateCarNames(carNamesInput);
  if (!isValid) {
    alert(ERROR_MSG.CAR_NAMES_SUBMIT);
  }
  if (isValid) {
  }

  clearInput($(`#${ID.CAR_NAMES_INPUT}`));
};

export const clearInput = ($element) => {
  $element.value = '';
};
