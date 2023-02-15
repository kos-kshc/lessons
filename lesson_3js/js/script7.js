/*
З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься
*/
//Отримуємо дані від користувача
let monthNumber = parseInt(prompt('Введіть номер місяця(Від 1 до 12)'))

//Обчислюємо і виводимо результат
let task7 = document.getElementById('answer')
if (monthNumber < 1 || monthNumber > 12)
	task7.innerHTML += `<p>Необхідно ввести номер місяця від 1 до 12!</p>`
else if (monthNumber < 3 || monthNumber == 12)
	task7.innerHTML += `<p>Зима</p>`
else if (monthNumber < 6)
	task7.innerHTML += `<p>Весна</p>`
else if (monthNumber < 9)
	task7.innerHTML += `<p>Літо</p>`
else if (monthNumber < 12)
	task7.innerHTML += `<p>Осінь</p>`

