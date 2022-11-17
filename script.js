const historyDisplay = document.getElementById("secondDisplay");
const typingDisplay = document.getElementById("firstDisplay");
const operatorDisplay = document.getElementById("operatorDisplay");
let firstValueSequence = [];
let secondValueSequence = 0;
let equationResult;
let operator;
function eraseLastValue(){
    //apaga o ultimo valor da array com pop e mostra no display
    firstValueSequence.pop();
    typingDisplay.textContent = firstValueSequence.join('');
}
function eraseMemory(all){
    //apago alguns display e reseto algumas variaveis
    operatorDisplay.textContent = "=";
    firstValueSequence.length = 0;
    typingDisplay.textContent = equationResult;
    //zero todos meus displays e todas variaveis caso all = true
    if(all){
        secondValueSequence = 0
        operator = '';
        equationResult = undefined;
        operatorDisplay.innerHTML = '';
        typingDisplay.innerHTML = '';
        historyDisplay.innerHTML = '';
    }
}
function operate(){
    historyDisplay.textContent = `${secondValueSequence} ${operator} ${firstValueSequence.join('')}`;
    switch (operator) {
        case "/":
            equationResult = secondValueSequence / parseInt(firstValueSequence.join(''));
            break;
        case "*":
            equationResult = secondValueSequence * parseInt(firstValueSequence.join(''));
            break;
        case "-":
            equationResult = secondValueSequence - parseInt(firstValueSequence.join(''));
            break;
        case "+":
            equationResult = secondValueSequence + parseInt(firstValueSequence.join(''));
            break;
        default:
            break;
    }
    eraseMemory(false);
}
function ANS(value){
    //pego todos os valores recebido do usuario e passo para uma variavel armazenar
    secondValueSequence = value;
    //e limpo a primeira variavel para voltar a salvar os proximos numeros
    firstValueSequence.length = 0;
    historyDisplay.textContent = value;
    typingDisplay.textContent = '';
    operatorDisplay.textContent = operator;
}
function firstDisplay(value){
    //essa função imprime na primeira tela os digitos que vão sendo digitados
    //caso seja passado um operador. Para a recepção de numero na primeira variavel
    if(typeof(value) == 'string'){
        //pego o operador em uma variavel
        operator = value;
        //confiro se o usuario esta tentando calcular sem ter passado algum numero previamente
        if(firstValueSequence.length != 0){
            ANS(parseInt(firstValueSequence.join('')));
        }else if(equationResult != undefined){
            ANS(equationResult);
        }
    }else{
        //caso seja um numero eu o salvo em um array de valores
        firstValueSequence.push(value);
        typingDisplay.textContent = firstValueSequence.join('');
    }
}