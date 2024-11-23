import agentIcon from '../assets/agent.png';

export default function Sidebar({ selectedAgent, setSelectedAgent, agents }) {
  return (
    <div className="w-full h-full overflow-y-auto no-scrollbar">
      <div className="flex flex-col items-center w-32 gap-4 px-4 pt-4 pb-20 bg-gray-200 h-fit">
        {agents.map((val, key) => (
          <div key={key} className="relative flex align-middle group">
            <img
              className={`h-20 w-20 cursor-pointer rounded ${selectedAgent === key ? 'bg-gray-400' : 'bg-gray-300'} shadow-md"`}
              src={agentIcon}
              alt="agent"
              onClick={() => {
                setSelectedAgent(key);
              }}
            />
            <div className="absolute hidden w-32 p-2 ml-2 bg-gray-300 rounded shadow-md left-full group-hover:block">
              <p className="mb-2 text-sm text-gray-600">
                <span className="font-semibold">Name: </span>
                {val.fullName}
              </p>
              <p className="mb-2 text-sm text-gray-600">
                <span className="font-semibold">Age: </span>
                {val.age}
              </p>
              <p className="mb-2 text-sm text-gray-600">
                <span className="font-semibold">Sex: </span>
                {val.sex.charAt(0).toUpperCase() + val.sex.slice(1)}
              </p>
              <p className="mb-2 text-sm text-gray-600">
                <span className="font-semibold">Specialization: </span>
                {val.spec.charAt(0).toUpperCase() + val.spec.slice(1)}
              </p>
              <p className="mb-2 text-sm text-gray-600">
                <span className="font-semibold">Most effective in years: </span>
                {val.effectiveRangeStart} - {val.effectiveRangeEnd}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
