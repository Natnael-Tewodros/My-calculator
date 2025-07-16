let currentInput = '';
let resultDisplayed = false;

const display = document.getElementById('display');

function appendNumber(num) {
  if (resultDisplayed) {
    currentInput = '';
    resultDisplayed = false;
  }
  currentInput += num;
  updateDisplay();
}

function appendOperator(op) {
  if (currentInput === '' && op !== '-') return;
  currentInput += op;
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  updateDisplay();
}

function calculateResult() {
  try {
    let evalResult = eval(currentInput);
    display.textContent = evalResult;
    resultDisplayed = true;
  } catch (e) {
    display.textContent = 'Error';
    resultDisplayed = true;
  }
}

function updateDisplay() {
  display.textContent = currentInput || '0';
}
