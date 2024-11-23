import folderImage from '../assets/folder.png';
// import paper from '../assets/paper.jpg';

export default function CurrentTask({
  currentTask,
  selectedAgentIndex,
  agents
}) {
  return (
    <>
      <img
        className="absolute z-0 w-1/2 select-none"
        src={folderImage}
        alt=""
      />

      <div className="z-10 flex flex-col items-start justify-center w-1/3 ml-auto mr-8 bg-gray-200 rounded">
        {selectedAgentIndex === null ? null : (
          <div className="p-2">
            {/*<img src={paper} alt="" className="absolute" />*/}
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
      <div className="relative z-10 w-2/5 p-6 mr-auto h-3/5">
        <h2 className="mb-4 text-xl font-semibold text-center text-gray-700">
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
