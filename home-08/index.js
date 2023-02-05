const year = +prompt('Який ваш рік народження?');
const town = prompt('В якому місті проживаєте?');
const sport = prompt('Ваш улюблений вид спорту?');

let yearAnswer;
let townAnswer;
let sportAnswer;

if (year) {
    yearAnswer = `Вам ${2023 - year} років`;
} else if ('' + year === 'NaN') {
    yearAnswer = 'Правильно введіть ваш рік народження';
} else {
    yearAnswer = 'Шкода, що Ви не захотіли ввести свій(ю) рік народження';
}

switch(town) {
    case 'київ':
        townAnswer = `Ти живеш у столиці України`;
        break;
    case 'вашингтон':
        townAnswer = `Ти живеш у столиці США`;
        break;
    case 'лондон':
        townAnswer = `Ти живеш у Великобританії`;
        break;
    case town === ' ': {
        townAnswer = 'Шкода, що Ви не захотіли';
        break;
    }
    case null: {
        townAnswer = 'Шкода, що Ви не захотіли ввести своє місто';
        break;
    }
    default:
        townAnswer = `Ти живеш у місті ${town}`;
}

switch(sport) {
    case 'бокс':
        sportAnswer = `Круто! Хочеш стати Усиком`;
        break;
    case 'футбол':
        sportAnswer = `Круто! Хочеш стати Роналдіньо`;
        break;
    case 'формула':
        sportAnswer = `Круто! Хочеш стати Гамільтоном`;
        break;
    case null: {
        sportAnswer = 'Шкода, що Ви не захотіли ввести улюблений спорт';
        break;
    }
    default:
        sportAnswer = `Твій улюблений спорт ${sport}`;
}

alert(`${yearAnswer}.
${townAnswer}.
${sportAnswer}.`);