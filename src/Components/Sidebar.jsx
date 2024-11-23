import agent_0_woman from '../assets/avatar_0_woman_secret.png';
import agent_1_woman from '../assets/avatar_1_woman_secret.png';
import agent_2_woman from '../assets/avatar_2_woman_secret.png';
import agent_3_woman from '../assets/avatar_3_woman_secret.png';
import agent_0_man from '../assets/avatar_0_man_secret.png';
import agent_1_man from '../assets/avatar_1_man_secret.png';
import agent_2_man from '../assets/avatar_2_man_secret.png';
import agent_3_man from '../assets/avatar_3_man_secret.png';
import eraCheck from '../logic/yearEraCheck';

export default function Sidebar({ selectedAgent, setSelectedAgent, agents }) {
  const timeRanges = [0, 1000, 2000, 3000];
  const agentIcons = [
    agent_0_woman,
    agent_1_woman,
    agent_2_woman,
    agent_3_woman,
    agent_0_man,
    agent_1_man,
    agent_2_man,
    agent_3_man,
  ];
  const calculateImage = (agent) => {
    for (let i = 0; i < timeRanges.length; i++) {
      if (
        (agent.effectiveRangeStart + agent.effectiveRangeEnd) / 2 <
        timeRanges[i]
      ) {
        return agentIcons[agent.sex == 'male' ? 4 + i : i];
      }
    }
  };

  return (
    <div className="no-scrollbar h-full w-full overflow-y-auto">
      <div className="flex h-fit min-h-full w-32 flex-col items-center gap-4 bg-gray-200/30 px-4 pb-40 pt-4">
        {agents.map((val, key) => (
          <div key={key} className="group relative flex align-middle">
            <img
              className={`h-20 w-20 cursor-pointer rounded overflow-hidden ${
                selectedAgent === key ? 'bg-gray-400 scale-110' : 'bg-gray-300'
              } shadow-md transition-transform duration-300 ease-in-out transform 
              hover:scale-[1] hover:object-scale-110`}
              src={calculateImage(val)}
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
                <span className="font-semibold">Sex: </span>
                {val.sex.charAt(0).toUpperCase() + val.sex.slice(1)}
              </p>
              <p className="mb-2 text-sm text-gray-600">
                <span className="font-semibold">Specialization: </span>
                {val.spec.charAt(0).toUpperCase() + val.spec.slice(1)}
              </p>
              <p className="mb-2 text-sm text-gray-600">
                <span className="font-semibold">Most effective in years: </span>
                {eraCheck(val.effectiveRangeStart)} -{' '}
                {eraCheck(val.effectiveRangeEnd)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
