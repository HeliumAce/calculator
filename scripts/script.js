let currentNum = '';
let value1 = '';
let value2 = '';
let value3 = '';
let operator1 = '';
let operator2 = '';
let results = false;
let currentCalc = [];

const displayValue = document.getElementById('display');
const latestCalc = document.getElementById('latestCalc');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.getElementById('enter');
const clear = document.getElementById('clear');

numbers.forEach(item => {
    item.addEventListener('click', event => {
        if (results == true) {
            value1 = '';
            displayValue.innerHTML =  '';
            latestCalc.innerHTML = '';
            currentNum += item.innerHTML;
            currentCalc = [];
            displayValue.innerHTML = item.innerHTML;
            results = false;
        } else if (results == false) {
            currentNum += item.innerHTML;
            displayValue.innerHTML += item.innerHTML;
        }
        
    })
});

operators.forEach(item => {
    item.addEventListener('click', event => {
        if (results == true) {
            results = false;
        };
        setValues();
        updateOperation();
        if (operator1 != '') {
            operator2 = item.innerHTML;
        } else {
            operator1 = item.innerHTML;
        }
        currentNum = ''; 
        displayValue.innerHTML += item.innerHTML;
    })
});

//assigns the current number to a number variable
function setValues() {
    if (value1 != '' && value2 != '') {
        value3 = currentNum;
    } else if (value1 != '') {
        value2 = currentNum;
    } else {
        value1 = currentNum;
    }
}

//run an operation on the current calculation. update or reset new values and operators
function updateOperation () {
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
        operator1 = operator2;
    }
}

//compute the final calculation
function pressEnter () {
    if (operator2 === '*' || operator2 === '/') {
        value2 = operate(operator2, value2, value3);
        value3 = '';
        operator2 = '';
    } else if (operator2 === '+' || operator2 === '-') {
        value1 = operate(operator1, value1, value2);
        value2 = value3;
        value3 = '';
        operator1 = operator2;
    }
    currentCalc = [displayValue.innerHTML];
    //currentCalc = currentCalc.toString().split('').join(' ');
    //checkErrors();
}

clear.addEventListener('click', event => {
    displayValue.innerHTML =  '';
    latestCalc.innerHTML = '';
    currentNum = '';
    value1 = '';
    value2 = '';
    operator1 = '';
    operator2 = '';
    currentCalc = [];
});

equals.addEventListener('click', event => {
    if (currentNum == '' && value2 == '') {
        displayValue.innerHTML = value1 + operator1;
        return;
    } else if (currentNum == '') {
        displayValue.innerHTML =  value1;
        return;
    }
    setValues();
    pressEnter();
    displayValue.innerHTML =  operate(operator1, value1, value2);
    latestCalc.innerHTML = currentCalc + ' = ' + displayValue.innerHTML;
    currentNum = displayValue.innerHTML;
    value1 = currentNum;
    currentNum = '';
    value2 = '';
    operator1 = '';
    operator2 = '';
    results = true;
});

/* function checkErrors() {
    if (!value1) {
        results = true;
        currentNum = '';
        value1 = '';
        value2 = '';
        operator1 = '';
        operator2 = '';
        return displayValue.innerHTML = 'Calculation not supported';
    } else if (!value2 && operator2) {
        results = true;
        currentNum = '';
        value1 = '';
        value2 = '';
        operator1 = '';
        operator2 = '';
        return displayValue.innerHTML = 'Calculation not supported';
    }
}; */

function operate (opp, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    let round = 10e4;
    
    switch (opp) {
        case '+':
            return(Math.round((a + b) * round) / round);
            break;
        case '-':
            return(Math.round((a - b) * round) / round);
            break;
        case '*':
            return(Math.round((a * b) * round) / round);
            break;
        case '/':
            return(Math.round((a / b) * round) / round);
            break;
        default:
            console.log('Something went wrong...');

    }
}





