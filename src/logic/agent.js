import generateAgent from "./agentGenerator";

class Agent{
    constructor(sex, age, fullName, spec, effectiveRangeStart, effectiveRangeEnd){
        this.sex = sex;
        this.age = age;
        this.fullName = fullName;
        this.spec = spec;
        this.effectiveRangeStart = effectiveRangeStart;
        this.effectiveRangeEnd = effectiveRangeEnd;
    }
}

export default Agent;