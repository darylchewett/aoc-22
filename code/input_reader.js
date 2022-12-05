const fs = require('fs');
const readline = require('readline');


async function processInput(fileName){

    let returnArray = [];

    const fileStream = fs.createReadStream(`inputs/${fileName}`)

    const rl = readline.createInterface({
    input: fileStream,
        crlfDelay: Infinity
    });

    for await (const lineValue of rl){

        returnArray.push(lineValue);
}

return returnArray

}

exports.processInput = processInput;