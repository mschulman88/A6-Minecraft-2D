// INITIALIZE NAMESPACE
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
match.closeicon = document.querySelector(".close");

// GAME START FUNCTIONS
$(document).ready(function(){ 
    match.init();
});

match.init = function(){
    match.initGrid();
    match.bindClick();
    match.startTimer();
}

match.bindClick = function(){
    var grid = document.getElementById("grid");
    var restart = document.getElementById("restart-img");
    grid.addEventListener("click", match.testMatch);
    grid.addEventListener("click", match.gameComplete);
    restart.addEventListener("click", match.restart);
};

match.initGrid = function (){
    // ARRAY OF POKEMON
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
    
    // SHUFFLE
    var pokemonGrid = pokemon.concat(pokemon).sort(function() {
        return 0.5 - Math.random();
    });

    // CREATE GRID
    var game = document.getElementById('game');
    var grid = document.createElement('section');
    grid.setAttribute('class', 'grid');
    grid.setAttribute('id', 'grid');
    game.appendChild(grid);

    pokemonGrid.forEach(item =>{
        // CREATE CARD CONTAINER
        var card = document.createElement('div');
        card.classList.add('card');
        card.dataset.name = item.name;
        
        // CREATE FRONT/BACK
        var front = document.createElement('div');
        front.classList.add('front');
        var back = document.createElement('div');
        back.style.backgroundImage = `url(${item.img})`;
        back.classList.add('back');

        // APPEND CHILDREN TO GRID
        grid.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);
    });
}

// CARD MATCH FUNCTION
match.testMatch = function (event){
    var clicked = event.target;

    // VERIFY CLICK INPUT IS CORRECT
    if (clicked.nodeName === 'SECTION' 
        || clicked === match.previousTarget 
        || clicked.parentNode.classList.contains('selected') 
        || clicked.parentNode.classList.contains('match')) {
            return;
    }
    if (match.count < 2) {
        match.count++;

        // FIRST GUESS
        if (match.count === 1) {
            match.firstGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');

        // SECOND GUESS
        } else {
            match.secondGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
        }
        
        // MATCH DETECTED
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
    
// CHANGE CLASS OF CORRECTLY MATCHED CARDS
match.matchPass = function(){
    var selected = document.querySelectorAll('.selected');
    selected.forEach(function (card) {
        card.classList.add('match', 'hidden');
    })
    match.gameComplete();
};

// RESET GUESSES AFTER TWO CHOICES
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

// MOVE COUNTER
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

// TIMER
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

// CHECK IF GAME WON - DISPLAY MODAL
match.gameComplete = function(){
    if (match.correctMatches.length > 22){
        clearInterval(match.interval);
        finalTime = match.timer.innerHTML;
        match.modal.classList.add("show");
        var starRating = document.querySelector(".stars").innerHTML;

        // RANKING STATS
        document.getElementById("finalMove").innerHTML = match.moves;
        document.getElementById("starRating").innerHTML = starRating;
        document.getElementById("totalTime").innerHTML = finalTime;

        // OPTIONS
        match.closeModal();
        match.playAgain();
    };
}

// RESTART GAME
match.restart = function(){
    // RESHUFFLE CARDS
    var gameBoard = document.getElementById("game");
    gameBoard.innerHTML = "";

    // RESET TIMER
    match.minute = 0;
    match.second = 0;
    match.timer.innerHTML = "0 min 0 secs";

    // RESET MOVE COUNT
    match.moves = 0;
    var moveCount = document.getElementById("moves");
    moveCount.innerHTML = 0;

    // RESET RANKING/STARS
    var ala = document.getElementById('star3');
    var kad = document.getElementById('star2');
    ala.style.visibility = "visible";
    kad.style.visibility = "visible";

    // INITIALIZE NEW GAME
    clearInterval(match.interval);
    match.initGrid();
    match.bindClick();
    match.startTimer();
}

// MODAL - CLOSE WINDOW BUTTON
match.closeModal = function(){
    var closeModal = document.getElementById("close");
    closeModal.addEventListener("click", function(){
        match.modal.classList.remove("show");
        match.restart();
    });
}

// MODAL - PLAY AGAIN
match.playAgain = function(){
    var newGame = document.getElementById("play-again");
    newGame.addEventListener("click", function(){
        match.modal.classList.remove("show");
        match.restart();
    });
}