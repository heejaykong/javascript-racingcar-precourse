import { $, ID } from '../../utils/constants.js';

export const template = () => {
  const $h4 = document.createElement('h4');
  $h4.innerHTML = `📄 실행 결과`;

  $(`#${ID.APP}`).append($h4);
};
