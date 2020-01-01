let grid = [[`[ ]`, `[ ]`, `[ ]`], [`[ ]`, `[ ]`, `[ ]`], [`[ ]`, `[ ]`, `[ ]`]];

/*
// ===== Visual display of the grid for [console.log] =====
let gridVisual =
` ` + grid[0][0] + ` ` + `|` + ` ` + grid[0][1] + ` ` + `|`  + ` ` + grid[0][2] + ` ` + `\n` +
`-----|-----|-----`  + `\n` +
` ` + grid[1][0] + ` ` + `|` + ` ` + grid[1][1] + ` ` + `|`  + ` ` + grid[1][2] + ` ` + `\n` +
`-----|-----|-----`  + `\n` +
` ` + grid[2][0] + ` ` + `|` + ` ` + grid[2][1] + ` ` + `|`  + ` ` + grid[2][2] + ` ` + `\n` + ` `;
// =========================================================
*/

let playerOneInput = null;
let playerTwoInput = null;

let actionPrompt = require(`readline-sync`);

function preGameInit(){
    let playerInput = actionPrompt.question(`This game requires TWO [2] players.` + `\n` + `Type [y] to continue: `);

    if (playerInput == `y`){
        console.log(' '   + `\n` + `===== W E L C O M E   T O   T I C - T A C - T O E =====` + `\n` + ` `  + `\n` +
                    `INSTRUCTIONS:`  + `\n` +
                    `NOTE THE NUMBERS AND THEIR POSITIONS BELOW.`  + `\n` +
                    `THESE [NUMBERS] WILL BE YOUR [INPUT] TO SELECT YOUR SPOT.` + `\n` + ` ` + `\n` +
                        ` [1] | [2] | [3] ` + `\n` +
                        `-----|-----|-----`  + `\n` +
                        ` [4] | [5] | [6] ` + `\n` +
                        `-----|-----|-----`  + `\n` +
                        ` [7] | [8] | [9] `  + `\n` + ` `);
    }else{
        console.log(`Invalid input.` + `\n` + `Type [y] to continue: `)
        preGameInit();
    };
};

function playerOneTurn(){
    playerOneInput = actionPrompt.question(`Player One[1]: `);

    if (playerOneInput == 1 && !playerTwoInput == 1){
        grid[0][0] = `[X]`;
        console.log(grid);
        checkWinP1();
    }
    if (playerOneInput == 2 && !playerTwoInput == 2){
        grid[0][1] = `[X]`;
        console.log(grid);
        checkWinP1();
    }
    if (playerOneInput == 3 && !playerTwoInput == 3){      
        grid[0][2] = `[X]`;
        console.log(grid);
        checkWinP1();
    }
    if (playerOneInput == 4 && !playerTwoInput == 4){   
        grid[1][0] = `[X]`;
        console.log(grid);
        checkWinP1();
    }
    if (playerOneInput == 5 && !playerTwoInput == 5){    
        grid[1][1] = `[X]`;
        console.log(grid);
        checkWinP1();
    }
    if (playerOneInput == 6 && !playerTwoInput == 6){
        grid[1][2] = `[X]`;
        console.log(grid);
        checkWinP1();
    }
    if (playerOneInput == 7 && !playerTwoInput == 7){  
        grid[2][0] = `[X]`;
        console.log(grid);
        checkWinP1();
    }
    if (playerOneInput == 8 && !playerTwoInput == 8){
        grid[2][1] = `[X]`;
        console.log(grid);
        checkWinP1();
    }
    if (playerOneInput == 9 && !playerTwoInput == 9){
        grid[2][2] = `[X]`;
        console.log(grid);
        checkWinP1();
    }else{
        console.log(`Invalid input.` + `\n` + `Try again.`)
        playerOneTurn();
    };
};

