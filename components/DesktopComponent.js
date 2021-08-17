import React, { useContext } from "react";
import { MainContextProvider } from "../pages";
import DesktopCard from "./desktop/desktopCard";

const DesktopComponent = () => {
  const {deviceType} = useContext(MainContextProvider)
  return (
    <div>
      <center>
        <h1>Desktop Component</h1>
      </center>
      <div className="desktop-card-wrapper">
        <DesktopCard deviceType={deviceType}/>
      </div>
    </div>
  );
};

export default DesktopComponent;
