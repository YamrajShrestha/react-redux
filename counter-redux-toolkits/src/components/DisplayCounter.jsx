import React from "react";
import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counter = useSelector((store) => store.counter);
  return (
    <>
      <p className="lead mb-4">Display Current Value: <button className="btn btn-warning px-5">{counter}</button></p>
    </>
  );
};

export default DisplayCounter;
