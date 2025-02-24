//인풋으로 들어온 값이 number로 사용될 수 있는 값
export const checkInputTypeIsNumber = (input) => {
  return !Number.isNaN(Number(input));
};

//인풋으로 들어온 값이 string인지
export const checkUserInputString = (input) => {
  return typeof input === "string";
};
