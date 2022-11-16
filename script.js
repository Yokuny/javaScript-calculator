const historyDisplay = document.getElementById("secondDisplay");
const typingDisplay = document.getElementById("firstDisplay");
let firstValueSequence = [];
let secondValueSequence = [];
let operator;
function operate(firstValue, operator, secondValue){

}
function historyDisplayRender(){
    historyDisplay.textContent = secondValueSequence.join('');
}
function firstDisplay(value){
    console.log(value);
    if(typeof(value) == 'string'){
        secondValueSequence = firstValueSequence;
        historyDisplayRender();
        firstValueSequence.length = 0
        typingDisplay.textContent = '';
    }else{
        firstValueSequence.push(value);
        typingDisplay.textContent = firstValueSequence.join('');
    }

    //armazenar o valor em uma variavel para depois calcula-los
    //pegar o operador selecionado
    //e calcular quando o = por acionado
}