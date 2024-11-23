export default function EndGame({ dayCount, setShowEndGame, init }) {
  const handleNewGame = () => {
    setShowEndGame(false);
    init();
  };

  return (
    <>
      <div className="absolute z-50 flex flex-col w-3/5 gap-10 p-10 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 shadow-md left-1/2 top-1/2 h-5/6 -rotate-2">
        <p className="text-3xl">You failed Manager :(</p>
        <p className="text-xl">
          The clock has struck midnight, and the overtime has run out. Despite
          your hard work and late nights, the agency&apos;s resources have dried
          up, leaving unpaid invoices, disgruntled clients, and empty coffee
          cups in your wake. Your team has dispersed, the lights are off, and
          the once-bustling office is now just an echo of missed deadlines and
          bold ambitions.
        </p>
        <div>
          <p className="mb-2 text-2xl">Final Report:</p>
          <ul>
            <li>
              <strong>Debt Owed</strong>: Too much to count.
            </li>
            <li>
              <strong>Team Morale</strong>: Long gone.
            </li>
            <li>
              <strong>Client Satisfaction</strong>: 404 Not Found.
            </li>
            <li>
              <strong>Days Survived</strong>: {dayCount}
            </li>
          </ul>
        </div>
        <div>
          <p className="text-3xl">Better luck next time!</p>
          <div
            className="pt-20 pl-2 text-2xl text-center text-gray-400 underline cursor-pointer select-none hover:text-gray-500"
            onClick={handleNewGame}
          >
            Start new game
          </div>
        </div>
      </div>
      <div className="absolute z-40"></div>
    </>
  );
}
