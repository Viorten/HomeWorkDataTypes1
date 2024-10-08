/*Трансформувати в обʼєкти
важливість: 5
У вас є масив обʼєктів user, і у кожного з обʼєктів є name, surname та id.

Напишіть код, який створить ще один масив обʼєктів з параметрами id й fullName, де fullName – складається з name та surname.

Наприклад:

let ivan = { name: "Іван", surname: "Іванко", id: 1 };
let petro = { name: "Петро", surname: "Петренко", id: 2 };
let mariya = { name: "Марія", surname: "Мрійко", id: 3 };

let users = [ ivan, petro, mariya ];

let usersMapped = / ... ваш код ... /

//
usersMapped = [
  { fullName: "Іван Іванко", id: 1 },
  { fullName: "Петро Петренко", id: 2 },
  { fullName: "Марія Мрійко", id: 3 }
]
//

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Іван Іванко

Отже, насправді вам потрібно трансформувати один масив обʼєктів в інший. 
Спробуйте використовувати =>. Це невелика хитрість.*/

/* - - - Моя відповідь - - -*/
let ivan = { name: "Іван", surname: "Іванко", id: 1 };
let petro = { name: "Петро", surname: "Петренко", id: 2 };
let mariya = { name: "Марія", surname: "Мрійко", id: 3 };

let users = [ ivan, petro, mariya ];

let usersMapped = users.map (user => ({
  fullName: `${user.name} ${user.surname}`,
  id: `${user.id}`
}));

console.log (usersMapped[0].id);
console.log (usersMapped[0].fullName)