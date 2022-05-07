import React from "react";
import { useDispatch } from "react-redux";
import { login } from "./redux/user";
const Logout = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(login({ name: "로그인해주세요", age: 0 }));
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
