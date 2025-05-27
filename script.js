let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
  if (currentInput === '0' && number !== '.') {
    currentInput = number; // Replace leading zero
  } else {
    currentInput += number;
  }
  updateDisplay();
}

function appendOperator(operator) {
  if (currentInput === '') return;
  const lastChar = currentInput[currentInput.length - 1];
  // Prevent two operators in a row
  if ('+-*/'.includes(lastChar)) {
    currentInput = currentInput.slice(0, -1) + operator;
  } else {
    currentInput += operator;
  }
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  updateDisplay();
}

function updateDisplay() {
  display.textContent = currentInput || '0';
}

function calculateResult() {
  try {
    // Use eval carefully (in real apps, consider safer parsers)
    let result = eval(currentInput);
    currentInput = result.toString();
    updateDisplay();
  } catch (e) {
    display.textContent = 'Error';
    currentInput = '';
  }
}
