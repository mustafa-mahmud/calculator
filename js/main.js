import './../scss/main.scss';
import UI from './classes/UI';
import Data from './classes/Data';
import Helper from './classes/Helper';
import { initData } from './config';

const operationsEl = document.querySelectorAll('.operation');
const numsEl = document.querySelectorAll('.num');
const calcEl = document.querySelector('.calculate');
const resultScreen = document.getElementById('result');
const clearEl = document.getElementById('clear');
const backspaceEl = document.getElementById('backspace');

const uiCL = new UI();

function operationFunc() {
  console.log(123);
}

function numsFunc(e) {
  const target = e.target;
  const text = target.textContent.trim();

  if (
    (Data.allData.initNums.includes('.') && text === '.') ||
    (Data.allData.initNums === '0' && text === '0')
  )
    return;

  Data.allData.initNums += text;
  showFormatedData();
}

function showFormatedData() {
  console.log(Data.allData.initNums);
  const formatedData = Helper.formatResult(Data.allData.initNums);
  uiCL.displayUI(formatedData, 'result');
}

function calcFunc() {
  //todo:: it will be active when = button are clicked
}

function clearScreen() {
  Data.initData();
  resultScreen.textContent = '0';
}

function clearLastOne() {
  Data.clearLastOneData();
  showFormatedData();
}

uiCL.addEventAll(operationsEl, operationFunc);
uiCL.addEventAll(numsEl, numsFunc);
uiCL.addEventOne(calcEl, calcFunc);
uiCL.addEventOne(clearEl, clearScreen);
uiCL.addEventOne(backspaceEl, clearLastOne);
