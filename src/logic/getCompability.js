function getCompability(agent, task) {
    let sum = 0;
    let diff = 0;
    let counter = task.requirements.length;
    let over = false;
    task.requirements.forEach(function(item) {
      if(over) return;
      switch (item[0]) {
        case "year":
          diff = agent.teleportYear - item[1];
          if(diff) {
            diff = diff * diff;
            sum += 1-diff / ((globalVars.TIME_END - globalVars.TIME_START) * (globalVars.TIME_END - globalVars.TIME_START));
          } else {
            sum +=1
          }
          break;
        case "age":
          diff = agent.age - item[1];
          if(diff) {
            diff = diff * diff;
            sum += 1-diff / ((globalVars.MAX_AGE - globalVars.MIN_AGE) * (globalVars.MAX_AGE - globalVars.MIN_AGE));
          } else {
            sum+=1
          }
          break;
        case "sex":
          sum += agent.sex == item[1];
          break;
        case "spec":
          counter--;
          if(agent.spec != item[1]) {
            if((agent.quality / 20) < Math.random()) {
              over = true;
            }
          } 
          break;
      }
    });
    if(over) sum = 0.0001;
    console.log("compability: ")
    console.log(sum);
    console.log(counter);
    return sum / counter;
}

export default getCompability;