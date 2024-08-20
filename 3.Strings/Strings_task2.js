/*Перевірка на спам (Задача)
важливість: 5
Напишіть функцію checkSpam(str), яка повертає true, якщо str містить ‘viagra’ or ‘XXX’, інакше false.

Функція має бути нечутливою до регістру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false*/

/* - - - Моя відповідь - - -*/
function checkSpam (str) {
    let string = str.toLowerCase ();
    return string.includes ('viagra') || string.includes ('xxx');
}
console.log (checkSpam('buy ViAgRA now')); 
console.log (checkSpam('free xxxxx')); 
console.log (checkSpam("innocent rabbit"))