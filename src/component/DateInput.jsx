import React, { useState } from "react";

const DateInput = () => {
  const [inputType, setInputType] = useState("text");
  return (
    <div>
      <input
        type={inputType}
        onClick={() => {
          setInputType("date");
        }}
        placeholder="Select a date range"
        className="form-input px-4 py-2 rounded-md font-light border-2 border-gray-300 shadow-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 sm:w-auto w-full"
      ></input>
    </div>
  );
};

export default DateInput;
