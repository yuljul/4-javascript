//



let myname = prompt('Введите свое имя')

console.log(myname);

let myage = +prompt('Дата рождения')

console.log(myage);

let date = +prompt('Какой сейчас год')



alert(myname + ', Ваш возвраст ' + (date - myage))



// второй вариант решения

// function res() {
//     let sum = (date) - (myage)
//     return sum
// }

// alert(myname + ', Ваш возвраст ' + res())








// Хотела узнать в первой части, можно так писать? Я по урокам смотрела что нужно мин макс, но тут тоже выдает рандомные числа.
//  При решении примера, ответ в алерт не пишет молодец, а пишет это неверно


function rand() {
    return Math.floor(Math.random() * 12)
}

console.log(rand());


function rand2()  {
    return Math.floor(Math.random() * 12)
}

console.log(rand2());


let primer = +prompt(rand()+ ' + ' + rand2() + ' =')
let word = primer == (rand() + rand2()) ? 'вы молодец' : 'это неверно'

alert ('Ваш ответ ' + (primer) + ' , ' + (word))





let primer2 = +prompt(rand()+ ' * ' + rand2() + ' =')
let word2 = primer2 == (rand() + rand2()) ? 'вы молодец' : 'это неверно'

alert ('Ваш ответ ' + (primer2) + ', ' + (word2))


