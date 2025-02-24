import { checkUserInputString, checkInputTypeIsNumber } from "./checkInputType";

export const checkUserInputForWinningNumber = (input) => {
  if (!checkUserInputString(input)) {
    throw new Error("인풋으로 입력된 값의 타입이 string이 아닙니다.");
  }
  if (!checkAllInputsTypeisNumber(input)) {
    throw new Error("숫자만 입력해주세요.");
  }
  if (!checkInputsLengthValid(input)) {
    throw new Error("숫자를 쉼표(,)로 구분해서 6개 입력해주세요");
  }
  if (!checkAllInputNotDuplicate(input)) {
    throw new Error("중복된 값은 사용할 수 없습니다.");
  }
  if (!checkInputNumbersValid(input)) {
    throw new Error("입력 가능한 수의 범위는 1부터 45까지 입니다.");
  }
};
//인풋으로 들어온 값이 6개인지
const checkInputsLengthValid = (input) => {
  return input.split(",").length === 6;
};

//인풋으로 가져온 값에 중복이 있는지
const checkAllInputNotDuplicate = (input) => {
  const inputArr = input.split(",");
  return !inputArr.some((item, index) => inputArr.indexOf(item) !== index);
};

//인풋으로 들어온 값이 전부 number로 사용 가능한 지
export const checkAllInputsTypeisNumber = (input) => {
  return input.split(",").every((item) => checkInputTypeIsNumber(item));
};

//인풋으로 들어온 값들의 범위가 0에서 45사이인지
export const checkInputNumbersValid = (input) => {
  return input.split(",").every((number) => number > 0 && number <= 45);
};
