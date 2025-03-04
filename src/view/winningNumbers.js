const bottomArea = () => {
  const winningNumberContainer = document.createElement("div");
  const description = document.createElement("span");
  description.className = "winning-description";
  description.innerText =
    "지난 주 당첨번호 6개와 보너스 번호 1개를 입력해주세요.";
  winningNumberContainer.append(description);

  const bonusNumber = document.createElement("input");
  bonusNumber.className = "bonusInput";
};

const winningNumbers = () => {};
