export default function TaskView() {
  return (
    <div className="grid w-full h-full grid-cols-3 grid-rows-3 border">
      <div className="flex items-center justify-center col-start-3 row-start-1 bg-blue-300 border">
        1
      </div>
      <div className="flex items-center justify-center col-start-3 row-start-3 bg-green-300 border">
        2
      </div>
      <div className="flex items-center justify-center col-span-2 row-span-3 row-start-1 bg-yellow-300 border">
        3
      </div>
    </div>
  );
}
