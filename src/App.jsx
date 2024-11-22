import TaskView from './Components/TaskView.jsx';
import Sidebar from './Components/Sidebar.jsx';
import Requerement from './Components/Requirement.jsx';

export default function App() {
  const agent = {
    name: "halodsahjk",
    age: 30,
    id: "agent001"
  };

  return (
    <div className='flex w-screen h-screen '>
      <div className='w-1/6 h-full bg-red-500'><Sidebar /></div>
      <div className='w-1/6 h-full bg-red-200'>Empty space for stats</div>
      <div className="w-2/3 h-full">
        <TaskView />
      </div>
      <Requerement agent={agent} />
    </div>
  );
}