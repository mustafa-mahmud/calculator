class UI {
  constructor() {
    this.resultScreen = document.getElementById('result');
  }

  displayUI(data, show) {
    if (show === 'math') {
    }

    if (show === 'result') {
      this.resultScreen.textContent = data;
    }
  }

  addEventAll(els, handler) {
    els.forEach((el) => el.addEventListener('click', handler));
  }

  addEventOne(el, handler) {
    el.addEventListener('click', handler);
  }
}

export default UI;
