const wait = (operation) => {
    return new Promise((res) => { // создаем промис, чтобы он показывал сообщение через какое-то время 
        setTimeout(() => {
            res(operation)
        }, 3000) 
    })
}

// // дожидаемся выполнения функции
// async function someAsyncFunction() {
//     console.log('Началось ожидание')
//     const res = await wait(3)  // await пишется до функции, дожидаемся функции wait, которую он покажет через 3 секунды, через 3 секунды выполняется следующий код
//     console.log('Прошло какое-то время и мы получили сообщение:' + res)
// }

// // await работает только с промисами

// someAsyncFunction()



// когда пишем async мы гооври чтоб он прямо сейчас ждалл и не выполнял ничего в рамках этой функции
// а при промисе - "Когда получишь, тогда и сделаешь"



const getSomeCalculation = async () => {
    console.log('Просто сообщение которое означает что функция началась')
    let fortyfive = 45
    console.log('Второе сообщение')
    let getSomeSumOfVar = fortyfive + 100
    console.log('Мы получили ' + getSomeSumOfVar)
    const result = await wait (155 + getSomeSumOfVar) // Типа очень сложная операция, которая занимает много времени
    console.log('Наше вычисление = ' + result)
}

getSomeCalculation()