/*
Вивести таблицю з одним рядком і 7 стовпцями.
*/

//Вирішуємо задачу згідно з умовою
document.write(`<table>`);
document.write(`<tr>`);
for (let i = 0; i < 7; i++) {
  document.write(`<td>${i + 1}`);
}
document.write(`</tr>`);
document.write(`</table>`);
