import { useState } from "react"


function App() {
  let [ color, setColor ] = useState("olive")
  return(
    <div
    className="w-full h-screen duration-200"
    style={{ backgroundColor: color }}
    >
      <div
      className="w-full fixed bottom-12 flex flex-wrap justify-center p-2"
      >
        <div
        className="flex flex-wrap gap-3 justify-center text-white py-2 px-3 rounded-3xl"
        style={{ backgroundColor: "white"}}
        >
          <button
          className="px-4 py-1 outline-none bg-red-600 rounded-xl"
          onClick={() => setColor("red")}
          >Red</button>
          <button
          className="px-4 py-1 outline-none bg-green-600 rounded-xl"
          onClick={() => setColor("green")}
          >Green</button>
          <button
          className="px-4 py-1 outline-none bg-blue-600 rounded-xl"
          onClick={() => setColor("blue")}
          >Blue</button>
          <button
          className="px-4 py-1 outline-none bg-black rounded-xl"
          onClick={() => setColor("black")}
          >Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
