/*Чи можна додати властивість до рядка? (Задача)
важливість: 5
Розглянемо наступний код:

let str = "Привіт";

str.test = 5;

alert(str.test);
Як ви думаєте, чи буде це працювати? Що буде показано?*/

/* - - - Моя відповідь - - -*/
let str = "Привіт";

str.test = 5;

console.log(str.test);
// результат undefined
/* На скільки я зрозумів, до рядка можна додати властивість, але доступитись
до неї не можна. Тут в нас є рядок str = 'Привіт' та на наступному рядку коду
str.test = 5 - очевидно, що створюється об'єкт та зникає, а властивість яка додана 
до рядка - безкорисна, бо до неї не можна доступитись*/