const fs = require('fs');
const prompt = require('prompt-sync')();
const runCode = require('child_process');


console.log(`**********************************************`)
console.log(`***             Daryl Hewett               ***`)
console.log(`***                 ***                    ***`)
console.log(`***          Advent of Code 2022           ***`)
console.log(`***                Launcher                ***`)
console.log(`**********************************************`)


const dayToRun = parseInt(prompt('Which day would you like to run?'));

const partToRun = parseInt(prompt('Which part would you like to run?'));

if(dayToRun<1 || dayToRun > 25){
    console.log("Invalid Day (Expected between 1 and 25)")
    return
}

if(partToRun !== 1 && partToRun!== 2){
    console.log("Invalid Part (Expected 1 or 2)")
    return
}

console.log(`Running day ${dayToRun} - Part ${partToRun}....`)

const progPath = `code/day${dayToRun}_part${partToRun}.js`;

if (!fs.existsSync(progPath)){
    console.log("Cannot find script file, you may be trying to run a challange that has not been complted yet");
    return
}

runCode.fork(progPath);
