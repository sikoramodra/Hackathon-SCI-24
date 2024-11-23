import getCompability from './getCompability';
import globalVars from './globalVariables';

function checkDay(finished) {
    let wrong = []
    let correct = []
    let isChecked = false;
    let sum = 0;
    let item;
    finished.forEach(pair => {
        if(pair[1] == null) {
            sum-=globalVars.TASK_DECLINE_PENALTY;
            return;
        }
        let score = getCompability(pair[0], pair[1])

        if(score < 0.5) {
            sum -=pair[0].value; 
            isChecked = true;
            item = pair.slice();
            item.push(score)
            wrong.push(item);
        } else {
            isChecked = true;
            sum+=pair[0].value;
            item = pair.slice();
            item.push(score)
            correct.push(item)
        }
    });
    
    console.log('Sum:', sum, 'isChecked:', isChecked);
    if(isChecked) {
        return {
            sum: sum,
            failedTasks: wrong,
            correctTasks: correct
        };
    } else {
        return {
            sum: sum,
            failedTasks: null,
            correctTasks: null
        };
    }
}

export default checkDay;
