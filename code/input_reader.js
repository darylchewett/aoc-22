const fs = require('fs');
const readline = require('readline');


async function tcxtLinesToArray(fileName){

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

async function readLongString(fileName){

    return fs.readFileSync(`inputs/${fileName}`)

}

exports.textLinesToArray = tcxtLinesToArray;
exports.readLongString = readLongString;