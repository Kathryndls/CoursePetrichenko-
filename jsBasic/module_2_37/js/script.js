// 37 урок ClassList и делегирование событий 

// const btns = document.querySelectorAll('button'),
//     wrapper = document.querySelector('.btn-block');

// // console.log(btns[0].classList.length); //  УКАЗЫВАЕТ КАКОЕ КОЛ-ВО КЛАССОВ ЕСТЬ У ЭТОГО ЭЛЕМЕНТА
// console.log(btns[0].classList.item(0)); // ВЫВОДИТ В КОНСОЛЬ КЛАСС
// console.log(btns[1].classList.add('red')); // добавить определенный КЛАСС
// console.log(btns[0].classList.remove('blue')); // удалить определенный КЛАСС
// console.log(btns[0].classList.toggle('blue')); // если у елемента нет класа - тогл его добавляет, если есть - удаляет 

// если нам нужно найти класс на определенном элемменте определенного класса и возращает булиновое значение
// if (btns[1].classList.contains('red')) { 
//     console.log('red');
// } 

// если в друг у кнопки нет класса ред, то мі ее будем добавлять 
// btns[0].addEventListener('click', () => {
//     // if (!btns[1].classList.contains('red')) {
//     //     btns[1].classList.add('red');
//     // } else {
//     //     btns[1].classList.remove('red');
//     // }

//     btns[1].classList.toggle('red'); // тот же код что и на 20-24 строке, только в сложніх скриптах тогл не всегда доступній 
// });

// устаревший варик className,он работает но не вовсех случаях - не использовать 
// console.log(btns[0].className);


// обработчик события который присваивает какое-то событие всем дочерним елементам и также! новым создавшим элементам.
// wrapper.addEventListener(', (event) => {
//     if (event.target && event.target.tagName == 'BUTTON') {
//         console.log('Hello');
//     }
// });

//  а это форич он выполняем такую же функциючто и 35-39 строки, но форич в отличие от обработчика события не будет работать для новых создавшихся елементов 
// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('hello');
//     });
// });

// просто присваиваем класс определенным елементам, нужно было для убеждения делегирования событий
// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapper.append(btn);





// 39. Скрипты и время их выполнения. setTimeout и setInterval
// рекурсия - это когда функция сама себя вызывает
// setTimeout
// сначало она принимает функцию которая должна будет запустится через поределенный промежуток времени, принимает обьявление фкции или ее названиею Она не назыв прямо здесь и сейчас 

// const timerIDb = setTimeout(function (text) {
//     console.log(text);
// }, 2000, 'hello');// в мили секунд - это 2сек 

// const btn = document.querySelector('.btn');
// let timerId,
// i = 0;
// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 500); 
// });

// function logger () {
//     if ( i == 3) {
//         clearInterval(timerId);  // всплів окно выключатся 
//     }
//     console.log('text');
//     i++;
// }

// let id = setTimeout(function log () {
//     console.log('hello');
//     id = setTimeout(log, 500);
// }, 500); // эта функция обозначает, что в консоль что-то высветится после того, как после выведения первого значения пройдет пол сек 


// 40. работа с датами 
// Дата - специфический объект, который содержит в себе методы и свойства. Использовать  для изменений времени работы какой-то функции, тайминг, время, хранение какого-то елемента.

// const now = new Date();

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now.getMilliseconds());
// console.log(now.getDay());

// console.log(now.getUTCHours()); // ютс часы указаной даты по всемирному поясу
// console.log(now.getHours());

// console.log(now.getTimezoneOffset()); // на сколько минут я различаюсь с всемирным поясом

// console.log(now.getTime()); // количество милисекунд которое уже прошло. Если мы положим число с консоля в const now = new Date() - мы можем узнать сколько это дней


// console.log(now.setHours(18, 40)); // мі сами устанавливаем дату
// console.log(now);

// console.log(now.setHours(40)); // 40 месяцев - скрипт автоматичиски исправил недочет
// console.log(now);

// // метод парс 
// const now = now Date ('2020-05-01');
// new Date.parse('2020-05-01'); // єти 2 строчки ничем не отличаются, просто парс прописуется как разбор, прописать єту дату - одно и то же

// let start = new Date();

// for (let i = 0; i < 1000; i++) {
//     let some = i ** 3;
// }

// let end = new Date();

// alert('Цикл отработал за ${end - start} milisec');


// 45. Функции -конструкторы 

// const num = new Number(3);
// console.log(num); // [Number: 3]
//  одно и тоже, но это устарелые функции
// const num = new Function(3);
// console.log(num); // [Function: anonymous]

// эта функция стала конструктором и мы можем создавать новых пользоваььелей 
// function User(name, id) { 
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`hello ${this.name}`);
//     };
// }
// //  добавляем в конструктор exit
// User.prototype.exit = function(name) {
//     console.log(`Пользователь ${this.name} ушел`);
// };

// const ivan = new User('Ivan', 34);
// const alex = new User('Alex', 43);

