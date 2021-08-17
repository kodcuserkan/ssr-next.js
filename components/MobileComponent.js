import React, { useContext } from "react";
import { MainContextProvider } from "../pages";
import MobileCard from "./mobile/mobileCard";

const MobileComponent = () => {
  const { deviceType } = useContext(MainContextProvider);

  return (
    <div>
      <center>
        <h1>Mobile Component</h1>
      </center>
      <MobileCard deviceType={deviceType} />
    </div>
  );
};

export default MobileComponent;
