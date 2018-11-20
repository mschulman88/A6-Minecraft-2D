// INITIALIZE NAMESPACE
var minecraft = {};


// GAME START FUNCTIONS
$(document).ready(function(){ 
    minecraft.init();
});

minecraft.init = function(){
    minecraft.initGrid();
}

// minecraft.bindClick = function(){

// };

minecraft.initGrid = function (){
    // ARRAY OF BLOCKS
    var blockGrid = [
        [
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "tree",
            'img': "img/tree.png",
            },
            {
            'name': "stone",
            'img': "img/stone.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
        ],
        [
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "tree",
            'img': "img/tree.png",
            },
            {
            'name': "stone",
            'img': "img/stone.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
        ],
        [
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "tree",
            'img': "img/tree.png",
            },
            {
            'name': "stone",
            'img': "img/stone.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
        ],
        [
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "tree",
            'img': "img/tree.png",
            },
            {
            'name': "stone",
            'img': "img/stone.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
        ],
        [
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "tree",
            'img': "img/tree.png",
            },
            {
            'name': "stone",
            'img': "img/stone.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
        ],
    ];

    

    // CREATE GRID
    var game = document.getElementById('game');
    var grid = document.createElement('section');
    grid.setAttribute('class', 'grid');
    grid.setAttribute('id', 'grid');
    game.appendChild(grid);

    blockGrid.forEach(Array =>{
        Array.forEach(item => {
            var block = document.createElement('div');
            block.classList.add('block');
            block.dataset.name = item.name;
            block.style.backgroundImage = `url(${item.img})`;
            grid.appendChild(block);
        })
    });
}