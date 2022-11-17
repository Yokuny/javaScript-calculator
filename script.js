const historyDisplay = document.getElementById("secondDisplay");
const typingDisplay = document.getElementById("firstDisplay");
const operatorDisplay = document.getElementById("operatorDisplay");
let firstValueSequence = [];
let secondValueSequence = [];
let operator;
function operate(firstValue, operator, secondValue){

}
function historyDisplayRender(){
    historyDisplay.textContent = secondValueSequence.join('');
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
        if(firstValueSequence.length != 0){
            secondValueSequence = firstValueSequence;
            historyDisplayRender();
            firstValueSequence.length = 0
            typingDisplay.textContent = '';
            operatorDisplay.textContent = value;
        }
    }else{
        firstValueSequence.push(value);
        typingDisplay.textContent = firstValueSequence.join('');
    }

    //armazenar o valor em uma variavel para depois calcula-los
    //pegar o operador selecionado
    //e calcular quando o = por acionado
}