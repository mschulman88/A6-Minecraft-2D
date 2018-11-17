var match = {};

// MATCH VARIABLES
match.firstGuess = '';
match.secondGuess = '';
match.count = 0;
match.previousTarget = null;
match.delay = 1000;
match.moves = 0;

// TIMER VARIABLES
match.second = 0, 
match.minute = 0;
match.timer = document.querySelector(".timer");
match.interval;

// MODAL VARIABLES
match.correctMatches = document.getElementsByClassName("match");;
match.modal = document.getElementById("modal")
// match.starsList = document.querySelectorAll(".star");
match.closeicon = document.querySelector(".close");


$(document).ready(function(){ 
    match.init();
});

match.init = function(){
    match.initGrid();
    match.bindClick();
    match.startTimer();
    // clearInterval(match.interval);
}

match.bindClick = function(){
    var grid = document.getElementById("grid");
    grid.addEventListener("click", match.testMatch);
    grid.addEventListener("click", match.gameComplete);
};

match.initGrid = function (){
    var pokemon = [
        {
            'name': "Bulbasaur",
            'img': "img/Bulbasaur.png",
        },
        {
            'name': "Charmander",
            'img': "img/Charmander.png",
        },
        {
            'name': "Ditto",
            'img': "img/Ditto.png",
        },
        {
            'name': "Eevee",
            'img': "img/Eevee.png",
        },
        {
            'name': "Gengar",
            'img': "img/Gengar.png",
        },
        {
            'name': "Gyarados",
            'img': "img/Gyarados.png",
        },
        {
            'name': "Jigglypuff",
            'img': "img/Jigglypuff.png",
        },
        {
            'name': "Mew",
            'img': "img/Mew.png",
        },
        {
            'name': "Pikachu",
            'img': "img/Pikachu.png",
        },
        {
            'name': "Psyduck",
            'img': "img/Psyduck.png",
        },
        {
            'name': "Snorlax",
            'img': "img/Snorlax.png",
        },
        {
            'name': "Squirtle",
            'img': "img/Squirtle.png",
        },
    ];
    
    var pokemonGrid = pokemon.concat(pokemon).sort(function() {
        return 0.5 - Math.random();
    });

    var game = document.getElementById('game');
    var grid = document.createElement('section');
    grid.setAttribute('class', 'grid');
    grid.setAttribute('id', 'grid');
    game.appendChild(grid);

    pokemonGrid.forEach(item =>{
        var card = document.createElement('div');
        card.classList.add('card');
        card.dataset.name = item.name;
        var front = document.createElement('div');
        front.classList.add('front');
        var back = document.createElement('div');
        back.style.backgroundImage = `url(${item.img})`;
        back.classList.add('back');
        grid.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);
    });
}

match.testMatch = function (event){
    var clicked = event.target;

    if (clicked.nodeName === 'SECTION' 
        || clicked === match.previousTarget 
        || clicked.parentNode.classList.contains('selected') 
        || clicked.parentNode.classList.contains('match')) {
            return;
    }
    if (match.count < 2) {
        match.count++;
        if (match.count === 1) {
            match.firstGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
        } else {
            match.secondGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
        }
        if (match.firstGuess !== '' && match.secondGuess !== '') {
            match.moveCounter();
            if (match.firstGuess === match.secondGuess) {
                setTimeout(match.matchPass, match.delay);
                setTimeout(match.resetGuesses, match.delay);
            } else {
                setTimeout(match.resetGuesses, match.delay);
            }
        }
        match.previousTarget = clicked;  
    }
};
    
match.matchPass = function(){
    var selected = document.querySelectorAll('.selected');
    selected.forEach(function (card) {
        card.classList.add('match', 'hidden');
    })
    match.gameComplete();
};

match.resetGuesses = function(){
    match.firstGuess = '';
    match.secondGuess = '';
    match.count = 0;
    match.previousTarget = null;
  
    var selected = document.querySelectorAll('.selected');
    selected.forEach(function (card) {
        card.classList.remove('selected');
    })
};

match.moveCounter = function(){    
    match.moves++;    
    document.getElementById("moves").innerHTML = match.moves;
    var ala = document.getElementById('star3');
    var kad = document.getElementById('star2');

    if (match.moves == 24){
        ala.style.visibility = "collapse";
    } else if (match.moves > 32){
        kad.style.visibility = "collapse";
    }
};

match.startTimer = function(){
    match.interval = setInterval(function(){
        match.timer.innerHTML = match.minute+" min "+match.second+" secs";
        match.second++;
        if(match.second == 60){
            match.minute++;
            match.second = 0;
        }
    },1000);
}

match.gameComplete = function(){
    if (match.correctMatches.length > 22){
        clearInterval(match.interval);
        finalTime = match.timer.innerHTML;

        // show congratulations modal
        match.modal.classList.add("show");

        // declare star rating variable
        var starRating = document.querySelector(".stars").innerHTML;

        //showing move, rating, time on modal
        document.getElementById("finalMove").innerHTML = match.moves;
        document.getElementById("starRating").innerHTML = starRating;
        document.getElementById("totalTime").innerHTML = finalTime;

        //closeicon on modal
        closeModal();
    };
}