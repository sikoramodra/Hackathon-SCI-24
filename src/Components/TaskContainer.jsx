export default function TaskContainer({ tasks }) {
  return (
    <div className="w-5/6 p-4 mx-auto border-2 border-gray-300 rounded-lg shadow-lg h-1/2">
      <h2 className="mb-4 text-xl font-semibold text-center text-gray-700">
        Tasks
      </h2>
      {tasks.map((task, index) => {
        return (
          <div
            key={index}
            className="p-2 mb-4 border-2 border-gray-300 rounded-lg"
          >
            <p className="text-sm text-gray-600">Requirements:</p>
            <ul className="list-disc list-inside">
              {task.requirements.map((req, index) => {
                return (
                  <li key={index} className="text-sm text-gray-600">
                    {req[0]}: {req[1]}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
