/*
Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.
*/
//Отримуємо наше випадкове число
let neededRandomValue = Math.floor(Math.random() * (6 - 1) + 1)
let firstRandomValue = Math.floor(Math.random() * (6 - 1) + 1)
let secondRandomValue = Math.floor(Math.random() * (6 - 1) + 1)

//Намагаємося вгадати його і виводимо результат
let task3 = document.getElementById('answer')
switch (neededRandomValue) {
	case firstRandomValue:
		task3.innerHTML += `<p>Цього разу я вгадав з першої спроби - випадкове число ${firstRandomValue}</p>`
		break
	case secondRandomValue:
		task3.innerHTML += `<p>Цього разу я вгадав з другої спроби - випадкове число ${secondRandomValue}</p>`
		break
	default:
		task3.innerHTML += `<p>Спроби закінчилися, я не вгадав(</p>`
}
