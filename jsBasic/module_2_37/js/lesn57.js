// 57. Методы перебора массива 

// FILTER - отфильтровует в массиве элементы и выводит только те, которые попадут в наш диапазон желаний
// const names = ['Ivan', 'Ann', 'Kate', 'Gena'];

// const newName = names.filter(function(name) {
//     return name.length < 4;
// });

// console.log(newName);

// MAP - берёт всё элементы и что-то с ними делает, пр: выводит в нижний регистр всё слова

// const answers = ['Ivan', 'AnN', 'KaTe', 'GeNa'];
// const result = answers.map(item => item.toLowerCase());
// console.log(result);

// EVERY/SOME - возвращает булиновое значение

// const some = [4, 'bgvrfcd', ['trfcd8']];
// // some - если хотябы один элемент = тру
// console.log(some.some(item => typeof(item) == 'number'));
// // every - если всё элементы номер = тру
// console.log(some.every(item => typeof(item) == 'number'));

// REDUCE (sum - сумирует всё значения, curren - перебирает каждый элемент в массиве, можно задать число коротое так же просмуммируется)

// const arr = [3, 6, 7, 8, 7.8];
// const res = arr.reduce((sum, current) => sum + current, 7);
// console.log(res);

// const arr = ['apple', 'peach'];
// const res = arr.reduce((sum, current) => sum +', '+ current);
// console.log(res);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj) //  [ 'ivan', 'persone' ]
.filter(item => item[1] === 'persone') // если 2й эелемент persone, проходит бальше 
.map(item => item[0]); // достаем 1й элемент - имя
console.log(newArr);