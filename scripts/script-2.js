const displayValue = document.getElementById('display');
let currentNum = '';
let value1 = '';
let value2 = '';
let value3 = '';
let operator1 = '';
let operator2 = '';

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.getElementById('enter');
const clear = document.getElementById('clear');

numbers.forEach(item => {
    item.addEventListener('click', event => {
        currentNum += item.innerHTML;
        displayValue.innerHTML += item.innerHTML;
    })
});

operators.forEach(item => {
    item.addEventListener('click', event => {
        setValues();
        checkValues();
        if (operator1 != '') {
            operator2 = item.innerHTML;
        } else {
            operator1 = item.innerHTML;
        }
        currentNum = ''; 
        displayValue.innerHTML += item.innerHTML;
    })
});

function setValues() {
    if (value1 != '' && value2 != '') {
        value3 = currentNum;
    } else if (value1 != '') {
        value2 = currentNum;
    } else {
        value1 = currentNum;
    }
}

function checkValues () {
    if (operator1 === '*' || operator1 === '/') {
        value1 = operate(operator1, value1, value2);
        value2 = '';
        operator1 = '';
    } else if (operator2 === '*' || operator2 === '/') {
        value2 = operate(operator2, value2, value3);
        value3 = '';
        operator2 = '';
    } else if (operator2 === '+' || operator2 === '-') {
        value1 = operate(operator1, value1, value2);
        value2 = value3;
        value3 = '';
    }
}



clear.addEventListener('click', event => {
    displayValue.innerHTML =  '';
    currentNum = '';
    value1 = '';
    value2 = '';
    operator1 = '';
    operator2 = '';
});

equals.addEventListener('click', event => {
    setValues();
    checkValues();
    displayValue.innerHTML =  operate(operator1, value1, value2);
    currentNum = displayValue.innerHTML;
});

function operate (opp, a, b) {
    a = parseInt(a);
    b = parseInt(b);
    
    switch (opp) {
        case '+':
            console.log(a + b);
            return(a + b);
            break;
        case '-':
            console.log(a - b);
            return(a - b);
            break;
        case '*':
            console.log(a * b);
            return(a * b);
            break;
        case '/':
            console.log(a / b);
            return(a / b);
            break;
        default:
            console.log('Something went wrong...');

    }
}





