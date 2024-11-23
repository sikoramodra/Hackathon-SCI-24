import globalVars from "./globalVariables";

function getCompability(task, agent) {
  console.log("getCompability")
  console.log(task)
  console.log(agent)
  let sum = 0;
  let diff = 0;
  let counter = task.requirements.length;
  let over = false;
  task.requirements.forEach(function (item) {
    if (over) return;
    switch (item[0]) {
      case "year":
        let tpYear = agent.effectiveRangeStart + (agent.effectiveRangeEnd - agent.effectiveRangeStart) / 2;
        diff = tpYear - item[1];
        if (diff) {
          diff = Math.abs(diff);
          sum += 1 - diff / ((globalVars.TIME_END - globalVars.TIME_START));
          console.log("year")
          console.log("tpYear")
          console.log(tpYear)
          console.log("diff")
          console.log(diff)
          console.log(1 - diff / ((globalVars.TIME_END - globalVars.TIME_START)))
        } else {
          sum += 1
        }
        break;
      case "age":
        diff = agent.age - item[1];
        if (diff) {
          diff = Math.abs(diff);
          sum += 1 - diff / ((globalVars.MAX_AGE - globalVars.MIN_AGE));
          console.log("age")
          console.log(1 - diff / ((globalVars.MAX_AGE - globalVars.MIN_AGE)))
          console.log("diff")
          console.log(diff)
          console.log("agent.age")
          console.log(agent.age)
        } else {
          sum += 1
        }
        break;
      case "sex":
        sum += agent.sex == item[1];
        break;
      case "spec":
        counter--;
        if (agent.spec != item[1]) {
          if ((agent.quality / 20) < Math.random()) {
            over = true;
          }
        }
        break;
    }
  });
  if (over) sum = 0.0001;
  console.log("compability: ")
  console.log(sum / counter);
  return sum / counter;
}

export default getCompability;