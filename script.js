let firstValue = 0;
let secondValue = 0;
let operator 

const displayValues = [];

const display = document.querySelector("span"); 
const numberButtons = document.querySelectorAll("button.number");
const clearButton = document.querySelector("button.clear-button");
const equalButton = document.querySelector("button.equal-button");
const operators = document.querySelectorAll("button.operator");
const dotButton = document.querySelector("button.dot-button");

dotButton.addEventListener("click", () => {
    const checkForDot = displayValues.filter((element) => element == "." ) 
    if(checkForDot.length == 0){ 
    displayValues.push(dotButton.textContent);
    display.textContent = displayValues.join("");
    };
});

numberButtons.forEach((button) => button.addEventListener("click",() =>{
    displayValues.push(button.textContent);
    display.textContent = displayValues.join("");
}));

operators.forEach((button) => button.addEventListener("click", () => {
    if(firstValue === 0 && display.textContent != "Error"){
    firstValue = parseFloat(display.textContent); 
    } 
    displayValues.length = 0;
    operator = button.textContent;
}));

clearButton.addEventListener("click", () => {
    firstValue = 0;
    secondValue = 0;
    displayValues.length = 0;
    display.textContent = 0;
});

equalButton.addEventListener("click", () => {
    if(secondValue == 0){
    secondValue = parseFloat(display.textContent);
    };
    if(secondValue == 0 && operator == "/"){
        display.textContent = "Error";
        firstValue = 0;
        secondValue = 0;
        displayValues.length = 0;
    }else{
    const result = operate(firstValue,secondValue,operator);
    if(result != Math.floor(result)){
        const twoDecimalsResult = (Math.round(result * 100) / 100).toFixed(2);
        display.textContent = twoDecimalsResult; 
        firstValue = parseFloat(twoDecimalsResult);
    }else{
        display.textContent = result;
        firstValue = parseFloat(result);
    }    
    }
});

function operate(a,b,op){
    if(op === "+"){
        return add(a,b);
    }else if(op === "-"){
        return subtract(a,b);
    }else if(op === "*"){
        return multiply(a,b);
    }else if(op === "/"){
        return divide(a,b);
    }else{
        return b
    }
};

function add(a,b){
    return a + b;
};

function subtract(a,b){
    return a - b;
};

function multiply(a,b){
    return a * b;
};


function divide(a,b){
    return a / b;
};


