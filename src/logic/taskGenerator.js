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
    let remainingReqTypes = [...reqTypes];
    remainingReqTypes.splice(remainingReqTypes.indexOf('year', 1))
    for(let i = 0; i < additionalReqAmount; i++){
        let requirement = __generateReq(remainingReqTypes)
        remainingReqTypes.splice(reqTypes.indexOf(requirement[0]), 1);
        requirements.push(requirement)
    }
    requirements.push(
        ['year', __getRandomIntInclusive(globalVars['TIME_START'], globalVars['TIME_END'])]
    )

    const task = new Task("task description agkdgkdagkadjgkdjagnjadgnkjadgdakjn", requirements, difficulty);
    return task
}

function __generateAdditionalReqAmount(difficulty) {
    const twoProbsChance = difficulty * 2;
    const threeProbsChance = difficulty;
    console.log("twoprobschance " + twoProbsChance + " 3probschance " + threeProbsChance)
    const random = __getRandomIntInclusive(0, 100);
    if(random <= threeProbsChance){
        return 3;
    } else if (random <= twoProbsChance) {
        return 2;
    } else return 1;
}

function __generateReq(remainingReqTypes){
    console.log(remainingReqTypes)
    const reqType = remainingReqTypes[__getRandomIntInclusive(0, remainingReqTypes.length - 1)]
    switch(reqType){
        case 'age':
            return ['age', __getRandomIntInclusive(globalVars['MIN_AGE'], globalVars['MAX_AGE'])];
        case 'spec':
            return ['spec', specs[__getRandomIntInclusive(0, specs.length - 1)]]
        case 'sex':
            return['sex', ['male', 'female'][__getRandomIntInclusive(0, 1)]]
    }
}

function __getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}


export default generateTask;