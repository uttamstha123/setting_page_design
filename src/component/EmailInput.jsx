import React from "react";

const EmailInput = () => {
  return (
    <div>
      <input
        id="email"
        name="email"
        type="email"
        className="sm:my-3 my-2 w-full h-20 rounded-md border-2 border-gray-300 shadow-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
        placeholder=""
        required
      ></input>
    </div>
  );
};

export default EmailInput;
