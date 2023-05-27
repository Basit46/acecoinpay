import React from "react";
import { FaPen } from "react-icons/fa";
import mastercard from "../assets/mc_symbol.svg";
import verified from "../assets/verified.svg";
import dot from "../assets/dots.svg";

const Left = () => {
  return (
    <div className="w-full xl:w-[70%] h-full px-[30px]">
      <header className="w-full sm:flex justify-between">
        <div className="flex gap-[20px] items-center">
          <span className="min-w-[50px] min-h-[50px] rounded-full bg-[#3030f0]"></span>
          <h1 className="text-[1.5rem] text-[#05365c] font-bold">
            AceCoin<span className="font-normal text-black/70">Pay</span>
          </h1>
        </div>

        <div className="flex items-center gap-x-[2px] mt-[20px] sm:mt-0">
          <span className="bg-[#17254c] h-[35px] w-[25px] rounded-[5px] grid place-items-center text-white">
            0
          </span>
          <span className="bg-[#17254c] h-[35px] w-[25px] rounded-[5px] grid place-items-center text-white">
            1
          </span>
          <span className="mx-[2px] font-semibold">:</span>
          <span className="bg-[#17254c] h-[35px] w-[25px] rounded-[5px] grid place-items-center text-white">
            1
          </span>
          <span className="bg-[#17254c] h-[35px] w-[25px] rounded-[5px] grid place-items-center text-white">
            9
          </span>
        </div>
      </header>

      <form>
        {/* Card number section */}
        <div>
          <div className="mt-[25px] w-full flex justify-between items-center">
            <div>
              <h1 className="text-[1.1rem] text-[#05365c] font-bold">
                Card Number
              </h1>
              <p className="mt-[3px] text-[0.77em] text-[#8e96a3] font-medium">
                Enter the 16-digit number on the card
              </p>
            </div>
            <div className="flex items-center gap-[10px] text-[blue]">
              <FaPen />
              <p>Edit</p>
            </div>
          </div>
          <div className="card-num-input-cont mt-[20px] relative flex items-center w-full text-[1.2em] font-semibold text-[#05365c] rounded-md border-2 border-solid border-[rgba(224,224,224,0.5)]">
            <img
              className="w-[50px] hidden sm:block absolute left-[10px] md:left-[30px]"
              src={mastercard}
              alt="mastercard"
            />
            <input
              type="text"
              placeholder="2412   -   7512   -   3412   -   3456"
              className="w-full vsm:w-fit flex-1 h-full px-[10px] sm:px-[20px] md:px-[100px] py-[15px] focus:outline-[#0077B6] rounded-md  "
            />
            <img
              className="h-full w-[20px] hidden sm:block absolute right-[10px] md:right-[30px]"
              src={verified}
              alt="verification checkmark"
            />
          </div>
        </div>
        {/* CVV Section */}
        <div className="mt-[20px] w-full xmd:flex justify-between">
          <div className="w-full xmd:w-[50%] mb-[10px] xmd:mb-0">
            <h1 className="text-[1.1rem] text-[#05365c] font-bold">
              CVV Number
            </h1>
            <p className="text-[0.77rem] text-[#8e96a3] font-medium">
              Enter 3 or 4 digit number on the card
            </p>
          </div>

          <div className="w-full vsm:w-[80%] xmd:w-[50%] relative flex items-center border-2 border-solid border-[rgba(224,224,224,0.5)] rounded-md">
            <input
              type="text"
              placeholder="327"
              className="flex justify-center w-full h-full rounded-md outline-[#0077B6] px-[50px] lg:px-[140px] py-[15px] text-[1.2rem] text-[#05365c] placeholder:text-[#05365c] font-semibold"
            />
            <img
              className="w-[30px] absolute right-[10px] text-[#1da1f2] fill-[#1da1f2]"
              src={dot}
              alt="dot"
            />
          </div>
        </div>

        {/* Expiry date section */}
        <div className="mt-[20px] w-full xmd:flex justify-between">
          <div className="w-full xmd:w-[50%] mb-[10px] xmd:mb-0">
            <h1 className="text-[1.1rem] text-[#05365c] font-bold">
              Expiry Date
            </h1>
            <p className="text-[0.77rem] text-[#8e96a3] font-medium">
              Enter the expiration date of the card
            </p>
          </div>

          <div className="w-full vsm:w-[80%] xmd:w-[50%] flex justify-between items-center">
            <input
              type="text"
              placeholder="09"
              className="w-[40%] px-[20px] xmd:px-[50px] border-2 border-solid border-[rgba(224,224,224,0.5)] rounded-md outline-[#0077B6] py-[15px] text-[1.2rem] text-[#05365c] placeholder:text-[#05365c] font-semibold"
            />
            <span className="text-[1.5rem] font-medium text-[#05365c]">/</span>
            <input
              type="text"
              placeholder="22"
              className="w-[40%] px-[20px] xmd:px-[50px] border-2 border-solid border-[rgba(224,224,224,0.5)] rounded-md outline-[#0077B6] py-[15px] text-[1.2rem] text-[#05365c] placeholder:text-[#05365c] font-semibold"
            />
          </div>
        </div>

        {/* Password section */}
        <div className="mt-[20px] w-full xmd:flex justify-between">
          <div className="w-full xmd:w-[50%] mb-[10px] xmd:mb-0">
            <h1 className="text-[1.1rem] text-[#05365c] font-bold">Password</h1>
            <p className="text-[0.77rem] text-[#8e96a3] font-medium">
              Enter your Dynamic password
            </p>
          </div>

          <div className="w-full vsm:w-[80%] xmd:w-[50%] relative flex items-center border-2 border-solid border-[rgba(224,224,224,0.5)] rounded-md">
            <input
              type="password"
              className="flex justify-center w-full h-full rounded-md outline-[#0077B6] px-[30px] py-[15px] text-[1.2rem] text-[#05365c] font-semibold"
            />
            <img
              className="w-[30px] absolute right-[10px] text-[#1da1f2] fill-[#1da1f2]"
              src={dot}
              alt="dot"
            />
          </div>
        </div>

        {/* Pay Now */}
        <button className="mt-[30px] w-full rounded-md py-[20px] bg-[#035fff] text-white text-[1.2rem] font-medium">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Left;
