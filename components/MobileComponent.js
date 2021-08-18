import React, { useContext } from "react";
import { MainContextProvider } from "../pages";
import MobileCard from "./mobile/mobileCard";
import Navbar from "./navbar";

const MobileComponent = () => {
  const { deviceType } = useContext(MainContextProvider);

  return (
    <div>
      <Navbar />
      <center>
        <h1>Mobile Component</h1>
      </center>
      <MobileCard deviceType={deviceType} />
    </div>
  );
};

export default MobileComponent;
