
// let username = "Some name"
// function someFunction () {
//     console.log(username)
// }

// someFunction
 // область видимости - все что внутри фигурных скобок не показывается вне этой функции, не можем обратиться к ней вне этой функции
// в области видимости приоритет у переменных, которые находятся в ней, а потом уже вне области видимости

// let user = {
//     name: 'some name',
//     username: 'dddddddd',
//     walk: () => {
//         console.log('I am walking')
//     },
//     sayName: () => {
//         console.log(this.name)
//     }
// }



// let box = [1, 5, -8, 13, 0, 111, -88, -1]

// let boxPositive = box.filter (function (n) {
//     return n < 0   // return сохраняет в себя TRUE/FALSE, функция должна возвращать boolean, т. е. результатом должен быть true или false. Такие функции называют предикатами.
// })

// console.log(boxPositive)

 // От результата выполнения функции зависит, попадёт ли элемент в итоговый массив:
// true — элемент попадёт в итоговый массив.
// false — не попадёт в итоговый массив.



// const languages = ["Java", "TypeScript", "C#", "JavaScript", "Julia"]

// const jLanguages = languages.filter(function (language) {
//   return language.startsWith("J")
// })
// console.log(jLanguages)


// let sum = 0
// let nums = [123, 121, 554, 85, 85, 8564, 84]

// let sum2 = nums.reduce((sum, item) => {  // первым принимает итоговое значение, т.е. сумма
//     return sum + item // возращает итоговое значение
// }, 0) // 0 - с числовыми

// console.log(sum2) 

let abc = ['a', 'd', 'f', 'g', 'h']
// let total = abc.reduce((total, item) => {
//     return total + item
// }, '')

// console.log(total) 

// console.log(abc.reverse()) // c конца наперед

// сonsole.log(abc.join("7")) // вставляет 7 между элементами массива 

// сonsole.log(abc.includes("z")) // возвращает TRUE если в массиве есть запрашиваемый элемент, в нашем случае Z

// abc.sort() // отсортирует по алфавиту и заглавные, но меняет сам массив и не возвращает новый

// abc.sort((a,b) => {
//     return
// })

let nums = [5,3,75,12,1,2]
nums.sort((a,b) => {
  if (a > b) return 1; // если первое значение больше второго
  if (a == b) return 0; // если равны
  if (a < b) return -1; // если первое значение меньше второго
})
 
сonsole.log(nums)

nums.sort((a,b) => {
    return b - a; // по убыванию
    return a - b; // по возрастанию
  })


  