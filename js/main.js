import './../scss/main.scss';
import Data from './classes/Data';
import UI from './classes/UI';
import Helper from './classes/Helper';

const operationsEl = document.querySelectorAll('.operation');
const numsEl = document.querySelectorAll('.num');
const mathInfoEl = document.getElementById('math-info');
const resultEl = document.getElementById('result');
const clearEl = document.getElementById('clear');
const backspaceEl = document.getElementById('backspace');

const uiCL = new UI(mathInfoEl, resultEl);

function operation(e) {
  const text = e.target.textContent.trim();
  console.log(text);
}

function nums(e) {
  const text = e.target.textContent.trim();

  if (Data.data.initData.includes('.') && text === '.') return;
  else {
    if (Data.data.initData.length >= 16) return;
    else {
      Data.data.initData += text;
      Data.processData();

      console.log(Data.data);
    }
  }

  console.log(Data.data);
  uiCL.display(Data.data, false);
}

function clearAll() {
  Data.clearAllData();
  uiCL.display(Data.data, false);
}

function clearOne() {
  Data.clearOneData();
  uiCL.display(Data.data, false);
}

////////////////////////
operationsEl.forEach((el) => el.addEventListener('click', operation));
numsEl.forEach((el) => el.addEventListener('click', nums));
clearEl.addEventListener('click', clearAll);
backspaceEl.addEventListener('click', clearOne);
