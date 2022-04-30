// Блочная область видимости - let недоступен вне блока (while, for, )

// Функциональная область видимости - var может выйти наружу блока



// чтобы поддерживались библиотеки с старыми браузерами мы используем var
// IIFE - Immediately Involved Function Expression
(function(){
    var number = 10 // не позволяем var попасть в глобальную область видимости
}) ()


// в функциях, все что после return не будет работать

function someFunc(num) {
    if(num >= 100) {
        return num
    }
    return 'Число слишком маленькое'
}

function someFunc(num) {
    if(num >= 100) return num // если условие в одну строку можно без скобок
    return 'Число слишком маленькое'
}


const ips = (p1, p2) => {
    let result = p1+p2
    let firstWon = ['scissorpaper','paperrock','rockscissor']
    let secondWon = ['paperscissor','rockpaper','scissorrock']
    if(firstWon.includes(result)) {
      return 'Player 1 won'
    }
    if(secondWon.includes(result)) {
      return 'Player 1 won'
    }
    return 'Draw!'
};


// Find the first non-consecutive number

function firstNonConsecutive (arr) {
    for(let i = 1; i < arr.length; i++) {
      let cur = arr[i]
      let prev = arr[i-1]
      
      if(cur-1 !== prev) return cur // от нынешнего отнимаем единицу и сравниваем с предыдущим числом, если не равно - то непоследовательный
    }
    return null
  }
  

for(let i = 0; i < 10; i++) {

}


var longestCommonPrefix = function(strs) {
  let result = ''
  if(strs.length === 1) return strs[0]
  if(strs.some(item => !item)) return ""
  
  let prefixAmount = strs.reduce((a, b) =>  a.length < b.length ? a : b).length
                                
  outter: for(let i = 0; i < strs.length; i++) {
    const current = strs[i]
    const next = strs[i+1]
    
    if(!next) break outter
    
    inner: while(prefixAmount !== 0) {
      const slicedCurrent = current.slice(0, prefixAmount)
      const slicedNext = next.slice(0, prefixAmount)
      if(slicedCurrent === slicedNext) {
        result = slicedCurrent
        continue outter
      }
      prefixAmount--      
    }

    if(prefixAmount === 0) {
      result = ""
      break outter
    }
  }
  
  return result
}

