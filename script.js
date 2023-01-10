const historyDisplay = document.getElementById("secondDisplay");
const display = document.getElementById("firstDisplay");
const operatorDisplay = document.getElementById("operatorDisplay");
let displayValue = [];
let memoryValue = 0;
let finalSum;
let operator;

const core = (() => {
  const ans = (value) => {
    memoryValue = value;
    displayValue.length = 0;
    historyDisplay.textContent = value;
    display.textContent = "";
    operatorDisplay.textContent = operator;
  };
  const eraseMemory = (all) => {
    operatorDisplay.textContent = "=";
    displayValue.length = 0;
    display.textContent = finalSum;
    if (all) {
      memoryValue = 0;
      operator = "";
      finalSum = undefined;
      operatorDisplay.innerHTML = "";
      display.innerHTML = "";
      historyDisplay.innerHTML = "";
    }
  };
  const eraseLastValue = () => {
    displayValue.pop();
    display.textContent = displayValue.join("");
  };
  function sum(a, b) {
    return a + b;
  }
  function subtraction(a, b) {
    return a - b;
  }
  function multiplication(a, b) {
    return a * b;
  }
  function division(a, b) {
    return a / b;
  }

  const operate = () => {
    historyDisplay.textContent = `${memoryValue} ${operator} ${displayValue.join("")}`;
    console.log(operator);
    switch (operator) {
      case "/":
        finalSum = division(memoryValue, parseInt(displayValue.join("")));
        break;
      case "*":
        finalSum = multiplication(memoryValue, parseInt(displayValue.join("")));
        break;
      case "-":
        finalSum = subtraction(memoryValue, parseInt(displayValue.join("")));
        break;
      case "+":
        finalSum = sum(memoryValue, parseInt(displayValue.join("")));
        break;
      default:
        break;
    }
    eraseMemory(false);
  };
  return { ans, eraseMemory, eraseLastValue, operate };
})();

function firstDisplay(value) {
  if (typeof value == "string") {
    if (displayValue.length != 0) {
      operator = value;
      core.ans(parseInt(displayValue.join("")));
    } else if (finalSum != undefined) {
      core.ans(finalSum);
    }
  } else {
    displayValue.push(value);
    display.textContent = displayValue.join("");
  }
}