let i = 0
const firstInterval = setInterval(() => {  // через каждые n секунд показывает "Прошло еще 2 секунды"
    console.log('Вам запрещено тут находиться')
    i++
    if(i > 15) {
        clearInterval(firstInterval) // чтобы остановить интервал  
    }
}, 2000)
