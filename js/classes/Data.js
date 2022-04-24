class Data {
  constructor() {
    this.data = {
      initData: '',
    };
  }

  processData() {
    if (this.data.initData.includes('.')) {
      const splitData = this.data.initData.split('.');

      this.data.decimal = true;
      this.data.beforeDecimal = splitData[0];
      this.data.afterDecimal = splitData[1];

      this.formatData();
    } else {
      delete this.data.beforeDecimal;
      delete this.data.afterDecimal;
      this.data.decimal = false;
      this.formatData();
    }
  }

  formatData() {
    const data = !this.data.decimal
      ? this.data.initData
      : this.data.beforeDecimal;
    const data2 = this.data.decimal ? `.${this.data.afterDecimal}` : '';
    const formating = new Intl.NumberFormat().format(data) + data2;

    this.data.formated = formating;
  }

  clearAllData() {
    this.data = {
      initData: '',
    };
  }

  clearOneData() {
    const arrData = this.data.initData.split('');
    arrData.pop();
    this.data.initData = arrData.join('');
    this.processData();
  }
}

export default new Data();
