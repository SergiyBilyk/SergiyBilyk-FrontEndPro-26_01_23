const hours = Number(prompt('Напишіть, яка кількість годин?'));

let result;
if (hours) {
    result = hours * 3600;
    alert(`${result} секунд`);
} else {
    alert('Помилка! Введіть число');
}
