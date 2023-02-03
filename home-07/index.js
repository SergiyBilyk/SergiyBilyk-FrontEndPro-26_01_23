const numberOne = Number(prompt('Яке перше число?'));
const numberTwo = Number(prompt('Яке друге число?'));
const numberThree = Number(prompt('Яке третє число?'));

let result = (numberOne + numberTwo + numberThree) / 3;
if (result) {
    alert(`Середнє значення ${parseFloat(result.toFixed(2))}`);
} else {
    alert('Помилка! Введіть число');
}
