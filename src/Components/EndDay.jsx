import { useEffect, useState } from "react";
import checkDay from "../logic/checkDay";
import CurrentTask from "./CurrentTask";
import TaskContainer from "./TaskContainer";
import Task from "../logic/task";
import Agent from "../logic/agent";

export default function EndDay({ finishedTasks, money, setMoney, generateNextRound }) {
    const [a, setA] = useState([0, 0, 0]);

    useEffect(() => {
        const result = checkDay(finishedTasks);
        console.log(result);
        setMoney(money + result[0]);

        setA(result);
    }, [finishedTasks]);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-100 shadow-lg rounded-lg">
            {/* Earnings Section */}
            <div className="p-4 bg-gray-200 border-l-4 border-gray-500 text-gray-800 rounded-lg mb-6">
                <h3 className="font-semibold text-xl">You earned:</h3>
                <p className="text-lg">You earned <strong>{a[0]}</strong> money today.</p>
                <p className="mt-2 text-md">Your total money is: <strong>{money}</strong></p>
            </div>

            {/* Task and Agent Details Section */}
            <div className="flex justify-between space-x-8">
                {/* Task Details (Left) */}
                <div className="flex-1 p-4 bg-gray-200 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-lg">Task Details</h4>
                    {a[1]?.requirements && a[1]?.requirements.map((element, index) => (
                        <div key={index} className="mt-4">
                            <p><strong>Requirement:</strong> {element[0]}</p>
                            <p><strong>Description:</strong> {element[1]}</p>
                        </div>
                    ))}
                </div>

                {/* Agent Details (Right) */}
                <div className="flex-1 p-4 bg-gray-200 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-lg">Agent Details</h4>
                    <div className="mt-4">
                        <p><strong>Sex:</strong> {a[2]?.sex}</p>
                        <p><strong>Age:</strong> {a[2]?.age}</p>
                        <p><strong>Specialization:</strong> {a[2]?.spec}</p>
                        <p><strong>Effective Range:</strong> {a[2]?.effectiveRangeStart} to {a[2]?.effectiveRangeEnd}</p>
                    </div>
                </div>
            </div>

            {/* Next Round Button */}
            <div className="flex justify-center mt-6">
                <button 
                    onClick={generateNextRound} 
                    className="px-6 py-2 bg-gray-600 text-white rounded-md shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300"
                >
                    Generate Next Round
                </button>
            </div>
        </div>
    );
}
