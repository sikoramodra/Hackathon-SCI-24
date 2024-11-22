// Requirement.jsx
export default function Requerement(props) {
    return (
      <div className="max-w-md mx-auto p-4 border-2 border-gray-300 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-center text-gray-700">Requirements</h2>
        <div className="space-y-2">
          <p className="text-gray-600">
            <span className="font-bold">- Name:</span> {props.agent.name}
          </p>
          <p className="text-gray-600">
            <span className="font-bold">- Age:</span> {props.agent.age}
          </p>
          <p className="text-gray-600">
            <span className="font-bold">- ID:</span> {props.agent.id}
          </p>
        </div>
      </div>
    );
  }
  