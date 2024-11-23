import { useEffect, useState } from 'react';
import checkDay from '../logic/checkDay';

function generatePercentString(num) {
  num = num * 100;
  num = Math.floor(num);
  return new String(num) + '%';
}

export default function EndDay({
  finishedTasks,
  money,
  setMoney,
  generateNextRound,
  failedTasks,
  setFailedTasks,
  correctTasks,
  setCorrectTasks,
}) {
  const [profit, setProfit] = useState(0);

  useEffect(() => {
    const result = checkDay(finishedTasks);
    console.log('Result:', result);
    setMoney(money + result.sum);
    setProfit(result.sum);

    setFailedTasks(result.failedTasks);
    setCorrectTasks(result.correctTasks);
  }, [finishedTasks]);

  return (
    <div className="mx-auto max-w-4xl rounded-lg bg-gray-100 p-6 shadow-lg">
      <div className="mb-6 rounded-lg border-l-4 border-gray-500 bg-gray-200 p-4 text-gray-800">
        <h3 className="text-xl font-semibold">You earned:</h3>
        <p className="text-lg">
          You earned <strong>{profit}</strong> money today.
        </p>
        <p className="text-md mt-2">
          Your total money is: <strong>{money}</strong>
        </p>
      </div>
      <div className="flex">
        <div className="flex flex-col space-y-8">
          {correctTasks &&
            correctTasks.map(([task, agent, score], i) => {
              return (
                <div className="m-4 bg-green-200 p-6">
                  Mission success chance: {generatePercentString(score)}
                  <div key={i} className="flex justify-between space-x-8">
                    <div className="flex-1 rounded-lg p-4 shadow-sm">
                      <h4 className="text-lg font-semibold">Task Details</h4>
                      {task.requirements.map((element, index) => (
                        <div key={index} className="mt-4">
                          <p>
                            <strong>Requirement:</strong> {element[0]}
                          </p>
                          <p>
                            <strong>Description:</strong> {element[1]}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="flex-1 rounded-lg p-4 shadow-sm">
                      <h4 className="text-lg font-semibold">Agent Details</h4>
                      <div className="mt-4">
                        {agent.sex && (
                          <p>
                            <strong>Sex:</strong> {agent.sex}
                          </p>
                        )}
                        {agent.age && (
                          <p>
                            <strong>Age:</strong> {agent.age}
                          </p>
                        )}
                        {agent.spec && (
                          <p>
                            <strong>Specialization:</strong> {agent.spec}
                          </p>
                        )}
                        {agent.effectiveRangeStart &&
                          agent.effectiveRangeEnd && (
                            <p>
                              <strong>Effective Range:</strong>{' '}
                              {agent.effectiveRangeStart} to{' '}
                              {agent.effectiveRangeEnd}
                            </p>
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="flex flex-col space-y-8">
          {failedTasks &&
            failedTasks.map(([task, agent, score], i) => {
              return (
                <div className="m-4 bg-red-200 p-6">
                  Mission success chance: {generatePercentString(score)}
                  <div key={i} className="flex justify-between space-x-8">
                    <div className="flex-1 rounded-lg p-4 shadow-sm">
                      <h4 className="text-lg font-semibold">Task Details</h4>
                      {task.requirements.map((element, index) => (
                        <div key={index} className="mt-4">
                          <p>
                            <strong>Requirement:</strong> {element[0]}
                          </p>
                          <p>
                            <strong>Description:</strong> {element[1]}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="flex-1 rounded-lg p-4 shadow-sm">
                      <h4 className="text-lg font-semibold">Agent Details</h4>
                      <div className="mt-4">
                        {agent.sex && (
                          <p>
                            <strong>Sex:</strong> {agent.sex}
                          </p>
                        )}
                        {agent.age && (
                          <p>
                            <strong>Age:</strong> {agent.age}
                          </p>
                        )}
                        {agent.spec && (
                          <p>
                            <strong>Specialization:</strong> {agent.spec}
                          </p>
                        )}
                        {agent.effectiveRangeStart &&
                          agent.effectiveRangeEnd && (
                            <p>
                              <strong>Effective Range:</strong>{' '}
                              {agent.effectiveRangeStart} to{' '}
                              {agent.effectiveRangeEnd}
                            </p>
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={generateNextRound}
          className="rounded-md bg-gray-600 px-6 py-2 text-white shadow-md transition duration-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          Generate Next Round
        </button>
      </div>
    </div>
  );
}
