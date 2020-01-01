// let grid = [`topLeft`, `topMid`, `topRight`, `midLeft`, `center`, `midRight`, `botLeft`, `botMid`, `botRight`];

// let grid = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let grid = [[], [], []];
let actionPrompt = require(`readline-sync`);
let playerInput = actionPrompt.question(`This game requires TWO [2] players.` + `\n` + `Type [y] to continue: `);
let spot = 0;


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
preGameInit();


function playerOneTurn(){
    let playerOneInput = actionPrompt.question(`P1: `);

    if (playerOneInput === 1){
        grid[0].push(`X`);
        checkWin();
    }else if (playerOneInput === 2){
        grid[0].push(`X`);
        checkWin();
    }else if (playerOneInput === 3){      
        grid[0].push(`X`);
        checkWin();  
    }else if (playerOneInput === 4){   
        grid[0].push(`X`);
        checkWin();     
    }else if (playerOneInput === 5){    
        grid[0].push(`X`);
        checkWin();    
    }else if (playerOneInput === 6){
        grid[0].push(`X`);
        checkWin();        
    }else if (playerOneInput === 7){  
        grid[0].push(`X`);
        checkWin();      
    }else if (playerOneInput === 8){
        grid[0].push(`X`);
        checkWin();
    }else if (playerOneInput === 9){
        grid[0].push(`X`);
        checkWin();
    }else{
        console.log(`You did not enter a valid input.` + `\n` + `Try again.`)
    };
};
playerOneTurn();

// function checkWin(grid){

// };















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