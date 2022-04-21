// Ассинхронность

// JS однопоточный синхронный язык


setTimeout(() => { // Ассинхроность - ждет ответа от какого-то кода, занимает некоторое время
    console.log(1)
}, 3000)

// Node выступает как движок, позволяет ассинхронности существовать в JS

setTimeout(() => { // Ассинхроность - ждет ответа от какого-то кода, занимает некоторое время
    console.log(1)
}, 0)   // выполнится в любом случае в последнюю очередь, т.к. сначала выполняются синхронные коды. ассинхронные сначала передаются 
// в webapi, и ждут пока выполнятся основные синхронные

// Промисы


// Promise - ассинхронный код, имеет 3 состояния:
// pending = ожидание
// fullfilled = выполнился успешно
// rejected = безуспешно


let someAsyncValue = new Promise((resolve, reject) => {    // выполняются после выполнения определенной задачи
   let isFinished = true
   if(isFinished) {
     resolve
   } else {
     reject('Потому что isFinished не положительное значение')
   }
})  


someAsyncValue.then((data) => {
    console.log('Успешно!', data) // если результат ассинхронного кода fullfilled, игнорируется при неуспешном запросе
}).catch((err) => {
    сonsole.log('Не успешно!', err) // если результат ассинхронного кода rejected, игнорируется при успешном запросе
})

// catch() выполнится тогда когда выполнится reject
// then() выполнится тогда когда выполнится resolve


let UserData

fetch('запрос на сервер').then((data) => {  // работает именно с ссылками на сервер
    console.log(data)

})

fetch('запрос на сервер')
   .then(res => res.json()) // Преобразование ответа в json
   .then((data) => {   // Получение ответа от предыдущего then и обработка data
   console.log(data.fact.split('').reverse().join(''))
   })
   .catch((err) => { // Если ошибка выдаст это
   console.log(err)
   })


// Promise - микрозадача
// setTimeout - макрозадача
// Микрозадачи выполняются раньше макрозадач


fetch('ссылка на сервер')
  .then(res => res.json())
  .then((data) => {
  console.log(data.fact.split('').reverse().join(''))
  })
  .catch((err) => {
  console.log(err)
  })


// 16.04.22
// Ассинхронность

// spread and rest - [...data]

const [first, ... rest] = [1,2,3,4,5,6,7,8,9]  // сохранит в rest все остальное

