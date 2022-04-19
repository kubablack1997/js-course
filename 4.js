


// homework

// let box = [1, 5, -8, 13, 0, 111, -88, -1]
// let result = []

// box.forEach((poke) => {
//     if(poke > 0) {     
//         result = result + poke
//     }
// });

// console.log(result)

// 2 задание
// let array = [1, 5, -8, 13, 0, 111, -88, -1]
// let result = []


// array.forEach((item)) => {
//      if(item < 0) {     
//          result = result + 1 // счетчик добавляет 1 элемент, если он отрицательный
//     }
// });

// console.log(result)


// let array = [1,2,3,4,5]
// let array2

// array.forEach((item)=> {
//        array.push(item * item)  
//  })

//  console.log(array2)


// Функции

// function func () { // func - name of function
   //  console.log(1)
//}

// let array = [1,2,3,4,5]

// function func() {
//     // console.log(array.length)

//     return 1   // ставит себя вместо функции
// }

// let result = func()
// console.log(result)


// function название_функции(параметры) {

//какое-то действие 

//}
// название_функции() - это вызов функции, когда вызываем


// function func(a, b, c) {  // a - параметр, переменная -  с чем работает функция
//     console.log(a + 1)

// }


// function sum(a, b) {
//     console.log(a + b)
// }

// sum(5,15)

// function sum(a) {    // все что входит внутрь скобок нельзя будет найти - область видимости
//     let result = 0
//     a.forEach((item) => {
//         if(item < 0) {     
//            result = result + 1 
//         }
//     })
//     console.log(result)
// }

// sum([12,1,-55,-88,-95,5])  // 




// // function expression
// let func = function() {
//     console.log(1)
// }

// // function declaration
// function func2()  {
// // что-то
// }

// // arrow function
// let func3 = () => {

// }


// функция которая возвращает меньшее из них
// function min(a,b) {
//     if(a < b) {
//         return a
//     } else {
//         return b
//     }
// }

// // по сути min(1,2) == 1 , т.е. он пе
// console.log(min(1,2))


// функция возведения в степень

// function pow(x,n) {
//     return x ** n  // ** Знак степени
// }

// console.log(pow(3,3))


// 
// function name1 (n) {
//     return "Hello, " + n + ",how are you doing today?"
// }

// console.log(name1("Kuban"))

// Циклы
// let i = 0 // пустой 
// while(i < 10) { // 
//     console.log(1)
//     i++ // ++ инкремент - увеличивает на единицу
// }


// while(i < 10) { // 
//     console.log(i)
//     i++ // ++ инкремент - увеличивает на единицу
//     if(i > 1000) {
//         break // Остановка цикла когда дойдет до 1000
//     }
// }


// function pow(x, n) {
//     let i = 1
//     let result = x // промежуточная переменная в которую надо сохранить результат
//     while(i < n) { // пока счетчик степени
//         result = result * x
//         i++
//     }
//     return result

// }

function sheeps(item) {
    let i = 1
    while(i <= item) {
        console.log(i + " барашка")
        i++
    }
}

sheeps(5)




