import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const ControlButtons = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handlePrivacyToggle = () => {
    dispatch({ type: "PRIVACY_TOGGLE" });

  };

  const handleAdd = () => {
    dispatch({ type: "ADD", payload: { num: inputElement.current.value } });
    inputElement.current.value = "";
  };

  const handleSubtract = () => {
    dispatch({
      type: "SUBTRACT",
      payload: { num: inputElement.current.value },
    });
    inputElement.current.value = "";
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-info btn-lg px-4"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning btn-lg px-4"
          onClick={handlePrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-flex gap-2 justify-content-center mt-3">
        <input
          type="text"
          placeholder="Enter a number"
          className="my-input rounded"
          ref={inputElement}
        />
        <button className="btn btn-primary" onClick={handleAdd}>
          Add
        </button>
        <button className="btn btn-info" onClick={handleSubtract}>
          Subtract
        </button>
      </div>
    </>
  );
};

export default ControlButtons;
