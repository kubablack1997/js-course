


// const abc = ['a', 'b', 'c', 'd']

// const modifiedAbc = abc.map((item) => {  // модифицирует массив
//     return item + 1
// })

// console.log(modifiedAbc)


// const modifiedAbc = abc.map((item) => {
//     return {value: item}
// })

// console.log(modifiedAbc)

// let modifiedAbc = []
// abc.forEach((item) => {
//     modifiedAbc.push(item + " 1")
// })

// console.log(modifiedAbc)



//filter , map - наиболее используемые 



// let arr = ['23', '56', '11', '99', '12515645']

// let total = arr.reduce((tot, item) => {   // tot - Итог, который у нас получается
//     return tot + item
// }, '') // '' - Означает какой тип данных нужно вывести

// [] - // нужны чтоб обращаться к значению переменной


// ... // копирует внутренности другого массива в другой массив


// let arr1 - [1,2,3]
// let copyArr1 = [... arr1, 5] // ili [0, ... arr1, 5]



// const users = [
//   { id: '123', name: 'John' },
//   { id: '345', name: 'Anna' },
//   { id: '567', name: 'Kate' },
//   { id: '789', name: 'Jane' }
// ]

// const groupNameById = users.reduce(function(result, user) {
//   return { // {} - создает новый объект
//     ...result, // копирует значения старого в result чтобы не терять значения
//     [user.id]: user.name, // задает новое свойство, ключом которого является id, а значение - name
//   }
// }, {})

// console.log(groupNameById)

// // классы


// 1 вариант
var isPalindrome = function(x) {
    let str = String(x)
    let reversedStr = str.split('').reverse().join('') // cтсроку превращаем в массив, реверсим массив (только у массива есть такой), соединяем все буквы
    return str === reversedStr
};

// 2 вариант 
var isPalindrome = function(x) {
    return String(x) === String(x).split('').reverse().join('')
};


// reverse loop
for(let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[1])
}



