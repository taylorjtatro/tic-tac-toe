
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



//Added this comment to see if git pull works well


//Now had to add second comment to check if it works yay this is fun hahaha

<<<<<<< HEAD
//now we'll see if we conflictwhen i push this
=======
//NOw I am going to add some code form the work computer and see if i can push it up
>>>>>>> 99c86a21ae1a81c587f3637b2640e73910193930
