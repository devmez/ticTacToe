let actionPrompt = require(`readline-sync`);

let grid = [[`[ ]`, `[ ]`, `[ ]`], [`[ ]`, `[ ]`, `[ ]`], [`[ ]`, `[ ]`, `[ ]`]];

let playerOneInput = null;
let playerTwoInput = null;

//Disclaimer
let playerInput = actionPrompt.question(' '   + `\n` + ' '   + `\n` + ' '   + `\n` + `===== This game requires TWO [2] players. =====` + `\n` + ` ` + `\n` + `Type [y] to continue: `);

function preGameInit(){
    if (playerInput == `y` || playerInput == `Y`){
        console.log(' '   + `\n` + ' '   + `\n` + ' '   + `\n` + `===== W E L C O M E   T O   T I C - T A C - T O E =====` + `\n` + ` `  + `\n` +
                    `INSTRUCTIONS:`  + `\n` +
                    `NOTE THE NUMBERS AND THEIR POSITIONS BELOW.`  + `\n` +
                    `THESE [NUMBERS] WILL BE YOUR [INPUT] TO SELECT YOUR SPOT.` + `\n` + ` ` + `\n` +
                        ` [1] | [2] | [3] ` + `\n` +
                        `-----|-----|-----`  + `\n` +
                        ` [4] | [5] | [6] ` + `\n` +
                        `-----|-----|-----`  + `\n` +
                        ` [7] | [8] | [9] `  + `\n` + ` ` + `\n` +
                        `If you understand how to play...` + `\n` + ` ` + `\n` + 
                        `===== LET'S BEGIN! =====` + `\n` + ` `);
    }else{
        console.log(`===== Invalid input. =====` + `\n` + `Type [y] to continue: `)
        
        preGameInit();
    };
};

