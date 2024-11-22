import generateAgent from "./agentGenerator";

class Agent{
    constructor(sex, age, spec, effectiveRangeStart, effectiveRangeEnd){
        this.sex = sex;
        this.age = age;
        this.spec = spec;
        this.effectiveRangeStart = effectiveRangeStart;
        this.effectiveRangeEnd = effectiveRangeEnd;
    }
}

export default Agent;