const historyDisplay = document.getElementById("secondDisplay");
const typingDisplay = document.getElementById("firstDisplay");
const operatorDisplay = document.getElementById("operatorDisplay");
let firstValueSequence = [];
let secondValueSequence = 0;
let equationResult;
let operator;

const core = (() => {
  const ans = (value) => {
    //pego todos os valores recebido do usuario e passo para uma variavel armazenar
    secondValueSequence = value;
    //e limpo a primeira variavel para voltar a salvar os proximos numeros
    firstValueSequence.length = 0;
    historyDisplay.textContent = value;
    typingDisplay.textContent = "";
    operatorDisplay.textContent = operator;
  };
  const eraseMemory = (all) => {
    //apago alguns display e reseto algumas variaveis
    operatorDisplay.textContent = "=";
    firstValueSequence.length = 0;
    typingDisplay.textContent = equationResult;
    //zero todos meus displays e todas variaveis caso all = true
    if (all) {
      secondValueSequence = 0;
      operator = "";
      equationResult = undefined;
      operatorDisplay.innerHTML = "";
      typingDisplay.innerHTML = "";
      historyDisplay.innerHTML = "";
    }
  };
  const eraseLastValue = () => {
    //apaga o ultimo valor da array com pop e mostra no display
    firstValueSequence.pop();
    typingDisplay.textContent = firstValueSequence.join("");
  };
  const sum = (a, b) => a + b;
  const subtraction = (a, b) => a - b;
  const multiplication = (a, b) => a * b;
  const division = (a, b) => a / b;
  const operate = () => {
    historyDisplay.textContent = `${secondValueSequence} ${operator} ${firstValueSequence.join(
      ""
    )}`;
    switch (operator) {
      case "/":
        equationResult = division(
          secondValueSequence / parseInt(firstValueSequence.join(""))
        );
        break;
      case "*":
        equationResult = multiplication(
          secondValueSequence * parseInt(firstValueSequence.join(""))
        );
        break;
      case "-":
        z;
        equationResult = subtraction(
          secondValueSequence - parseInt(firstValueSequence.join(""))
        );
        break;
      case "+":
        equationResult = sum(
          secondValueSequence + parseInt(firstValueSequence.join(""))
        );
        break;
      default:
        break;
    }
    eraseMemory(false);
  };
  return { ans, eraseMemory, eraseLastValue, operate };
})();

function firstDisplay(value) {
  //essa função imprime na primeira tela os digitos que vão sendo digitados
  //caso seja passado um operador. Para a recepção de numero na primeira variavel
  if (typeof value == "string") {
    //pego o operador em uma variavel
    operator = value;
    //confiro se o usuario esta tentando calcular sem ter passado algum numero previamente
    if (firstValueSequence.length != 0) {
      core.ans(parseInt(firstValueSequence.join("")));
    } else if (equationResult != undefined) {
      core.ans(equationResult);
    }
  } else {
    //caso seja um numero eu o salvo em um array de valores
    firstValueSequence.push(value);
    typingDisplay.textContent = firstValueSequence.join("");
  }
}