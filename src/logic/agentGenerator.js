import globalVars from "./globalVariables";
import Agent from "./agent";

const specialties = [
    'medic',
    'spy',
    'killer',
    'engineer',
]

// quality okresla jakie szanse ma agent na bycie dobrym od 1/20
const generateAgent = (quality) => {
    const age = __getRandomIntInclusive(18, 70);
    const sex = __generateSex()
    const specialty = specialties[__getRandomIntInclusive(0, specialties.length - 1)]
    const [effectiveRangeStart, effectiveRangeEnd] = __generateEffectiveRange(quality)

    const agent = new Agent(sex, age, specialty, effectiveRangeStart, effectiveRangeEnd)
    return agent
}

function __generateSex(){
    let sexIndex = __getRandomIntInclusive(1, 2);

    if(sexIndex === 1){
        return 'male'
    } else{
        return 'female'
    }
}

function __generateEffectiveRange(quality){
    const minRangeLength = quality * 5
    const maxRangeLength = minRangeLength + quality * 10
    const rangeLength = __getRandomIntInclusive(minRangeLength, maxRangeLength)

    let rangeStart = globalVars['TIME_END'] - __getRandomIntInclusive(globalVars['TIME_START'], globalVars['TIME_END'])
    if(rangeStart < globalVars['TIME_START']){
        rangeStart = globalVars['TIME_START']
    }

    const rangeEnd = rangeStart + rangeLength
    if(rangeEnd > globalVars['TIME_END']){
        rangeEnd = globalVars['TIME_END']
    }

    return [rangeStart, rangeEnd]
}

function __getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

export default generateAgent;
