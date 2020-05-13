//TO DO List

//Need an init function to set scores to 0 and start everything

//this may be the same as new game
    //we need the new game to start on whoever is the last player

//We need to address a draw
    //probably by move count
        //maybe a move count += 1;
        //if move count = 9 and no win

/**********************************PLAYERS, STATE, & Winning Array Combinations ******************************* */


let current = 0;

const state = {
    player: [
        {name: 'player1',
         piece: 'X',
         count: 0,
         score: 0       
        },
        {name: 'player2',
        piece: 'O',
        count: 0,
        score: 0
        }
    ],
    scores: {
        player1: 0,
        player2: 0
    },
    positions: {
        b1: 0,
        b2: 0,
        b3: 0,
        b4: 0,
        b5: 0,
        b6: 0,
        b7: 0,
        b8: 0,
        b9: 0

    }
};


const winningArr = {
    topWin: ['b1', 'b2', 'b3'],
    middleWin: ['b4', 'b5', 'b6'],
    bottomWin: ['b7', 'b8', 'b9'],
    leftWin: ['b1', 'b4', 'b7'],
    centerWin: ['b2', 'b5', 'b8'],
    rightWin: ['b3', 'b6', 'b9'],
    diagLWin: ['b1', 'b5', 'b9'],
    diagRWin: ['b3', 'b5', 'b7']
}

/**************************************************************************************************** */

//Record Move into State
const recordMove = (space) => {
    state.positions[space] = state.player[current].piece;
}


//Check to see if a player has won and if so return the winning combination
const checkWin = () => {
    //let player = state.player.playerPiece;
    let player = state.player[current].piece;
    console.log(player)
    let pos = state.positions;
    if (pos.b1 === player && pos.b2 === player && pos.b3 === player) {
        return 'topWin';
    } else if (pos.b4 === player && pos.b5 === player && pos.b6 === player) {
        console.log(`${state.player.playerName} wins mid accross`); 
        return 'middleWin';
    } else if (pos.b7 === player && pos.b8 === player && pos.b9 === player) {
        console.log(`${state.player.playerName} wins bottom across`); 
        return 'bottomWin';
    } else if (pos.b1 === player && pos.b4 === player && pos.b7 === player) {
        console.log(`${state.player.playerName} wins left down`); 
        return 'leftWin';
    } else if (pos.b2 === player && pos.b5 === player && pos.b8 === player) {
        console.log(`${state.player.playerName} wins center down`);   
        return 'centerWin';  
    } else if (pos.b3 === player && pos.b6 === player && pos.b9 === player) {
        console.log(`${state.player.playerName} wins right down`);
        return 'rightWin';
    } else if (pos.b1 === player && pos.b5 === player && pos.b9 === player) {
        console.log(`${state.player.playerName} wins left diaganol`); 
        return 'diagLWin';
    } else if (pos.b3 === player && pos.b5 === player && pos.b7 === player) {
        console.log(`${state.player.playerName} wins right diaganol`); 
        return 'diagRWin';
    } else if (state.player[current].count === 5) {
        console.log('draw');
        return 'draw';
    } else {
        return 0;
    }   
} 


// Change the color of the winning characters to Red
const displayWin = test => {
   if (test === 'draw') {
       console.log('draw')
   } else if (test !== 0){
        winningArr[test].forEach(el => {
        document.querySelector(`#${el}`).classList.add('red');
    });
    //this section switches player. maybe make its own function outside.
        alert(state.player[current].name)
        state.player[current].count += 1;
    };
    
}

//Change Player
const changePlayer = () => {
    if (current === 0) {
        current = 1;
        //Change active class to be on active player (red border around player name)
        ['.player-0', '.player-1'].forEach(el => {document.querySelector(el).classList.toggle('active')})
    } else {
        current = 0;
        ['.player-0', '.player-1'].forEach(el => {document.querySelector(el).classList.toggle('active')})
    };
}


//Update Score
const updateScore = () => {
    state.player[current].score += 1;
    document.querySelector(`.player-${current}-score`).innerHTML = state.player[current].score;
}



//Setup new game after win
const newGame = () => {
    //reset count
    state.player.forEach(el => el.count = 0);

    let positions = [];
    //Use a for in loop to loop over our positions obj and set them all back to 0
    for (const property in state.positions) {
        state.positions[property] = 0;
        positions.push(property);
        
    }
    console.log(positions)
    positions.forEach(el => {
        document.querySelector(`#${el}`).innerHTML = '';
        document.querySelector(`#${el}`).classList.remove('red');
    });
}



//MAIN CONTROLLER

document.querySelector('.grid-container').addEventListener('click', el => {
   
    let space = el.target;
    
    if (!space.innerHTML.includes('X') && !space.innerHTML.includes('O')) {
        
        
        console.log(current)//this isnt working to change current player?

        //Set the current player
        let currentPlayer = state.player[current];

        //Display current player letter
        space.innerHTML = currentPlayer.piece;

        // Add move to state.positions
        recordMove(space.id);
        
        //Tracks how many moves the player has made
        currentPlayer.count += 1;
        
        //Checks to see if have three in a row and console.logs win
        let win = checkWin();

        //If win returns true we display the winning moves in Red
        if (win) {//so here if we win we can do all our stuff in here
            displayWin(win);
            //Now we need to update the score
            updateScore();
            //then we need to reset player counts and the player moves in our state

            //Reset for New Game
            newGame();



        } else { //else if we dont win we can change player and keep going. but we may want to put change player outside of htis because we will want the next player to make the first move next time.

        }
        
        
       
        //NOW WE NEED TO SET UP SO THAT IT STOPS THE GAME IF A PLAYER WINS

        //this section switches player. maybe make its own function outside.
       
        changePlayer();
        
        console.log(current)  

    }


});









/*

const arrLoop = ['X', 'X', 'X'];
let t = 0;
arrLoop.forEach(el => {
    
    if(el === 'X') {
        t += 1;
    }
    console.log(t)
})



*/
//instead of an object we could do an array with the positions so start at b0 and then push in an x to those positions
    //s0 if array in postion 0,1,2 = this than top win
















/*

//Maybe create new class on initiazlixe

class Tester {
    constructor(test, test2) {
        this.test = test,
        this.test2 = test2;
    }

    example() {
        console.log(this.test + this.test2);
    }
}




const yesir = new Tester(1,2);
yesir.example();

//Old version but may revert back





/*

const topRow = [];
const midRow = [];
const botRow = [];
const leftRow = [];
const centRow = [];
const rightRow = [];
const diagLeft = [];
const diagRight = [];

const allWins = [topRow, midRow, botRow, leftRow, centRow, rightRow, diagLeft, diagRight];

const movePlace = (move) => {
    if (space === b1) {
        topRow.push(move);
        leftRow.push(move);
        diagLeft.push(move);
    }else if (space === b2) {
        topRow.push(move);
        centRow.push(move)
    } else if (space === b3) {
        topRow.push(move);
        rightRow.push(move);
        diagRight.push(move);
    } else if (space === b4) {
        leftRow.push(move);
        midRow.push(move);
    } else if (space === b5) {
        midRow.push(move);
        diagLeft.push(move);
        centRow.push(move);
        diagRight.push(move);
    } else if (space === b6) {
        midRow.push(move);
        rightRow.push(move);
    } else if (space === b7) {
        botRow.push(move);
        leftRow.push(move);
        diagRight.push(move);
    } else if (space === b8) {
        botRow.push(move);
        centRow.push(move);
    } else if (space === b9) {
        botRow.push(move);
        rightRow.push(move);
        diagLeft.push(move);
    }
    console.log(allWins);
}
*/