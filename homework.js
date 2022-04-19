


// var plusOne = function(digits) {
//     let total = digits.reduce((total, item) => {
//         return total + item
//     }, '')
//     let one = (Number(total)) + 1
//     let numb = String(one).split('')
//     let result = numb.map(item => Number(item))
//     return result
// };
// let m = [9,1]
// plusOne(m)





// var plusOne = function(digits) {
//     const fromArray = digits.join(''); 
//     const toInt = BigInt(fromArray) ; 
//     const addOne = toInt + 1n; 
//     const result =  Array.from(String(addOne), Number); 
//     return result
    


// // 2 задание

// // var lengthOfLastWord = function(s) {
// //     let words = s.split(' ');
// //     let lastWord = words[words.length - 1];
// //     console.log(lastWord)
// // };


// var lengthOfLastWord = function(s) {
//     let words = s.split(' ');
//     let nonspace = words.filter(function (el) {
//         return (el != null && el != "" || el === 0);
//     });
//     let lengthOfLastWord = nonspace[nonspace.length - 1].length
//     console.log(lengthOfLastWord)
// };

// s = "   fly me   to   the moon  "
// lengthOfLastWord(s)


// //     let trueWord = 0
// //     if (words[words.length - 1] == ' ') {
// //     trueWord = words[words.length - 1]
// // } else {
// //     trueWord = lastWord
// // }
//     console.log(words)
// };




// // // let trueWord = 0
// // if (lastWord == ' ') {
// //     trueWord = prelastWord
// // } else {
// //     trueWord = lastWord
// // 


// var lengthOfLastWord = function(s) {
//     let words = s.split(' ');
//     let nonspace = words.filter(function (el) {
//         return (el != null && el != "" || el === 0);
//     });
//     let lengthOfLastWord = nonspace[nonspace.length - 1].length
//     console.log(lengthOfLastWord)
// };

// s = "   fly me   to   the moon  "
// lengthOfLastWord(s)



// var lengthOfLastWord = function(s) {
//     //let words = s.split(' ');
//     let words = s.split(' ').join('')
//     // let nonspace = words.filter(function (el) {
//      //   return (el != null && el != "" || el === 0);
//    // });
//     // let lengthOfLastWord = nonspace[nonspace.length - 1].length
//     console.log(words)
// };

// lengthOfLastWord('   ghgbg hgngjg         khngbnkjf jjgng    ')



// var smallerNumbersThanCurrent = function(nums) {
//     let result = []
//     nums.forEach(element => {
//         let cur = element
//         let count = 0
//         nums.forEach(element => {
//             if (cur > element) {
//                 count++
//             }
            
//         });
//         result.push(count)
//     });
//     return result
// };

// nums = [8,1,2,2,3]
// smallerNumbersThanCurrent(nums)

// var runningSum = function(nums) {
//     let result = []
//     nums.forEach((element, index) => {
//         let sum = 0
//         for (let i = 0; i <= index; i++) {
//             sum += nums[i];
//         }
//         result.push(sum)
//     });
//     return result
// };
// nums = [1,2,3,4]
// runningSum(nums)



// var arrayStringsAreEqual = function(word1, word2) {
    
// };

// word1 = ["ab", "c"], word2 = ["a", "bc"]



// var singleNumber = function(nums) {
//     nums.forEach(element => {
//         let cur = element
//         let is_twice = false
        
//         nums.forEach(element => {
//             if (cur = element) {
//                 is_twice = true
//             }
//         });
//         if (!is_twice) {
//             console.log(cur)
//         }
//     });
    
// };

// function singleNumber(nums) {
// 	return nums.reduce((prev, curr) => prev ^ curr);
// }


// nums = [4,2,2,1,1,0,6]
// singleNumber(nums)

// // 

// var mostWordsFound = function(sentences) {
//     let mostwords = []
//     sentences.forEach(element => {
//         let mas = element.split(' ')
//         mostwords.push(mas.length)
//     });
//     //mostwords.sort()
//     mostwords.sort(function(a, b) { // позволяет сортировать числа
//         return a - b;
//       });
//     console.log(mostwords)
//     //return mostwords[mostwords.length-1]
// };

// mostWordsFound(
//     ["brjmzkatznpzhomilyyhaerytedrrwrkpuujbncfncgs","u yn mwbuqymvtq z etdw p nx awixyietwg a jhsklavdagvhxdy","v moahq bfhrdhxobkyccxbwduwbgsgdbngviidlaj"])

// var kidsWithCandies = function(candies, extraCandies) {
//     let output = []
//     candies.forEach(element => {
//         let cur = element + extraCandies
//         let is_greatest = true
//         candies.forEach(element => {
//             if(cur < element) {
//                 is_greatest = false
//             }
//         });
//         output.push(is_greatest)
//     });
//     console.log(output)
// };

// candies = [2,3,5,1,3], extraCandies = 3
// kidsWithCandies(candies, extraCandies)

// var restoreString = function(s, indices) {
//     let words = s.split('')
//     let output = []

//     indices.forEach((element, index) => {
//         output[element] = words[index]
//     });
//     console.log(output)
// };

// s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// restoreString(s, indices)

var arrayStringsAreEqual = function(word1, word2) {
    let wordstr1 = word1.join('')
    let wordstr2 = word2.join('')
    if (wordstr1 === wordstr2) {
        return true 
    }
    return false 
};

word1 = ["ab", "c"], word2 = ["a", "bc"]