function playerOneTurn(){
    playerOneInput = actionPrompt.question(`Player One[1]: `);

    switch (playerOneInput){
        case '1':
            if (playerTwoInput == 1){
                console.log(`===== This spot is taken. =====` + `\n` + `===== Try again. =====`);
                console.log(grid);
                playerOneTurn();
            };

            if (grid[0][0] == `[X]` || grid[0][0] == `[O]`){
                console.log(`===== This spot is taken. =====` + `\n` + `===== Try again. =====`);
                console.log(grid);
                playerOneTurn();
            };

            grid[0][0] = `[X]`;
            console.log(grid);
            break;
        case '2':
            if (playerTwoInput == 2){
                console.log(`===== This spot is taken. =====` + `\n` + `===== Try again. =====`);
                console.log(grid);
                playerOneTurn();
            };

            if (grid[0][1] == `[X]` || grid[0][1] == `[O]`){
                console.log(`===== This spot is taken. =====` + `\n` + `===== Try again. =====`);
                console.log(grid);
                playerOneTurn();
            };

            grid[0][1] = `[X]`;
            console.log(grid);
            break;
        case '3':
            if (playerTwoInput == 3){
                console.log(`===== This spot is taken. =====` + `\n` + `===== Try again. =====`);
                console.log(grid);
                playerOneTurn();
            };

            if (grid[0][2] == `[X]` || grid[0][2] == `[O]`){
                console.log(`===== This spot is taken. =====` + `\n` + `===== Try again. =====`);
                console.log(grid);
                playerOneTurn();
            };

            grid[0][2] = `[X]`;
            console.log(grid);
            break;
        case '4':
            if (playerTwoInput == 4){
                console.log(`===== This spot is taken. =====` + `\n` + `===== Try again. =====`);
                console.log(grid);
                playerOneTurn();
            };

            if (grid[1][0] == `[X]` || grid[1][0] == `[O]`){
                console.log(`===== This spot is taken. =====` + `\n` + `===== Try again. =====`);
                console.log(grid);
                playerOneTurn();
            };

            grid[1][0] = `[X]`;
            console.log(grid);
            break;
        case '5':
            if (playerTwoInput == 5){
                console.log(`===== This spot is taken. =====` + `\n` + `===== Try again. =====`);
                console.log(grid);
                playerOneTurn();
            };

            if (grid[1][1] == `[X]` || grid[1][1] == `[O]`){
                console.log(`===== This spot is taken. =====` + `\n` + `===== Try again. =====`);
                console.log(grid);
                playerOneTurn();
            };

            grid[1][1] = `[X]`;
            console.log(grid);
            break;
        case '6':
            if (playerTwoInput == 6){
                console.log(`===== This spot is taken. =====` + `\n` + `===== Try again. =====`);
                console.log(grid);
                playerOneTurn();
            };

            if (grid[1][2] == `[X]` || grid[1][2] == `[O]`){
                console.log(`===== This spot is taken. =====` + `\n` + `===== Try again. =====`);
                console.log(grid);
                playerOneTurn();
            };

            grid[1][2] = `[X]`;
            console.log(grid);
            break;
        case '7':
            if (playerTwoInput == 7){
                console.log(`===== This spot is taken. =====` + `\n` + `===== Try again. =====`);
                console.log(grid);
                playerOneTurn();
            };

            if (grid[2][0] == `[X]` || grid[2][0] == `[O]`){
                console.log(`===== This spot is taken. =====` + `\n` + `===== Try again. =====`);
                console.log(grid);
                playerOneTurn();
            };

            grid[2][0] = `[X]`;
            console.log(grid);
            break;
        case '8':
            if (playerTwoInput == 8){
                console.log(`===== This spot is taken. =====` + `\n` + `===== Try again. =====`);
                console.log(grid);
                playerOneTurn();
            };

            if (grid[2][1] == `[X]` || grid[2][1] == `[O]`){
                console.log(`===== This spot is taken. =====` + `\n` + `===== Try again. =====`);
                console.log(grid);
                playerOneTurn();
            };

            grid[2][1] = `[X]`;
            console.log(grid);
            break;
        case `9`:
            if (playerTwoInput == 9){
                console.log(`===== This spot is taken. =====` + `\n` + `===== Try again. =====`);
                console.log(grid);
                playerOneTurn();
            };

            if (grid[2][2] == `[X]` || grid[2][2] == `[O]`){
                console.log(`===== This spot is taken. =====` + `\n` + `===== Try again. =====`);
                console.log(grid);
                playerOneTurn();
            };

            grid[2][2] = `[X]`;
            console.log(grid);
            break;            
        default:
            console.log(`===== Invalid input. =====` + `\n` + `===== Try again. =====`)
            playerOneTurn();
    };

    checkWinP1();
};

