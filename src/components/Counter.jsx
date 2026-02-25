import React, { useState } from "react";

const Counter = () => {
  // logic
  const [num, setNum] = useState(0);

  const handleIncrease = () => {
    // num = num+1;
    // num += 1;
    setNum(num + 1);
    console.log("🚀 ~ num++:", num);
  };

  const handDecrease = () => {
    setNum(num - 1);
    console.log("🚀 ~ num--:", num);
  };
  return (
    <div>
      <h1>{num}</h1>
      <div>
        <button type="button" onClick={handleIncrease}>
          +1
        </button>
        <button type="button" onClick={handDecrease}>
          -1
        </button>
      </div>
    </div>
  );
};

export default Counter;
