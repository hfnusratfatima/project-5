import loginImage from "../assets/images/login.jpg";
import { FaApple, FaGoogle, FaLinkedin } from "react-icons/fa";

function Login() {
  return (
    <div className="container mx-auto">
      {/* <Carousel slides={slides} /> */}
      <div className="flex items-center justify-between">
        <div className="w-[60%]">
          <img
            src={loginImage}
            alt="image here"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-[40%] p-6 gap-6 ">
          <h1 className="text-4xl font-semibold text-center">
            Secure Your Tudo ID before launch
          </h1>
          <button className="text-xl mt-6 text-white bg-blue-700 cursor-pointer w-[100%] px-4 py-4 border-2  rounded-full hover:text-white transition-all duration-300">
            Continue with Phone
          </button>
          <div className=" mt-6 flex items-center justify-between gap-3">
            <button className="bg-blue-100 p-4 cursor-pointer  border-2 border-sky-700 rounded-full w-[33%] flex justify-center text-lg">
              <FaApple size={30} className="text-blue-700 " />
            </button>
            <button className="bg-blue-100 p-4 cursor-pointer  border-2 border-sky-700 rounded-full w-[33%] flex justify-center text-lg">
              <FaGoogle size={30} className="text-blue-700" />
            </button>
            <button className="bg-blue-100 p-4 cursor-pointer border-2 border-sky-700 rounded-full w-[33%] flex justify-center text-lg">
              <FaLinkedin size={30} className="text-blue-700" />
            </button>
          </div>
          <hr className="border-gray-300 border-t-2 mt-10 mb-10" />
          <p className="text-center font-medium">
            Already have an account?{" "}
            <span className="text-blue-700">
              <a href="#">Log in</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
