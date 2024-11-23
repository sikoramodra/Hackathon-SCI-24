import { useState } from 'react';

export default function CustomButton({ color, hoverColor, onClick, disabled, text }) {
  const [isHidden, setIsHidden] = useState(false);
  return disabled ? (
    <div
      className="relative h-28 w-28"
    >
      <div
        className="absolute w-full h-full transform -translate-y-2 bg-gray-500 border-2 border-black rounded-full"
      >
        <p className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-default select-none top-1/2 left-1/2">{text}</p>
      </div>
      <div className="w-full h-full bg-gray-800 rounded-full"></div>
    </div>
  ) : (
    <div
      className="relative h-28 w-28"
      onClick={() => {
        setIsHidden(true);
        onClick();
      }}
    >
      <div
        className={`absolute w-full h-full transform -translate-y-2 border-2 cursor-pointer border-black rounded-full ${color} hover:${hoverColor}`}
        style={{top: isHidden ? '0.5rem' : '0'}}
      >
        <p className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">{text}</p>
      </div>
      <div className="bg-black rounded-full h-28 w-28"></div>
    </div>
  );
}
