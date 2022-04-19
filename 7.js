// 1. Functions



// Clojure

// let a = 5

function func() {
    let count = 0
    return function () { // замкнули данные с помощью функции, чтоб иметь возможность работать с этими данными, только к чтению
        console.log(count)
    }
}

// let func2 = pow()

// // Циклы


// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }



function pow(a, b) {
    let i = 1
    while (i < 1000) {
        a = a*b
        i++
    }
    console.log(a)
}

pow(2,6)


