/*Створити розширюваний калькулятор
важливість: 5
Створіть функцію-конструктор Calculator, яка створює «розширюваний» обʼєкт калькулятора.

Завдання складається з двох частин.

1. По-перше, реалізуйте метод calculate(str), який приймає рядок типу "1 + 2" в форматі 
«ЧИСЛО оператор ЧИСЛО» (розділені пробілами) і повертає результат. Метод повинен розуміти плюс + і мінус -.

Приклад використання:
let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

2. Потім додайте метод addMethod(name, func), який додає в калькулятор нові операції. 
Він приймає оператор name і функцію з двома аргументами func(a, b), яка описує його.

Наприклад, давайте додамо множення *, ділення / і зведення в ступінь **:
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8

Для цього завдання не потрібні дужки або складні вирази.
Числа і оператор розділені рівно одним пропуском.
Не зайвим буде додати обробку помилок.*/

/* - - - Моя відповідь - - -*/
function Calculator () {
    this.method = {
        '+' : (a, b) => a + b,
        '-' : (a, b) => a - b
    }
    this.calculate = function (str) {
        let split = str.split (' '),
        a = +split [0],
        operator = split [1],
        b = +split [2];

        if (!this.method[operator] || isNaN (a) || isNaN (b)) {
            return NaN;
        }
        return this.method [operator] (a, b);
    }
    this.addmethod = function (name, func) {
        this.method[name] = func;
    }
}

let calc = new Calculator;
console.log (calc.calculate('3 + 7'));

let powerCalc = new Calculator;
powerCalc.addmethod("*", (a, b) => a * b);
powerCalc.addmethod("/", (a, b) => a / b);
powerCalc.addmethod("**", (a, b) => a ** b);

console.log( powerCalc.calculate("2 ** 3") );
console.log( powerCalc.calculate ('4 * 5') );
console.log( powerCalc.calculate ('10 / 2') );
console.log( powerCalc.calculate ('NF / 2') );