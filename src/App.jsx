import TaskView from './Components/TaskView.jsx';
import Sidebar from './Components/Sidebar.jsx';

export default function App() {
  return (
    <div className='flex w-screen h-screen bg-gray-100'>
      <div className='h-full w-36'><Sidebar /></div>
      <div className='w-1/6 h-full'></div>
      <div className="w-full h-full">
        <TaskView />
      </div>
    </div>
  );
}