import globalVars from "./globalVariables";
import Task from "./task";
const specs = globalVars['SPECIALTIES']
const reqTypes = [
    'age',
    'spec',
    'sex',
    'year'
]

const generateTask = (difficulty) => {
    let additionalReqAmount = __generateAdditionalReqAmount(difficulty)
    let requirements = []
    for(let i = 0; i < additionalReqAmount; i++){
        requirements.push(__generateReq())
    }
    requirements.push(
        ['year', __getRandomIntInclusive(globalVars['TIME_START'], globalVars['TIME_END'])]
    )

    const task = new Task("task description agkdgkdagkadjgkdjagnjadgnkjadgdakjn", requirements, difficulty);
    return task
}

function __generateAdditionalReqAmount(difficulty){
    const twoProbsChance = difficulty * 2;
    const threeProbsChance = difficulty;
    const random = __getRandomIntInclusive(100);
    if(random <= threeProbsChance){
        return 3;
    } else if(random <= twoProbsChance){
        return 2;
    } else return 1;
}

function __generateReq(){
    const reqType = reqTypes[__getRandomIntInclusive(0, reqTypes.length - 1)]
    switch(reqType){
        case 'age':
            return['age', __getRandomIntInclusive(globalVars['MIN_AGE'], globalVars['MAX_AGE'])];
        case 'spec':
            return['spec', specs[__getRandomIntInclusive(0, specs.length - 1)]]
        case 'sex':
            let sexIndex = __getRandomIntInclusive(0, 1);
            let sexes = ['male', 'female']
            return['sex', sexes[sexIndex]]
    }
}

function __getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}


export default generateTask;