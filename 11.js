

// 6 задание
var singleNumber = function(nums) {
    const map = {}
    nums.forEach((item) => {
        if(!map[item]) {
            map[item] = 0
        }
        map[item]++   // используем объект как способ выявления дублирующихся значений
    })
    for(let item in map) {
        if(map[item] === 1) return item  // если значения только одно, то оно сохранится в item
    }
};

//цикл, который проходится по объекту по ключам

for(let key in user) {
    let value = user[key] // user[key} - чтобы проходил по каждому из ключей
}

// 9 задание

var kidsWithCandies = function(candies, extraCandies) {
    return candies.max(item => {
        return item + extraCandies >= Math.max(...candies)
    })
};

// 8 задание

var mostWordsFound = function(sentences) {
    let maxWords = 0
    for(let i = 0; i < sentences.length; i++) {
        const lengthOfSentenceWords = sentences[i].split(' ').length // lengthOfSentenceWords = текущий элемент
        maxWords = Math.max( lengthOfSentenceWords, maxWords)  // сравниваем текущий элемент со всеми 
    }
    return maxWords
};

// 1 задание

var plusOne = function(digits) {
    let joinedNum = digits.join('') // соединяем все вместе ([1,2,3] = '123')
    let num = BigInt(joinedNum) // 123 как число
    return String(++num).split('') // ++num чтобы сразу получить 124, split = чтобы превратить в массив
};

// 7 задание

var containsDuplicate = function(nums) {
    nums.sort();
     for (let i = 0; i < nums.length; i++) {  // убрали -1, хз почему написали
         if (nums[i] === nums[i + 1]) { // сравниваем текущее со следующим
             return true;
         }
     }
     return false;
 };


const user = {
    name: 'asd',
    age: 100,
    obj2: {
        somInnerKey: 100
    }
}


function someFunc() {
    let { someInnerKey } = user.obj2 // Деструктуризация - вытаскиваем наружу переменную из объекта, называем точо также как и в объекте
    let {name}   = user
    let [first, second, a, b, c] = arr // дали имена конкретным элементам массива
    let {name: nameOfUser}   = user // переименовать сразу 
} 

 
const arr = [0,2,3,4,4]
let [first, second, ...restArr] = arr   // restArr - массив с оставшимися числами 0 2 [3,4,4]
