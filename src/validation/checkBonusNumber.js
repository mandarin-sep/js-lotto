import { checkUserInputString, checkInputTypeIsNumber } from "./checkInputType";

const checkBonusValid = (input) => {
  return input > 0 && input <= 45;
};

export const checkUserInputForBonusNumber = (input) => {
  if (!checkUserInputString(input)) {
    throw new Error("인풋으로 입력된 값의 타입이 string이 아닙니다.");
  }
  if (!checkInputTypeIsNumber(input)) {
    throw new Error("숫자만 입력해주세요.");
  }
  if (!checkBonusValid(input)) {
    throw new Error("입력 가능한 수의 범위는 1부터 45까지 입니다.");
  }
};
