/*Чи скопійовано масив?
важливість: 3
Що продемонструє наступний код?

let fruits = ["Apples", "Pear", "Orange"];

// додаємо нове значення в "копію"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// Що в fruits?
alert( fruits.length ); // ?*/

/* - - - Моя відповідь - - -*/
let fruits = ["Apples", "Pear", "Orange"];
let shoppingCart = fruits;
    shoppingCart.push("Banana");

console.log( fruits.length );
console.log ( fruits === shoppingCart)
/* Код демонстує, що в масиві 4 елементи. Першочергово був створений масив з 
Apples, Pear, Orange. Було створено нову змінну які було призначенно посилання 
на масив. Дальше в цей масив запушили Banana і виходячи з вище сказаного:
Масив в змінній fruits та shoppingCart це той же самий масив.
Тому масив не скопійовано, а лише посилання на нього. */