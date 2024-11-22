import globalVars from "./globalVariables";
const reqTypes = [
    'age',
    'spec',
    'year'
]

const generateTask = (difficulty) => {
    let reqAmounts = __generateReqAmounts(difficulty)
    for(i = 0; i < reqAmounts; i++){

    }
}

function __generateReqAmounts(difficulty){
    const twoProbsChance = difficulty * 2;
    const threeProbsChance = difficulty;
    const random = __getRandomIntInclusive(100);
    if(random <= threeProbsChance){
        return 3;
    } else if(random <= twoProbsChance){
        return 2;
    } else return 1;
}

function __generateReqs(difficulty){
    const reqType = reqTypes[__getRandomIntInclusive(0, reqTypes.length - 1)]
    switch(reqType){
        case 'age':

            return['age', 20]
    }
}

function __getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}


export default generateTask;