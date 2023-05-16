import React from "react";

const MainScreen = ({ title, children }) => {
  return (
    <div className="mx-36">
      {title && (
        <>
          <h1 className="text-4xl py-4">{title}</h1>
          <hr />
        </>
      )}
      {children}
    </div>
  );
};

export default MainScreen;
