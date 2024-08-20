/*Урізання тексту (Задача)
важливість: 5
Створіть функцію truncate(str, maxlength), яка перевіряє довжину str і, якщо вона перевищує maxlength – замінює кінець str символом трьох крапок "…", щоб його довжина була рівною maxlength.

Результатом функції повинен бути урізаний (якщо потребується) рядок.

Наприклад:

truncate("Що я хотів би розповісти на цю тему:", 20) == "Що я хотів би розпо…"

truncate("Всім привіт!", 20) == "Всім привіт!"*/

/* - - - Моя відповідь - - -*/
function truncate (str, maxlength){
    return (str.length > maxlength) ? 
    str.slice(0, maxlength - 1) + '...' : str;
}
console.log(truncate("Що я хотів би розповісти на цю тему:", 20));
console.log(truncate("Всім привіт!", 20));
console.log(truncate('В мене добре виходить вчити JavaScript!', 20));
console.log(truncate('Я вчусь :)'))