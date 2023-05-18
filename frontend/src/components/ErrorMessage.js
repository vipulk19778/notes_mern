import React from "react";

const ErrorMessage = ({ children }) => {
  return (
    <div className="flex justify-center items-center bg-red-500">
      <div className="grid gap-2">
        <div className="flex items-center justify-center ">
          <div className="border-gray-900 rounded-full py-2">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
