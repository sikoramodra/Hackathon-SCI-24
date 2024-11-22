import agent from '../assets/agent.png';

export default function Sidebar() {
  return (
    <div className="flex h-full max-w-32 flex-col items-center gap-4 bg-gray-200 p-4">
      {['p1', 'p2', 'p3'].map((val, key) => (
        <img
          key={key}
          className="h-20 w-20 rounded bg-gray-300"
          src={agent}
          alt="agent"
        />
      ))}
    </div>
  );
}
