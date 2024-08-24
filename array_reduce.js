/*function sumInput () {
    let numbers = []
    while (true) {
        let value = prompt ('Введіть число', 0);
            if (value === '' || value === null || !isFinite(value)) break;
        numbers.push(+value);
    }
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
alert (`Я тут порахував і ось що вийшло: ${sumInput ()}`);*/

function sumInput() {
    let numbers = [];
    while (true) {
        let value = prompt('Введіть число', 0);
            if (value === '' || value === null || !isFinite(value)) break;
        numbers.push(+value);
    }
    let sum = numbers.reduce((a, b) => a + b, 0);
        return sum;
}
alert(` Я тут порахував те,\n що ти нащолкав i вийшло:\n ${sumInput ()}`);