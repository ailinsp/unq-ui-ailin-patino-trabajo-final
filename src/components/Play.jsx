const rock = (option) => option ==='rock';
const paper = (option) => option ==='paper';
const scissors = (option) => option ==='scissors';
const lizard = (option) => option ==='lizard';
const spock = (option) => option ==='spock';

const startGame = (playerOneChoice, playerTwoChoice) =>{

    const result = {finish: 'warning', message: ''};
    const playerOne = 'Player 1'
    const playerTwo = 'Player 2'

    switch (playerOneChoice){

        case('rock') :
            if(rock(playerTwoChoice)) result.message =`It's a tie!`;
            
            if(scissors(playerTwoChoice)) {
                result.message=`Rock crushes Scissors, ${playerOne} wins!`;
                result.finish='won'
            };

            if(paper(playerTwoChoice)) {
                result.message=`Paper covers Rock, ${playerTwo} wins!`;
                result.finish='lost';
            };

            if(lizard(playerTwoChoice)) {
                result.message=`Rock crushes Lizard, ${playerOne} wins!`;
                result.finish='won';
            };

            if(spock(playerTwoChoice)) {
                result.message=`Spock vaporizes Rock, ${playerTwo} wins!`;
                result.finish='lost';
            };
        break;
        
        case('scissors') :
            if(rock(playerTwoChoice)){
                result.message =`Rock crushes Scissors, ${playerTwo} wins!`;
                result.finish='lost'
            };
                
            if(scissors(playerTwoChoice)) result.message=`It's a tie!`;;

            if(paper(playerTwoChoice)) {
                result.message=`Scissors cuts Paper, ${playerOne} wins!`;
                result.finish='won';
            };

            if(lizard(playerTwoChoice)) {
                result.message=`Scissors decapitates Lizard, ${playerOne} wins!`;
                result.finish='won';
            };

            if(spock(playerTwoChoice)) {
                result.message=`Spock smashes Scissors, ${playerTwo} wins!`;
                result.finish='lost';
            };
        break;

        case('paper') :
            if(rock(playerTwoChoice)){ 
                result.message =`Paper covers Rock, ${playerOne} wins!`;
                result.finish = 'won';
            };
            
            if(scissors(playerTwoChoice)) {
                result.message=`Scissors cuts Paper, ${playerTwo} wins!`;
                result.finish='lost'
            };

            if(paper(playerTwoChoice)) result.message=`It's a tie!`;

            if(lizard(playerTwoChoice)) {
                result.message=`Lizard eats Paper, ${playerTwo} wins!`;
                result.finish='lost';
            };

            if(spock(playerTwoChoice)) {
                result.message=`Paper disproves Spock, ${playerOne} wins!`;
                result.finish='won';
            };
        break;
        
        case('lizard') :
            if(rock(playerTwoChoice)) {
                result.message =`Rock crushes Lizard, ${playerTwo} wins!`;
                result.finish='lost';
            }
            
            if(scissors(playerTwoChoice)) {
                result.message=`Scissors decapitates Lizard, ${playerTwo} wins!`;
                result.finish='lost'
            };

            if(paper(playerTwoChoice)) {
                result.message=`Lizard eats Paper, ${playerOne} wins!`;
                result.finish='won';
            };

            if(lizard(playerTwoChoice)) result.message=`It's a tie!`;

            if(spock(playerTwoChoice)) {
                result.message=`Lizard poisons Spock, ${playerOne} wins!`;
                result.finish='won';
            };
        break;
        
        case('spock') :
            if(rock(playerTwoChoice)){
                result.message =`Spock vaporizes rock, ${playerOne} wins!`;
                result.finish = 'won';
            };
            
            if(scissors(playerTwoChoice)) {
                result.message=`Spock smashes scissors, ${playerOne} wins!`;
                result.finish='won'
            };

            if(paper(playerTwoChoice)) {
                result.message=`Paper disproves Spock, ${playerTwo} wins!`;
                result.finish='lost';
            };

            if(lizard(playerTwoChoice)) {
                result.message=`Lizard poisons Spock, ${playerTwo} wins!`;
                result.finish='lost';
            };

            if(spock(playerTwoChoice)) result.message=`It's a tie!`;
        break;
        
        default:;    
    }
    return result;
}

export default {startGame};