function playerTwoTurn(){
    playerTwoInput = actionPrompt.question(`Player Two[2]: `);
    console.log(playerOneInput);

    if (playerTwoInput == 1 && !playerOneInput == 1){
        grid[0][0] = `[O]`;
        console.log(grid);
        checkWinP2();
    }else if (playerTwoInput == 2 && !playerOneInput == 2){
        grid[0][1] = `[O]`;
        console.log(grid);
        checkWinP2();
    }else if (playerTwoInput == 3 && !playerOneInput == 3){      
        grid[0][2] = `[O]`;
        console.log(grid);
        checkWinP2();
    }else if (playerTwoInput == 4 && !playerOneInput == 4){   
        grid[1][0] = `[O]`;
        console.log(grid);
        checkWinP2();
    }else if (playerTwoInput == 5 && !playerOneInput == 5){    
        grid[1][1] = `[O]`;
        console.log(grid);
        checkWinP2();
    }else if (playerTwoInput == 6 && !playerOneInput == 6){
        grid[1][2] = `[O]`;
        console.log(grid);
        checkWinP2();
    }else if (playerTwoInput == 7 && !playerOneInput == 7){  
        grid[2][0] = `[O]`;
        console.log(grid);
        checkWinP2();
    }else if (playerTwoInput == 8 && !playerOneInput == 8){
        grid[2][1] = `[O]`;
        console.log(grid);
        checkWinP2();
    }else if (playerTwoInput == 9 && !playerOneInput == 9){
        grid[2][2] = `[O]`;
        console.log(grid);
        checkWinP2();
    }else{
        console.log(`Invalid input.` + `\n` + `Try again.`)
        playerTwoTurn();
    };
};

function checkWinP1(){
    if (grid[0][0] === `[X]` && grid[0][1] === `[X]` && grid[0][2] === `[X]`){
        console.log(`Player One Wins!`);
    }else if (grid[0][0] === `[X]` && grid[0][1] === `[X]` && grid[0][2] === `[X]`){
        console.log(`Player One Wins!`);
    }else if (grid[1][0] === `[X]` && grid[1][1] === `[X]` && grid[1][2] === '[X]'){
        console.log(`Player One Wins!`);
    }else if (grid[2][0] === `[X]` && grid[2][1] === `[X]` && grid[2][2] === `[X]`){
        console.log(`Player One Wins!`);
    }else if (grid[0][0] === `[X]` && grid[1][0] === `[X]` && grid[2][0] === `[X]`){
        console.log(`Player One Wins!`);
    }else if (grid[0][1] === `[X]` && grid[1][1] === `[X]` && grid[2][1] === `[X]`){
        console.log(`Player One Wins!`);
    }else if (grid[0][2] === `[X]` && grid[1][2] === `[X]` && grid[2][2] === `[X]`){
        console.log(`Player One Wins!`);
    }else if (grid[2][0] === `[X]` && grid[1][1] === `[X]` && grid[0][2] === `[X]`){
        console.log(`Player One Wins!`);
    }else if (grid[0][0] === `[X]` && grid[1][1] === `[X]` && grid[2][2] === `[X]`){
        console.log(`Player One Wins!`);
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
        console.log(`TIE GAME!`);
        //playAgain();
    }
};

function checkWinP2(){
    if (grid[0][0] === `[O]` && grid[0][1] === `[O]` && grid[0][2] === `[O]`){
        console.log(`Player Two Wins!`);
    }else if (grid[0][0] === `[O]` && grid[0][1] === `[O]` && grid[0][2] === `[O]`){
        console.log(`Player Two Wins!`);
    }else if (grid[1][0] === `[O]` && grid[1][1] === `[O]` && grid[1][2] === '[O]'){
        console.log(`Player Two Wins!`);
    }else if (grid[2][0] === `[O]` && grid[2][1] === `[O]` && grid[2][2] === `[O]`){
        console.log(`Player Two Wins!`);
    }else if (grid[0][0] === `[O]` && grid[1][0] === `[O]` && grid[2][0] === `[O]`){
        console.log(`Player Two Wins!`);
    }else if (grid[0][1] === `[O]` && grid[1][1] === `[O]` && grid[2][1] === `[O]`){
        console.log(`Player Two Wins!`);
    }else if (grid[0][2] === `[O]` && grid[1][2] === `[O]` && grid[2][2] === `[O]`){
        console.log(`Player Two Wins!`);
    }else if (grid[2][0] === `[O]` && grid[1][1] === `[O]` && grid[0][2] === `[O]`){
        console.log(`Player Two Wins!`);
    }else if (grid[0][0] === `[O]` && grid[1][1] === `[O]` && grid[2][2] === `[O]`){
        console.log(`Player Two Wins!`);
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
        console.log(`TIE GAME!`);
        //playAgain();
    }
};

//GAME INIT
preGameInit();
playerOneTurn();