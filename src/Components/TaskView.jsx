import { useEffect, useState } from 'react';
import Buttons from './Buttons.jsx';
import CurrentTask from './CurrentTask.jsx';
import TaskContainer from './TaskContainer.jsx';

export default function TaskView({
  tasks,
  agents,
  finishedTasks,
  setFinishedTasks,
  setTasks,
  selectedAgentIndex,
  setSelectedAgentIndex,
}) {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const submitTask = () => {
    setFinishedTasks((prev) => [
      ...prev,
      [tasks[currentTaskIndex], agents[selectedAgentIndex]],
    ]);
    setTasks((prev) => prev.filter((_, index) => index !== currentTaskIndex));
    setSelectedAgentIndex(null);
    setCurrentTaskIndex((prev) => (prev + 1) % tasks.length);
  }
  
  useEffect(() => {
    console.log(finishedTasks);
  }, [finishedTasks]);
  
  useEffect(() => {
    setAgentsCopy(agents.slice());
  }, [agents]);
  
  const rejectTask = () => {
    setFinishedTasks((prev) => [...prev, [tasks[currentTaskIndex], null]]);
    setTasks((prev) => prev.filter((_, index) => index !== currentTaskIndex));
    setCurrentTaskIndex((prev) => prev % tasks.length);
  };

  const nextTask = () => {
    setCurrentTaskIndex((prev) => (prev + 1) % tasks.length);
  };

  const currentTask = tasks[currentTaskIndex];
  const isAgentSelected = selectedAgentIndex !== null;

  console.log('TaskView rendered');

  return (
    <div className="grid h-full w-full grid-cols-3 grid-rows-3">
      <div className="col-start-3 row-span-2 row-start-1 flex items-start pt-8">
        <TaskContainer tasks={tasks} currentTaskIndex={currentTaskIndex} />
      </div>
      <div className="col-start-3 row-start-3 flex items-center justify-center rounded-lg border bg-gray-100">
        <Buttons
          submitTask={submitTask}
          nextTask={nextTask}
          rejectTask={rejectTask}
          isAgentSelected={isAgentSelected}
        />
      </div>
      <div className="col-span-2 row-span-3 row-start-1 flex items-center justify-center">
        <CurrentTask
          currentTask={currentTask}
          selectedAgentIndex={selectedAgentIndex}
          agents={agents}
        />
      </div>
    </div>
  );
}
