const result = [];
for (let i = 10; i < 21; i++) {
    result.push(i);
}
alert(`Числа від 10 до 20 = ${result}`);

const result2 = [];
for (let i = 10; i < 21; i++) {
    result2.push(Math.pow(i, 2));
}
alert(`Квадрати чисел від 10 до 20 = ${result2}`);

document.write('Вивести таблицю множення 7' + '<br>' + '<br>')
for (let i = 1; i < 11; i++) {
    document.write(i + ' * ' + 7 + ' = ' + i * 7 + '<br>');
}

let result4 = 0;
for (let i = 1; i <= 15; i++) {
    result4 += i;
}
alert(`Cумма всіх цілих чисел від 1 до 15 = ${result4}`);

let bigInt = 1n;
for (let i = 15; i <= 35; i++) {
    bigInt *= BigInt(i);
}
alert(`Добуток усіх цілих чисел від 15 до 35 = ${bigInt}`);

let number1 = 0;
let number2 = 0;
for (let i = 1; i <=500 ; i++) {
    number1 += i;
    number2 = i;
}
const result5 = number1/number2;
alert(`Cереднє арифметичне всіх цілих чисел від 1 до 500 = ${result5}`);

let result6 = 0;
for (let i = 30; i <= 80; i++) {
    if(i % 2 === 0){
        result6 += i;
    }
}
alert(`Cумма парних чисел в діапазоні від 30 до 80 = ${result6}`);

let result7 = [];
for (let i = 100; i <= 200; i++) {
    if(i % 3 === 0){
        result7.push(i);
    }
}
alert(`Вивести числа від 100 до 200 кратні 3 ${result7}`);

let numberUser = +prompt('Введіть натуральне число');
let result8 = [];
let result8Count = 0;
let result8Sum = 0;
for (let i = 1; i <= numberUser; i++) {
    if(numberUser % i === 0){
        result8.push(i);
        if (i % 2 === 0) {
            result8Count++;
            result8Sum += i;
        }
    }
}
alert(`Всі дільники числа ${numberUser} 
${result8}
Кількість його парних дільників = ${result8Count} 
Сума його парних дільників = ${result8Sum}`);

document.write('<br>' + 'Надрукувати повну таблицю множення від 1 до 10' + '<br>')
for (let i = 1; i <= 10; i++) {
    document.write('<br>')
    for (let j = 1; j <= 10; j++) {
        document.write(i + ' * ' + j + ' = ' + i * j + '<br>');
    }
}
