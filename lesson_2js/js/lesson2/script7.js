let randomMonth = Math.floor(Math.random() * (13 - 1) + 1)
let randomDay = Math.floor(Math.random() * (7 - 1) + 1)

let sum = randomMonth + randomDay

let task7 = document.getElementById('result')
task7.innerHTML += `Сума випадкового місяця та випадкового номера дня в цей раз - ${sum}`