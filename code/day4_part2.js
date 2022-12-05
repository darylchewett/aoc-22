const inputReader = require('./input_reader.js')
//Moved input reader into reusable module that returns an array of the data

async function task() {

    const puzzleInput = await inputReader.processInput('day_4.txt');


    let result = 0

    puzzleInput.forEach((pairing, lineNo)=>{

        //split the pair of elves into an array
        let elf = pairing.split(',')

        //split each elf into an array with start area and end area
        elf[0] = elf[0].split('-')
        elf[1] = elf[1].split('-')

        //Find which range has the lower start of range, the other can't start before the end of it without overlap
        if (parseInt(elf[0][0])  < parseInt(elf[1][0]))
            {
                // First starts lower

                //Does the other elf's range start before the end of this one
                if(parseInt(elf[1][0]) <=parseInt(elf[0][1])){
                    result ++
                    console.log(`HIT1 on pair ${lineNo+1} - ${pairing} - ${result}`)
                }else
                    console.log(`FAIL1 on pair ${lineNo+1} - ${pairing} - ${result}`)

            }else{

            //Second elf has larger or equal range

            if(parseInt(elf[0][0]) <= parseInt(elf[1][1])){
                result ++
                console.log(`HIT2 on pair ${lineNo+1} - ${pairing} - ${result}`)

            }

        }



    })

    console.log(result)
}

task();