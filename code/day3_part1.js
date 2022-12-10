const inputReader = require('./input_reader.js')
//Moved input reader into reusable module that returns an array of the data

async function task() {

const puzzleInput = await inputReader.textLinesToArray('day_3.txt')

//We'll use an array of the alphabet to translate a letter into a number (by getting the array index)
const priorityArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

const decodePriority = (letter)=>{

    let priority = 0;

    //if it's a capital letter, add 26 
    if (letter === letter.toUpperCase())
        priority += 26;

    //get the base value for the letter (starting at 0 for lower case IE a = 1 or starting at 26 for upper IE A = 27)
    priority += (priorityArray.indexOf(letter.toLowerCase()) + 1) //Arrays are index 0 and we need a=1 b=2 etc, not a=0 b=1

    return priority;

}


let prioritySum = 0;

puzzleInput.forEach((rucksack)=>{

    let itemComplete = false

    let compartmentSize = rucksack.length/2
    
    let rucksackArray = rucksack.split('')

    let compartmentA = rucksackArray.slice(0,(compartmentSize))
    let compartmentB = rucksackArray.slice(compartmentSize,(rucksack.length))

    
    compartmentA.forEach((item)=>{

        if (compartmentB.includes(item) && itemComplete === false){

            prioritySum+=decodePriority(item);

            itemComplete = true;
        }

    })


})


  console.log(prioritySum)

}

task();