import agentIcon from '../assets/agent.png';

export default function Sidebar(props) {
  const handleAgentClick = (agent) => {};

  return (
    <div className="flex h-full w-full flex-col items-start gap-4 bg-gray-200 p-4">
      {props.agents.map((val, key) => (
        <div key={key} className="group flex">
          <img
            className="h-20 w-20 rounded bg-gray-300 shadow-md"
            src={agentIcon}
            alt="agent"
            onClick={handleAgentClick(val)}
          />
          <div className="absolute left-6 ml-20 hidden rounded bg-gray-300 p-2 shadow-md group-hover:block">
            <p className="mb-2 text-sm text-gray-600">
              <span className="font-semibold">Age: </span>
              {val.age}
            </p>
            <p className="mb-2 text-sm text-gray-600">
              <span className="font-semibold">spec: </span>
              {val.spec}
            </p>
            <p className="mb-2 text-sm text-gray-600">
              <span className="font-semibold">sex: </span>
              {val.sex}
            </p>
            <p className="mb-2 text-sm text-gray-600">
              <span className="font-semibold">effective range: </span>
              {val.effectiveRangeStart}-{val.effectiveRangeEnd}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
