import TaskView from './Components/TaskView.jsx';
import Sidebar from './Components/Sidebar.jsx';

export default function App() {
  return (
    <div className="flex h-screen w-screen bg-gray-100">
      <div className="h-full w-36">
        <Sidebar />
      </div>
      <div className="h-full w-1/6"></div>
      <div className="h-full w-full">
        <TaskView />
      </div>
    </div>
  );
}
