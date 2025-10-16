import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Initial from "./components/initial";
import "./App.css";
import Carousel from "./components/carousel.component";
import Login from "./components/login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PhoneLogin from "./components/phoneLogin";
import LoginCode from "./components/loginCode";
import FormPage from "./components/formPage";
import FormPage2 from "./components/formPage2";
import FormPage3 from "./components/formPage3";
import VerifyEmail from "./components/verifyEmail";

function App() {
  // let slides = [
  //   "https://st3.depositphotos.com/1642684/19246/v/1600/depositphotos_192460686-stock-illustration-vector-illustration-kids-technology.jpg",
  //   "https://thumbs.dreamstime.com/b/vector-illustration-kids-technology-vector-illustration-kids-technology-eps-114717164.jpg",
  //   "https://st2.depositphotos.com/51623664/46954/v/450/depositphotos_469545850-stock-illustration-user-girl-holding-picture-change.jpg",
  // ];
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login-with-phone" element={<PhoneLogin />} />
            <Route path="/login-code" element={<LoginCode />} />
            <Route path="/login-form" element={<FormPage />} />
            <Route path="/login-form-2" element={<FormPage2 />} />
            <Route path="/login-form-3" element={<FormPage3 />} />
            <Route path="/login-form-4" element={<VerifyEmail />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
