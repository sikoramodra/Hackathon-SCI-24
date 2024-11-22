export default function CurrentTask(props) {
    return (
      <div className="w-5/6 p-4 mx-auto border-2 border-gray-300 rounded-lg shadow-lg h-1/2">
        <h2 className="mb-4 text-xl font-semibold text-center text-gray-700">Requirements</h2>
        <div className="space-y-2">
          <p className="text-gray-600">
            <span className="font-bold">Name:</span> {props.agent.name}
          </p>
          <p className="text-gray-600">
            <span className="font-bold">Age:</span> {props.agent.age}
          </p>
          <p className="text-gray-600">
            <span className="font-bold">ID:</span> {props.agent.id}
          </p>
        </div>  
      </div>
    );
  }
  