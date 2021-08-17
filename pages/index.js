import Head from "next/head";
import Image from "next/image";
import { useState, createContext, useEffect } from "react";
import DesktopComponent from "../components/DesktopComponent";
import MobileComponent from "../components/MobileComponent";
import axios from "axios";

export const MainContextProvider = createContext(null);

const HomePage = ({ deviceType, page, limit }) => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);

  useEffect(() => {
    search();
  }, []);

  console.log("itemsitemsitems", items);

  const search = async () => {
    setLoading(true);

    try {
      const apiKey = process.env.NEXT_PUBLIC_DUMMY_API_APP_ID;
      const response = await axios.get(
        `https://dummyapi.io/data/v1/user?page=${page}&limit=${limit}`,
        {
          headers: {
            "app-id": apiKey,
          },
        }
      );

      if (200 === response?.status) {
        setItems(response.data.data);
        setTotalRecords(response.data.total);
      } else {
        setItems([]);
        setTotalRecords(0);
      }
    } catch (error) {
      console.log("ERROR WHILE FETCHING USERS", error);
      setItems([]);
      setTotalRecords(0);
    }

    setLoading(false);
  };

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

  let { page, limit } = context.query;
  page = page ? page : "0";
  limit = limit ? limit : "10";

  return {
    props: {
      deviceType: isMobile ? "mobile" : "desktop",
      page,
      limit,
    },
  };
}

export default HomePage;
