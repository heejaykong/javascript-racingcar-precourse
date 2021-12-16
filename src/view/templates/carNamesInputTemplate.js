import { ID } from '../../utils/constants.js';

export const template = `
<h1>🏎️ 자동차 경주 게임</h1>
<p>
  자동차 이름을 <strong>5자 이하로</strong> 콤마로 구분하여 입력해주세요.
  <br />
  올바른 예) east,west,south,north <br />
</p>
<form>
  <input type="text" id=${ID.CAR_NAMES_INPUT} />
  <button id=${ID.CAR_NAMES_SUBMIT}>확인</button>
</form>
`;
