/* Переведіть текст виду border-left-width в borderLeftWidth
важливість: 5
Напишіть функцію camelize(str), яка перетворює такі рядки “my-short-string” в “myShortString”.

Тобто дефіси видаляються, а всі слова після них починаються з великої літери.

Приклади:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

P.S. Підказка: використовуйте split, щоб розбити рядок на масив символів, 
потім переробіть все як потрібно та методом join зʼєднайте елементи в рядок.*/

/* - - - Моя відповідь - - -*/
let arr = ["background-color", "list-style-image", "-webkit-transition"]
function camelize (str) {
    return str
        .split ('-')
        .map (
        (word, index) => index == 0 ? word: word [0].toUpperCase() + word.slice (1)
    )
        .join ('');
}
console.log (arr.map(camelize))