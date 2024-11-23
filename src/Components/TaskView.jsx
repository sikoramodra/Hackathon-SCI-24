
import Buttons from './Buttons.jsx';
import CurrentTask from './CurrentTask.jsx';
import TaskContainer from './TaskContainer.jsx';
import { useState } from 'react';

export default function TaskView({ tasks }) {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  
  const submitTask = () => {
    // todo
    setCurrentTaskIndex((prev) => (prev + 1) % tasks.length);
  }

  const rejectTask = () => {
    // todo
    setCurrentTaskIndex((prev) => (prev + 1) % tasks.length);
  }

  const nextTask = () => {
    setCurrentTaskIndex((prev) => (prev + 1) % tasks.length);
  }

  const currentTask = tasks[currentTaskIndex];

  return (
    <div className="grid w-full h-full grid-cols-3 grid-rows-3">
      <div className="flex items-center justify-center col-start-3 row-start-1 bg-blue-100 border">
        <TaskContainer tasks={tasks} />
      </div>
      <div className="flex items-center justify-center col-start-3 row-start-3 bg-gray-100 border rounded-lg">
        <Buttons submitTask={submitTask} nextTask={nextTask} rejectTask={rejectTask}/>
      </div>
      <div className="flex items-center justify-center col-span-2 row-span-3 row-start-1">
        <CurrentTask currentTask={currentTask} />
      </div>
    </div>
  );
}
