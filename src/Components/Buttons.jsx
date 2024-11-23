export default function Buttons({
  rejectTask,
  submitTask,
  isAgentSelected,
  money,
  addNewAgent,
}) {
  return (
    <div>
      <h3 className="mb-2 text-center text-gray-200">
        <span className="font-semibold">Balance: </span>
        {money}
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
          disabled={money < 20}
          onClick={addNewAgent}
          className={`rounded-lg px-4 py-2 shadow-lg ${money >= 20 ? 'bg-blue-400 hover:bg-blue-500' : 'bg-gray-500 hover:bg-gray-500'}`}
        >
          Hire new agent (20)
        </button>
      </div>
    </div>
  );
}
