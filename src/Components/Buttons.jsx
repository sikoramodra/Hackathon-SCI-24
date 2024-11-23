export default function Buttons({
  nextTask,
  rejectTask,
  submitTask,
  isAgentSelected,
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 p-5">
      <button
        disabled={!isAgentSelected}
        onClick={submitTask}
        className={`rounded-lg px-4 py-2 shadow-lg ${isAgentSelected ? 'bg-green-400 hover:bg-green-500' : 'bg-gray-500 hover:bg-gray-500'}`}
      >
        Accept order
      </button>
      <button
        onClick={nextTask}
        className="rounded-lg bg-orange-400 px-4 py-2 shadow-lg hover:bg-orange-500"
      >
        Next order
      </button>
      <button
        onClick={rejectTask}
        className="rounded-lg bg-red-400 px-4 py-2 shadow-lg hover:bg-red-500"
      >
        Reject order
      </button>
    </div>
  );
}