// ivan.exit();

// ivan.hello(); 
// alex.hello(); 

// console.log(ivan);
// console.log(alex);



// 46 контекст вызова This
// есть 4 метода вызова

// 1 метод
// function showThis (a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }
// showThis(4, 5);

// 2 метод 
// const obj = {
//     a: 20,
//     b: 15, 
//     sum: function() {
//         function shout() {
//             console.log(this);
//         }
//         shout(); // undefind 
//     }
// };
// obj.sum(); // { a: 20, b: 15, sum: [Function: sum] }

// 3 метод 
// function User(name, id) { 
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     };

// let ivan = new User('Ivan', 34);

// 4 метод 
// function sayName(surename) {
//     console.log(this);
//     console.log(this.name + surename);
// }
// const user = {
//     name: 'John'
// };


// мы передаем const user в function sayName
// sayName.call(user, 'Smith'); // разница с apply только в синтаксисе ['']
// sayName.apply(user, ['Smith']);

// новая функция связанная с определенным контекстом 
// function count(num) {
//     return this*num;
// }
// const double = count.bind(2); // 2 подстваляется в this
// console.log(double(3));
// console.log(double(14));


    // const btn = document.querySelector('button');
    // btn.addEventListener('click', (e) => {
    //     // console.log(this);// контекстом вызова будет сам элеммент на котором произошло событие, но так работает не всегда, ниже разбор 
    //     e.target.style.backgroundColor = 'red';
    // });

//  у стрелочной функции нет своего контекстного вызова, она всегда будет его брать у своего родителя 
// const obj = {
//     num: 5,
//     sayNumber: function() {
//         const say = () => {
//             console.log(this.num);
//         };

//         say();
//     }
// };

// obj.sayNumber();

// const calc = a => a * 4;
// console.log(calc(4));

// 1) Обычная функция: this = window, но если use strit - undefined
// 2) Контекст у методов обьекта - сам обьект   
// 3) This в конструкторах и классах - это новый экземпляр обьекта 
// 4) Ручная привязка this: call, apply, bind 


// 47 классы 
// классы - это красивая обертка функции конструкторов. Синтаксический сахар 
// концепция, шаблон 
// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }

//     calcArea() {
//         return this.height * this.width;
//     }
// }

// // extends - наследуется от 
// class ColoredRectangleWithText extends Rectangle {
//     constructor(height, width, text, bgColor) {
//         super(height, width); // повторяет строки которые писались выше в конструкторе. ВАЖНО: super всегда должно быть на первом месте в конструкторе!!!
//         this.text = text;
//         this.bgColor = bgColor;
//     }

//     showMyProps() {
//         console.log(`текст:${this.text}, цвет: ${this.bgColor}`);
//     }
// }

// const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');
// div.showMyProps();
// console.log(div.calcArea());

// екземпляры, которые основаны на основе концепции
// const square = new Rectangle(10, 10);
// const long = new Rectangle (20, 100);

// console.log(long.calcArea());
// console.log(square.calcArea());



//  49. Rest(...) оператор и параметры по умолчанию 
//  Rest - отдельные элементы обьединяет в одни массив. Оставшиеся элементы. Собирает всё оставшиеся, что попадает в него и он формирует из этого массив 
// const log = function(a, b, ...rest) {
//     console.log(a, b, rest);
// }

// log('basic', 'rest', 'operator', 'usage'); // basic rest [ 'operator', 'usage' ]

// параметр по умолчанию 
// function calcOrDouble(number, basis = 2) {
//     //если у нас нет 2го значения, мы хотим чтобы это значение подставлялось само ранеше это использ вот так:   а сейчас мы в аргумент можем просто присвоить '= 2';
//     basis = basis || 2;
//     console.log(number * basis);
// }

// calcOrDouble(3);


// 55.Promise - асинхронный код, когда действия выполняются одно за другим:

// Exemple 1
// console.log('Запрос данных...');

// const req = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Подготовка данных...');

//         const product = {
//             name: 'TV',
//             price: 2000
//         };

//         resolve(product);
//     }, 2000);
// });
// // then - если всё хорошо и проходит resolve - операция успешна. А reject это - если операция выше не выполнилась. 
// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then(data => {
//     console.log(data); 
// // // catch - если reject - операция выше не выполнилась. 
// }).catch(() => {
//     console.error('Произошла ошибка');
// // //  - когда всё операции завершились и нужно вывести какой-то финал, пр: конец
// }).finally(() => {
//     console.log('Finaly');
// });


// Exemple 2
// const test = time => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), time);
//     });
// };

// // promise.all - ждёт окончания всех промисов которые в массиве, а потом что-то выполняет;
// Promise.all([test(100), test(200)]).then(() => {
//     console.log('All');
// });
// // Promise.rece - какой-то из промисов закончится первый и сразу идёт выполнение функции;
// Promise.rece([test(100), test(200)]).then(() => {
//     console.log('All');
// });