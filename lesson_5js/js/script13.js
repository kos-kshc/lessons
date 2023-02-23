/*
Задача 13. Морський бій. Комп’ютер випадково розташовує одиночний корабель на полі розміром N*M.
Маючи К снарядів користувач намагається потопити корабель.
*/

let fieldWidth = parseInt(prompt("Введіть ширину поля для гри"));
let fieldHeight = parseInt(prompt("Введіть висоту поля для гри"));
let ammoAmount = parseInt(prompt("Введіть кількість снарядів"));

let randomGorizontalPoint = Math.floor(Math.random() * fieldWidth) + 1;
let randomVerticalPoint = Math.floor(Math.random() * fieldHeight) + 1;

for (i = 0; i < ammoAmount; i++) {
  let gorizontalFire = parseInt(
    prompt(`Введіть координати по горизонталі(1-${fieldWidth})`)
  );
  let verticalFire = parseInt(
    prompt(`Введіть координати по вертикалі(1-${fieldHeight})`)
  );
  if (
    gorizontalFire == randomGorizontalPoint &&
    verticalFire == randomVerticalPoint
  ) {
    document.write(
      `Ви влучили! Корабель знаходився: горизонталь/вертикаль ${randomGorizontalPoint}/${randomVerticalPoint}`
    );
    i = ammoAmount;
  } else if (ammoAmount - i == 1)
    document.write(
      `Снаряди закінчилися. Ви не влучили у корабель.<br>Його координати були: горизонталь/вертикаль ${randomGorizontalPoint}/${randomVerticalPoint}`
    );
}
