/*
задача 12. Ігровий автомат. Випадково вибираємо зображення у 3 позиціях. Вибір у кожній позиції
вибирається як одне з чотирьох зображень. Вивести ці зображення і повідомити виграш користувача
(три перших зображення 100 грн, три других – 200, три третіх – 500, три четвертих зображення –
1000грн). Використати цикли і switch (для вибору зображення за номером).
*/
let firstImgCounter = 0,
  secondImgCounter = 0,
  thirdImgCounter = 0,
  fourthImgCounter = 0;
for (let pos = 0; pos < 3; pos++) {
  let randomNunmber = Math.floor(Math.random() * 4) + 1;
  switch (randomNunmber) {
    case 1:
      firstImgCounter = firstImgCounter + 1;
      document.write(`<img class="img12" src="/img/apple.svg">`);
      break;
    case 2:
      secondImgCounter = secondImgCounter + 1;
      document.write(`<img class="img12" src="/img/lemon.svg">`);
      break;
    case 3:
      thirdImgCounter = thirdImgCounter + 1;
      document.write(`<img class="img12" src="/img/carrot.svg">`);
      break;
    case 4:
      fourthImgCounter = fourthImgCounter + 1;
      document.write(`<img class="img12" src="/img/orange.svg">`);
      break;
  }
}

if (firstImgCounter == 3)
  document.write("3 ЯБЛУКА!! Ваш виграш складає - 100грн");
else if (secondImgCounter == 3)
  document.write("3 ЛИМОНА!! Ваш виграш складає - 200грн");
else if (thirdImgCounter == 3)
  document.write("3 МОРКВИ!! Ваш виграш складає - 500грн");
else if (fourthImgCounter == 3)
  document.write("3 АПЕЛЬСИНА!! Ваш виграш складає 1000грн");
else
  document.write(
    "<p>Ви нічого не виграли цього разу<br> Але не здавайтеся!!! Все ще попереду!</p>"
  );
document.write(
  `<button onClick="window.location.reload();">Оновити Сторінку</button>`
);
