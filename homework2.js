
// 1. Пройтись по массиву методом, получить только положительные числа и сохранить сумму этих чисел в переменную result.
let box = [1, 5, -8, 13, 0, 111, -88, -1]
let result = []

box.forEach((poke) => {
    if(poke > 0) {     
        result.push(poke)
    }
});
result = result.reduce ((total, amount) => total + amount)

console.log(result)


// 2. Посчитать количество отрицательных чисел используя метод .forEach и сохранить в переменную
let arr = [1, 5, -8, 13, 0, 111, -88, -1]
let negative = []

arr.forEach ((item) => {
    if(item < 0) {     
        negative.push(item)
    }
});
output = negative.length // тут не совсем понял, нужно было КОЛИЧЕСТВО или САМИ отрицательные числа, но судя по формулировке задания подумал что количество

console.log(output)

// 3. Пройтись по массиву методом .forEach и получить квадрат каждого значения и сохранить их в новый массив
container = [1,2,3,4,5]
tank = []

container.forEach ((num) => {     
        tank.push(num * num)
}); 

console.log(tank)

// Можно еще так сделать 
// let tank = container.map ((num) => num * num)

