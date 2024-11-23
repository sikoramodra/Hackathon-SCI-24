import TaskView from './Components/TaskView.jsx';
import Sidebar from './Components/Sidebar.jsx';
import { useEffect, useState } from 'react';
import generateAgent from './logic/agentGenerator.js';
import generateTask from './logic/taskGenerator.js';
import EndDay from './Components/EndDay.jsx';
import desk from './assets/desk.png';

export default function App() {
  const [dayCount, setDayCount] = useState(1);
  const [agentsSize, setAgentsSize] = useState(7);
  const [money, setMoney] = useState(100);
  const [agents, setAgents] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [selectedAgentIndex, setSelectedAgentIndex] = useState(null);
  const [finishedTasks, setFinishedTasks] = useState([]);
  const [failedTasks, setFailedTasks] = useState(null);
  const [correctTasks, setCorrectTasks] = useState(null);
  useEffect(() => {
    init();
  }, []);

  const init = () => {
    setAgents(Array.from({ length: agentsSize }, () => generateAgent(1)));
    setTasks(Array.from({ length: agentsSize }, () => generateTask(1)));
  };

  const generateNextRound = () => {  
    setDayCount(dayCount + 1);
  
    finishedTasks.forEach((element) => {
      let survived = true;
      if (element[1] && element[1].fullName !== null) {
        {failedTasks && failedTasks.map(([task, agent, score], i) => {
          console.log(agent.fullName)
          if(agent.fullName === element[1].fullName) {
            survived = false;
          }
        })}
        if (survived) {
          setAgents((prevAgents) => [...prevAgents, element[1]]);
        }
      }
    });
    setAgentsSize(agents.length)
    setFinishedTasks([]);
    setTasks(Array.from({ length: agentsSize }, () => generateTask(generateTaskDifficulty(dayCount))));
    if(agents.length - 1 < agentsSize){
      const newgenAgentQuality = generateAgentQuality(dayCount)
      const agentsToGenerate = agentsSize - agents.length - 1
      let generatedAgents = []
      for(let i = 0; i < agentsToGenerate; i++){
        generatedAgents.push(generateAgent(newgenAgentQuality))
      }
      setAgents(agents.concat(generatedAgents))
    }

    setFailedTasks([]);
    setCorrectTasks([]);

  };

  const generateTaskDifficulty = (dayCount) =>{
    let difficulty = Math.round(0.9 * dayCount)
    if(difficulty > 20){
      difficulty = 20;
    }
    return difficulty
  }

  const generateAgentQuality = (dayCount) => {
    let quality = Math.round(0.7 * dayCount)
    if(quality > 20){
      quality = 20
    }
    return quality
  }

  const addNewAgent = () => {
    setAgents((prevAgents) => [
      ...prevAgents,
      generateAgent(Math.floor(Math.random() * 20) + 1),
    ]);
  };

  return tasks.length === 0 ? (
    <EndDay
      finishedTasks={finishedTasks}
      money={money}
      setMoney={setMoney}
      addNewAgent={addNewAgent}
      generateNextRound={generateNextRound}
      failedTasks={failedTasks}
      setFailedTasks={setFailedTasks}
      correctTasks={correctTasks}
      setCorrectTasks={setCorrectTasks}
    ></EndDay>
  ) : (
    <div
      className="flex h-full w-full bg-gray-100 bg-repeat"
      style={{ backgroundImage: `url(${desk})` }}
    >
      <div className="h-full w-1/3">
        <Sidebar
          agents={agents}
          setSelectedAgent={setSelectedAgentIndex}
          selectedAgent={selectedAgentIndex}
        />
      </div>
      <div className="h-full w-full">
        <TaskView
          tasks={tasks}
          agents={agents}
          money={money}
          setMoney={setMoney}
          finishedTasks={finishedTasks}
          setFinishedTasks={setFinishedTasks}
          setAgents={setAgents}
          setTasks={setTasks}
          selectedAgentIndex={selectedAgentIndex}
          setSelectedAgentIndex={setSelectedAgentIndex}
        />
      </div>
    </div>
  );
}
