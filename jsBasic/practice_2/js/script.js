/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

// 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - новый фильм добавляется в список. Страница не должна перезагружаться.Новый фильм должен добавляться в movieDB.movies.Для получения доступа к значению input - обращаемся к нему как input.value;P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
// 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
// 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
// 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: "Добавляем любимый фильм"
// 5) Фильмы должны быть отсортированы по алфавиту */
'use strict';
// с урока петряченка
const movieDB = {
            movies: [
                "Логан",
                "Лига справедливости",
                "Ла-ла лэнд",
                "Одержимость",
                "Скотт Пилигрим против..."
            ]
        };

    const adv = document.querySelector('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = document.querySelector('.promo__genre'),
        movieList = document.querySelector('promo__interactive-list'),
        addForm = document.querySelector('.form.add'),
        addInput = document.querySelector('.adding__input'),
        checkbox = document.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {  

        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked; 

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`; 
            }

            if (favorite) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, movieList);

        }
        event.target.reset();

        });

        const deleteAdv = (arr) => {
            arr.forEach(item => {
                item.remove();
            });
        };

        const makeChanges = () => {
            genre.textContent = "Drama";

            poster.style.backgroundImage = 'url("img/bg.jpg")';
        };

        const sortArr = (arr) => {
            arr.sort();
        };

        function createMovieList(films, parent) {
            parent.innerHTML = "";
            sortArr(films);

            films.forEach((film, i) => {
                parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
            `;
            });

            document.querySelectorAll('.delete').forEach((btn, i) => {
                btn.addEventListener('click', () => {
                    btn.parentElement.remove();
                    movieDB.movies.slice(i, 1);

                    createMovieList(films, parent);
                });
            });
        }

        // function  createSomething(films, parent) {
        //     parent.innerHTML = '';
        //     sortArr(films);

        //     btn.addEventListener('click, () => {
        //         btn.parentElement.remove();
        //         movieDB.movies.slice
        //     } ')
        // }

















// солянка моя и с урока петряченка 
// document.addEventListener('DOMContentLoaded',() => { // дом стурктура будет работать только когда страница хтмл будет загружен

//     const movieDB = {
//         movies: [
//             "Логан",
//             "Лига справедливости",
//             "Ла-ла лэнд",
//             "Одержимость",
//             "Скотт Пилигрим против..."
//         ]
//     };
    
//     document.querySelectorAll('.ads').forEach(item => item.remove());
//     document.querySelector('.promo__genre').textContent ='Драма';
//     // document.querySelector('.promo__bg').style.background = 'url("../img/bgs.jpg") center top no-repeat';
//     const listItem = document.querySelectorAll('.promo__interactive-item'), 
//         list = document.querySelector('.promo__interactive-list'),
//         addForm = document.querySelector('form.add'),
//         addInput = addForm.querySelector('.adding_input'),
//         checkbox = addForm.querySelector('[type="checkbox"]');

//     function changeList(films, parent) {
//         // movieDB.movies.sort();
//         films.forEach((films, i) => {
//             parent.textContent = `${i + 1}. ${movieDB.movies[i]}`;
//         });
//     }
//     changeList(movieDB.movies, changeList);

//     addForm.addEventListener('submit', event => {
//         event.preventDefault();

//         const newFilm = addInput.value;
//         const favorite = checkbox.checked;
//         const makeChanges = () => {
        
//         }

//         movieDB.movies.push(newFilm);
//         movieDB.movies.sort(); 


//         });
// });



// мой пробник номер 1
// function changeList() {
//     // movieDB.movies.sort();
//     listItem.forEach((item, index) => {
//         item.textContent = `${index + 1}. ${movieDB.movies[index]}`;
//     });
// }
// changeList();

        // const deleteAdv = (arr) => { // метод удаления фото реклвмф, но он не работает и как по мнее необьясним аргументами
        //     arr.forEach(item => {
        //         item.remove();
        //     });
        // };

        // deleteAdv(adv);




// const btn = document.querySelector('button');
// const input = document.querySelector('.adding__input');
// let inputValue;

// input.addEventListener('input', event => {
//     inputValue = event.target.value;
// });

// btn.addEventListener('click', event => {
//     event.preventDefault();

//     if (inputValue) {
//         movieDB.movies.push(inputValue);
//         input.value = '';
//         inputValue = '';


    
//         console.log(movieDB.movies);
//     } else {
//         alert('Значение не может быть пустым!');
//     }
// });

