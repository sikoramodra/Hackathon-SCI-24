import { useState, useEffect } from 'react';
import Buttons from './Buttons.jsx';
import CurrentTask from './CurrentTask.jsx';
import TaskContainer from './TaskContainer.jsx';
import agentGenerator from '../logic/agentGenerator.js';

export default function TaskView({
  tasks,
  agents,
  money,
  setMoney,
  setFinishedTasks,
  setAgents,
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
    setAgents((prev) =>
      prev.filter((_, index) => index !== selectedAgentIndex),
    );
    const updatedTasks = tasks.filter((_, index) => index !== currentTaskIndex);

    setSelectedAgentIndex(null);

    if (updatedTasks.length === 0) {
      setCurrentTaskIndex(0); // Reset if no tasks remain
    } else {
      setCurrentTaskIndex((prev) =>
        prev >= updatedTasks.length ? updatedTasks.length - 1 : prev,
      );
    }
  };

  useEffect(() => {
    console.log('Tasks: ', tasks);
    console.log('CurrentTask: ', tasks[currentTaskIndex]);
    console.log('CurrrentTaskIndex: ', currentTaskIndex);
  }, [tasks]);

  const rejectTask = () => {
    setFinishedTasks((prev) => [...prev, [tasks[currentTaskIndex], null]]);
    const updatedTasks = tasks.filter((_, index) => index !== currentTaskIndex);

    setTasks(updatedTasks);

    if (updatedTasks.length === 0) {
      setCurrentTaskIndex(0); // Reset to 0 if no tasks remain
    } else {
      setCurrentTaskIndex((prev) =>
        prev >= updatedTasks.length ? updatedTasks.length - 1 : prev,
      );
    }
  };

  const nextTask = () => {
    setCurrentTaskIndex((prev) => {
      const nextIndex = (prev + 1) % tasks.length;
      return tasks.length > 0 ? nextIndex : 0; // Handle empty tasks array
    });
  };

  const addNewAgent = () => {
    setMoney(money - 20);
    setAgents((prevAgents) => [...prevAgents, agentGenerator(1)]);
  };

  const currentTask = tasks[currentTaskIndex];
  const isAgentSelected = selectedAgentIndex !== null;

  return (
    <div className="grid h-full w-full grid-cols-3 grid-rows-3">
      <div className="col-start-3 row-span-2 row-start-1 flex items-start pt-8">
        <TaskContainer
          tasks={tasks}
          currentTaskIndex={currentTaskIndex}
          nextTask={nextTask}
        />
      </div>
      <div className="flex items-center justify-center rounded-lg">
        <Buttons
          money={money}
          addNewAgent={addNewAgent}
          submitTask={submitTask}
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
