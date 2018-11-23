// INITIALIZE NAMESPACE
var minecraft = {};

minecraft.statusDirtRemove = false;
minecraft.statusStoneRemove = false;

minecraft.statusReplace = false;
minecraft.previousResource;

//minecraft global arrays
var tools = ['pickaxe', 'shovel', 'axe'];

// GAME START FUNCTIONS
$(document).ready(function(){ 
    minecraft.init();
});

minecraft.init = function(){
    minecraft.initGrid();
    minecraft.initSidebar();
    minecraft.bindClick();
}

minecraft.bindClick = function(){
    var grid = document.getElementById("grid");
    grid.addEventListener("click", minecraft.REMOVE);
    var tool = document.getElementById("tool");
    tool.addEventListener("click", minecraft.activateDirt);
    var tool2 = document.getElementById("tool2");
    tool2.addEventListener("click", minecraft.activateStone);
    var replace = document.getElementById("replace");
    replace.addEventListener("click", minecraft.replace);
};

minecraft.activateDirt = function(){
    minecraft.statusReplace = false;
    minecraft.statusStoneRemove = false;
    minecraft.statusDirtRemove = true;
}

minecraft.activateStone = function(){
    minecraft.statusReplace = false;
    minecraft.statusDirtRemove = false;
    minecraft.statusStoneRemove = true;
}

minecraft.replace = function(){
    minecraft.statusReplace = true;
    minecraft.statusDirtRemove = false;
    minecraft.statusStoneRemove = false;
}

minecraft.REMOVE = function (event){
    var clicked = event.target;
    minecraft.previousResource = clicked.dataset.name;

    if (minecraft.statusDirtRemove == true && clicked.dataset.name == "dirt"){
        clicked.classList.add('mined');
    } else if (minecraft.statusStoneRemove == true && clicked.dataset.name == "stone"){
        clicked.classList.add('mined');
    } else if (minecraft.statusReplace = true && minecraft.previousResource == "dirt"){
        clicked.classList.remove('mined');
        clicked.classList.add('dirt');
    } else if (minecraft.statusReplace = true && minecraft.previousResource == "stone"){
        clicked.classList.remove('mined');
        clicked.classList.add('stone');
    } 
}


minecraft.initSidebar = function (){
    var sidebar = $('#sidebar');
    for (var i =0 ; i < tools.length ; i ++){
        var tool = document.createElement('button');
        tool.style.backgroundImage = `url(img/${tools[i]}.png)`;
        tool.classList.add('tools');
        tool.classList.add(tools[i]);
        var toolLabel = document.createElement('img');
        toolLabel.src= "img/" + tools[i] + "label.png";
        toolLabel.classList.add('tool-label');
        tool.append(toolLabel);
        sidebar.append(tool);
        console.log('append');
    }
}  

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
