import agent from '../assets/agent.png';

export default function Sidebar() {
  const handleAgentClick = () => {};

  return (
    <div className="flex flex-col items-start w-full h-full gap-4 p-4 bg-gray-200">
      {['p1', 'p2', 'p3'].map((val, key) => (
        <div key={key} className="flex group">
          <img
            className="w-20 h-20 bg-gray-300 rounded"
            src={agent}
            alt="agent"
            onClick={handleAgentClick}
          />
          <div className="hidden p-2 ml-1 bg-gray-300 rounded overflow-clip group-hover:block">
            <p>info1: </p>
            <p>info2: </p>
            <p>info3: </p>
          </div>
        </div>
      ))}
    </div>
  );
}
