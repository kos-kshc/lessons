/*
Вивести таблицю з 3 рядків і 7 стовпців
*/
//Вирішуємо задачу згідно з умовою
document.write('<table border="2px">');
for (let i = 0; i < 3; i++) {
  document.write("<tr>");
  for (let j = 0; j < 7; j++) {
    document.write(`<td>${j + 1}</td>`);
  }
  document.write("</tr>");
}
document.write("</table>");
