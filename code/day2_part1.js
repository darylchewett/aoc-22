const fs = require('fs');
const readline = require('readline');

let sourceDataArray = [];

const translateInput = (move) =>{
    switch(move){
        case "A":
        case "X":
            return "rock"
        case "B":
        case "Y":
            return "paper"
        case "C":
        case "Z":
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

        // Moves are in different formats (ABC vs XYZ covert them into plain rock paper or scissors)
        const theirMove = translateInput(round.substring(0,1))
        const myMove = translateInput(round.substring(2,3))

        //points for move selected regardless of outcome
        roundScore += getMovePoints(myMove)

        //If there is a draw this is easiest to calculate as we'd have picked the same
        if (myMove === theirMove){

            //base score for a tie
            roundScore += 3;

            //Update the score
            console.log(`Tie (${myMove}) - Round Score: ${roundScore}`)
            score += roundScore;
            //Next game/iteration of loop
            return;
        }

        //If it's not a tie there are 6 possible outcomes

        // 3 where we win
        if ((theirMove==="paper")&&(myMove==="scissors") ||
            (theirMove==="rock")&&(myMove==="paper") ||
        (theirMove==="scissors")&&(myMove==="rock")){
            roundScore += 6
            console.log(`WIN! (${myMove}) Round Score: ${roundScore}`)
        }

        // 3 Where we lose
        if ((theirMove==="paper")&&(myMove==="rock") ||
            (theirMove==="rock")&&(myMove==="scissors") ||
        (theirMove==="scissors")&&(myMove==="paper")){
            roundScore += 0
            console.log(`Loss :( (${myMove}) Round Score: ${roundScore}`)
        }

        // add the score to the total and continue
        score += roundScore

    })

console.log(`Games complete - Total predicted score: ${score}`)


}

processLines();