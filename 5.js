// 1


// function number (n) {
//     let array = []
//     let i = 0
//     while (i < n) {
//         i++
//         array.push(i)
//     }
//     return array

// }

// console.log(number(5))


//2/ Напишите функцию которая принимает массив чисел и выводит в консоль самое маленькое и самое большое число из этого массива

// function max (l) {
//     let max = l[0]
//     for (let i = 0; i < l.length; i++) {
//         if (max < l[i]) max = l[i]
//     }
//     return max
// }


// function min (k) {
//     let min = k[0]
//     for (let i = 0; i < k.length; i++) {
//         if (min > k[i]) min = k[i]
//     }
//     return min 
// }

// let p = [15,16,18,25]
// console.log (min(p))
// console.log (max(p))


//3. Напишите функцию которая принимает сомы и конвертирует их в доллары)
function exch(som) {
    let doll = 90
    let result = som / doll
    console.log(result + 'доллары');
}

exch(900)

//4. Напишите функцию, которая принимает 2 числа и выводит в консоль четные числа между ними


function chet (x,y) {
    let i = 0
    while (i < x)

}

for (let i = 0; i < 10, i++) {

}


//1

function first (nums) {
    let result = []
    for(let i = 0, i <= nums; i++) {
        result.push(i)
    }
    console.log(result)
}


function second (arr) {
    let max = Math.min(...arr)
    let min = Math.min(...arr)

}

function second (arr) {
    let max = arr[0]
    let min = arr[0]
    arr.array.forEach((item) => {
        if(item < min) {
            min = item
        }
        if (item > max) {
            max = item
        }
    })
    console.log(min, max)

let aaaaa = [2,5,2,5,2,552,5555,]
second (aaaa)


function fourth(num1,num2) {
    for(let i = num1, i < num2; i++) {
        if(i % 2 === 0 ) {
            console.log(i)
        }
}