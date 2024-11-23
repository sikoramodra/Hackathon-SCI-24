export default function Buttons({
  rejectTask,
  submitTask,
  isAgentSelected,
  money,
  addNewAgent,
  dayCount,
}) {
  return (
    <div>
      <h3 className="mb-2 flex justify-around text-center text-gray-200">
        <div>
          <span className="font-semibold">Day: </span>
          {dayCount}
        </div>
        <div>
          <span className="font-semibold">Balance: </span>
          {money}
        </div>
      </h3>

      <div className="flex flex-wrap items-center justify-center gap-4 p-5">
        <button
          disabled={!isAgentSelected}
          onClick={submitTask}
          className={`rounded-lg px-4 py-2 shadow-lg ${isAgentSelected ? 'bg-green-400 hover:bg-green-500' : 'bg-gray-500 hover:bg-gray-500'}`}
        >
          Accept order
        </button>
        <button
          onClick={rejectTask}
          className="rounded-lg bg-red-400 px-4 py-2 shadow-lg hover:bg-red-500"
        >
          Reject order
        </button>
        <button
          disabled={money < 50}
          onClick={addNewAgent}
          className={`rounded-lg px-4 py-2 shadow-lg ${money >= 50 ? 'bg-blue-400 hover:bg-blue-500' : 'bg-gray-500 hover:bg-gray-500'}`}
        >
          Hire new agent (50)
        </button>
      </div>
    </div>
  );
}
