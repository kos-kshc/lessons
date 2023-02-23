/*
Задача 15. Користувач поступово вводить показники температури протягом року. Знайти середню
температуру.
*/
let averageTemperature = 0;

for (let i = 0; i < 12; i++) {
  let monthTemperature = parseInt(
    prompt(`Введіть температуру за ${i + 1} місяць`)
  );
  averageTemperature = averageTemperature + monthTemperature;
  if (i == 11)
    document.write(
      `Середня температура дорівнює ${(averageTemperature / 12).toFixed(
        1
      )} градусів`
    );
}
