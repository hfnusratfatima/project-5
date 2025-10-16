import loginImage from "../assets/images/login.jpg";
const FormPage2 = () => {
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
              Tell Us About You
            </h1>
            <p>Choose how you went to join Tudo Num.</p>
            <div>
              <h1 className="mt-5 text-xl font-semibold text-left">
                Define your role
              </h1>
            </div>
            <div className="flex flex-col gap-2 mt-3">
              <div className="flex gap-2 items-start">
                <input
                  type="radio"
                  id="generalUser"
                  name="role"
                  className="mt-2"
                />
                <label htmlFor="generalUser">
                  <p className="font-medium">General User</p>
                  <p>Browse, join, and connect with services. </p>
                </label>
              </div>
              <div className="flex gap-2 items-start">
                <input
                  type="radio"
                  id="serviceProvider"
                  name="role"
                  className="mt-2"
                />
                <label htmlFor="serviceProvider">
                  <p className="font-medium">Service Provider</p>
                  <p>Offer your services and get discovered. </p>
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <div className="mt-2 mb-2">
                <label>Country or Region</label>
                <br></br>
                <select
                  name="phone"
                  className="bg-gray-100 border-gray-200  p-3 w-[100%] border-2 rounded-full mr-2 mt-2"
                >
                  <option value="volvo">span</option>
                  <option value="saab">france</option>
                  <option value="mercedes">united state</option>
                  <option value="audi">itlay</option>
                </select>
              </div>
              <div className="mt-2 mb-2">
                <label>Select City</label>
                <br></br>
                <select
                  name="phone"
                  className="bg-gray-100 border-gray-200 p-3 w-[100%] border-2 rounded-full mr-2 mt-2"
                >
                  <option value="volvo">City Name A</option>
                  <option value="saab">City Name A</option>
                  <option value="mercedes">City Name A</option>
                  <option value="audi">City Name A</option>
                </select>
              </div>
              <div className="mt-2 mb-2">
                <label>Language Perference</label>
                <br></br>
                <select
                  name="phone"
                  className="bg-gray-100 border-gray-200 p-3 w-[100%] border-2 rounded-full mr-2 mt-2 "
                >
                  <option value="volvo">English (US)</option>
                  <option value="saab">English (UK)</option>
                  <option value="mercedes">Espanol (Espana)</option>
                  <option value="audi">Francais (France)</option>
                </select>
              </div>
              <div>
                <button className="text-xl mt-10 text-white bg-blue-700 cursor-pointer w-[100%] px-4 py-4 border-2  rounded-full hover:text-white transition-all duration-300">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage2;
