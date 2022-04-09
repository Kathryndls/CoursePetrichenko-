'use strict';

// const persn = {
//     name: 'Alex',
//     parents: {
//     mom: 'Olga',
//     } 
// };
// // console.log(JSON.stringify(persn)); // передали обьект в бекенд 
// const clone = JSON.parse(JSON.stringify(persn)); // создали глубокий клонированный обьект
// clone.parents.mom = 'Ann';
// console.log(persn);
// console.log(clone);

const inputRub = document.querySelector('#rub'),
    inptUsd = document.querySelector('#usd');


inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = 'что-то пошло не так';
        }
    });
});