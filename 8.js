
// // создать функцию, которая канкатенирует массив с самим с собой (дублирует сам массив)


// // var getConcatenation = function(nume) {
// //     let length = nume.length
// //     for (let i = 0; i < length; i++) { // начинаем с первого элемента i = 0, пока i не будет меньше длины массива
// //         nume.push(nume[i]); // добавляем каждый элемент массива - nume[i]
// //     }
// //     return nume
// // }

// // let numb = [1,2,3,555,655,565,5565,6585874]

// // console.log(getConcatenation(numb))

// // // 

// // accounts = [[1,2,3],[3,2,1]]



// // var maximumWealth = function(accounts) {
// //     let maxSum = 0
// //     for (let i = 0; i <  accounts.length; i++) {
// //         let sum = accounts[i].reduce((acc, elem) => { // находим сумму массивов в массиве
// //           return acc += elem;
// //         }, 0);
// //         if(sum > maxSum) maxSum = sum // находим самое максимальное значение
// //         // sum = Math.max (maxSum, sum)
// //     }
// //     return maxSum
// // };

// // sov = [[1,2,3],[3,2,9]]
// // let result = maximumWealth(sov)
// // console.log(result)



// // const number = 1231

// // const stringNumber = String(number) // "1231"


// // String(number).split('').reverse() // ['1','2']



var isPalindrome = function(x) {
  const pal = String(x).split('')
  const pal2 = String(x).split('').reverse()
  if (pal == pal2) {
    return true
  } else {
    return false
  }
};

console.log(isPalindrome(123))