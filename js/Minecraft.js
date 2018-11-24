// INITIALIZE NAMESPACE
var minecraft = {};

minecraft.statusDirtRemove = false;
minecraft.statusStoneRemove = false;

minecraft.statusReplace = false;
minecraft.previousResource;

//minecraft global arrays
minecraft.tools = ['pickaxe', 'shovel', 'axe'];
minecraft.inventory = ['dirt', 'leaves', 'stone', 'tree'];

// GAME START FUNCTIONS
// GAME START FUNCTIONS
$(document).ready(function(){
    minecraft.modal() 
});

//Modal
minecraft.modal = function (){
    var modal = $('#modal')
    var body = $('body')
    body.addClass('landing')
    var text = $('<div></div>')
    modal.append(text)
    var instructions = "Select a theme and create your own 2D world. You can use tools such as an axe, pickaxe, to acquire resources and build stuff."
    text.append(instructions)
    var start_button = $('<button>Start Game</button>')
    modal.append(start_button)
    start_button.click(function() {
        minecraft.init()
        modal.hide()
        body.removeClass('landing')
    });
}

minecraft.init = function(){
    minecraft.initGrid();
    minecraft.initSidebar();
    minecraft.bindClick();
}

minecraft.bindClick = function(){
    var grid = document.getElementById("grid");
    grid.addEventListener("click", minecraft.REMOVE);
    grid.addEventListener("click", minecraft.ADD);
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
    // minecraft.previousResource = clicked.dataset.name.value;

    if (minecraft.statusDirtRemove == true && clicked.dataset.name == "dirt"){
        clicked.classList.add('mined');
    } else if (minecraft.statusStoneRemove == true && clicked.dataset.name == "stone"){
        clicked.classList.add('mined');
    } 
}
minecraft.ADD = function (event){
    var clicked = event.target;
    var grid = document.getElementById('grid');
     if (minecraft.statusReplace == true){
        event.stopPropagation(); 
        grid.removeChild(clicked)
        //clicked.classList.add('dirt');
    }
}


minecraft.initSidebar = function (){
    var sidebar = $('#sidebar');
    var inventory = $('.inventory');
    for (var i =0 ; i < minecraft.tools.length ; i ++){
        var tool = document.createElement('button');
        tool.style.backgroundImage = `url(img/${minecraft.tools[i]}.png)`;
        tool.classList.add('tools');
        tool.classList.add(minecraft.tools[i]);
        var toolLabel = document.createElement('img');
        toolLabel.src= "img/" + minecraft.tools[i] + "label.png";
        toolLabel.classList.add('tool-label');
        tool.append(toolLabel);
        sidebar.prepend(tool);
    }
    for (var i = 0; i < minecraft.inventory.length ; i ++) {
        var resource = document.createElement('button');
        resource.style.backgroundImage = `url(img/${minecraft.inventory[i]}.png)`;
        resource.classList.add('resources');
        resource.classList.add(minecraft.inventory[i]);
        label = document.createElement('p');
        label.innerHTML = "0";
        resource.append(label);
        inventory.append(resource);
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
