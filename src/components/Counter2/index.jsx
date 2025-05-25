import React from "react";
import {useSelector} from "react-redux";

const Counter2 = () => {
  const count = useSelector((state) => state.counterReducer);
  return (
    <>
      <h2>Count: {count}</h2>
    </>
  );
};

export default Counter2;
