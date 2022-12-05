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

        //Find the larger range, as the a smaller range can't CONTAIN the larger one
        if ((elf[0][0] - elf[0][1]) < (elf[1][0] - elf[1][1]))
            {
                // First elf has larger range

                //Does the other elf's range fit inside the bigger one?
                if((elf[1][0]>=elf[0][0])&&(elf[1][1]<=elf[0][1])){
                    result ++
                    console.log(`HIT1 on pair ${lineNo} - ${pairing} - ${result}`)
                }

            }else{

            //Second elf has larger or equal range

            if((elf[0][0]>=elf[1][0])&&(elf[0][1]<=elf[1][1])){
                result ++
                console.log(`HIT2 on pair ${lineNo} - ${pairing} - ${result}`)

            }

        }



    })

    console.log(result)
}

task();