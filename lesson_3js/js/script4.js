/*
З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).
*/
//Отримуємо дані від користувача
let humanAge = parseInt(prompt('Введіть вік людини:'))

//Знаходимо та виводимо результат
let task4 = document.getElementById('answer')
if (humanAge < 0)
	task4.innerHTML += `<p>Вік не маже бути від'ємним!</p>`
else if (humanAge < 7)
	task4.innerHTML += `<p>Дитина у садочку</p>`
else if (humanAge < 18)
	task4.innerHTML += `<p>Школяр</p>`
else if (humanAge < 23)
	task4.innerHTML += `<p>Студент</p>`
else if (humanAge < 60)
	task4.innerHTML += `<p>Працівник</p>`
else if (humanAge < 150)
	task4.innerHTML += `<p>Пенсіонер</p>`
else
	task4.innerHTML += `<p>Ви ввели дуже велике число, нажаль люди так довго не живуть</p>`