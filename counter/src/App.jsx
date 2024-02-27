import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import ControlButtons from "./components/ControlButtons";
import { useSelector } from "react-redux";
import PrivacyMsg from "./components/PrivacyMsg";

const App = () => {
  const privacy = useSelector((store) => store.privacy);
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <Header />
        <div className="col-lg-6 mx-auto">
          {privacy ? <PrivacyMsg /> : <DisplayCounter />}
          <ControlButtons />
        </div>
      </div>
    </>
  );
};

export default App;
