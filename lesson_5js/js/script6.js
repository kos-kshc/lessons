//Задача 6. Вивести 3 таблиці (по 3 рядки і 3 стовпці у кожній) за зразком
document.write(
  `<p>Ці таблиці треба вивести за допомогою циклів</p><img class="task6-img" src="../img/task6.png" alt="">`
);
let k = 1;
document.write(`<div>`);
for (p = 0; p < 3; p++) {
  document.write(`<table class="task6-table">`);
  for (let i = 0; i < 3; i++) {
    document.write(`<tr>`);
    for (let j = 0; j < 3; j++) {
      document.write(`<td>${k}</td>`);
      k++;
    }
    document.write(`</tr>`);
  }
  document.write(`</table>`);
}
document.write(`</div>`);
