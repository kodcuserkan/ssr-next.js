import axios from "axios";
import React, { useEffect, useState } from "react";
import DesktopUserCard from "../components/desktop/desktopUserCard";
import MobileUserCard from "../components/mobile/mobileUserCard";
import Navbar from "../components/navbar";

const Users = ({ deviceType, page, limit }) => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [_page, set_Page] = useState(page);
  const [_limit, set_Limit] = useState(limit);

  useEffect(() => {
    search();
  }, [_page, _limit]);

  console.log("itemsitemsitems", users);

  const search = async () => {
    setLoading(true);

    try {
      const apiKey = process.env.NEXT_PUBLIC_DUMMY_API_APP_ID;
      const response = await axios.get(
        `https://dummyapi.io/data/v1/user?page=${_page}&limit=${_limit}`,
        {
          headers: {
            "app-id": apiKey,
          },
        }
      );

      if (200 === response?.status) {
        setUsers(response.data.data);
        setTotalRecords(response.data.total);
      } else {
        setUsers([]);
        setTotalRecords(0);
      }
    } catch (error) {
      console.log("ERROR WHILE FETCHING USERS", error);
      setUsers([]);
      setTotalRecords(0);
    }

    setLoading(false);
  };

  return (
    <div>
      <Navbar />
      <center>
        <h1>Users Page</h1>
        <p>Total Records: {totalRecords}</p>
      </center>
      {loading ? (
        <h2>LOADING.....</h2>
      ) : users.length == 0 ? (
        <h2>No user found</h2>
      ) : (
        <ul className={"user-cards-wrapper " + deviceType}>
          {users.map((user) => {
            return deviceType === "mobile" ? (
              <MobileUserCard user={user} key={user.id} />
            ) : (
              <DesktopUserCard user={user} key={user.id} />
            );
          })}
        </ul>
      )}
    </div>
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
export default Users;
