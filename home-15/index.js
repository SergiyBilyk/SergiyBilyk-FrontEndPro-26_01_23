const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item) {
    return array.splice(item - 1, 1);
}   

removeElement(array, 1);
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]