const arr = [null, 2, 5, undefined, "ssf", 45, 5, -5, 10, 0, 25, undefined]
let average = 0;

function getAverage (arr) {
    let sum = 0;
    let count = 0;
    arr.filter(function(element) {
        if (typeof element === "number") {
            sum += element 
            count++
        }
        return
    });
    return average = (sum / count).toFixed(2)
}

const result = getAverage (arr)
console.log('Cереднє арифметичне лише числових елементів даного масиву ' + result)





const x = +prompt("2) Введіть перше число");
const y = +prompt("Введіть друге число");
const znak = prompt("Введите знак бажаної операції(+, -, *, /, %, ^ )");
let result2 = 0;

function doMath(x, znak, y) {
    switch (znak) {
        case '+':
            return result2 = x + y;
        case '-':
            return result2 = x - y;
        case '*':
            return result2 = x * y;
        case '/':
            return result2 = x / y;
        case '%':
            return result2 = x % y;
        case '^':
            return result2 = Math.pow(x,y);
        default: 
            result2 ="Щось введено невірно"
    }
    return result2
}
console.log(doMath(x, znak, y));





const arrLength = +prompt('3) Яка довжина масива');
let arr2 = [];

function addArr() {
    for(let i = 0; i < arrLength; i++) {
        let a = (prompt(`Введіть значення масиву ${i + 1} через пробіл`)).trim().split(' ');
        arr2[i] = [a];
    }
    return arr2
}

console.log(addArr())




function delSymbol() {
    let words = prompt('Введіть фразу');
    let symbols = prompt('Введіть символи без пробілу');
    let wordsArr = words.split("");
    let symboslArr = symbols.split("");

    for(let i = 0; i < wordsArr.length; i++) {
        for(let k = 0; k < symboslArr.length; k++) {
            if (wordsArr[i] === symboslArr[k]) {
                wordsArr.splice(i, 1);
                i--;
            }
        }
    }
    return wordsArr.join("");
}

const result3 = delSymbol();
console.log(result3);