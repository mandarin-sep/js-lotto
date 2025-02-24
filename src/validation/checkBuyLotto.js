import { checkUserInputString, checkInputTypeIsNumber } from "./checkInputType";

const checkCanBuyLotto = (input) => {
  return Number(input) >= 1000;
};
export const checkUserInputForBuyLotto = (input) => {
  if (!checkUserInputString(input)) {
    throw new Error("인풋으로 입력된 값의 타입이 string이 아닙니다.");
  }

  if (!checkInputTypeIsNumber(input)) {
    throw new Error("숫자만 입력해주세요.");
  }
  if (!checkCanBuyLotto(input)) {
    throw new Error("1000 이상의 금액을 넣어주세요.");
  }
};
