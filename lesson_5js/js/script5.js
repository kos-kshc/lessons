//Задача 5. Вивести таблицю
document.write(
  `<p>Цю таблицю треба вивести за допомогою циклів</p><img class="task5-img" src="../img/task5.png" alt="">`
);
let k = 1;
document.write(`<table>`);
for (let i = 0; i < 3; i++) {
  document.write(`<tr>`);
  for (let j = 0; j < 3; j++) {
    document.write(`<td>${k}</td>`);
    k++;
  }
  document.write(`</tr>`);
}
document.write(`</table>`);
