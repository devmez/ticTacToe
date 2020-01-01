let grid = [[`[ ]`, `[ ]`, `[ ]`], [`[ ]`, `[ ]`, `[ ]`], [`[ ]`, `[ ]`, `[ ]`]];

// ===== Visual display of the grid for [console.log] =====
let gridVisual =
` ` + grid[0][0] + ` ` + `|` + ` ` + grid[0][1] + ` ` + `|`  + ` ` + grid[0][2] + ` ` + `\n` +
`-----|-----|-----`  + `\n` +
` ` + grid[1][0] + ` ` + `|` + ` ` + grid[1][1] + ` ` + `|`  + ` ` + grid[1][2] + ` ` + `\n` +
`-----|-----|-----`  + `\n` +
` ` + grid[2][0] + ` ` + `|` + ` ` + grid[2][1] + ` ` + `|`  + ` ` + grid[2][2] + ` ` + `\n` + ` `;
// =========================================================

let actionPrompt = require(`readline-sync`);
let playerInput = actionPrompt.question(`This game requires TWO [2] players.` + `\n` + `Type [y] to continue: `);

function preGameInit(){
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
    };
};

function playerOneTurn(){
    let playerOneInput = actionPrompt.question(`P1: `);

    if (playerOneInput == 1){
        grid[0][0] = `[X]`;
        console.log(grid);
        checkWinP1();
    }else if (playerOneInput == 2){
        grid[0][1] = `[X]`;
        checkWinP1();
    }else if (playerOneInput == 3){      
        grid[0][2] = `[X]`;
        checkWinP1();
    }else if (playerOneInput == 4){   
        grid[1][0] = `[X]`;
        checkWinP1();
    }else if (playerOneInput == 5){    
        grid[1][1] = `[X]`;
        checkWinP1();
    }else if (playerOneInput == 6){
        grid[1][2] = `[X]`;
        checkWinP1();
    }else if (playerOneInput == 7){  
        grid[2][0] = `[X]`;
        checkWinP1();
    }else if (playerOneInput == 8){
        grid[2][1] = `[X]`;
        checkWinP1();
    }else if (playerOneInput == 9){
        grid[2][2] = `[X]`;
        checkWinP1();
    }else{
        console.log(`You did not enter a valid input.` + `\n` + `Try again.`)
        playerOneInput = actionPrompt.question(`P1: `);
    };
};

function playerTwoTurn(){
    let playerOneInput = actionPrompt.question(`P2: `);

    if (playerOneInput == 1){
        grid[0][0] = `[O]`;
        checkWinP2();
    }else if (playerOneInput == 2){
        grid[0][1] = `[O]`;
        checkWinP2();
    }else if (playerOneInput == 3){      
        grid[0][2] = `[O]`;
        checkWinP2();
    }else if (playerOneInput == 4){   
        grid[1][0] = `[O]`;
        checkWinP2();
    }else if (playerOneInput == 5){    
        grid[1][1] = `[O]`;
        checkWinP2();
    }else if (playerOneInput == 6){
        grid[1][2] = `[O]`;
        checkWinP2();
    }else if (playerOneInput == 7){  
        grid[2][0] = `[O]`;
        checkWinP2();
    }else if (playerOneInput == 8){
        grid[2][1] = `[O]`;
        checkWinP2();
    }else if (playerOneInput == 9){
        grid[2][2] = `[O]`;
        checkWinP2();
    }else{
        console.log(`You did not enter a valid input.` + `\n` + `Try again.`)
        playerTwoInput = actionPrompt.question(`P2: `);
    };
};

