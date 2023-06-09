import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      navigate("/mynotes");
    }
  }, [navigate]);
  return (
    <div className="flex justify-center items-center h-[600px] text-center">
      <div>
        <h1 className="text-4xl mb-4">Welcome to notes</h1>
        <p className="text-2xl mb-4">One safe place for all your notes.</p>
        <div>
          <a href="/login" className="mr-8">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </a>
          <a href="/register">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Register
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
