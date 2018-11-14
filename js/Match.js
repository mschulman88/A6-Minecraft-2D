const pokemon = [
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

let pokemonGrid = pokemon.concat(pokemon).sort(function() {
    return 0.5 - Math.random();
});

var firstGuess = '';
var secondGuess = '';
var count = 0;

const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

pokemonGrid.forEach(item =>{
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = item.name;
    card.style.backgroundImage = `url(${item.img})`;
    grid.appendChild(card);
});


grid.addEventListener('click', function (e) {
    let clicked = e.target;
    if (clicked.nodeName === 'SECTION') { 
        return; 
    }
    if (count < 2) {
        count++;
        clicked.classList.add('selected');
    }
});