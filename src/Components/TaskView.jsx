import Buttons from './Buttons.jsx';
import Requirement from './Requirement.jsx';

export default function TaskView() {
    const agent = {
        name: "halodsahjk",
        age: 30,
        id: "agent001"
      };
      
  return (
    <div className="grid w-full h-full grid-cols-3 grid-rows-3">
      <div className="flex items-center justify-center col-start-3 row-start-1 bg-blue-300 border">
        Requirements section
      </div>
      <div className="flex items-center justify-center col-start-3 row-start-3 border rounded">
        <Buttons />
      </div>
      <div className="flex items-center justify-center col-span-2 row-span-3 row-start-1">
        <Requirement agent={agent} />
      </div>
    </div>
  );
}
