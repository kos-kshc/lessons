/*
Вивести з використанням циклів маркований список з випадковими числами (1-100).
Кількість випадкових чисел вводиться користувачем.
 */
//Отримаємо кількість випадкових чисел від користувача
let numberFromUser = parseInt(prompt("Введіть кількість випадкових чисел"));

//Вирішуємо задачу і виводимо результат на сторінку за допомогою циклу for
let task1 = document.getElementById("mark-list");

for (let i = 0; i <= numberFromUser; i++) {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  task1.innerHTML += `<li>${randomNumber}</li>`;
}
