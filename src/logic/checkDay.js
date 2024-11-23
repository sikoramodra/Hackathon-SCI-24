import getCompability from "./getCompability";

function checkDay(finished) {
    console.log("dash");
    console.log(finished);
    let a = []
    let isChecked = false;
    let sum = 0;
    finished.forEach(pair => {
        let score = getCompability(pair[0], pair[1])
        console.log("score")
        console.log(score)

        if(score < 0.5) {
            sum -= pair[0].value;
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
        
        //a.push(sum)
        return a;
    } else {
        return [sum];
    }
}

export default checkDay;