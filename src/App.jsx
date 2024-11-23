
import TaskView from './Components/TaskView.jsx';
import Sidebar from './Components/Sidebar.jsx';
import { useState } from 'react';
import generateAgent from './logic/agentGenerator.js';
import generateTask from './logic/taskGenerator.js';

export default function App() {
  // eslint-disable-next-line no-unused-vars
  const [agents, setAgents] = useState(
    Array.from({ length: 5 }, () => generateAgent(1)),
  );
  // eslint-disable-next-line no-unused-vars
  const [tasks, setTasks] = useState(
    Array.from({ length: 3 }, () => generateTask(1)),
  )

  // eslint-disable-next-line no-unused-vars
  const [finishedTasks, setFinishedTasks] = useState([]);
  
  return (
    <div className="flex w-full h-full bg-gray-100">
      <div className="w-1/3 h-full">
        <Sidebar agents={agents} />
      </div>
      <div className="w-full h-full">
        <TaskView tasks={tasks} />
      </div>
    </div>
  );
}
