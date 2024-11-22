import Buttons from './Buttons.jsx';
import CurrentTask from './CurrentTask.jsx';
import TaskContainer from './TaskContainer.jsx';

export default function TaskView() {
    const agent = {
        name: "halodsahjk",
        age: 30,
        id: "agent001"
      };
  return (
    <div className="grid w-full h-full grid-cols-3 grid-rows-3">
      <div className="flex items-center justify-center col-start-3 row-start-1 bg-blue-100 border">
        <TaskContainer />
      </div>
      <div className="flex items-center justify-center col-start-3 row-start-3 bg-gray-100 border rounded-lg">
        <Buttons />
      </div>
      <div className="flex items-center justify-center col-span-2 row-span-3 row-start-1">
        <CurrentTask agent={agent} />
      </div>
    </div>
  );
}
