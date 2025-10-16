import loginImage from "../assets/images/login.jpg";
import profileImage from "../assets/images/profile.jpg";
const FormPage3 = () => {
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
              Add Extras (Optional)
            </h1>
            <p>
              Referral codes and uploads can be skipped now and added later.
            </p>
            <div className="mt-10">
              <label className="font-medium">Referral Code (Optional)</label>
              <br></br>
              <input
                type="text"
                className="bg-gray-100 border-gray-400 mt-2 p-3 border-2 rounded-full w-100 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder="Enter your referral code"
              />
              <p>You can scan QR code via scan icon.</p>
            </div>
            <div className="mt-7">
              <h1 className="font-medium">Upload Profile Picture (Optional)</h1>
            </div>
            <div className="flex items-center justify-center flex-col">
              <img src={profileImage} alt="image here" className="w-30 mt-5" />
            </div>
            <div>
              <p className="text-left">
                You can edit this later in your profile.
              </p>
            </div>
            <div>
              <button className="text-xl mt-20 text-white bg-blue-700 cursor-pointer w-[100%] px-4 py-4 border-2  rounded-full hover:text-white transition-all duration-300">
                Register & Get Tudo ID
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage3;
