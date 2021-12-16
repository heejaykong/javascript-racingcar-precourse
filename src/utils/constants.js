export const $ = (selector) => {
  return document.querySelector(selector);
};

export const ID = {
  APP: 'app',
  CAR_NAMES_INPUT: 'car-names-input',
  CAR_NAMES_SUBMIT: 'car-names-submit',
  RACING_COUNT_INPUT: 'racing-count-input',
  RACING_COUNT_SUBMIT: 'racing-count-submit',
  RACING_WINNERS: 'racing-winners',
};

export const RULES = {
  MAX_NAME_LENGTH: 5,
  MIN_NAME_LENGTH: 1,
};

export const ERROR_MSG = {
  CAR_NAMES_SUBMIT:
    '서로 다른 자동차 이름을 각 1자 이상 5자 이하로 콤마로 구분하여 입력해주세요.',
};
