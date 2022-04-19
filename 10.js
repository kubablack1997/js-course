// var restoreString = function(s, indices) {
//     let array = new Array(indices,length) // создается массив с количеством indices length
//     for(let i = 0; i < indices.length; i++ ) { // проходимся по массиву
//       let index = indices[i] // текущий индекс
//       let char = s[i] // Текущая буква
//       array[index] = char // вставляем буквы в новый пустой массив с помощью смены индекса
//     }
//     return array.join('') // возвращаем строку
// };

// s = "codeleet", 
// indices = [4,5,6,7,0,2,1,3]
// array - [ , , , , ]

// Классы


// class Person {  // Генерирует что-то новое и возвращает 
//     constructor(name, age){    // показывает то, что мы передаем в функцию Person()
//         this.name = name
//         this.age = age // this позволяет сохранять переданный в функцию Person() параметр (имя и т.д.), позволяет сделать частью себя, частью класса
//     }
//         age = 20

//     run() {
//         console.log('im running')
//     }

//     eat() {
//         console.log('im eating')
//     }

//     say() {
//         console.log('My name is' + this.name) // позволяет смотреть на этот объект
//     }
// }

// const user1 = new Person('Kushnak')
// const user2 = new Person()
// const user3 = new Person()

// console.log(user1.name)

// наследование


class Pet {
    tale = 1
    eyes = 2
    pats = 4
    mouth = 1
}

class Cat extends Pet {  // extends = наследуется
    meow() {                       // отличительные свойства класса Кэт
        console.log('meow!!')
    }
}


class Dog extends Pet {  // extends = наследуется
    bark() {                       // отличительные свойства класса Кэт
        console.log('bark!!')
    }
}


class Humster extends Pet {  
    run(km) {         // km - позволяет вставлять значения, которые мы передаем humster.run(454544)            
        console.log('running ' + km + 'km')
    }
}

const alabay = new Dog()  // создаем экземпляр класса, который по сути является объектом
const kitty = new Cat()
const humster = new Humster()


alabay.bark()
kitty.meow()
humster.run(454544)  // можем передавать значения в функцию run 
delete humster.tale // удалить определенное свойство этого объекта


class Humster extends Pet {  
    array = [1,2,5,5]
    run(km) {         // km - позволяет вставлять значения, которые мы передаем humster.run(454544)            
        let num = 10
        for(let i = 0; i < km; i++) {
            console.log(`Я бегу ${i}й km и мой номер${i}`)  //${i} - литералы 
        }
    

    }
}

Date()  // показывает дату и время


// классы
const date = new Date()
const arr = new Array()
const obj = new Object()
const num = new Number()
const str = new String()


console.log(date.getFullYear) // можно использовать разные методы



