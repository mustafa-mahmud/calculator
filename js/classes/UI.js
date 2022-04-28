import Helper from './Helper';

class UI {
  constructor() {
    this.resultScreen = document.getElementById('result');
    this.mathInfoScreen = document.getElementById('math-info');
  }

  displayInitNums(data) {
    const formatedData = Helper.formatResult(data);
    this.resultScreen.textContent = formatedData;
  }

  displayPrepareMath(data, sign) {
    this.mathInfoScreen.innerHTML = `${
      data.length ? data : '0'
    }<span id="sign">${sign}</span>`;
  }

  displayResult(data, sign) {
    this.mathInfoScreen.innerHTML = `${data}<span id="sign">${sign}</span>`;

    const formatedData = Helper.formatResult(data);
    this.resultScreen.textContent = formatedData;
  }

  displayCalcResult(num1, num2, data, sign) {
    this.mathInfoScreen.innerHTML = `${num1}<span id="sign">${sign}${num2}=</span>`;

    const formatedData = Helper.formatResult(data);
    this.resultScreen.textContent = formatedData;
  }

  addEventAll(els, handler) {
    els.forEach((el) => el.addEventListener('click', handler));
  }

  addEventOne(el, handler) {
    el.addEventListener('click', handler);
  }
}

export default UI;
