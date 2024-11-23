import agent_0_woman from '../assets/avatar_0_woman_secret.png';
import agent_1_woman from '../assets/avatar_1_woman_secret.png';
import agent_2_woman from '../assets/avatar_2_woman_secret.png';
import agent_3_woman from '../assets/avatar_3_woman_secret.png';
import agent_0_man from '../assets/avatar_0_man_secret.png';
import agent_1_man from '../assets/avatar_1_man_secret.png';
import agent_2_man from '../assets/avatar_2_man_secret.png';
import agent_3_man from '../assets/avatar_3_man_secret.png';
import agentIcon from '../assets/agent.png';
import eraCheck from '../logic/yearEraCheck';

export default function Sidebar({ selectedAgent, setSelectedAgent, agents }) {
  const timeRanges = [0, 1000, 2000, 3000];
  const agentIcons = [agent_0_woman, agent_1_woman, agent_2_woman, agent_3_woman, agent_0_man, agent_1_man, agent_2_man, agent_3_man];
  const calculateImage = (agent) => {
    for (let i = 0; i < timeRanges.length; i++) {
      if ((agent.effectiveRangeStart + agent.effectiveRangeEnd) / 2 < timeRanges[i]) {
        return agentIcons[agent.sex == 'male' ? 4 + i : i];
      }
    }
    return 
  }

  return (
    <div className="w-full h-full overflow-y-auto no-scrollbar">
      <div className="flex flex-col items-center w-32 min-h-full gap-4 px-4 pt-4 pb-40 h-fit bg-gray-200/30">
        {agents.map((val, key) => (
          <div key={key} className="relative flex align-middle group">
            <img
              className={`h-20 w-20 cursor-pointer rounded ${selectedAgent === key ? 'bg-gray-400' : 'bg-gray-300'} shadow-md"`}
              src={calculateImage(val)}
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
                {eraCheck(val.effectiveRangeStart)} - {eraCheck(val.effectiveRangeEnd)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
