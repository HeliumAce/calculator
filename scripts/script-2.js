const displayValue = document.getElementById('display');
let currentNum = '';
let value1 = '';
let value2 = '';
let value3 = '';
let currentOpp = '';

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
        setValues();
        // checkValues();
        if (currentOpp === '*' || currentOpp === '/') {
            currentOpp = item.innerHTML;
            console.log('currentOpp is ' + currentOpp);
        } else if (currentOpp === '+' || currentOpp === '-') {
            console.log('currentOpp is ' + currentOpp)
        } else {
            currentOpp = item.innerHTML;
            console.log('currentOpp has been set to ' + currentOpp);
        }
        currentNum = ''; 
        displayValue.innerHTML += item.innerHTML;
    })
});

function setValues() {
    if (value1 != '' && value2 != '') {
        value1 = operate(currentOpp, value1, value2);
    } else if (value1 != '') {
        value2 = currentNum;
    } else {
        value1 = currentNum;
    }
}

/* function checkValues () {
    if (currentOpp === '*' || currentOpp === '/') {
        value1 = operate(currentOpp, value1, value2);
    }
} */



clear.addEventListener('click', event => {
    displayValue.innerHTML =  '';
    currentNum = '';
    value1 = '';
    value2 = '';
    value3 = '';
    currentOpp = '';
});

equals.addEventListener('click', event => {
    setValues();
    displayValue.innerHTML =  operate(currentOpp, value1, value2);
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





