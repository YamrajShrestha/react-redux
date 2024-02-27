import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Button from "./components/Button";

const App = () => {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <Header />
        <div className="col-lg-6 mx-auto">
          <DisplayCounter />
          <Button />
        </div>
      </div>
    </>
  );
};

export default App;
