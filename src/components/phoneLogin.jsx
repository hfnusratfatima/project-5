import React from "react";
import loginImage from "../assets/images/login.jpg";
const PhoneLogin = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="w-[60%]">
            <img
              src={loginImage}
              alt="image here"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-[40%]">
            <div>
              <h1 className="font-semibold text-2xl text-left">
                Add Your Phone
              </h1>
              <p className="text-justify text-gray-600 mt-2">
                Enter your phone number (preferebly Whatsapp) to get your self
                verified and ready to start your Tudu Num journey.
              </p>
            </div>
            <div>
              <p className="font-medium mt-20 mb-3">Phone Number</p>

              <select
                name="phone"
                className="p-3 w-20 border-2 rounded-full mr-2"
              >
                <option value="volvo">+92</option>
                <option value="saab">+93</option>
                <option value="mercedes">+94</option>
                <option value="audi">+95</option>
              </select>
              <input
                className="p-3 border-2 rounded-full w-100 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                type="number"
                name="phoneNumber"
                placeholder="Add phone number"
              />
            </div>
            <div>
              <button className="text-xl mt-10 text-white bg-blue-700 cursor-pointer w-[100%] px-4 py-4 border-2  rounded-full hover:text-white transition-all duration-300">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhoneLogin;
