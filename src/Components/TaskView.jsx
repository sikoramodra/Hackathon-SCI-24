import Buttons from './Buttons.jsx';
import CurrentTask from './CurrentTask.jsx';
import TaskContainer from './TaskContainer.jsx';
import Task from '../logic/task.js';
import { useState } from 'react';

export default function TaskView() {
  // eslint-disable-next-line no-unused-vars
  const [currentTask, setCurrentTask] = useState(
    new Task(
      'task001',
      [
        ['age', 20],
        ['year', 1500],
      ],
      'task1 description',
      10,
    ),
  );

  const tasks = [
    new Task(
      'task001',
      [
        ['age', 20],
        ['year', 1500],
      ],
      'task1 description',
      10,
    ),
    new Task(
      'task001',
      [
        ['age', 22],
        ['year', 1500],
      ],
      'task1 description',
      20,
    ),
    new Task(
      'task001',
      [
        ['age', 23],
        ['year', 1600],
      ],
      'task1 description',
      1,
    ),
    new Task(
      'task001',
      [
        ['age', 24],
        ['year', 1700],
      ],
      'task1 description',
      5,
    ),
    new Task(
      'task001',
      [
        ['age', 25],
        ['year', 1800],
      ],
      'task1 description',
      10,
    ),
    new Task(
      'task001',
      [
        ['age', 26],
        ['year', 1900],
      ],
      'task1 description',
      20,
    ),
  ];
  return (
    <div className="grid h-full w-full grid-cols-3 grid-rows-3">
      <div className="col-start-3 row-start-1 flex items-center justify-center border bg-blue-100">
        <TaskContainer tasks={tasks} />
      </div>
      <div className="col-start-3 row-start-3 flex items-center justify-center rounded-lg border bg-gray-100">
        <Buttons />
      </div>
      <div className="col-span-2 row-span-3 row-start-1 flex items-center justify-center">
        <CurrentTask currentTask={currentTask} />
      </div>
    </div>
  );
}
