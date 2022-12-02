const fs = require('fs');
const readline = require('readline');

let array = [];
let currentCount = 0;
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

        // If it's blank, push the total to the array
        array.push(currentCount);


        //reset the current count, a blank line means we're starting a new list on next loop
        currentCount = 0;
    }

    //End off the loop, sort the values

    //Last set may OR may NOT have had a blank line at the end, only push this last total if it's not zero
        if (currentCount !== 0)
            array.push(currentCount);

    array.sort((a,b)=>{return b - a})

    console.log(array)

    console.log(array[0]+array[1]+array[2])

}

processLines();