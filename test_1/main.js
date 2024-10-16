// 5 задача
// const request = new XMLHttpRequest();
// request.open("GET", '../key.json');
// request.setRequestHeader('Accept', 'application/json');
// request.send();
// request.onload = () =>{
//     const keys = JSON.parse(request.response);
//     console.log(keys)
// }

// 4 задача
const block = document.querySelector('.block');


block.onclick = () => {
    const red = document.createElement('div')
    red.style.background = 'red'
    block.style.backgroundColor = 'red';
    red.classList.add('red');

}


// 3 задача
// const seconds = document.querySelector('#seconds');
//
// const count = () => {
//     let i = 1;
//     const interval = setInterval(() =>{
//         i++
//         seconds.innerHTML = i
//     }, 1000)
//     const timeout = setTimeout(() =>{
//         clearInterval(interval)
//     },9000)
// }
// count()

// 2 задача
// setInterval(() => {
//     console.log("Прошла секунда")
// }, 1000)

// 1 задача
// function number (str) {
//         const regExp = /^[0-9]+$/;
//         return regExp.test(str);
//     }
//     console.log(number("012345698745665"));
//     console.log(number("0123456аымвф45665"));
//     console.log(number("893нрив21091"))
//     console.log(number("893210914212"))

