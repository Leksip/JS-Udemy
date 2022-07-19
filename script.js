'use strict'


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (personalMovieDB.count === null || personalMovieDB.count=== '' || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
},
    rememberMyFilms: () => {
        for (let i = 1; i < 3; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
            if (a != null && b != null && a !== '' && b !== '' && a.length < 50 && b.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    etectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: (hidden) => {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: () => {
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        }
        else{personalMovieDB.privat = true;}
    },
    writeYourGenrs: () => {
        for (let i = 1; i < 4; i++) {
            let genrs = prompt(`Ваш любимый жанр под номером ${i}`)
            if(genrs === '' || genrs === null){
                console.log('Ваш ответ некорректен')
                i--
            }else {
            personalMovieDB.genres[i - 1] = genrs;}
        }
        personalMovieDB.genres.forEach((item,i)=>{
            `Ваш любимый жанр под номером ${i + 1} - это ${item}`
        })
    }

};

