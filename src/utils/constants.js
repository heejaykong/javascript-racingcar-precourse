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
  MIN_RACING_COUNT: 1,
  MAX_RANDOM_NUMBER: 9,
  MIN_RANDOM_NUMBER: 1,
  MIN_GO_FORWARD: 4,
};

export const ERROR_MSG = {
  CAR_NAMES_SUBMIT:
    '서로 다른 자동차 이름을 각 1자 이상 5자 이하로 콤마로 구분하여 입력해 주세요.',
  RACING_COUNT_SUBMIT: `1 이상의 숫자를 입력해 주세요.`,
};
