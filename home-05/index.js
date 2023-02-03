const addAction = prompt('Select math action (add, sub, mult or div)').toLocaleLowerCase();
if (addAction !== 'add' && addAction !== 'sub' && addAction!== 'mult' && addAction !== 'div') {
    alert ('Error. Choose the right command');
} else {
    const firstNumber = Number(prompt('Enter the first number'));
    const secondNumber = Number(prompt('Enter the second number'));
    let result;
    if (firstNumber && secondNumber) {
        switch (addAction) {
            case 'add':
                result = firstNumber + secondNumber;
                alert (`${firstNumber} + ${secondNumber} = ${result}`);
                break;
            case 'sub':
                result = firstNumber - secondNumber;
                alert (`${firstNumber} - ${secondNumber} = ${result}`);
                break;
            case 'mult':
                result = firstNumber * secondNumber;
                alert (`${firstNumber} * ${secondNumber} = ${result}`);
                break;
            case 'div':
                result = firstNumber / secondNumber;
                alert (`${firstNumber} / ${secondNumber} = ${result}`);
                break;
        }
    } else {
        alert('Error. Enter numbers');
    }
}
