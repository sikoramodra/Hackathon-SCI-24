import TaskView from './Components/TaskView.jsx';
import Sidebar from './Components/Sidebar.jsx';
import { useEffect, useState } from 'react';
import generateAgent from './logic/agentGenerator.js';
import generateTask from './logic/taskGenerator.js';
import EndDay from './Components/EndDay.jsx';

export default function App() {
  const [agentsSize, setAgentsSize] = useState(7);
  const [money, setMoney] = useState(100);
  const [agents, setAgents] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [selectedAgentIndex, setSelectedAgentIndex] = useState(null);
  const [finishedTasks, setFinishedTasks] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    setAgents(Array.from({ length: agentsSize }, () => generateAgent(1)));
    setTasks(Array.from({ length: agentsSize }, () => generateTask(1)));
  };
  const generateNextRound = () => {
    finishedTasks.forEach(element => {
      if(element[1] !== null) {
        setAgents(prevAgents => [...prevAgents, element[1]]);
      }
    });
    setFinishedTasks([]);
    setTasks(Array.from({ length: agentsSize }, () => generateTask(1)));
  };

  const addNewAgent = () => {
    setAgents(prevAgents => [...prevAgents, generateAgent(1)])
  };

  return tasks.length === 0 ? (
    <EndDay
      finishedTasks={finishedTasks}
      money={money}
      setMoney={setMoney}
      addNewAgent={addNewAgent}
      generateNextRound={generateNextRound}
    ></EndDay>
  ) : (
    <div className="flex h-full w-full bg-gray-100">
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
