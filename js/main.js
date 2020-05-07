



const player1 = {
    playerName: 'Player-1',
    playerPiece: 'X',
    playerMoves: []
}

const player2 = {
    playerName: 'Player-2',
    playerPiece: 'O',
    playerMoves: []
}

const state = {
    player: player1,
    usedBox: {
        player1: [],
        player2: []
    },
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





const obPush = (yup) => {
    state.positions[yup] = state.player.playerPiece;
}

const checkWin = () => {
    let player = state.player.playerPiece;
    let pos = state.positions;
    if (state.positions.b1 === player && state.positions.b2 === player && state.positions.b3 === player) {
        console.log(`${state.player.playerName} wins top across!`)
    } else if (pos.b4 === player && pos.b5 === player && pos.b6 === player) {
        console.log(`${state.player.playerName} wins mid accross`); 
    } else if (pos.b7 === player && pos.b8 === player && pos.b9 === player) {
        console.log(`${state.player.playerName} wins bottom across`); 
    } else if (pos.b1 === player && pos.b4 === player && pos.b7 === player) {
        console.log(`${state.player.playerName} wins left down`); 
    } else if (pos.b2 === player && pos.b5 === player && pos.b8 === player) {
        console.log(`${state.player.playerName} wins center down`);     
    } else if (pos.b3 === player && pos.b6 === player && pos.b9 === player) {
        console.log(`${state.player.playerName} wins right down`); 
    } else if (pos.b1 === player && pos.b5 === player && pos.b9 === player) {
        console.log(`${state.player.playerName} wins left diaganol`); 
    } else if (pos.b3 === player && pos.b5 === player && pos.b7 === player) {
        console.log(`${state.player.playerName} wins right diaganol`); 
    }    


//we need to return the player who won and add their score to the scoreboard


} 



document.querySelector('.grid-container').addEventListener('click', el => {
   // console.log(el.target);
    let space = el.target;
    

   //
if (!space.innerHTML.includes('X') && !space.innerHTML.includes('O')) {
    let currentPlayer = state.player;
    //console.log(currentPlayer)
    space.innerHTML = currentPlayer.playerPiece;
    currentPlayer.playerMoves.push(space.id);
    console.log(currentPlayer);
   obPush(space.id);
   console.log(state.positions);
   //movePlace(currentPlayer.playerPiece);
    //Here we need to check if they won or if it is a draw. So write a function for that.
            //should be like a 3 part if else statement
                //1. if three in a row declare winner
                // else 2. if 9 total moves have been made declare draw
                // else use this if statement below to switch to the next player and let them go.
   //testWin(allWins);
    checkWin();


    if (state.player === player1) {
        state.player = player2;
    } else {
        state.player = player1;
    }

}


});













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