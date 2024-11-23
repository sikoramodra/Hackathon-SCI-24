 
export default function Buttons({nextTask, rejectTask, submitTask, isAgentSelected}) {
    return (
        <div className="flex items-center justify-center gap-4 p-5">
            <button disabled={!isAgentSelected} onClick={submitTask} className={`px-4 py-2 rounded-lg shadow-lg ${isAgentSelected ? "bg-green-400 hover:bg-green-500" : "bg-gray-500 hover:bg-gray-500"}`}>
                Zaakceptuj zlecenie
            </button>
            <button onClick={nextTask} className="px-4 py-2 bg-orange-400 rounded-lg shadow-lg hover:bg-orange-500">
                Następne zlecenie
            </button>
            <button onClick={rejectTask} className="px-4 py-2 bg-red-400 rounded-lg shadow-lg hover:bg-red-500">
                Odrzuć zlecenie
            </button>
        </div>
    );
  }
  