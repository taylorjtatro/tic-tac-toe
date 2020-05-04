
const state = {
    player: 1,
    usedBox: {
        player1: [],
        player2: []
    },
    scores: {
        player1: 0,
        player2: 0
    }
};


let test = document.querySelectorAll('.box');
let tester = Array.from(test);
console.log(tester)
tester.forEach(el => {
    el.innerHTML = '';
})

document.querySelector('.grid-container').addEventListener('click', el => {
    console.log(el.target);
    space = el.target;
    console.log(space.innerHTML)
    if (state.player === 1) {
        if (space.innerHTML.includes('')) {
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


   

});




//Figure out how to remove adding to the array if it already contains that value