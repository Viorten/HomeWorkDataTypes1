/*Максимальний підмасив
важливість: 2
На вході масив чисел, наприклад arr = [1, -2, 3, 4, -9, 6].

Завдання: знайти неперервний підмасив arr з максимальною сумою елементів.

Написати функцію getMaxSubSum(arr) яка повертає таку суму.

Наприклад:

getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 (take all)

Якщо всі елементи менші нуля, нічого не беремо, це означає, що підмасив пустий, а сума рівна нулю:

getMaxSubSum([-1, -2, -3]) = 0

Будь ласка, подумайте над швидким рішенням: O(n2) або навіть над рішенням O(n), якщо зможете.*/

/* - - - Моя відповідь - - -*/
function getMaxSubSum (arr) {
    let maxsum = 0;
    let partofsum = 0;
        for (let number of arr) {
            partofsum += number;
            maxsum = Math.max (maxsum, partofsum);
                if (partofsum < 0) partofsum = 0;
        }
        return maxsum;
}
console.log (getMaxSubSum([-1, 2, 3, -9]));
console.log (getMaxSubSum([2, -1, 2, 3, -9]));
console.log (getMaxSubSum([-1, 2, 3, -9, 11]));
console.log (getMaxSubSum([-2, -1, 1, 2]));
console.log (getMaxSubSum([100, -9, 2, -3, 5]));
console.log (getMaxSubSum([1, 2, 3]));