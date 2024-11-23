import { useEffect, useState } from 'react';
import checkDay from '../logic/checkDay';
import CurrentTask from './CurrentTask';
import TaskContainer from './TaskContainer';
import Task from '../logic/task';
import Agent from '../logic/agent';

export default function EndDay({
    finishedTasks,
    money,
    setMoney,
    generateNextRound,
}) {
    const [a, setA] = useState([0, 0, 0]);

    useEffect(() => {
        const result = checkDay(finishedTasks);
        setMoney(money + result[0]);

        setA(result);
    }, [finishedTasks]);

    return (
        <div className="max-w-4xl p-6 mx-auto bg-gray-100 rounded-lg shadow-lg">
            <div className="p-4 mb-6 text-gray-800 bg-gray-200 border-l-4 border-gray-500 rounded-lg">
                <h3 className="text-xl font-semibold">You earned:</h3>
                <p className="text-lg">
                    You earned <strong>{a[0]}</strong> money today.
                </p>
                <p className="mt-2 text-md">
                    Your total money is: <strong>{money}</strong>
                </p>
            </div>
            {a.length > 1 && (
                <div className="flex flex-col space-y-8">
                    {/* Loop from 1 to a.length, incrementing by 2 */}
                    {Array.from({ length: Math.floor(a.length / 2) }).map((_, i) => {
                        const taskIndex = i * 2 + 1; // `i` corresponds to task index
                        const agentIndex = taskIndex + 1; // Next index corresponds to agent

                        return (
                            <div key={i} className="flex justify-between space-x-8">
                                {/* Task Details (Left) */}
                                <div className="flex-1 p-4 bg-gray-200 rounded-lg shadow-sm">
                                    <h4 className="text-lg font-semibold">Task Details</h4>
                                    {a[taskIndex]?.requirements && a[taskIndex]?.requirements.map((element, index) => (
                                        <div key={index} className="mt-4">
                                            <p><strong>Requirement:</strong> {element[0]}</p>
                                            <p><strong>Description:</strong> {element[1]}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Agent Details (Right) */}
                                <div className="flex-1 p-4 bg-gray-200 rounded-lg shadow-sm">
                                    <h4 className="text-lg font-semibold">Agent Details</h4>
                                    <div className="mt-4">
                                        {a[agentIndex]?.sex && <p><strong>Sex:</strong> {a[agentIndex]?.sex}</p>}
                                        {a[agentIndex]?.age && <p><strong>Age:</strong> {a[agentIndex]?.age}</p>}
                                        {a[agentIndex]?.spec && <p><strong>Specialization:</strong> {a[agentIndex]?.spec}</p>}
                                        {(a[agentIndex]?.effectiveRangeStart && a[agentIndex]?.effectiveRangeEnd) &&
                                            <p><strong>Effective Range:</strong> {a[agentIndex]?.effectiveRangeStart} to {a[agentIndex]?.effectiveRangeEnd}</p>
                                        }
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            <div className="flex justify-center mt-6">
                <button
                    onClick={generateNextRound}
                    className="px-6 py-2 text-white transition duration-300 bg-gray-600 rounded-md shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                    Generate Next Round
                </button>
            </div>
        </div>
    );
}
