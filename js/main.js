import './../scss/main.scss';
import UI from './classes/UI';
import Data from './classes/Data';
import Helper from './classes/Helper';
import DoSum from './classes/DoSum';

const operationsEl = document.querySelectorAll('.operation');
const numsEl = document.querySelectorAll('.num');
const calcEl = document.querySelector('.calculate');
const resultScreen = document.getElementById('result');
const clearEl = document.getElementById('clear');
const backspaceEl = document.getElementById('backspace');
const mathInfoEl = document.getElementById('math-info');

const uiCL = new UI();

function operationFunc(e) {
  const target = e.target;
  const text = target.textContent.trim();
  const signText = document.getElementById('sign').textContent;

  target.style.pointerEvents = 'none';
  uiCL.displayPrepareMath(Data.allData.initNums || Data.allData.nums[0], text); //(||) search true

  if (Data.allData.initNums.length)
    Data.allData.nums.push(Data.allData.initNums);

  if (!Data.allData.sign) {
    Data.allData.sign = text;
  } else if (signText && signText !== text && !/=/.test(signText)) {
    Data.allData.sign = signText;
  } else {
    Data.allData.sign = text;
  }

  Data.allData.initNums = '';

  if (Data.allData.nums.length === 2) {
    target.style.pointerEvents = 'auto';

    const nums = Data.allData.nums;
    const sign = Data.allData.sign;

    const result = DoSum.whichSum(+nums[0], +nums[1], sign);
    Data.allData.nums = [String(result)];
    Data.allData.sign = null;
    uiCL.displayResult(result, text);

    Data.allData.sign = text;
  }
}

function calcFunc() {
  const signText = document.getElementById('sign').textContent;

  if (/=/.test(signText)) {
    const num1 = +Data.allData.nums[0];
    const num2 = +String(parseFloat(signText.replaceAll(/[/=+x-]/g, '')));
    const sign = signText
      .split('')
      .find((el) => el === '+' || el === '-' || el === 'x' || el === '/');

    const data = DoSum.whichSum(num1, num2, sign);
    uiCL.displayCalcResult(num1, num2, data, sign);

    Data.allData.sign = null;
    Data.allData.nums = [String(data)];
    Data.allData.initNums = '';
  } else {
    const num1 = +Data.allData.nums[0];
    const num2 = +Data.allData.initNums;
    const sign = Data.allData.sign;

    const data = DoSum.whichSum(num1, num2, sign);
    uiCL.displayCalcResult(num1, num2, data, sign);

    Data.allData.sign = null;
    Data.allData.nums = [String(data)];
    Data.allData.initNums = '';
  }
}

function numsFunc(e) {
  const target = e.target;
  const text = target.textContent.trim();

  operationsEl.forEach((el) => (el.style.pointerEvents = 'auto'));

  if (
    (Data.allData.initNums.includes('.') && text === '.') ||
    (Data.allData.initNums === '0' && text === '0')
  )
    return;

  Data.allData.initNums += text;
  uiCL.displayInitNums(Data.allData.initNums);
}

function clearScreen() {
  Data.initData();
  resultScreen.textContent = '0';
  mathInfoEl.innerHTML = `<span id="sign"></span>`;
}

function clearLastOne() {
  if (!Data.allData.initNums) return;

  Data.clearLastOneData();
  uiCL.displayInitNums(Data.allData.initNums);
}

uiCL.addEventAll(operationsEl, operationFunc);
uiCL.addEventAll(numsEl, numsFunc);
uiCL.addEventOne(calcEl, calcFunc);
uiCL.addEventOne(clearEl, clearScreen);
uiCL.addEventOne(backspaceEl, clearLastOne);
