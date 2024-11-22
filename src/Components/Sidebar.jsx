import agentIcon from '../assets/agent.png';

export default function Sidebar(props) {
  // eslint-disable-next-line no-unused-vars
  const handleAgentClick = (agent) => {
    // todo
  };

  return (
    <div className="no-scrollbar h-full w-full overflow-y-auto">
      <div className="flex h-full w-32 flex-col items-center gap-4 bg-gray-200 px-4 pb-20 pt-4">
        {props.agents.map((val, key) => (
          <div key={key} className="group relative flex align-middle">
            <img
              className="h-20 w-20 rounded bg-gray-300 shadow-md"
              src={agentIcon}
              alt="agent"
              onClick={handleAgentClick(val)}
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
    </div>
  );
}
