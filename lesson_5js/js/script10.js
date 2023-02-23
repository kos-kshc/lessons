/*
Задача 10. Знайти суму всіх непарних чисел, що знаходяться між заданими користувачем числами.
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
  let i = firstUserValue + 1;
  i < secondUserValue;
  i++
) {
  if (i % 2 != 0) {
    sum = sum + i;
  }
}
document.write(`Сума всіх непарних чисел = ${sum}`);
