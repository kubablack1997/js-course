// let obj = {
//     key: 'value',  // ключ = значения
//     num: 12,
//     v: null
// }



// obj.key = 'value2'  // поменяли значение
// obj.key2 = 'newvalue' // добавили ключ

// delete obj.key2  // удаление ключа
// obj.key = undefined  // второй спосооб удаления ключа


// // console.log(obj.key)

// // object нужен нам чтоб хранить массив данных про какой-то объект и сразу узнавать всю инфу
// let user = {
//     name: 'Kuban',
//     surname: 'Makeshov',
//     age: 24
// }

// // console.log(user)

// let product = {
//     size:'l',
//     length: 3000,
//     count: 2,
//     owner: {
//        name1:'ffff', 
//        surname1:'fgggfff',
//        employee: {

//        }
//     },
//     owner2: user  // переприсвоили значения user owner 2
// }

// // объекты не равны друг другу

// console.log(product)


// // let obj1 = {
// //     'string': 12,
// //     2:"value"
// // }

// // console.log(obj['string'])


// Массив - записываем значения без ключей

// let array = [
//     'value1',
//     'value2',
//     'value3', 
//     2, 
//     undefined, 
//     null, 
//     { name11: 'ffffff'},
// ]  // ключ начинаетс с 0 и т.д.


// array[0] = 'not value'   // переприсвоить первый элемент массива

// //console.log(array[0])
// // console.log(array.length) - показывает сколько элементов

// // методы массива
// array.push('value4') //добавлеят в конец массива то что в скобках
// array.unshift // добавление в начало массива
// array.pop // удаление одного элемента с конца
// array.shift // удаление одного элемента с начала

// console.log(array.push('value4')) //возвращает количество элементов после удаления
// console.log(array.unshift('value')) // возвращает количество элементов
// console.log(array.pop()) // показывает элемент, который удаляют
// console.log(array.shift()) // показывает элемент, который удаляют



// console.log(array)



// let styles = [ //1
//     'Джаз',
//     'Блюз'
// ]

// styles.push('Рок-н-ролл') //2

// styles[1] = 'Классика' //3

// // console.log(styles.shift()) //5

// styles.unshift ('Рэп', 'Рэгги') //6

// // формула нахождения значения в середине
// let length = styles.length
// let middle = (length-1) / 2
// console.log(styles[middle])

// // формула нахождения значения в середине
// console.log(styles[((styles.length - 1) / 2)])


let array = [0, 1, -2, 3, -4, -5]

// array.forEach((item) => {
//     console.log(item)
// });

let array2 = []

array.forEach((item) => { // перебираем все элементы в массиве
    if(item > 0) {     // если элемент больше нуля - положительный, все это хранится в item
        array2.push(item) // и добавляем все эти положительные элементы в новый список, который сами создали array2
    }
});

console.log(array2)


