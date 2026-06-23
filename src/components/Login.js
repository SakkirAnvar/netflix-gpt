import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleSignInForm = () => {
    setIsLoginForm(!isLoginForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a565a928-abda-47bd-860a-55be00b7fefc/web/IN-en-20260615-TRIFECTA-perspective_7ffb95f0-7b86-4dfa-9920-7f5651418d65_small.jpg"
          alt="background_img"
        />
      </div>
      <form className="w-3/12 absolute p-9 bg-black my-36 mx-auto right-0 left-0 text-white opacity-95">
        <h1 className="font-bold text-3xl py-2">
          {isLoginForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="email"
          placeholder="Email Address"
          className="p-2 my-2 w-full rounded-sm bg-gray-900"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full rounded-sm  bg-gray-900"
        ></input>
        <button className="p-2 my-4 w-full bg-red-700 rounded-sm">
          {isLoginForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isLoginForm
            ? "New to Netflix? Sign up now "
            : "Already registered? Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
