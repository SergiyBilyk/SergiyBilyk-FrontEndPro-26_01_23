const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const max =  characters.length - 1;

function getRandomNumb() {
    return Math.ceil(Math.random() * max);
}

function generateKey(length, characters) {
    let result = '';
    for(let i = 0; i < length; i++) {
        result += characters[getRandomNumb()];
    }
    return result
}

const key = generateKey(16, characters);
console.log(key);

