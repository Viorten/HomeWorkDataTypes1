/*Виділіть гроші (Задача)
важливість: 4
У нас є вартість у вигляді "$120". Тобто: спочатку йде знак долара, а потім число.

Створіть функцію extractCurrencyValue(str), яка витягне числове значення з такого рядка та поверне його.

Приклад:

alert( extractCurrencyValue('$120') === 120 ); // true*/

/* - - - Моя відповідь - - -*/
function extractCurrencyValue (str) {
    return str.slice (1);
}
console.log ( extractCurrencyValue('$120'))