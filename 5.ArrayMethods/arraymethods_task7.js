/*Трансформувати в масив імен
важливість: 5
У вас є масив об’єктів user, і в кожному з них є user.name. Напишіть код, який перетворює їх в масив імен.

Наприклад:

let ivan = { name: "Іван", age: 25 };
let petro = { name: "Петро", age: 30 };
let mariya = { name: "Марія", age: 28 };

let users = [ ivan, petro, mariya ];

let names = / ... ваш код /

alert( names ); // Іван, Петро, Марія*/

/* - - - Моя відповідь - - -*/
let ivan = { name: "Іван", age: 25 };
let petro = { name: "Петро", age: 30 };
let mariya = { name: "Марія", age: 28 };

let users = [ ivan, petro, mariya ];

let names = users.map (item => item.name)

console.log (names)