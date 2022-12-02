const fs = require('fs');
const readline = require('readline');

let highestCount = 0;
let currentCount = 0;

const compareSet = () => {
    if (currentCount > highestCount){
        //Set the highest count to the total of this list
        highestCount = currentCount;
        //Log to console for feedback
        console.log(`New highest count, value: ${currentCount}`);

    }else
        console.log(`List less that current highest, value: ${currentCount}`);
}

async function processLines(){

    const fileStream = fs.createReadStream('inputs/day_1.txt')

    const rl = readline.createInterface({
    input: fileStream,
        crlfDelay: Infinity
    });

    for await (const lineValue of rl){

        //Line is not blank it's part of the current or new total
        if (lineValue !== ""){
            currentCount += parseInt(lineValue);
            continue;
        }

        // If it's blank we've reached the end of list, compare and see if total is higher than previous
        compareSet();


        //reset the current count, a blank line means we're starting a new list on next loop
        currentCount = 0;
}

    //End off the loop, print out the highest list value

    //Compare the last set, there may not have been a blank line at the end of the input data
    compareSet();

    console.log(`****** Loop Complete - Highest list total had value of: ${highestCount} ******`)
}

processLines();