function playerTwoTurn(){
    playerTwoInput = actionPrompt.question(`Player Two[2]: `);

    switch (playerTwoInput){
        case '1':
            if (playerOneInput == 1){
                console.log(`===== This spot is taken. =====` + `\n` + `===== Try again. =====`);
                console.log(grid);
                playerTwoTurn();
            };

            if (grid[0][0] == `[X]` || grid[0][0] == `[O]`){
                console.log(`===== This spot is taken. =====` + `\n` + `===== Try again. =====`);
                console.log(grid);
                playerTwoTurn();
            };

            grid[0][0] = `[O]`;
            console.log(grid);
            break;
        case '2':
            if (playerOneInput == 2){
                console.log(`===== This spot is taken. =====` + `\n` + `===== Try again. =====`);
                console.log(grid);
                playerTwoTurn();
            };

            if (grid[0][1] == `[X]` || grid[0][1] == `[O]`){
                console.log(`===== This spot is taken. =====` + `\n` + `===== Try again. =====`);
                console.log(grid);
                playerTwoTurn();
            };

            grid[0][1] = `[O]`;
            console.log(grid);
            break;
        case '3':
            if (playerOneInput == 3){
                console.log(`===== This spot is taken. =====` + `\n` + `===== Try again. =====`);
                console.log(grid);
                playerTwoTurn();
            };

            if (grid[0][2] == `[X]` || grid[0][2] == `[O]`){
                console.log(`===== This spot is taken. =====` + `\n` + `===== Try again. =====`);
                console.log(grid);
                playerTwoTurn();
            };

            grid[0][2] = `[O]`;
            console.log(grid);
            break;
        case '4':
            if (playerOneInput == 4){
                console.log(`===== This spot is taken. =====` + `\n` + `===== Try again. =====`);
                console.log(grid);
                playerTwoTurn();
            };

            if (grid[1][0] == `[X]` || grid[1][0] == `[O]`){
                console.log(`===== This spot is taken. =====` + `\n` + `===== Try again. =====`);
                console.log(grid);
                playerTwoTurn();
            };

            grid[1][0] = `[O]`;
            console.log(grid);
            break;
        case '5':
            if (playerOneInput == 5){
                console.log(`===== This spot is taken. =====` + `\n` + `===== Try again. =====`);
                console.log(grid);
                playerTwoTurn();
            };

            if (grid[1][1] == `[X]` || grid[1][1] == `[O]`){
                console.log(`===== This spot is taken. =====` + `\n` + `===== Try again. =====`);
                console.log(grid);
                playerTwoTurn();
            };

            grid[1][1] = `[O]`;
            console.log(grid);
            break;
        case '6':
            if (playerOneInput == 6){
                console.log(`===== This spot is taken. =====` + `\n` + `===== Try again. =====`);
                console.log(grid);
                playerTwoTurn();
            };

            if (grid[1][2] == `[X]` || grid[1][2] == `[O]`){
                console.log(`===== This spot is taken. =====` + `\n` + `===== Try again. =====`);
                console.log(grid);
                playerTwoTurn();
            };

            grid[1][2] = `[O]`;
            console.log(grid);
            break;
        case '7':
            if (playerOneInput == 7){
                console.log(`===== This spot is taken. =====` + `\n` + `===== Try again. =====`);
                console.log(grid);
                playerTwoTurn();
            };

            if (grid[2][0] == `[X]` || grid[2][0] == `[O]`){
                console.log(`===== This spot is taken. =====` + `\n` + `===== Try again. =====`);
                console.log(grid);
                playerTwoTurn();
            };

            grid[2][0] = `[O]`;
            console.log(grid);
            break;
        case '8':
            if (playerOneInput == 8){
                console.log(`===== This spot is taken. =====` + `\n` + `===== Try again. =====`);
                console.log(grid);
                playerTwoTurn();
            };

            if (grid[2][1] == `[X]` || grid[2][1] == `[O]`){
                console.log(`===== This spot is taken. =====` + `\n` + `===== Try again. =====`);
                console.log(grid);
                playerTwoTurn();
            };

            grid[2][1] = `[O]`;
            console.log(grid);
            break;
        case `9`:
            if (playerOneInput == 9){
                console.log(`===== This spot is taken. =====` + `\n` + `===== Try again. =====`);
                console.log(grid);
                playerTwoTurn();
            };

            if (grid[2][2] == `[X]` || grid[2][2] == `[O]`){
                console.log(`===== This spot is taken. =====` + `\n` + `===== Try again. =====`);
                console.log(grid);
                playerTwoTurn();
            };

            grid[2][2] = `[O]`;
            console.log(grid);
            break;            
        default:
            console.log(`===== Invalid input. =====` + `\n` + `===== Try again. =====`)
            playerTwoTurn();
    };

    checkWinP2();
};

