import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { login } from "./redux/user";

function Login() {
  const user = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          console.log(user);
          dispatch(login({ name: "haagmin", age: 27 }));
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