function checkWinP1(){
    if (grid[0][0] === `X` && grid[0][1] === `X` && grid[0][2] === `X`){
        console.log(`Player One Wins!`);
    }else if (grid[0][0] === `X` && grid[0][1] === `X` & grid[0][2] === `X`){
        console.log(`Player One Wins!`);
    }else if (grid[1][0] === `X` && grid[1][1] === `X` & grid[1][2] === 'X'){
        console.log(`Player One Wins!`);
    }else if (grid[2][0] === `X` && grid[2][1] === `X` & grid[2][2] === `X`){
        console.log(`Player One Wins!`);
    }else if (grid[0][0] === `X` && grid[1][0] === `X` & grid[2][0] === `X`){
        console.log(`Player One Wins!`);
    }else if (grid[0][1] === `X` && grid[1][1] === `X` & grid[2][1] === `X`){
        console.log(`Player One Wins!`);
    }else if (grid[0][2] === `X` && grid[1][2] === `X` & grid[2][2] === `X`){
        console.log(`Player One Wins!`);
    }else if (grid[2][0] === `X` && grid[1][1] === `X` & grid[0][2] === `X`){
        console.log(`Player One Wins!`);
    }else if (grid[0][0] === `X` && grid[1][1] === `X` & grid[2][2] === `X`){
        console.log(`Player One Wins!`);
    }else if (
        grid[0][0] === `` ||
        grid[0][1] === `` ||
        grid[0][2] === `` ||
        grid[1][0] === `` ||
        grid[1][2] === `` ||
        grid[1][2] === `` ||
        grid[2][0] === `` ||
        grid[2][1] === `` ||
        grid[2][2] === ``
    ){
        playerTwoTurn();
    }else{
        console.log(`TIE GAME!`);
        playAgain();
    }
};

function checkWinP2(){
    if (grid[0][0] === `O` && grid[0][1] === `O` & grid[0][2] === `O`){
        console.log(`Player Two Wins!`);
    }else if (grid[0][0] === `O` && grid[0][1] === `O` & grid[0][2] === `O`){
        console.log(`Player Two Wins!`);
    }else if (grid[1][0] === `O` && grid[1][1] === `O` & grid[1][2] === `O`){
        console.log(`Player Two Wins!`);
    }else if (grid[2][0] === `O` && grid[2][1] === `O` & grid[2][2] === `O`){
        console.log(`Player Two Wins!`);
    }else if (grid[0][0] === `O` && grid[1][0] === `O` & grid[2][0] === `O`){
        console.log(`Player Two Wins!`);
    }else if (grid[0][1] === `O` && grid[1][1] === `O` & grid[2][1] === `O`){
        console.log(`Player Two Wins!`);
    }else if (grid[0][2] === `O` && grid[1][2] === `O` & grid[2][2] === `O`){
        console.log(`Player Two Wins!`);
    }else if (grid[2][0] === `O` && grid[1][1] === `O` & grid[0][2] === `O`){
        console.log(`Player Two Wins!`);
    }else if (grid[0][0] === `O` && [grid[1][1]] === `O` & grid[2][2] === `O`){
        console.log(`Player Two Wins!`);
    }else if (
        grid[0][0] === `` ||
        grid[0][1] === `` ||
        grid[0][2] === `` ||
        grid[1][0] === `` ||
        grid[1][2] === `` ||
        grid[1][2] === `` ||
        grid[2][0] === `` ||
        grid[2][1] === `` ||
        grid[2][2] === ``
    ){
        playerOneTurn();
    }else{
        console.log(`TIE GAME!`);
        playAgain();
    }
};



//GAME INIT
preGameInit();
playerOneTurn();













// function gridInput(){
//     let playerOneInput = playerOne.push(actionPrompt.question(`P1: `));
//     let playerTwoInput = playerTwo.push(actionPrompt.question(`P2: `));
// };

// function winCombo(){
//     let playerOne = [];
//     let playerTwo = [];

//     if ()
// };

// function gameInit(){
//     let playerOne = [];
//     let playerTwo = [];
//     let winCombo = {
        
//     };

//     let playerOneInput = playerOne.push(actionPrompt.question(`P1: `));
//     let playerTwoInput = playerTwo.push(actionPrompt.question(`P2: `));

//     if (playerOne == )

// };