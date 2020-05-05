



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
    }
};

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
   
   
    //Here we need to check if they won or if it is a draw. So write a function for that.
   
    if (state.player === player1) {
        state.player = player2;
    } else {
        state.player = player1;
    }

}


});



