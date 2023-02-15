const x = +prompt("Введіть перше число");
const y = +prompt("Введіть друге число");

function getPow(x, y) {
    if(y===1) {
        return x
    } else {
        return x * getPow(x, y - 1)
    }
};
const result = alert(getPow(x, y))