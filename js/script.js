'use strict';

let numberOfFilms;

function start(){
     numberOfFilms= +prompt('Ile filmow ogladales?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
         numberOfFilms= +prompt('Ile filmow ogladales?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

 function rememberMyFilms(){

    for(let i = 0; i < 2 ;i ++){
        const a = prompt('Ostatni film ktory przegladales?', ''),
                b = prompt('Ocena :', '');
    
            if(a!=null && b!=null && a!="" && b!="" && a.length < 50){
                personalMovieDB.movies[a]=b;
                console.log("done");
            }  else{
                console.log("error");
                i--;
            }                 
    }
}

rememberMyFilms();

 function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        console.log("malo");
     }else if(personalMovieDB.count > 10 && personalMovieDB.count < 30){
        console.log("srednio");
     }else if(personalMovieDB.count > 30){
        console.log("norm"); 
     }else{
         console.log("error");
     }
 }
 detectPersonalLevel();

 function showMyDB(hidden){
     if(!hidden){
        console.log(personalMovieDB);
     }
 }
 showMyDB(personalMovieDB.privat);

 function writeYourGenres(){
     for(let i = 1;i <= 3;i++){
        personalMovieDB.genres[i - 1] = prompt(`Uliobiony zanr pod numerem ${i} `);
     }
     console.log(personalMovieDB.genres);
 }
 writeYourGenres();

 //console.log(personalMovieDB);
 
