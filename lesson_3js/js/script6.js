/*
З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.
*/
//Отримуємо дані від користувача
let dayName = parseInt(prompt('Введіть номер дня тижня (від 1 до 7)'))

//Обчислюємо і виводимо результат
task6 = document.getElementById('answer')
switch (dayName) {
	case 1:
		task6.innerHTML += `<p>Понеділок</p>`
		break
	case 2:
		task6.innerHTML += `<p>Вівторок</p>`
		break
	case 3:
		task6.innerHTML += `<p>Середа</p>`
		break
	case 4:
		task6.innerHTML += `<p>Четвер</p>`
		break
	case 5:
		task6.innerHTML += `<p>П'ятниця</p>`
		break
	case 6:
		task6.innerHTML += `<p>Субота</p>`
		break
	case 7:
		task6.innerHTML += `<p>Неділя</p>`
		break
	default:
		task6.innerHTML += `<p>Ви ввели некоректні дані, спробуйте ще раз!</p>`
}