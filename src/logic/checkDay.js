import getCompability from "./getCompability";
import globalVars from "./globalVariables";

function checkDay(finished) {
    console.log("dash");
    console.log(finished);
    let a = []
    let isChecked = false;
    let sum = 0;
    finished.forEach(pair => {
        if(pair[1] == null) {
            sum-=globalVars.TASK_DECLINE_PENALTY;
            return;
        }
        let score = getCompability(pair[0], pair[1])
        console.log("score")
        console.log(score)

        if(score < 0.5) {
            sum -=pair[0].value; 
            isChecked = true;
            console.log(score);
            console.log(pair);
            a = pair.slice(); 
        } else {
            sum+=pair[0].value;
        }
    });
    
    if(isChecked) {
        a.unshift(sum);
        
        return a;
    } else {
        return [sum];
    }
}

export default checkDay;