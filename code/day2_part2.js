const fs = require('fs');
const readline = require('readline');

let sourceDataArray = [];

const translateInput = (move) =>{
    switch(move){
        case "A":
            return "rock"
        case "B":
            return "paper"
        case "C":
            return "scissors"
    }
}


const getMovePoints = (move) => {

    if (move === "rock")
        return 1
    if(move==="paper")
        return 2
    if(move==="scissors")
        return 3

}

async function processLines(){

    const fileStream = fs.createReadStream('inputs/day_2.txt')

    const rl = readline.createInterface({
    input: fileStream,
        crlfDelay: Infinity
    });

    for await (const lineValue of rl){

        sourceDataArray.push(lineValue);
}

    let score = 0;
    console.log(sourceDataArray[0])

    sourceDataArray.forEach( round => {

        let roundScore = 0

        // translate their input into something more human readable and easier to manage in code (as we'd alreayd made this function from previous part)
        const theirMove = translateInput(round.substring(0,1))

        const targetOutcome = round.substring(2,3)

        //we don't know what our move is yet
        let myMove = null

        //If there is a draw this is easiest to calculate as we'd have picked the same
        if (targetOutcome === 'Y'){

            myMove = theirMove;

            //base score for a tie
            roundScore += 3;

            //our move will be the same so we can just use their move to calculate the points for it
            roundScore += getMovePoints(myMove);

            //Update the score
            console.log(`Round needs to be a tie (${myMove}) - Round Score: ${roundScore}`)

        }

        //Find our move based on the suggested outcome

        // We need to lose
        if (targetOutcome === "X"){

            //set my move, no additional points for a loss
            switch(theirMove){
                case "rock":
                    myMove="scissors"
                    break;
                case "paper":
                    myMove="rock"
                    break;
                case "scissors":
                    myMove="paper"
                    break;
            }

            //get the points for the move we had to choose
            roundScore += getMovePoints(myMove)

            console.log(`Round needs to be a loss chose ${myMove} - Round Score: ${roundScore}`)

        }

        // We need to win
        if (targetOutcome === "Z"){

            //set my move, and we get an extra 6 points for a win

            roundScore += 6

            switch(theirMove){
                case "rock":
                    myMove="paper"
                break;
                case "paper":
                     myMove="scissors"
                break;
                case "scissors":
                     myMove="rock"
                break;
            }

            //get the points for the move we had to choose
            roundScore += getMovePoints(myMove)

            console.log(`Round needs to be a win chose ${myMove} - Round Score: ${roundScore}`)

        }

        // add the score to the total and continue
        score += roundScore

    })

console.log(`Games complete - Total predicted score: ${score}`)

}

processLines();