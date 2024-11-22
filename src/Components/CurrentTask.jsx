export default function CurrentTask({currentTask}) {
    return (
      <div className="w-5/6 p-4 mx-auto border-2 border-gray-300 rounded-lg shadow-lg h-1/2">
        <h2 className="mb-4 text-xl font-semibold text-center text-gray-700">{currentTask.description}</h2>
        <div className="space-y-2">
          <h3 className="text-sm text-gray-600">Requirements:</h3>
          <ul className="list-disc list-inside">
            {currentTask.requirements.map((req, index) => {
              return (
                <li key={index} className="text-sm text-gray-600">
                  {req[0]}: {req[1]}
                </li>
              );
            })}
          </ul>
        </div>  
      </div>
    );
  }
  