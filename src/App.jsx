import Sidebar from './Components/Sidebar.jsx';
import Requerement from './Components/Requirement.jsx';

export default function App() {
  const agent = {
    name: "halodsahjk",
    age: 30,
    id: "agent001"
  };

  return (
    <div className="h-full w-full">
      <Sidebar />
      <Requerement agent={agent} />
    </div>
  );
}