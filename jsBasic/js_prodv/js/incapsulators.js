'use strict';

// getters and setters 
// const persone = {
//     name: "Alex", 
//     age: 24, 

//     get userAge() {    // получает  
//         return this.age;
//     },

//     set userAge(num) { // принимает и выводит 
//         this.age = num;
//     }
// };

// console.log(persone.userAge = 30);
// console.log(persone.userAge);

// инкапсуляция  - метод обьектно ориентированного програмированния. Мы скрываем всё данные чтобы пользовательничего не сломал. Скрытие информации
// воп - обьект хранит свое состояние в приватном порядке и  только методы обьекта имеют доступ к его изменению 

class User (name, age) {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    say () {
        console.log(`Name users ${this.name} and age ${this._age}`);
    }

    get age() {
        return this._age;
    }
    
    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('not symbol');
        }
    }
}

const ivan = new User ('Ivan', 23);
console.log(ivan.name);
// console.log(ivan.getAge());
ivan.userAge = 99;
// ivan.setAge(30);
// ivan.setAge(300);
console.log(ivan.getAge());
ivan.say();