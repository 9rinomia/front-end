import React, { useState } from "react";

const useStateTask = () => {
  const [color, setColor] = useState("");
  return (
    <div className={`flex space-x-4 w-full h-screen bg-${color}-800`}>
      <p>change color</p>
     


    {!color && (
        <>
          <button
            className="border bg-red-800 text-white py-4 px-6 mb-2"
            onClick={() => setColor("red")}
          >
            RED
          </button>
          <button
            className="border bg-blue-800 text-white py-4 px-6 mb-2"
            onClick={() => setColor("blue")}
          >
            BLUE
          </button>
          <button
            className="border bg-green-800 text-white py-4 px-6"
            onClick={() => setColor("green")}
          >
            GREE
          </button>
        </>
      )}
      {color && (
        <button
          className="mt-4 border bg-gray-500 text-white py-4 px-6"
          onClick={() => setColor("")}
        >
          CLEAR
        </button>
      )}




    </div>
  );
};
export default useStateTask;

//         