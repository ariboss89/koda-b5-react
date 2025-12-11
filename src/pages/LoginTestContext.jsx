import React, { useContext, useState } from "react";
import { loginContext } from "../contexts/loginContext";

function LoginTestContext() {
  const { dispatch } = useContext(loginContext);

  // const { username, setUsername } = useState("");
  // const { password, setPassword } = useState("");

  const { form, setForm } = useState({
    username: "",
    password: "",
    profile_photo: "",
  });

  const changeHandler = (e) => {
    setForm((form) => {
      return { ...form, [e.target.id]: e.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newUser = {
      username: form.username,
      password: form.password,
      profile_photo: "",
    };

    Object.assign(newUser, { username: form.username });
    Object.assign(newUser, { password: form.password });
    localStorage.setItem("user", form.password);
    localStorage.setItem("photo", form.profile_photo);

    //tujuannya sama2 menambhakan
    //spread jika kebuthan untuk reassigned
    // object assigned jika mau menambahkan data baru

    dispatch({
      type: "LOGIN_USER",
      payload: newUser,
    });

    setForm({
      username: "",
      password: "",
    });
  };

  return (
    <div className="p-20">
      <form
        onSubmit={submitHandler}
        className="flex flex-col justify-start items-start"
      >
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Input username"
          name="username"
          id="username"
          value={form.username}
          onChange={changeHandler}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Input username"
          name="password"
          id="password"
          value={form.password}
          onChange={changeHandler}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginTestContext;
