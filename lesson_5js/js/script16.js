/*
Задача 16. Користувач поступово вводить прибуток магазину за кожен день протягом N тижнів. Знайти
загальну величину прибутку та вивести величину прибутку протягом кожного окремого тижня.
*/
let weeksAmount = parseInt(prompt(`Введіть кількість тижнів`));
let totalIncome = 0,
  weekIncome,
  dayIncome;

for (i = 0; i < weeksAmount; i++) {
  for (j = 0; j < 7; j++) {
    if (j == 0) {
      weekIncome = 0;
    }
    dayIncome = parseFloat(
      prompt(`Введіть прибуток за день ${j + 1}, ${i + 1} тижня.`)
    );
    weekIncome = weekIncome + dayIncome;
    if (j == 6) {
      document.write(
        `<p>Загальний прибуток на кінець ${
          i + 1
        } тижня дорівнює ${weekIncome}</p>`
      );
    }
  }
  totalIncome = totalIncome + weekIncome;
  if (weeksAmount - i == 1) {
    document.write(
      `<p>Загальний прибуток за всі тижні дорівнює ${totalIncome}</p>`
    );
  }
}
