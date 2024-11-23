
import { useEffect , useState } from 'react';
import Buttons from './Buttons.jsx';
import CurrentTask from './CurrentTask.jsx';
import TaskContainer from './TaskContainer.jsx';


export default function TaskView({ tasks, agents,  setTasks, setAgents, selectedAgentIndex, setSelectedAgentIndex }) {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [finishedTasks, setFinishedTasks] = useState([]);

  const submitTask = () => {
    setFinishedTasks((prev) => [...prev, [tasks[currentTaskIndex], agents[selectedAgentIndex]]]);
    setTasks((prev) => prev.filter((_, index) => index !== currentTaskIndex));
    setAgents((prev) => prev.filter((_, index) => index !== selectedAgentIndex));
    setSelectedAgentIndex(null);
    setCurrentTaskIndex((prev) => (prev + 1) % tasks.length);
  }

  useEffect(() => {
    console.log(finishedTasks);
  }, [finishedTasks]);

  const rejectTask = () => {
    setTasks((prev) => prev.filter((_, index) => index !== currentTaskIndex));
    setCurrentTaskIndex((prev) => (prev) % tasks.length);
  }

  const nextTask = () => {
    setCurrentTaskIndex((prev) => (prev + 1) % tasks.length);
  }

  const currentTask = tasks[currentTaskIndex];
  const isAgentSelected = selectedAgentIndex !== null;

  console.log(tasks);
  console.log(currentTask);

  return (
    <div className="grid w-full h-full grid-cols-3 grid-rows-3">
      <div className="flex items-start col-start-3 row-span-2 row-start-1 pt-8">
        <TaskContainer tasks={tasks.filter((_, index) => index !== currentTaskIndex)} />
      </div>
      <div className="flex items-center justify-center col-start-3 row-start-3 bg-gray-100 border rounded-lg">
        <Buttons submitTask={submitTask} nextTask={nextTask} rejectTask={rejectTask} isAgentSelected={isAgentSelected}/>
      </div>
      <div className="flex items-center justify-center col-span-2 row-span-3 row-start-1">
        <CurrentTask currentTask={currentTask} />
      </div>
    </div>
  );
}
