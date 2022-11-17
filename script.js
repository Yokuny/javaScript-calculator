const historyDisplay = document.getElementById("secondDisplay");
const typingDisplay = document.getElementById("firstDisplay");
const operatorDisplay = document.getElementById("operatorDisplay");
let firstValueSequence = [];
let secondValueSequence = [];
let operator;
function operate(){
    historyDisplay.innerHTML = '';
    typingDisplay.innerHTML = '';
    operatorDisplay.innerHTML = '';
    operatorDisplay.textContent = "=";
    firstValueSequence = firstValueSequence.join('');
    console.log(`1º valor: ${firstValueSequence}`);
    console.log(`2º valor: ${secondValueSequence}`);
    historyDisplay.textContent = `${secondValueSequence} ${operator} ${firstValueSequence}`;

    let equationResult = 0;
    switch (operator) {
        case "/":
            equationResult = parseFloat(secondValueSequence) / parseFloat(firstValueSequence);
            typingDisplay.textContent = equationResult;
            break;
        case "*":
            equationResult = parseFloat(secondValueSequence) * parseFloat(firstValueSequence);
            typingDisplay.textContent = equationResult;
            break;
        case "-":
            equationResult = parseFloat(secondValueSequence) - parseFloat(firstValueSequence);
            typingDisplay.textContent = equationResult;
            break;
        case "+":
            equationResult = parseFloat(secondValueSequence) + parseFloat(firstValueSequence);
            typingDisplay.textContent = equationResult;
            break;
        default:
            break;
    }
}
function historyDisplayRender(){
    historyDisplay.textContent = secondValueSequence;
}
function eraseMemory(){
    firstValueSequence.length = 0
    secondValueSequence.length = 0
    operator = '';
    historyDisplay.innerHTML = '';
    typingDisplay.innerHTML = '';
    operatorDisplay.innerHTML = '';
}
function eraseLastValue(){
    firstValueSequence.pop();
    typingDisplay.textContent = firstValueSequence.join('');
}


function firstDisplay(value){
    if(typeof(value) == 'string'){
        operator = value;
        if(firstValueSequence.length != 0 && secondValueSequence){
            secondValueSequence = firstValueSequence.join('');
            historyDisplayRender();
            firstValueSequence.length = 0
            typingDisplay.textContent = '';
            operatorDisplay.textContent = value;
        }
    }else{
        firstValueSequence.push(value);
        typingDisplay.textContent = firstValueSequence.join('');
    }
}