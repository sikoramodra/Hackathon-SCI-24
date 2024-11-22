import agentIcon from '../assets/agent.png';

export default function Sidebar(props) {
  // eslint-disable-next-line no-unused-vars
  const handleAgentClick = (agent) => {
    // todo
  };

  return (
    <div className="flex flex-col items-start w-full h-full gap-4 p-4 bg-gray-200">
      {props.agents.map((val, key) => (
        <div key={key} className="flex group">
          <img
            className="w-20 h-20 bg-gray-300 rounded shadow-md"
            src={agentIcon}
            alt="agent"
            onClick={handleAgentClick(val)}
          />
          <div className="absolute hidden p-2 ml-20 bg-gray-300 rounded shadow-md left-6 group-hover:block">
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
