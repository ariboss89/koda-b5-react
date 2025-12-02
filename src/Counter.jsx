import { useState } from "react";
import "./App.css";
import Title from "./components/Title";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <Title title={"Plus and Minus Number"} />
      <div className="flex justify-center items-center gap-2">
        <button
          onClick={() =>
            setNumber((number) => {
              return number <= 0 ? number : number - 1;
            })
          }
          className="flex rounded-md bg-red-600 p-2 text-white w-30 justify-center items-center"
        >
          Minus
        </button>
        <div>Current number is {number}</div>
        <button
          onClick={() =>
            setNumber((number) => {
              return number >= 10 ? number : number + 1;
            })
          }
          className="flex rounded-md bg-sky-400 p-2 text-white w-30 justify-center items-center"
        >
          Plus
        </button>
      </div>
    </>
  );
}

export default App;
