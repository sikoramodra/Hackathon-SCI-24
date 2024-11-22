import agent from '../assets/agent.png';

export default function Sidebar() {
  const handleAgentClick = () => {};

  return (
    <div className="flex h-full max-w-32 flex-col items-center gap-4 bg-gray-200 p-4">
      {['p1', 'p2', 'p3'].map((val, key) => (
        <div key={key} className="group flex">
          <img
            className="h-20 w-20 rounded bg-gray-300"
            src={agent}
            alt="agent"
            onClick={handleAgentClick}
          />
          <div className="ml-1 hidden overflow-clip rounded bg-gray-300 p-2 group-hover:block">
            <p>info1: </p>
            <p>info2: </p>
            <p>info3: </p>
          </div>
        </div>
      ))}
    </div>
  );
}
