import './../scss/main.scss';

const operationsEl = document.querySelectorAll('.operation');
const numsEl = document.querySelectorAll('.num');

function operation(e) {
  const text = e.target.textContent.trim();
  console.log(text);
}

function nums(e) {
  let text = e.target.textContent.trim();
  text = !isNaN(text) ? Number(text) : text;
}

////////////////////////
operationsEl.forEach((el) => el.addEventListener('click', operation));
numsEl.forEach((el) => el.addEventListener('click', nums));
