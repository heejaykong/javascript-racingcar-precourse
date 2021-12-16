import { $, ID, RULES } from '../utils/constants.js';

export const validateCarNames = (carNamesInput) => {
  const names = carNamesInput.split(',').map((name) => name.trim());

  if (isNotUnique(names)) {
    return false;
  }

  for (let i = 0; i < names.length; i++) {
    if (exceedsMaxLength(names[i])) {
      return false;
    }
    if (isLessThanMinLength(names[i])) {
      return false;
    }
  }
  return true;
};

export const exceedsMaxLength = (name) => {
  return name.length > RULES.MAX_NAME_LENGTH;
};
export const isLessThanMinLength = (name) => {
  return name.length < RULES.MIN_NAME_LENGTH;
};
export const isNotUnique = (names) => {
  const namesSet = new Set(names);
  return names.length !== namesSet.size;
};
