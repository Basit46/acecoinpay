import React from "react";
import chip from "../assets/chip.png";
import wifi from "../assets/wifi.png";
import mastercard from "../assets/mastercard.svg";
import apple from "../assets/apple.svg";
import ticket from "../assets/ticket.png";

const Right = () => {
  return (
    <div className="right-section mt-[100px] xl:mt-0 w-full md:w-[40%] xl:w-[30%] h-[95vh] lg:h-[85vh] xl:h-full relative flex flex-col justify-end">
      <div className="absolute top-[-10px] left-[50%] translate-x-[-50%] h-[40px] w-[80px] bg-[blue]" />
      <div className="card absolute flex flex-col justify-between top-0 left-[50%] translate-x-[-50%] h-[250px] w-[200px] px-[25px] py-[30px] z-[2] text-[#05365c] backdrop-blur-[15px] rounded-[16px]">
        <div className="w-full flex justify-between items-center mt-[10px]">
          <img className="w-[25px]" src={chip} alt="chip" />
          <img className="w-[20px]" src={wifi} alt="wifi" />
        </div>
        <div>
          <div className="mb-[30px]">
            <h1 className="text-[#616161] font-[500] text-[0.95em]">
              Jonathan Michael
            </h1>
            <div className="mt-[10px] w-full flex gap-[15px] items-center">
              <div className="flex gap-[3px]">
                <div className="w-[6px] h-[6px] rounded-full bg-[#05365c]"></div>
                <div className="w-[6px] h-[6px] rounded-full bg-[#05365c]"></div>
                <div className="w-[6px] h-[6px] rounded-full bg-[#05365c]"></div>
                <div className="w-[6px] h-[6px] rounded-full bg-[#05365c]"></div>
              </div>
              <p className="text-[1.1em] font-bold">3456</p>
            </div>
          </div>
          <div className="w-full flex justify-between items-center">
            <h1 className="font-semibold text-[1rem]">09/22</h1>
            <img className="w-[40px]" src={mastercard} alt="mastercard" />
          </div>
        </div>
      </div>

      <div className="details relative h-[65%] w-full flex flex-col justify-end px-[25px] py-[30px] bg-[#f0f3f8] rounded-[16px] border-dashed border-b-[2px] border-black">
        <div className="w-full flex justify-between items-center">
          <p className="text-[0.85rem] font-medium text-[#8e96a3]">Company</p>
          <div className="flex items-center gap-[5px]">
            <img className="w-[20px]" src={apple} alt="apple logo" />
            <p className="text-[#05365c] font-semibold">Apple</p>
          </div>
        </div>
        <div className="mt-[13px] w-full flex justify-between items-center">
          <p className="text-[0.85rem] font-medium text-[#8e96a3]">
            Order Number
          </p>
          <p className="text-[#05365c] font-semibold">1266201</p>
        </div>
        <div className="mt-[13px] w-full flex justify-between items-center">
          <p className="text-[0.85rem] font-medium text-[#8e96a3]">Product</p>
          <p className="text-[#05365c] font-semibold">Macbook Air</p>
        </div>
        <div className="mt-[13px] w-full flex justify-between items-center">
          <p className="text-[0.85rem] font-medium text-[#8e96a3]">VAT(20%)</p>
          <p className="text-[#05365c] font-semibold">$100</p>
        </div>
      </div>

      <div className="h-[20%] w-full bg-[#f0f3f8] rounded-[16px] flex justify-between items-center px-[25px] py-[30px]">
        <div>
          <h1 className="text-[#8e96a3] text-[0.9rem] font-medium">
            You have to pay
          </h1>
          <p className="text-[#05365c] text-[2rem] font-bold">
            549<span className="text-[1rem]">.99</span>
            <span className="text-[#8e96a3] font-semibold text-[1.1rem] ml-[5px]">
              USD
            </span>
          </p>
        </div>
        <img className="w-[30px] h-fit" src={ticket} alt="ticket" />
      </div>
    </div>
  );
};

export default Right;
