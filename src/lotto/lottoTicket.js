export default class Lotto {
  #LOTTO_NUMBER_COUNT = 6;
  #numberArray = new Array(45).fill().map((_, index) => index + 1);
  constructor(budget) {
    //로또 객체에서 있어야만 하는값 > 구매 금액, 로또 번호
    this.budget = budget;
    this.ticketNumbers = [];
  }
  makeNumbers() {
    for (let i = 0; i < 45; i++) {
      const randomIndex = Math.floor(Math.random() * 45);
      const tmp = this.#numberArray[i];
      this.#numberArray[i] = this.#numberArray[randomIndex];
      this.#numberArray[randomIndex] = tmp;
    }

    return this.#numberArray
      .slice(0, this.#LOTTO_NUMBER_COUNT)
      .sort((a, b) => a - b);
  }

  makeLottoTicket() {
    this.ticketNumbers.push(this.makeNumbers());
  }
  buyLottos(count) {
    for (let i = 0; i < count; i++) {
      this.makeLottoTicket();
    }
  }
}

export const calculateLottoTicketLimit = (budget) => {
  const LOTTO_PRICE = 1000;
  return Math.floor(budget / LOTTO_PRICE);
};
