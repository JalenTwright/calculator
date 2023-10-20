const num = document.querySelectorAll('.num');
const operator = document.querySelectorAll('.eq');
const clearButton = document.getElementById('nuke');
const deleteButton = document.getElementById('back');
let topScreen = document.querySelector('.input-top');
let bottomScreen = document.querySelector('.input-bottom');
const equalButton = document.getElementById('equal');

deleteButton.addEventListener('click', back);
clearButton.addEventListener('click', clear);
equalButton.addEventListener('click', calculate);


num.forEach(number => {
    number.addEventListener('click', (e) => {
        if(e.target.textContent === '.' && topScreen.textContent.includes('.'))return
        topScreen.textContent += e.target.textContent
        console.log(number.textContent)
    });
});



operator.forEach(op => {
    op.addEventListener('click', (e)  => {
        topScreen.textContent += e.target.textContent;
        console.log(op.textContent)
    });
});

function clear() {
    topScreen.textContent = ' '
    bottomScreen.textContent = ' '
}

function back() {
    topScreen.textContent = topScreen.textContent
    .toString()
    .slice(0, -1)
}; 

function calculate() {
    try {

        const expression = topScreen.textContent;
        const operands = expression.split(/[-+x÷]/);
        const operator = expression.match(/[-+x÷]/);

        if (operands.length !== 2 || !operator) {
            throw new Error('Invalid expression');
        }

        const num1 = parseFloat(operands[0]);
        const num2 = parseFloat(operands[1]);
        const op = operator[0];

        let result;

        switch (op) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case 'x':
                result = num1 * num2;
                break;
            case '÷':
                if (num2 === 0) {
                    throw new Error('Division by zero');
                }
                result = num1 / num2;
                break;
        }

        bottomScreen.textContent = result;
    } catch (error) {
        bottomScreen.textContent = 'Error';
    }
}

