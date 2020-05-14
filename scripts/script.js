const displayValue = document.getElementById('display');
let currentNum = '';
let currentCalc = [];

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.getElementById('enter');
const clear = document.getElementById('clear');

numbers.forEach(item => {
    item.addEventListener('click', event => {
        console.log(item.innerHTML);
        currentNum += item.innerHTML;
        displayValue.innerHTML += item.innerHTML;
    })
});

operators.forEach(item => {
    item.addEventListener('click', event => {
        console.log(item.innerHTML);
        currentCalc.push(currentNum);
        currentCalc.push(item.innerHTML);
        currentNum = ''; 
        displayValue.innerHTML += item.innerHTML;
    })
});

clear.addEventListener('click', event => {
    displayValue.innerHTML =  '';
    currentNum = '';
    currentCalc = [];
});

equals.addEventListener('click', event => {
    currentCalc.push(currentNum);
    operate(currentCalc[1], currentCalc[0], currentCalc[2]);
    displayValue.innerHTML =  '';
    currentNum = '';
    currentCalc = [];
});

function operate (opp, a, b) {
    a = parseInt(a);
    b = parseInt(b);
    
    switch (opp) {
        case '+':
            console.log(a + b);
            break;
        case '-':
            console.log(a - b);
            break;
        case '*':
            console.log(a * b);
            break;
        case '/':
            console.log(a / b);
            break;
        default:
            console.log('Something went wrong...');

    }
}





