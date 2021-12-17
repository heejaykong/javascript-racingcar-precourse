import { $, ID } from '../../utils/constants.js';

export const template = () => {
  const $h4 = document.createElement('h4');
  $h4.innerHTML = `📄 실행 결과`;

  $(`#${ID.APP}`).append($h4);
};

// export const template = `
// <h4>📄 실행 결과</h4>
// <p>최종 우승자: <span id=${ID.RACING_WINNERS}></span></p>
// `;
