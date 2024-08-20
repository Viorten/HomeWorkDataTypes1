/*Довільне ціле число від min до max (Задача)
важливість: 2
Створіть функцію randomInteger(min, max), яка генерує випадкове ціле число від min до max включно.

Будь-яке число з інтервалу min..max повинно з’являтися з однаковою ймовірністю.

Приклади його роботи:

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5
Ви можете використовувати рішення попереднього завдання як основу.*/

/* - - - Моя відповідь - - -*/
function randomInteger (min, max) {
    return Math.floor (min + Math.random() * (max - min + 1));
}

console.log ( randomInteger (1, 5));
console.log ( randomInteger (1, 5));
console.log ( randomInteger (1, 5));