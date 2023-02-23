/*
Задача 8.Користувач загадує число. За 3 спроби комп’ютер намагається вгадати число користувача
(використати confirm).
*/

for (let i = 0; i < 3; i++) {
  let computerTryNumber = Math.floor(Math.random() * 10) + 1;
  if (
    window.confirm(
      `${i + 1} спроба вгадати - ${computerTryNumber}, чи це вірно?`
    )
  ) {
    document.write(`<p>Ви вгадали! Загадане число - ${computerTryNumber}`);
    break;
  } else if (i == 2) {
    document.write(`<p>Спроби закінчилися, комп'ютер не вгадав</p>`);
  }
}
