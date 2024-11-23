import getCompability from './getCompability';
import globalVars from './globalVariables';

function checkDay(finished) {
    let a = []
    let isChecked = false;
    let sum = 0;
    finished.forEach(pair => {
        if(pair[1] == null) {
            sum-=globalVars.TASK_DECLINE_PENALTY;
            return;
        }
        let score = getCompability(pair[0], pair[1])

        if(score < 0.5) {
            sum -=pair[0].value; 
            isChecked = true;
            a.push(pair);
        } else {
            sum+=pair[0].value;
        }
    });
    
    console.log('Sum:', sum, 'isChecked:', isChecked);
    if(isChecked) {
        return {
            sum: sum,
            failedTasks: a
        };
    } else {
        return {
            sum: sum,
            failedTasks: null
        };
    }
}

export default checkDay;
