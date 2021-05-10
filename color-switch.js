const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
   '#e1cf3b',
  '#5be4f0',
  '#57c4d8',
  '#a4d17a',
  '#225b8',
  '#be608b',
  '#96b00c',
  '#088baf',
  '#f158bf',
  '#e145ba',
  '#ee91e3',
  '#05d371',
  '#5426e0',
  '#4834d0',
  '#802234',
  '#6749e8',
  '#0971f0',
  '#8fb413',
  '#b2b4f0',
  '#c3c89d',
  '#c9a941',
  '#41d158',
  '#fb21a3',
  '#51aed9',
  '#5bb32d',
  '#807fb',
  '#21538e',
  '#89d534',
  '#d36647',
  '#7fb411',
  '#0023b8',
  '#3b8c2a',
  '#986b53',
  '#f50422',
  '#983f7a',
  '#ea24a3',
  '#79352c',
  '#521250',
  '#c79ed2',
  '#d6dd92',
  '#e33e52',
];

const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  body: document.body,
 
    
};


refs.startBtn.addEventListener('click', run);
refs.stopBtn.addEventListener('click', stop);



let intervalId = null;
let isActive = false;


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
  }

function changeColor() {
  const maxNumber = colors.length - 1;
  document.body.style.backgroundColor = colors[randomIntegerFromInterval (0, maxNumber)];
};

function run() {
  if (isActive) {
    return;
  }
  intervalId = setInterval(changeColor, 1000);
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false; 
};

function stop() {
  clearInterval(intervalId);
  document.body.style.backgroundColor = '#fff';
  refs.stopBtn.disabled = true;
  refs.startBtn.disabled = false; 
};





