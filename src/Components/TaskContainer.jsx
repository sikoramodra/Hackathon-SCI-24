export default function TaskContainer({ tasks }) {

  const calculatePosition = (index) => {
    if (tasks.length < 5) {
      return index * 10 + 20;
    }
    if (index >= tasks.length - 5) {
      return (index - (tasks.length - 5)) * 10 + 20;
    } else {
      return 20;
    }
  }
  return (
    <div className="w-5/6 p-4 mx-auto h-3/5 rounded-xl bg-[#eed6b4] relative ">
      {tasks.map((task, index) => {
        return (
          <div
            key={index}
            className="absolute bg-[#f2f7ff] rounded-lg w-60 h-72 border-2 border-black" style={{ right: `${calculatePosition(index)}px`, top: `${calculatePosition(index)}px` }} 
          >
            Req
          </div>
        );
      })}
    </div>
  );
}
