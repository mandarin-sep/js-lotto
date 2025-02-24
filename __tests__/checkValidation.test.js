import {
  checkUserInputForBonusNumber,
  checkUserInputForBuyLotto,
  checkUserInputForRetry,
  checkUserInputForWinningNumber,
} from "../src/validation/index.js";

describe("사용자가 구입 금액을 입력했을때", () => {
  test("사용자로부터 string type의 값이 입력되지 않으면 에러가 반환된다. ", () => {
    expect(() => checkUserInputForBuyLotto(1324)).toThrow(
      "인풋으로 입력된 값의 타입이 string이 아닙니다."
    );
  });
  test("입력된 값이 숫자가 아니면 에러가 반환된다.", () => {
    expect(() => checkUserInputForBuyLotto("ㅋㅋ")).toThrow(
      "숫자만 입력해주세요."
    );
  });
  test.each([
    ["100", "1000 이상의 금액을 넣어주세요."],
    ["900", "1000 이상의 금액을 넣어주세요."],
    ["999", "1000 이상의 금액을 넣어주세요."],
  ])(
    "입력된 값이 1000원 이상이 아니면 에러를 반환한다.",
    (budget, expected) => {
      expect(() => checkUserInputForBuyLotto(budget)).toThrow(expected);
    }
  );
});

describe("사용자가 로또 번호를 입력했을때", () => {
  test("입력 값이 문자열이 아닐 경우 에러를 던진다", () => {
    expect(() => checkUserInputForWinningNumber(1234)).toThrow(
      "인풋으로 입력된 값의 타입이 string이 아닙니다."
    );
  });

  test("입력 값의 요소 개수가 6개가 아닐 경우 에러를 던진다", () => {
    expect(() => checkUserInputForWinningNumber("1,2,3,4,5")).toThrow(
      "숫자를 쉼표(,)로 구분해서 6개 입력해주세요"
    );
  });

  test("입력 값에 중복된 숫자가 있을 경우 에러를 던진다", () => {
    expect(() => checkUserInputForWinningNumber("1,2,3,3,4,5")).toThrow(
      "중복된 값은 사용할 수 없습니다."
    );
  });

  test("입력 값의 숫자가 1부터 45 사이가 아닐 경우 에러를 던진다", () => {
    expect(() => checkUserInputForWinningNumber("1,2,3,4,5,46")).toThrow(
      "입력 가능한 수의 범위는 1부터 45까지 입니다."
    );
  });

  test("입력 값에 숫자로 변환할 수 없는 값이 포함된 경우 에러를 던진다", () => {
    expect(() => checkUserInputForWinningNumber("1,2,a,4,5,6")).toThrow(
      "숫자만 입력해주세요."
    );
  });

  test("입력 값이 올바른 경우 에러를 던지지 않는다", () => {
    expect(() => checkUserInputForWinningNumber("1,2,3,4,5,6")).not.toThrow();
  });
});

describe("사용자가 보너스 값을 입력했을때", () => {
  test("입력 값이 문자열이 아닐 경우 에러를 던진다", () => {
    expect(() => checkUserInputForBonusNumber(123)).toThrow(
      "인풋으로 입력된 값의 타입이 string이 아닙니다."
    );
  });

  test("입력 값이 숫자로 변환할 수 없는 경우 에러를 던진다", () => {
    expect(() => checkUserInputForBonusNumber("abc")).toThrow(
      "숫자만 입력해주세요."
    );
  });

  test("입력 값이 1부터 45 범위를 벗어나면 에러를 던진다", () => {
    expect(() => checkUserInputForBonusNumber("0")).toThrow(
      "입력 가능한 수의 범위는 1부터 45까지 입니다."
    );
    expect(() => checkUserInputForBonusNumber("46")).toThrow(
      "입력 가능한 수의 범위는 1부터 45까지 입니다."
    );
  });

  test("입력 값이 올바른 경우 에러를 던지지 않는다", () => {
    expect(() => checkUserInputForBonusNumber("33")).not.toThrow();
  });
});

describe("사용자가 다시하기 값을 입력했을때", () => {
  test("y와 n이 아닌 입력일 경우 에러를 던진다", () => {
    expect(() => checkUserInputForRetry("x")).toThrow(
      "y와 n 중 하나의 값을 입력하세요."
    );
  });

  test("대문자 Y 또는 N도 올바른 경우로 처리된다", () => {
    expect(() => checkUserInputForRetry("Y")).not.toThrow();
    expect(() => checkUserInputForRetry("N")).not.toThrow();
  });

  test("소문자 y와 n 입력시 에러를 던지지 않는다", () => {
    expect(() => checkUserInputForRetry("y")).not.toThrow();
    expect(() => checkUserInputForRetry("n")).not.toThrow();
  });
});
