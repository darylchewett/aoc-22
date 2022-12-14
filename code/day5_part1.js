const inputReader = require('./input_reader.js')
//Moved input reader into reusable module that returns an array of the data


let stackArray = [['Q','M','G','C','L'],
              ['R','D','L','C','T','F','H','G'],
              ['V','J','F','N','M','T','W','R'],
              ['J','F','D','V','Q','P'],
              ['N','F','M','S','L','B','T'],
              ['R','N','V','H','C','D','P'],
              ['H','C','T'],
              ['G','S','J','V','Z','N','H','P'],
              ['Z','F','H','G']]

const moveContainer = (sourceStack, destinationStack) =>{

    //If the stack we need to take from is already empty, there is nothing left to do, leave the function...
    if (stackArray[sourceStack-1].length === 0)
        return

    stackArray[destinationStack-1].push(stackArray[sourceStack-1].pop())




}

async function task() {

    const puzzleInput = await inputReader.textLinesToArray('day_5.txt');

    puzzleInput.forEach((movement)=>{

        const instructions = movement.match(/\d+/g);

        const quantity = instructions[0]
        const sourceStack = instructions[1]
        const destStack = instructions[2]

        for (let i=0; i < quantity; i++){
            moveContainer(sourceStack, destStack)
        }


    })


let result = ''

    stackArray.forEach((array)=>{
        result = result + array[array.length-1]
    })



console.log(result)

}

task();