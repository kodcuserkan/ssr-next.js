import Head from "next/head";
import Image from "next/image";
import { useState, createContext, useEffect } from "react";
import DesktopComponent from "../components/DesktopComponent";
import MobileComponent from "../components/MobileComponent";
import axios from "axios";

export const MainContextProvider = createContext(null);

const HomePage = ({ deviceType }) => {
 
  
  let componentToRender;

  const [deviceTypeContext] = useState({
    deviceType: deviceType,
  });

  if (deviceType === "mobile") {
    componentToRender = <MobileComponent />;
  } else {
    componentToRender = <DesktopComponent />;
  }

  return (
    <MainContextProvider.Provider value={deviceTypeContext}>
      {componentToRender}
    </MainContextProvider.Provider>
  );
};

export async function getServerSideProps(context) {
  const UA = context.req.headers["user-agent"];
  const isMobile = Boolean(
    UA.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );

  return {
    props: {
      deviceType: isMobile ? "mobile" : "desktop"
    },
  };
}

export default HomePage;
