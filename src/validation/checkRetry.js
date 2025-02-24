import { checkUserInputString } from "./checkInputType";

const checkUserAnswerValid = (input) => {
  if (checkUserInputString(input)) {
    if (input.toLowerCase() === "y" || input.toLowerCase() === "n") return true;

    return false;
  } else {
    throw new Error("인풋으로 입력된 값의 타입이 string이 아닙니다.");
  }
};

export const checkUserInputForRetry = (input) => {
  if (!checkUserAnswerValid(input)) {
    throw new Error("y와 n 중 하나의 값을 입력하세요.");
  }
};
