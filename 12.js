
// // Новый фичи в ES6
// let message =  'Уже есть сообщение'


// message ||= 'Какое-то сообщение' // присваивает значение если message = false
// message &&= 'Какое-то сообщение' // присваивает значение если message = true


// let str = 'aaabccbbbbbbbbbb'
// console.log(str.replaceAll('b', 'B')) // меняет все буквы, раньше менял только первую букву

// let m = 1_000_000_000 // _ знаки игнорируются, удобство для чтения больших чисел

// class User {}
// const arrowFunc = () => {}  // новый вид функции 


// const user = {
//     name: 'someName',
//     age: 99,
//     location: 'Kyrgyzstan',
//     email: 'ffffff.gmail.com'

// }

// const name = user.name
// const { name } = user // Деструктуризация 

// function someFunc({ age, name}, message) {
//     console.log(message = name)
// }


// ...arg // используем все элементы

// // параметры по умолчанию
// function someFunc(
//   name = 'John', 
//   age = 28, 
//   walk = () => {console.log('i am walking')}
//   ) {  // параметры по умолчанию
//   console.log(name)
//   walk()
//   }

// someFunc()



// setTimeout(callback, timeoit = ms               // callback - это функция которую мы передаем как аргумент
// setTimeout(() => {
//     console.log('Прошло 5 секунд')
// }, 5000)



// Напишите функцию, которая принимает сообщение и показывает ее в консоль каждые 2 секунды в течение 30 секунд и перестает ее показывать


let i = 0
const firstInterval = setInterval(() => {  // через каждые n секунд показывает "Прошло еще 2 секунды"
    console.log('Вам запрещено тут находиться')
    i++
    if(i > 15) {
        clearInterval(firstInterval) // чтобы остановить интервал  
    }
}, 2000)


