import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShouldRender from "../util/ShouldRender";
import Error from "../util/Error";

const Login = () => {
  const [user, setUser] = useState("");
  const [hasError, setError] = useState(false);
  const navigate = useNavigate();

  const onInputChange = (evt) => {
    const newUser = { ...user, [evt.target.name]: evt.target.value };
    setUser(newUser);
  };

  const onLogin = async (evt) => {
    evt.preventDefault();
    try {
      console.log("user consolelog", user);
      const res = await axios.post(`http://localhost:3000/users/signin`, user); // 'user' sends the user's login credentials to the server for authentication.
      navigate("/products");
    } catch (err) {
      setError(true);
      setTimeout(()=>{
        setError(false);
      },2000)
    }
  };

  return (
    <div className="m-2 p-2 w-1/3">
      <form className="space-y-4" onSubmit={onLogin}>
        {/* Error handling */}
        <ShouldRender when={hasError}>
          <Error msg='Invalid Email or Password'/>
        </ShouldRender>

        <h1 className="m-1 text-2xl font-bold text-gray-600">Login</h1>

        {/* Email */}
        <div>
          <label className="mb-2 m-1 ">Email</label>
          <input
            onChange={onInputChange}
            type="text"
            placeholder="Email"
            name="email"
            className="p-2 block border border-gray-500 m-1 rounded w-full"
          />
        </div>

        {/* Password */}
        <div>
          <label className="mb-2 m-1 ">Password</label>
          <input
            onChange={onInputChange}
            type="password"
            placeholder="Password"
            name="password"
            className="p-2 block border border-gray-500 m-1 rounded w-full"
          />
        </div>

        {/* Login Button */}
        <div className="mb-2 m-1">
          <button className="mb-2 m-1 p-2 bg-orange-500 text-white hover:bg-orange-600 rounded-lg font-semibold">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
