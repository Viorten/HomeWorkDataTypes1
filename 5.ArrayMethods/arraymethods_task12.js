/*Залишити унікальні елементи масиву
важливість: 4
Нехай arr – масив рядків.

Напишіть функцію unique(arr), яка повертає масив, що містить тільки унікальні елементи arr.

Наприклад:

function unique(arr) {
  / ваш код /
}

let strings = ["Привіт", "Світ", "Привіт", "Світ",
  "Привіт", "Привіт", "Світ", "Світ", ":-O"
];

alert( unique(strings) ); // Привіт, Світ, :-O*/

/* - - - Моя відповідь - - -*/
/*function unique(arr) {
  let result = [];
  for (str of arr) {
    if (!result.includes(str)) {
      result.push (str);
    }
  }
  return result;
}

let strings = ["Привіт", "Світ", "Привіт", "Світ",
  "Привіт", "Привіт", "Світ", "Світ", ":-O"
];

console.log( unique(strings) )*/

let strings = new Set (["Привіт", "Світ", "Привіт", "Світ",
  "Привіт", "Привіт", "Світ", "Світ", ":-O"
]);
for (let value of strings) console.log(value);