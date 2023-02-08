const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

const positiveArr = arr.filter(el => el > 0);
let positiveSum = 0;
for (let value of positiveArr) {
    positiveSum += value;
}
alert ('Кількість позитивних елементів ' + positiveArr.length + ", їх сумма " + positiveSum);

const min = Math.min(...arr);
const minIndex = arr.indexOf(min) + 1;
alert('Мінімальне число ' + min + ", порядковий номер " + minIndex);

const max = Math.max(...arr);
const maxIndex = arr.indexOf(max) + 1;
alert('Максимальне число ' + max + ", порядковий номер " + maxIndex);

const negativeArr = arr.filter(el => el < 0);
alert ('Кількість негативних елементів ' + negativeArr.length);

const positiveOdd = positiveArr.filter(el => el %2 !== 0);
alert ('Кількість непарних позитивних елементів ' + positiveOdd.length);

const positiveEven = positiveArr.filter(el => el %2 === 0);
alert ('Кількість парних позитивних елементів ' + positiveEven.length);

let sumPositiveEven = 0;
for (let value of positiveEven) {
    sumPositiveEven += value;
}
alert ('Сума парних позитивних елементів ' + sumPositiveEven);

let sumPositiveOdd = 0;
for (let value of positiveOdd) {
    sumPositiveOdd += value;
}
alert ('Сума непарних позитивних елементів ' + sumPositiveOdd);

let positiveMult = 1;
for (let value of positiveArr) {
    positiveMult *= value;
}
alert ('Добуток позитивних елементів ' + positiveMult);

const newArr = [];
for (let value of arr) {
    if(max !== value) {
        newArr.push (0);
    } else {
        newArr.push(value);
    }
}
alert ('Найбільший серед елементів масиву ' + max + ', обнулений масив ' + 
newArr);