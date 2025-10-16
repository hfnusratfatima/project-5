import loginImage from "../assets/images/login.jpg";
const FormPage = () => {
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
          <div className="w-[80%]">
            <h1 className="text-2xl font-semibold text-left">
              Let's Get Started
            </h1>
            <p className="mt-2 mb-5">
              Enter your basic details to create your Tudo ID.
            </p>
          </div>
          <div>
            <label htmlFor="first name " className="text-lg font-medium">
              First Name
            </label>
            <br></br>

            <input
              type="text"
              className="bg-gray-100 border-gray-400 mt-2 p-3 border-2 rounded-full w-100 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              placeholder="Enter your first name "
            />
            <div className="mt-5">
              <label htmlFor="last name " className="text-lg font-medium">
                Last Name
              </label>
              <br></br>

              <input
                type="text"
                className="bg-gray-100 border-gray-400 mt-2 p-3 border-2 rounded-full w-100 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder="Enter your last name "
              />
            </div>
            <div className="mt-5">
              <label htmlFor="email " className="text-lg font-medium">
                Email
              </label>
              <br></br>

              <input
                type="text"
                className="bg-gray-100 border-gray-400 mt-2 p-3 border-2 rounded-full w-100 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder="Enter your email "
              />
            </div>
            <div className="mt-5">
              <label htmlFor="password" className="text-lg font-medium">
                Password
              </label>
              <br></br>
              <input
                type="password"
                className="bg-gray-100 border-gray-400 mt-2 p-3 border-2 rounded-full w-100 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder="Create password"
              />
            </div>
            <div>
              <button className="text-xl mt-15 text-white bg-blue-700 cursor-pointer w-[80%] px-4 py-4 border-2  rounded-full hover:text-white transition-all duration-300">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
