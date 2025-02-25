export default class WinningNumbers {
  constructor(numbers, bonus) {
    this.numbers = numbers;
    this.bonus = bonus;
  }
  static fromUserInput(numbersInput, bonusInput) {
    const numbers = numbersInput
      .split(",")
      .map((num) => Number(num))
      .sort((a, b) => a - b);
    return new WinningNumbers(numbers, Number(bonusInput));
  }

  checkMatchingNumberCount(ticketNumbers) {
    return ticketNumbers.filter((num) => this.numbers.includes(num)).length;
  }

  getRank(ticketNumbers) {
    const matchingCount = this.checkMatchingNumberCount(ticketNumbers);
    if (matchingCount === 6) return 1;
    if (matchingCount === 5) {
      return ticketNumbers.includes(this.bonus) ? 2 : 3;
    }
    if (matchingCount === 4) return 4;
    if (matchingCount === 3) return 5;
    return 6;
  }
}
