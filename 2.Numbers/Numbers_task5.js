/*Випадкове число від min до max (Задача)
важливість: 2
Вбудована функція Math.random() створює випадкове значення від 0 до1 (не враховуючи 1).

Напишіть функцію random(min, max) для створення випадкового числа з плаваючою крапкою від min до max (не враховуючи max).

Приклади його роботи:

alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525*/

/* - - - Моя відповідь - - -*/
function random (min, max) {
    return min + Math.random () * (max - min);
}

console.log (random (1, 5));
console.log (random (1, 5));
console.log (random (1, 5))