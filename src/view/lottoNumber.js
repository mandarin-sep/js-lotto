const lottoNumber = (lottoNumber) => {
  const number = document.createElement("span");
  number.className = "numberContainer";
  number.innerText = lottoNumber.join(", ");

  return number;
};
