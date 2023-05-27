import React from "react";
import Left from "./components/Left";
import Right from "./components/Right";
import { FaTimes } from "react-icons/fa";

function App() {
  return (
    <div className="xl:h-screen w-screen py-[100px] xl:py-0 grid place-items-center">
      <div className="relative overflow-hidden bg-white w-[90vw] vsm:w-[80vw] h-fit xl:h-[95vh] xl:flex px-[10px] vsm:px-[20px] lg:px-[50px] py-[30px]">
        <div className="absolute right-0 top-0 bg-[#f0f3f8] h-[40px] w-[60px] grid place-items-center">
          <FaTimes />
        </div>
        <Left />
        <Right />
      </div>
    </div>
  );
}

export default App;
