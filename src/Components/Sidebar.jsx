import agentIcon from '../assets/agent.png';

export default function Sidebar({ selectedAgent, setSelectedAgent, agents }) {
  return (
    <div className="no-scrollbar h-full w-full overflow-y-auto">
      <div className="flex h-fit w-32 flex-col items-center gap-4 bg-gray-200 px-4 pb-20 pt-4">
        {agents.map((val, key) => (
          <div key={key} className="group relative flex align-middle">
            <img
              className={`h-20 w-20 cursor-pointer rounded ${selectedAgent === key ? 'bg-gray-400' : 'bg-gray-300'} shadow-md"`}
              src={agentIcon}
              alt="agent"
              onClick={() => {
                setSelectedAgent(key);
              }}
            />
            <div className="absolute left-full ml-2 hidden w-32 rounded bg-gray-300 p-2 shadow-md group-hover:block">
              <p className="mb-2 text-sm text-gray-600">
                <span className="font-semibold">Name: </span>
                {val.fullName}
              </p>
              <p className="mb-2 text-sm text-gray-600">
                <span className="font-semibold">Age: </span>
                {val.age}
              </p>
              <p className="mb-2 text-sm text-gray-600">
<<<<<<< HEAD
                <span className="font-semibold">Spec: </span>
                {val.spec}
              </p>
              <p className="mb-2 text-sm text-gray-600">
                <span className="font-semibold">Sex: </span>
                {val.sex}
              </p>
              <p className="mb-2 text-sm text-gray-600">
                <span className="font-semibold">Effective range: </span>
                {val.effectiveRangeStart}-{val.effectiveRangeEnd}
=======
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
>>>>>>> 2d0f346 (drobne kosmetyki)
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
