import React from "react";

const Button = () => {
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
          +1
        </button>
        <button type="button" className="btn btn-info btn-lg px-4">
          -1
        </button>
      </div>
    </>
  );
};

export default Button;
