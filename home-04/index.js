const firstNumber = Number(prompt('Enter the first number'));
const secondNumber = Number(prompt('Enter the second number'));

if (firstNumber && secondNumber) {
    let add = firstNumber + secondNumber;
    let sub = firstNumber - secondNumber;
    let mul = firstNumber * secondNumber;
    let div = firstNumber / secondNumber;
    alert (`${firstNumber}+${secondNumber}=${add}
${firstNumber}-${secondNumber}=${sub} 
${firstNumber}*${secondNumber}=${mul} 
${firstNumber}/${secondNumber}=${div}`);
} else {
    alert('Error. Enter numbers');
}

