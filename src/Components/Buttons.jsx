export default function Buttons({
  rejectTask,
  submitTask,
  isAgentSelected,
  money,
  addNewAgent,
  dayCount,
}) {
  return (
    <div className="absolute p-4 -top-1/2 w-64 rounded-xl bg-[#eed6b4]">
      <h3 className="flex justify-around mb-2 text-xl text-center text-gray-900">
        <div>
          <span className="font-semibold">Day: </span>
          {dayCount}
        </div>
        <div>
          <span className="font-semibold">Balance: </span>
          {money}
        </div>
      </h3>

      <div className="flex flex-col items-center justify-center gap-4 p-5">
        <button
          disabled={!isAgentSelected}
          onClick={submitTask}
          className={`rounded-lg px-4 w-full h-16 py-2 shadow-lg ${isAgentSelected ? 'bg-green-400 hover:bg-green-500' : 'bg-gray-500 hover:bg-gray-500'} shadow-md`}
        >
          Accept order
        </button>
        <button
          onClick={rejectTask}
          className="w-full h-16 px-4 py-2 bg-red-400 rounded-lg shadow-lg hover:bg-red-500"
        >
          Reject order
        </button>
        <button
          disabled={money < 50}
          onClick={addNewAgent}
          className={`rounded-lg px-4 py-2 w-full h-16 shadow-lg ${money >= 50 ? 'bg-blue-400 hover:bg-blue-500' : 'bg-gray-500 hover:bg-gray-500'}`}
        >
          Hire new agent (50)
        </button>
      </div>
    </div>
  );
}
