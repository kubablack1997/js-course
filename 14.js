// async function someAsyncFunc() {
//     const responce = await fetch('ссылка на сервер').catch((err)) // await - ждать, пока не получит ответ от ассинхр.кода
//     const data = res.json()
//     console.log('async await', data)
//     }
 

// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     })
// }

async function loadJson() {
    const responce = await (response => {
              if (response.status == 200) {
                return response.json();
              } else {
                throw new Error(response.status)})
}


//ggggg

