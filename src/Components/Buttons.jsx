export default function Buttons() {
    return (
        <div className="flex items-center justify-center gap-4">
            <button className="px-4 py-2 bg-gray-200 rounded-lg shadow-lg hover:bg-green-400">
                Zaakceptuj zlecenie
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded-lg shadow-lg hover:bg-red-400">
                Odrzuć zlecenie
            </button>
        </div>
    );
  }
  