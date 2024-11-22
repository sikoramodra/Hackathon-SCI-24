export default function Buttons() {
    return (
        <div className="flex items-center justify-center gap-4 p-5">
            <button className="px-4 py-2 bg-green-400 rounded-lg shadow-lg hover:bg-green-500">
                Zaakceptuj zlecenie
            </button>
            <button className="px-4 py-2 bg-orange-400 rounded-lg shadow-lg hover:bg-orange-500">
                Następne zlecenie
            </button>
            <button className="px-4 py-2 bg-red-400 rounded-lg shadow-lg hover:bg-red-500">
                Odrzuć zlecenie
            </button>
        </div>
    );
  }
  