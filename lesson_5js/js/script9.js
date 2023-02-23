/*
Задача 9.Користувач загадує число. Комп’ютер задає питання поки не вгадає число користувача
(використати confirm).
*/

let positive = true;
while (positive) {
  let computerTryNumber = Math.floor(Math.random() * 1000);
  if (
    window.confirm(
      `Комп'ютер гадає що цисло - ${computerTryNumber}, чи це вірно?`
    )
  ) {
    document.write(`<p>Ви вгадали! Загадане число - ${computerTryNumber}`);
    positive = false;
  }
}
