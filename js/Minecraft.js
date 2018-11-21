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
            // ----- ROW 1 -----
        [
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            }
        ],
            // ----- ROW 2 -----
        [
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            }
        ],
            // ----- ROW 3 -----
        [
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            }
        ],
            // ----- ROW 4 -----
        [
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
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
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "stone",
            'img': "img/stone.png",
            }
        ],
             // ----- ROW 5 -----
        [
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "tree",
            'img': "img/tree.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "tree",
            'img': "img/tree.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "tree",
            'img': "img/tree.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "stone",
            'img': "img/stone.png",
            },
            {
            'name': "stone",
            'img': "img/stone.png",
            }
        ],
             // ----- ROW 6 -----
        [
            {
            'name': "stone",
            'img': "img/stone.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
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
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "tree",
            'img': "img/tree.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
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
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "stone",
            'img': "img/stone.png",
            },
            {
            'name': "stone",
            'img': "img/stone.png",
            },
            {
            'name': "stone",
            'img': "img/stone.png",
            }
        ],
             // ----- ROW 7 -----
        [
            {
            'name': "grass",
            'img': "img/grass.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            }
        ],
             // ----- ROW 8 -----
        [
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            }
        ],
             // ----- ROW 9 -----
        [
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            }
        ],
             // ----- ROW 10 -----
        [
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            }
        ]
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