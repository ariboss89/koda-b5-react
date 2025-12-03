import React, { useState } from "react";
import eye from "../images/eye.png";
// import eyeSlash from "../images/eye-slash.png";
import fb from "../images/fb.png";
import google from "../images/google.png";
import or from "../images/or.png";
import logo from "../images/logo.png";

function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  //const [isOpen, setIsOpen] = useState();

  const [form, setForm] = useState({ email: "", password: "" });

  const submitHandler = (event) => {
    event.preventDefault();
    if (form.email != "" && form.password != "") {
      console.log(`Email anda ${form.email} & Password anda ${form.password}`);
    }

    setForm({ email: "", password: "" });
  };

  const onChangeHandler = (e) => {
    setForm((form) => {
      return { ...form, [e.target.name]: e.target.value };
    });
  };

  return (
    <>
      <main className="bg-[url(../images/bg.png)] bg-cover">
        <section>
          <div className="flex flex-col justify-center items-center rounded-sm">
            <div className="flex justify-center align-center text-center mt-10">
              <img src={logo} width="50%" height="50%" />
            </div>

            <div className="w-1/3">
              <form
                noValidate
                onSubmit={submitHandler}
                className="flex flex-col mt-10 bg-[#ffffff] p-10 rounded-sm mb-20"
              >
                <div className="flex flex-col justify-between align-center mb-10">
                  <div className="flex flex-col justify-start items-start text-left text-3xl">
                    Welcome Back 👋
                  </div>
                  <div className="flex flex-col justify-start items-start text-left color-[#DEDEDE]">
                    Sign in with your data that you entered during your
                    registration
                  </div>
                </div>

                <label className="text-left">Email</label>
                <div className="mt-5 w-full">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChangeHandler}
                    className="h-15 w-full border border-[#DEDEDE] rounded-xs pl-5"
                    placeholder="Enter your email"
                  />
                </div>
                <label className="text-left mt-5">Password</label>
                <div className="mt-5 w-full">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={onChangeHandler}
                    className="h-15 w-full border border-[#DEDEDE] rounded-xs pl-5"
                    placeholder="Enter your password"
                  />
                  <img
                    className="relative -top-12 -right-75 w-8 h-8"
                    src={eye}
                  />
                </div>

                <div className="flex flex-row justify-end align-end items-end text-[#1D4ED8]">
                  <p className="text-right">Forgot your password ?</p>
                </div>

                <input
                  type="submit"
                  className="text-white w-full rounded-sm bg-[#1D4ED8] mt-5 mb-5 p-5"
                  value="Login"
                />

                <div className="flex flex-row align-center items-center mb-5">
                  <img src={or} />
                </div>

                <div className="flex justify-center align-center items-center gap-10">
                  <div className="flex p-2 items-center justify-center bg-[#ffffff] shadow-sm w-1/2">
                    <img src={fb} width="20vh" height="20vh" />
                    <input className="pl-5" type="button" value="Google" />
                  </div>

                  <div className="flex p-2 items-center justify-center bg-[#ffffff] shadow-sm w-1/2">
                    <img src={google} width="20vh" height="20vh" />
                    <input className="pl-5" type="button" value="Google" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Login;
