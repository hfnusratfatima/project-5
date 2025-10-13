import loginImage from "../assets/images/login.jpg";
const LoginCode = () => {
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
          <div className="w-[80%] text-center">
            <h1 className="text-center font-semibold text-2xl">Enter Code</h1>
            <p className="mt-3 mb-3">
              Enter the verification code we just send to you your mobile
              *******87
            </p>
          </div>
          <div className="flex gap-3">
            <input
              type="number"
              className="bg-gray-200 p-3  rounded-lg w-15 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <input
              type="number"
              className="bg-gray-200 p-3  rounded-lg w-15 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <input
              type="number"
              className="bg-gray-200 p-3  rounded-lg w-15 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <input
              type="number"
              className="bg-gray-200 p-3  rounded-lg w-15 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <input
              type="number"
              className="bg-gray-200 p-3  rounded-lg w-15 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <input
              type="number"
              className="bg-gray-200 p-3  rounded-lg w-15 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
          <div className="mt-3 text-center">
            <p>Didn't receive a code?</p>
            <a href="#" className="text-sky-700 underline">
              Get code again
            </a>
          </div>
          <div>
            <button className="text-xl mt-10 text-white bg-blue-700 cursor-pointer w-[100%] px-4 py-4 border-2  rounded-full hover:text-white transition-all duration-300">
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCode;
