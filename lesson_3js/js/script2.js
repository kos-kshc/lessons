
/*
З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає
то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.
*/
//Вводимо необхідні дані
let goodsPrice = parseFloat(prompt('Введіть ціну товару:'))
let moneyAmount = parseFloat(prompt('Введіть кількість грошей'))

//Знаходимо та виводимо результат
let customerRemainder = moneyAmount - goodsPrice
let task2 = document.getElementById('answer')
if (customerRemainder < 0)
	task2.innerHTML += `<p>Недостатньо коштів, у покупці відмовлено</p>`
else if (customerRemainder < 4)
	task2.innerHTML += `<p>Дякуємо за покупку!</br>Ваша решта = ${customerRemainder.toFixed(2)}грн</p>`
else
	if (customerRemainder >= 4)
		task2.innerHTML += `<p>Дякуємо за покупку!</br>Ваша решта = ${customerRemainder.toFixed(2)}</br>Пропонуємо купити лотерею всього за 4 грн</p>`
