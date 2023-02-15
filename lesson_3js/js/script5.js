/*
З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, 
С-вантажний автомобіль). Вивести на екран назву транспортного засобу, яким він може керувати.
*/
//Отримуємо дані від користувача
let categoryName = prompt('Введіть категорію водія (A, B, C)')

//Обчислюємо і виводимо результат
task5 = document.getElementById('answer')
switch (categoryName) {
	case 'A':
		task5.innerHTML += `<p>Мотоцикл</p>`
		break
	case 'B':
		task5.innerHTML += `<p>Легковий автомобіль</p>`
		break
	case 'C':
		task5.innerHTML += `<p>Вантажний автомобіль</p>`
		break
	default:
		task5.innerHTML += `<p>Введені дані не вірні. Категорії ${categoryName} не існує.</p>`

}

