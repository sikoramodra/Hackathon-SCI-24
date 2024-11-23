import folderImage from '../assets/folder.png';

export default function CurrentTask({
  currentTask,
  selectedAgentIndex,
  agents,
}) {
  return (
    <>
      <img
        className="absolute z-0 w-1/2 select-none"
        src={folderImage}
        alt=""
      />

      <div
        className="z-10 ml-auto mr-8 flex w-1/3 flex-col items-start justify-center bg-gray-200 shadow-md"
        style={{
          transform: `rotate(${Math.floor(Math.random() * 20) + -10}deg)`,
        }}
      >
        {selectedAgentIndex === null ? null : (
          <div className="p-2">
            <p className="mb-2 text-sm text-gray-600">
              <span className="font-semibold">Name: </span>
              {agents[selectedAgentIndex]?.fullName}
            </p>
            <p className="mb-2 text-sm text-gray-600">
              <span className="font-semibold">Age: </span>
              {agents[selectedAgentIndex]?.age}
            </p>
            <p className="mb-2 text-sm text-gray-600">
              <span className="font-semibold">Spec: </span>
              {agents[selectedAgentIndex]?.spec}
            </p>
            <p className="mb-2 text-sm text-gray-600">
              <span className="font-semibold">Sex: </span>
              {agents[selectedAgentIndex]?.sex}
            </p>
            <p className="mb-2 text-sm text-gray-600">
              <span className="font-semibold">Effective range: </span>
              {agents[selectedAgentIndex]?.effectiveRangeStart}-
              {agents[selectedAgentIndex]?.effectiveRangeEnd}
            </p>
          </div>
        )}
      </div>
      <div className="relative z-10 mr-auto h-3/5 w-2/5 p-6">
        <h2 className="mb-4 text-center text-xl font-semibold text-gray-700">
          {currentTask.description}
        </h2>
        <div className="space-y-2">
          <p className="text-sm text-gray-600">{currentTask.clues}</p>
          <p className="text-sm text-gray-600">Contract value: <b>{currentTask.value}</b> money.</p>
        </div>
      </div>
    </>
  );
}
