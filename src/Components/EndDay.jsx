import { useEffect, useState } from 'react';
import checkDay from '../logic/checkDay';

export default function EndDay({
    finishedTasks,
    money,
    setMoney,
    generateNextRound,
    failedTasks,
    setFailedTasks,
    correctTasks,
    setCorrectTasks
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
        <div className="max-w-4xl p-6 mx-auto bg-gray-100 rounded-lg shadow-lg">
            <div className="p-4 mb-6 text-gray-800 bg-gray-200 border-l-4 border-gray-500 rounded-lg">
                <h3 className="text-xl font-semibold">You earned:</h3>
                <p className="text-lg">
                    You earned <strong>{profit}</strong> money today.
                </p>
                <p className="mt-2 text-md">
                    Your total money is: <strong>{money}</strong>
                </p>
            </div>
            <div class="flex">
                <div className="flex flex-col space-y-8">
                    {console.log(correctTasks)}
                    {correctTasks && correctTasks.map(([task, agent, score], i) => {
                        return (
                            <div className='bg-green-200 m-4 p-6'>
                                Score:{score}
                                <div key={i} className="flex justify-between space-x-8">
                                    <div className="flex-1 p-4 rounded-lg shadow-sm">
                                        <h4 className="text-lg font-semibold">Task Details</h4>
                                        {task.requirements.map((element, index) => (
                                            <div key={index} className="mt-4">
                                                <p><strong>Requirement:</strong> {element[0]}</p>
                                                <p><strong>Description:</strong> {element[1]}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex-1 p-4 rounded-lg shadow-sm">
                                        <h4 className="text-lg font-semibold">Agent Details</h4>
                                        <div className="mt-4">
                                            {agent.sex && <p><strong>Sex:</strong> {agent.sex}</p>}
                                            {agent.age && <p><strong>Age:</strong> {agent.age}</p>}
                                            {agent.spec && <p><strong>Specialization:</strong> {agent.spec}</p>}
                                            {(agent.effectiveRangeStart && agent.effectiveRangeEnd) &&
                                                <p><strong>Effective Range:</strong> {agent.effectiveRangeStart} to {agent.effectiveRangeEnd}</p>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="flex flex-col space-y-8">
                    {failedTasks && failedTasks.map(([task, agent, score], i) => {
                        return (
                            <div className='bg-red-200 m-4 p-6'>
                                Score:{score}
                                <div key={i} className="flex justify-between space-x-8">
                                    <div className="flex-1 p-4 rounded-lg shadow-sm">
                                        <h4 className="text-lg font-semibold">Task Details</h4>
                                        {task.requirements.map((element, index) => (
                                            <div key={index} className="mt-4">
                                                <p><strong>Requirement:</strong> {element[0]}</p>
                                                <p><strong>Description:</strong> {element[1]}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex-1 p-4 rounded-lg shadow-sm">
                                        <h4 className="text-lg font-semibold">Agent Details</h4>
                                        <div className="mt-4">
                                            {agent.sex && <p><strong>Sex:</strong> {agent.sex}</p>}
                                            {agent.age && <p><strong>Age:</strong> {agent.age}</p>}
                                            {agent.spec && <p><strong>Specialization:</strong> {agent.spec}</p>}
                                            {(agent.effectiveRangeStart && agent.effectiveRangeEnd) &&
                                                <p><strong>Effective Range:</strong> {agent.effectiveRangeStart} to {agent.effectiveRangeEnd}</p>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

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
