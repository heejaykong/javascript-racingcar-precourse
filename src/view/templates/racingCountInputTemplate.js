import { $, ID } from '../../utils/constants.js';

export const template = () => {
  const $h4 = document.createElement('h4');
  const $form = document.createElement('form');
  const $input = document.createElement('input');
  const $button = document.createElement('button');
  $h4.innerHTML = `시도할 횟수를 입력해주세요.`;
  $input.type = 'number';
  $input.id = ID.RACING_COUNT_INPUT;
  $button.innerHTML = '확인';
  $button.id = ID.RACING_COUNT_SUBMIT;
  $form.append($input, $button);
  $(`#${ID.APP}`).append($h4, $form);
};

// export const template = `
// <h4>시도할 횟수를 입력해주세요.</h4>
// <form>
//   <input type="number" id=${ID.RACING_COUNT_INPUT}/>
//   <button id=${ID.RACING_COUNT_SUBMIT}>확인</button>
// </form>
// `;
