/*
Задача 11. Знайти суму 5 непарних чисел, що знаходяться між заданими користувачем числами.
*/

let firstUserValue = parseInt(prompt(`Введіть перше число:`));
let secondUserValue = parseInt(prompt(`Введіть друге число:`));
let sum;
if (firstUserValue > secondUserValue) {
  sum = secondUserValue;
  secondUserValue = firstUserValue;
  firstUserValue = sum;
}
sum = 0;
for (
  let i = firstUserValue + 1, j = 0;
  i > firstUserValue && i < secondUserValue && j < 5;
  i++
) {
  if (i % 2 != 0) {
    sum = sum + i;
    j++;
  }
}
document.write(`Сума 5 непарних чисел = ${sum}`);
