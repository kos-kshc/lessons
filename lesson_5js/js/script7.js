/*
Задача 7.Вивести на екран N абзаців (N вводиться користувачем) за зразком:
*/
document.write(
  `<p>Такого вигляду параграфи треба вивести за допомогою циклів</p><img class="task7-img" src="../img/task7.png" alt="">`
);
let paragraphNumber = parseInt(prompt("Введіть кількість параграфів"));

for (let i = 0; i < paragraphNumber; i++) {
  document.write(`<div class="block1"><h1>Заголовок ${i + 1}</h1>`);
  for (let j = 0; j < paragraphNumber; j++) {
    if (j > i) break;
    else document.write(`<p>Розділ ${i + 1}, Параграф ${j + 1}</p>`);
  }
  document.write(`</div>`);
}
