/*Вирахувати середній вік
важливість: 4
Напишіть функцію getAverageAge(users), яка приймає масив об’єктів з властивістю age та повертає середній вік.

Формула обчислення середнього арифметичного значення: (age1 + age2 + ... + ageN) / N.

Наприклад:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28*/

/* - - - Моя відповідь - - -*/
function getAverageAge (users) {
    return users.reduce ((prev, user) => prev + user.age, 0) / users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

console.log( getAverageAge(arr) )