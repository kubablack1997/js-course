let number = 4

number === 2 // === - учитывает тип данных
// == - не учитывает тип данных

// ! - меняет булевое значение
0
false values
false
undefined
null
NaN
''
// ложные значения

!!number // приведение типа к булевому значению

// условные операторы


// if(number === 2) {  // если
//   console.log(1)
//}



//if(number < 1) {  // если
 //   console.log(1)
//} else {
 //   console.log("Больше")
//}


//if(number < 1) {  
//    console.log(1)
//} else if (number === 3) {
 //   console.log(3)
//} else if (number === 6) {
 //   console.log(6)
//} else {
 //   console.log("Не подходит")
//}


// let age = 5

// if(age > 1 && age =< 12) {  
//     console.log("Ребенок")
// } else if (age > 12 && age =< 16) {
//     console.log("Подросток")
// } else if (age > 16 && age =< 25 ) {
//     console.log("Молодежь")
// } else if (age > 25 && age =< 50 ) {
//     console.log("Взрослый")
// } else if (age > 50 && age =< 80 ) {
//     console.log("Пенсионер")
// } else {
//     console.log("Старик")
// }


// Логические операторы
// && - и
// || - или
// ?? - И - оператор нулевого слияния

// let age = 15

// switch
// switch (age) {
//     case 15: // когда указано точное значение
//         console.log("Ему 15")
//         break;
//     case 15:
//         console.log("Ему 15")
//         break;
//     default:
//         console.log("Не подходит")
//         break;
// }



// let age = 19

// тернарный оператор
// условие ? если true : если false
// (age > 28) ? console.log("Больше") : console.log("Меньше")




// (age > 28) 
//     ? console.log("Больше") 
//     : console.log("Меньше")
//          ? console.log("Меньше 50") 
//          : console.log("Больше 50")


// let user = age > 19 ? "User" : "Young user"

// console.log(user) 




// console.log(null || 2 || undefined) // выведет 2, потому что || выводит первое правдивое значение
// console.log(1 && null && 2)  // выведет null, потомк что && выводит первое ложное значение
// если ложные значения с || например (null || undefined) - то выводит последнее значение из всех возможных, тоже самое и с && в случае с ложными значениями

console.log(null  && 2) 


let age = input || 20   // если инпут есть то вставляется возраст, если нет то вставляется по умолчанию 20
let text = message || '' // если ничего нет, то вставляется пустая строка '' по умолчанию


let input = 0
let age = input && 20
console.log(age) 


// ?? - будет учитывать только null и undefined, все остальные ложные значения он будет учитывать

// книги - Вы не знаете JS




