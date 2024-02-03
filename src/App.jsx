import { useState } from "react";

function App() {
  const [background, setBackground] = useState("olive");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: background }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 rounded-full shadow-lg bg-white px-3 py-2">
          {/* test */}
          <button
            className="text-2xl bg-black rounded-full text-white p-5"
            onClick={() => setBackground("black")}
          >
            black
          </button>
          <button
            className="outline-none text-2xl bg-red-600  rounded-full text-white p-5"
            onClick={() => setBackground("red")}
          >
            red
          </button>
          <button
            className="text-2xl bg-green-900 rounded-full text-white p-5"
            onClick={() => setBackground("green")}
          >
            green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
