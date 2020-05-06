



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

const obPush = (yup) => {
    state.positions[yup] = state.player.playerPiece;
}


const testWin = arr => {
    arr.forEach(el => {// el here is each array topRow, botRow etc. 
        el.forEach(e => {//e here is each item in each of those arrays (the x's and owes)
            if (e === 'X') {

            } else {

            }
        })
    })
}



//Lets see if we can just add our players to the state so we have one large object.


document.querySelector('.grid-container').addEventListener('click', el => {
   // console.log(el.target);
    space = el.target;
    //console.log(space.innerHTML)
   /*
    if (state.player === 1) {
        if (!space.innerHTML.includes('O')) {
            space.innerHTML = 'X';
            state.usedBox.player1.push(space.id)
            console.log(state.usedBox)
            state.player = 2;
            console.log(state.player)
        }

    } else {
        if (space.innerHTML.includes('')) {
            space.innerHTML = 'O';
            state.usedBox.player2.push(space.id)
            console.log(state.usedBox)
            state.player = 1;
            console.log(state.player)
        } 

    }
*/

   //
if (!space.innerHTML.includes('X') && !space.innerHTML.includes('O')) {
    let currentPlayer = state.player;
    //console.log(currentPlayer)
    space.innerHTML = currentPlayer.playerPiece;
    currentPlayer.playerMoves.push(space.id);
    console.log(currentPlayer);
   obPush(space.id);
   console.log(state.positions)
   movePlace(currentPlayer.playerPiece);
    //Here we need to check if they won or if it is a draw. So write a function for that.
            //should be like a 3 part if else statement
                //1. if three in a row declare winner
                // else 2. if 9 total moves have been made declare draw
                // else use this if statement below to switch to the next player and let them go.
   testWin(allWins);


    if (state.player === player1) {
        state.player = player2;
    } else {
        state.player = player1;
    }

}


});



