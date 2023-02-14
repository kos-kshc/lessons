let width = parseInt(prompt('Введіть ширину екрана, px'))
let amountElements = parseInt(prompt('Введіть кількість елементів для розміщення'))

let elementWidth = width / amountElements

let taskA1 = document.getElementById('result')
taskA1.innerHTML += `Ширина кожного елементу дорівнює ${elementWidth}`