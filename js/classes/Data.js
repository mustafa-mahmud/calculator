import { initData } from './../config';

class Data {
  constructor() {
    this.allData = { initNums: '', nums: [], sign: null };

    this.initData();
  }

  initData() {
    this.allData = { ...initData, nums: [...initData.nums] };
  }

  clearLastOneData() {
    let makeArr = this.allData.initNums.split('');
    makeArr.pop();
    this.allData.initNums = makeArr.join('');
  }
}

export default new Data();
