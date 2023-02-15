const x = +prompt("Введіть перше число");
const y = +prompt("Введіть друге число");

function pow(num, degree) {
    if(degree === 1) {
        return num
    } else {
        return num * pow(num, degree - 1)
    }
};
const result = alert(pow(x, y))