function checkWinP1(){
    if (grid[0][0] === `[X]` && grid[0][1] === `[X]` && grid[0][2] === `[X]`){
        console.log(`===== Player One Wins! =====`);
        playAgain();
    }else if (grid[0][0] === `[X]` && grid[0][1] === `[X]` && grid[0][2] === `[X]`){
        console.log(`===== Player One Wins! =====`);
        playAgain();
    }else if (grid[1][0] === `[X]` && grid[1][1] === `[X]` && grid[1][2] === '[X]'){
        console.log(`===== Player One Wins! =====`);
        playAgain();
    }else if (grid[2][0] === `[X]` && grid[2][1] === `[X]` && grid[2][2] === `[X]`){
        console.log(`===== Player One Wins! =====`);
        playAgain();
    }else if (grid[0][0] === `[X]` && grid[1][0] === `[X]` && grid[2][0] === `[X]`){
        console.log(`===== Player One Wins! =====`);
        playAgain();
    }else if (grid[0][1] === `[X]` && grid[1][1] === `[X]` && grid[2][1] === `[X]`){
        console.log(`===== Player One Wins! =====`);
        playAgain();
    }else if (grid[0][2] === `[X]` && grid[1][2] === `[X]` && grid[2][2] === `[X]`){
        console.log(`===== Player One Wins! =====`);
        playAgain();
    }else if (grid[2][0] === `[X]` && grid[1][1] === `[X]` && grid[0][2] === `[X]`){
        console.log(`===== Player One Wins! =====`);
        playAgain();
    }else if (grid[0][0] === `[X]` && grid[1][1] === `[X]` && grid[2][2] === `[X]`){
        console.log(`===== Player One Wins! =====`);
        playAgain();
    }else if (
        grid[0][0] == `[ ]` ||
        grid[0][1] == `[ ]` ||
        grid[0][2] == `[ ]` ||
        grid[1][0] == `[ ]` ||
        grid[1][2] == `[ ]` ||
        grid[1][2] == `[ ]` ||
        grid[2][0] == `[ ]` ||
        grid[2][1] == `[ ]` ||
        grid[2][2] == `[ ]`
    ){
        playerTwoTurn();
    }else{
        console.log(` ` + `\n` + `===== TIE GAME! =====` + `\n` + ` `);
        playAgain();
    };
};

function checkWinP2(){
    if (grid[0][0] === `[O]` && grid[0][1] === `[O]` && grid[0][2] === `[O]`){
        console.log(`===== Player Two Wins! ======`);
        playAgain();
    }else if (grid[0][0] === `[O]` && grid[0][1] === `[O]` && grid[0][2] === `[O]`){
        console.log(`===== Player Two Wins! ======`);
        playAgain();
    }else if (grid[1][0] === `[O]` && grid[1][1] === `[O]` && grid[1][2] === '[O]'){
        console.log(`===== Player Two Wins! ======`);
        playAgain();
    }else if (grid[2][0] === `[O]` && grid[2][1] === `[O]` && grid[2][2] === `[O]`){
        console.log(`===== Player Two Wins! ======`);
        playAgain();
    }else if (grid[0][0] === `[O]` && grid[1][0] === `[O]` && grid[2][0] === `[O]`){
        console.log(`===== Player Two Wins! ======`);
        playAgain();
    }else if (grid[0][1] === `[O]` && grid[1][1] === `[O]` && grid[2][1] === `[O]`){
        console.log(`===== Player Two Wins! ======`);
        playAgain();
    }else if (grid[0][2] === `[O]` && grid[1][2] === `[O]` && grid[2][2] === `[O]`){
        console.log(`===== Player Two Wins! ======`);
        playAgain();
    }else if (grid[2][0] === `[O]` && grid[1][1] === `[O]` && grid[0][2] === `[O]`){
        console.log(`===== Player Two Wins! ======`);
        playAgain();
    }else if (grid[0][0] === `[O]` && grid[1][1] === `[O]` && grid[2][2] === `[O]`){
        console.log(`===== Player Two Wins! ======`);
        playAgain();
    }else if (
        grid[0][0] == `[ ]` ||
        grid[0][1] == `[ ]` ||
        grid[0][2] == `[ ]` ||
        grid[1][0] == `[ ]` ||
        grid[1][2] == `[ ]` ||
        grid[1][2] == `[ ]` ||
        grid[2][0] == `[ ]` ||
        grid[2][1] == `[ ]` ||
        grid[2][2] == `[ ]`
    ){
        playerOneTurn();
    }else{
        console.log(` ` + `\n` + `===== TIE GAME! =====` + `\n` + ` `);
        playAgain();
    };
};

function playAgain(){
    playerInput = actionPrompt.question(` ` + `\n` + `Would you like to play again?` + `\n` + ` ` + `[y / n]? : `);

    if (playerInput == `y` || playerInput == `Y`){
        preGameInit();
    }else if (playerInput == `n` || playerInput == `N`){
        console.log(` ` + `\n` + `===== THANK YOU FOR PLAYING =====` + `\n` + ` `);
    }else{
        console.log(`===== Invalid input. =====` + `\n` + ` ` + `\n`)
        playAgain();
    };
};

//GAME INIT
preGameInit();
playerOneTurn();