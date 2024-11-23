import { useState, useEffect } from 'react';

export default function TaskContainer({ tasks, currentTaskIndex, nextTask }) {
  const [taskCards, setTaskCards] = useState([]);

  useEffect(() => {
    if (taskCards.length > tasks.length - 1) {
      setTaskCards((prevItems) => prevItems.slice(0, -1));
    }
  }, [tasks]);

  useEffect(() => {
    if (tasks.length === 0) {
      return;
    }
    setTaskCards(
      tasks
        .filter((_, index) => index !== currentTaskIndex)
        .map((task, index) => {
          return (
            <div
              key={index}
              className="absolute h-64 bg-gray-200 shadow-md w-52"
              style={{
                transform: `rotate(${calculateRotation()}deg)`,
              }}
            >
            </div>
          );
        }),
    );
  }, []);

  const calculateRotation = () => {
    return Math.floor(Math.random() * 20) + -10;
  };

  return (
    <div className="relative mx-auto h-72 w-64  rounded-xl bg-[#eed6b4] p-4">
      {taskCards}
      <div className='absolute text-2xl text-gray-400 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer select-none top-1/2 left-1/2 hover:text-gray-500' onClick={nextTask}>
        Take Next
      </div>
    </div>
  );
}
