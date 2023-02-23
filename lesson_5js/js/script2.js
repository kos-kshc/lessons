/*
Створити 10 елементів для введення цін продуктів
 */
task2 = document.getElementById("answer");
for (i = 0; i < 10; i++) {
  task2.innerHTML += `<p>Product ${
    i + 1
  }<input type="number" placeholder="Введіть ціну товара:"></p>`;
}
