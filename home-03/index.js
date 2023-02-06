const userText = prompt('Напишіть першу частину');
const userText2 = prompt('Тепер другу');
const userText3 = prompt('І заключну');
alert(`${userText} ${userText2} ${userText3}`);

const userNumber = prompt('Введіть п\'ятизначне значне число');
const userAnswer = userNumber.split('').join(' ');
alert(userAnswer);