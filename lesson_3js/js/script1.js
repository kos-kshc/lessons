/*
Умова: З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести не екран ім’я тієї 
дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.
*/
//Вводимо необхідні дані
let firstChildName = prompt('Введіть і`мя першої дитини')
let firstChildSweets = parseInt(prompt('Введіть кількість цукерок в руках у першої дитини'))
let secondChildName = prompt('Введіть і`мя другої дитини')
let secondChildSweets = parseInt(prompt('Введіть кількість цукерок в руках у другої дитини'))
let task1 = document.getElementById('answer')

//Знаходимо і Виводимо результат
if (firstChildSweets > secondChildSweets)
	task1.innerHTML += `<p>Більше цукерок має ${firstChildName}.</p>`
else if (secondChildSweets > firstChildSweets)
	task1.innerHTML += `<p>Більше цукерок має ${secondChildName}.</p>`
else
	task1.innerHTML += `<p>${firstChildName} та ${secondChildName} мають однакову кількість цукерок.</p>`
