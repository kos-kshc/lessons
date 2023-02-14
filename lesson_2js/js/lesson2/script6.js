//Вводимо необхідні дані
let firstGoodPrice = parseFloat(prompt('Введіть вартість першого товару:'))
let firstGoodAmount = parseInt(prompt('Введіть кількість одиниць першого товару:'))
let secondGoodPrice = parseFloat(prompt('Введіть вартість другого товару:'))
let secondGoodAmount = parseInt(prompt('Введіть кількість одиниць другого товару:'))
let thirdGoodPrice = parseFloat(prompt('Введіть вартість третього товару:'))
let thirdGoodAmount = parseInt(prompt('Введіть кількість одиниць третього товару:'))

//Знаходимо результат
let firstPrice = firstGoodPrice * firstGoodAmount
let secondPrice = secondGoodPrice * secondGoodAmount
let thirdPrice = thirdGoodPrice * thirdGoodAmount
let totalPrice = firstPrice + secondPrice + thirdPrice

//Виводимо результат
// let task6 = document.getElementById('result')

let task6_1 = document.getElementById('task6-1')
let task6_2 = document.getElementById('task6-2')
let task6_3 = document.getElementById('task6-3')
let task6_4 = document.getElementById('task6-4')
let task6_5 = document.getElementById('task6-5')
let task6_6 = document.getElementById('task6-6')
let task6_7 = document.getElementById('task6-7')

task6_1.innerHTML += `<div class="result__item"><p>Перший товар:</p><p>${firstGoodPrice} x ${firstGoodAmount}</p></div>`
task6_2.innerHTML += `<div class="result__item">${firstPrice}</div>`
task6_3.innerHTML += `<div class="result__item"><p>Другий товар:</p><p>${secondGoodPrice} x ${secondGoodAmount}</p></div>`
task6_4.innerHTML += `<div class="result__item">${secondPrice}</div>`
task6_5.innerHTML += `<div class="result__item"><p>Третій товар:</p><p>${thirdGoodPrice} x ${thirdGoodAmount}</p></div>`
task6_6.innerHTML += `<div class="result__item">${thirdPrice}</div>`
task6_7.innerHTML += `<div class="result__item">Всього: ${totalPrice}</div>`


