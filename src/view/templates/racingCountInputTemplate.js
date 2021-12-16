import { ID } from '../utils/constants.js';

export const template = `
<h4>시도할 횟수를 입력해주세요.</h4>
<form>
  <input type="number" id=${ID.RACING_COUNT_INPUT}/>
  <button id=${ID.RACING_COUNT_SUBMIT}>확인</button>
</form>
`;
