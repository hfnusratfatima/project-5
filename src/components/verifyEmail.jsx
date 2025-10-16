import loginImage from "../assets/images/login.jpg";
import dummyImage from "../assets/images/dummy.png";
import { IoInformationCircleOutline } from "react-icons/io5";
const VerifyEmail = () => {
  return (
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
          <div className="w-[80%] ">
            <div className="flex flex-col items-center justify-center">
              <img src={dummyImage} alt="image here" className="w-70 " />
              <h1 className="text-2xl font-bold mt-5 ">Verify Your Email</h1>
              <p>Get instant rewards and full access.</p>
            </div>
            <div className="bg-blue-100 p-3 rounded mt-10">
              <p className="text-blue-700">
                <IoInformationCircleOutline className="inline-block mr-1" />
                Earn 10+ points when you verify
              </p>
            </div>
            <div>
              <button className="text-xl mt-20 text-white bg-blue-700 cursor-pointer w-[100%] px-4 py-4 border-2  rounded-full hover:text-white transition-all duration-300">
                Verify Email
              </button>
              <button className="text-xl mt-5  text-blue-700 bg-blue-100 cursor-pointer w-[100%] px-4 py-4 border-2  rounded-full  transition-all duration-300">
                Skip For Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
