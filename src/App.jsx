import TaskView from './Components/TaskView.jsx';
import Sidebar from './Components/Sidebar.jsx';
import { useState } from 'react';
import generateAgent from './logic/agentGenerator.js';

export default function App() {
  const [agents, setAgents] = useState(
    Array.from({ length: 5 }, () => generateAgent(1)),
  );

  return (
    <div className="flex h-screen w-screen bg-gray-100">
      <div className="h-full w-36">
        <Sidebar agents={agents} />
      </div>
      <div className="h-full w-1/6"></div>
      <div className="h-full w-full">
        <TaskView />
      </div>
    </div>
  );
}
