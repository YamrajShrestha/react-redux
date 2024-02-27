import React from "react";
import { useDispatch } from "react-redux";

const Button = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
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
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-2">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a number"
            aria-label="Recipient's username with two button addons"
          />
          <button className="btn btn-outline-primary" type="button">
            Add
          </button>
          <button className="btn btn-outline-info" type="button">
            Subtract
          </button>
        </div>
      </div>
    </>
  );
};

export default Button;
