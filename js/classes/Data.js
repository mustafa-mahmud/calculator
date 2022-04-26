import { initData } from './../config';

class Data {
  constructor() {
    this.allData = null;

    this.initData();
  }

  initData() {
    this.allData = { ...initData };
  }

  clearLastOneData() {
    let makeArr = this.allData.initNums.split('');
    makeArr.pop();
    this.allData.initNums = makeArr.join('');
  }
}

export default new Data();
