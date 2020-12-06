const isRock     = (item) => item==='rock';
const isScissors = (item) => item==='scissors';
const isPaper    = (item) => item==='paper';
const isLizard   = (item) => item==='lizard';
const isSpock    = (item) => item==='spock';

const startGame = (playerItem, anotherItem) =>{
    const result = {finish: 'warning', message: ''};
    const fstPlayer = 'Player 1'
    const sndPlayer = 'Player 2'
    switch (playerItem){
        case('rock') :
            if(isRock(anotherItem)) result.message =`The rocks crashes, It's a tie...`;
            
            if(isScissors(anotherItem)) {
                result.message=`Rock destroys Scissors, ${fstPlayer} won!`;
                result.finish='won'
            };

            if(isPaper(anotherItem)) {
                result.message=`Paper wrap the Rock, ${sndPlayer} won!`;
                result.finish='lost';
            };

            if(isLizard(anotherItem)) {
                result.message=`Rock destroys the Lizard, ${fstPlayer} won!`;
                result.finish='won';
            };

            if(isSpock(anotherItem)) {
                result.message=`Spock vaporized the Rock, ${sndPlayer} won!`;
                result.finish='lost';
            };
        break;
        
        case('scissors') :
            if(isRock(anotherItem)){
                result.message =`Rock destroys Scissors, ${sndPlayer} won!`;
                result.finish='lost'
            };
                
            if(isScissors(anotherItem)) result.message=`The Scissors crashes, It's a tie...`;;

            if(isPaper(anotherItem)) {
                result.message=`Scissors cuts Paper, ${fstPlayer} won!`;
                result.finish='won';
            };

            if(isLizard(anotherItem)) {
                result.message=`Scissors beheads Lizard, ${fstPlayer} won!`;
                result.finish='won';
            };

            if(isSpock(anotherItem)) {
                result.message=`Spock breaks Scissors, ${sndPlayer} won!`;
                result.finish='lost';
            };
        break;

        case('paper') :
            if(isRock(anotherItem)){ 
                result.message =`Paper cover the Rock, ${fstPlayer} won!`;
                result.finish = 'won';
            };
            
            if(isScissors(anotherItem)) {
                result.message=`Scissors cut to Paper, ${sndPlayer} won!`;
                result.finish='lost'
            };

            if(isPaper(anotherItem)) result.message=`The Papers crashes, It's a tie...`;

            if(isLizard(anotherItem)) {
                result.message=`Lizard eats Paper, ${sndPlayer} won!`;
                result.finish='lost';
            };

            if(isSpock(anotherItem)) {
                result.message=`Paper disavows Spock, ${fstPlayer} won!`;
                result.finish='won';
            };
        break;
        
        case('lizard') :
            if(isRock(anotherItem)) {
                result.message =`Stone destroys Lizard, ${sndPlayer} won!`;
                result.finish='lost';
            }
            
            if(isScissors(anotherItem)) {
                result.message=`Scissors beheads Lizard, ${sndPlayer} won!`;
                result.finish='lost'
            };

            if(isPaper(anotherItem)) {
                result.message=`Lizard eats Paper, ${fstPlayer} won!`;
                result.finish='won';
            };

            if(isLizard(anotherItem)) result.message=`The Lizards crashes, It's a tie...`;

            if(isSpock(anotherItem)) {
                result.message=`Lizard Poisons Spock, ${fstPlayer} won!`;
                result.finish='won';
            };
        break;
        
        case('spock') :
            if(isRock(anotherItem)){
                result.message =`Spock vaporized the rock, ${fstPlayer} won!`;
                result.finish = 'won';
            };
            
            if(isScissors(anotherItem)) {
                result.message=`Spock breaks scissors, ${fstPlayer} won!`;
                result.finish='won'
            };

            if(isPaper(anotherItem)) {
                result.message=`Paper disavows Spock, ${sndPlayer} won!`;
                result.finish='lost';
            };

            if(isLizard(anotherItem)) {
                result.message=`Lizard Poisons Spock, ${sndPlayer} won!`;
                result.finish='lost';
            };

            if(isSpock(anotherItem)) result.message=`Spocks crashes, It's a tie...`;
        break;
        default:;    
    }
    return result;
}

export default {
    startGame
};