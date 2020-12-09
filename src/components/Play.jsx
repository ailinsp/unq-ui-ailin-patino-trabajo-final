const isRock     = (item) => item==='rock';
const isScissors = (item) => item==='scissors';
const isPaper    = (item) => item==='paper';
const isLizard   = (item) => item==='lizard';
const isSpock    = (item) => item==='spock';

const startGame = (playerItem, anotherItem) =>{

    const result = {finish: 'warning', message: ''};
    const playerOne = 'Player 1'
    const playerTwo = 'Player 2'

    switch (playerItem){

        case('rock') :
            if(isRock(anotherItem)) result.message =`It's a tie!`;
            
            if(isScissors(anotherItem)) {
                result.message=`Rock crushes Scissors, ${playerOne} wins!`;
                result.finish='won'
            };

            if(isPaper(anotherItem)) {
                result.message=`Paper covers Rock, ${playerTwo} wins!`;
                result.finish='lost';
            };

            if(isLizard(anotherItem)) {
                result.message=`Rock crushes Lizard, ${playerOne} wins!`;
                result.finish='won';
            };

            if(isSpock(anotherItem)) {
                result.message=`Spock vaporizes Rock, ${playerTwo} wins!`;
                result.finish='lost';
            };
        break;
        
        case('scissors') :
            if(isRock(anotherItem)){
                result.message =`Rock crushes Scissors, ${playerTwo} wins!`;
                result.finish='lost'
            };
                
            if(isScissors(anotherItem)) result.message=`It's a tie!`;;

            if(isPaper(anotherItem)) {
                result.message=`Scissors cuts Paper, ${playerOne} wins!`;
                result.finish='won';
            };

            if(isLizard(anotherItem)) {
                result.message=`Scissors decapitates Lizard, ${playerOne} wins!`;
                result.finish='won';
            };

            if(isSpock(anotherItem)) {
                result.message=`Spock smashes Scissors, ${playerTwo} wins!`;
                result.finish='lost';
            };
        break;

        case('paper') :
            if(isRock(anotherItem)){ 
                result.message =`Paper covers Rock, ${playerOne} wins!`;
                result.finish = 'won';
            };
            
            if(isScissors(anotherItem)) {
                result.message=`Scissors cuts Paper, ${playerTwo} wins!`;
                result.finish='lost'
            };

            if(isPaper(anotherItem)) result.message=`It's a tie!`;

            if(isLizard(anotherItem)) {
                result.message=`Lizard eats Paper, ${playerTwo} wins!`;
                result.finish='lost';
            };

            if(isSpock(anotherItem)) {
                result.message=`Paper disproves Spock, ${playerOne} wins!`;
                result.finish='won';
            };
        break;
        
        case('lizard') :
            if(isRock(anotherItem)) {
                result.message =`Rock crushes Lizard, ${playerTwo} wins!`;
                result.finish='lost';
            }
            
            if(isScissors(anotherItem)) {
                result.message=`Scissors decapitates Lizard, ${playerTwo} wins!`;
                result.finish='lost'
            };

            if(isPaper(anotherItem)) {
                result.message=`Lizard eats Paper, ${playerOne} wins!`;
                result.finish='won';
            };

            if(isLizard(anotherItem)) result.message=`It's a tie!`;

            if(isSpock(anotherItem)) {
                result.message=`Lizard poisons Spock, ${playerOne} wins!`;
                result.finish='won';
            };
        break;
        
        case('spock') :
            if(isRock(anotherItem)){
                result.message =`Spock vaporizes rock, ${playerOne} wins!`;
                result.finish = 'won';
            };
            
            if(isScissors(anotherItem)) {
                result.message=`Spock smashes scissors, ${playerOne} wins!`;
                result.finish='won'
            };

            if(isPaper(anotherItem)) {
                result.message=`Paper disproves Spock, ${playerTwo} wins!`;
                result.finish='lost';
            };

            if(isLizard(anotherItem)) {
                result.message=`Lizard poisons Spock, ${playerTwo} wins!`;
                result.finish='lost';
            };

            if(isSpock(anotherItem)) result.message=`It's a tie!`;
        break;
        
        default:;    
    }
    return result;
}

export default {startGame};