// DOM - Document Object Model

// const mainTitle = document.querySelector('.home-title')  // находит внутри html то что надо
// // const mainTitle = document.getElementsByTagName ('h1')
// console.log(mainTitle);

// // mainTitle.style.fontSize = '10px' // изменили заголовок 


// mainTitle.addEventListener('click', () => { //Добавляем прослушиватель события
//     setTimeout 
//     mainTitle.style.fontSize = '10px'
// }) 


const burgerBtn = document.querySelector('#burger-menu-icon')
const nav = document.querySelector('.nav')


burgerBtn.addEventListener('click', () => {
    if(nav.classList.contains('opened')) {
        nav.classList.remove('opened')
    } else {
        nav.classList.add('opened')
    }
})


// burgerBtn.addEventListener('click', () => {
//     if(nav.style.display === 'none') {
//         nav.style.display = 'flex'
//         nav.style.bottom = '200px'
//     } else {
//         nav.style.display = 'none'
//     }
// })