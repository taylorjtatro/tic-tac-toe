
let i =  0;
const playGame = e => {
    console.log(e.target);

    
    i++;

    console.log(i);
    return i;



}





document.querySelector('.grid-container').addEventListener('click', playGame);