/*
Задача 14. Каса. Користувачу повідомляють суму, яку йому треба сплатити. Користувач поступово вводить
суму грошей до тих пір, поки суми не буде достатньо для оплати товарів (кожного разу користувачу
повідомляють, яку ще суму потрібно ввести).
*/
let moneyNeed = Math.floor(Math.random() * 1000);
const moneySum = moneyNeed;
let customerMoney = 0;

do {
  alert(`You should pay ${(moneyNeed = moneyNeed - customerMoney)}`);
  customerMoney = parseInt(
    prompt(`Введіть суму грошей яку ви хочете сплатити:`)
  );
} while (customerMoney < moneyNeed);
document.write(`Ви сплатили ${moneySum}`);
