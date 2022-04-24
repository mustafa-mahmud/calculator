class UI {
  constructor(mathInfoEl, resultEl) {
    this.mathInfoEl = mathInfoEl;
    this.resultEl = resultEl;
  }

  display(data, bool = false) {
    if (!bool) {
      this.resultEl.textContent = data.formated ? data.formated : 0;
    }
  }
}

export default UI;
