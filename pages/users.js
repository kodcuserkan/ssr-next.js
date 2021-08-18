import axios from "axios";
import React, { useState } from "react";
import Router from "next/router";
import DesktopUserCard from "../components/desktop/desktopUserCard";
import MobileUserCard from "../components/mobile/mobileUserCard";
import Navbar from "../components/navbar";

const Users = ({ deviceType, users, totalRecords, page, limit }) => {
  const [loading, setLoading] = useState(false);
  const [_users, set_Users] = useState(users);
  const [_totalRecords, set_TotalRecords] = useState(totalRecords);
  const [_page, set_Page] = useState(page);
  const [_limit, set_Limit] = useState(limit);

  const search = async (pg, lm) => {
    setLoading(true);
    try {
      const apiKey = process.env.NEXT_PUBLIC_DUMMY_API_APP_ID;
      const response = await axios.get(
        `https://dummyapi.io/data/v1/user?page=${pg}&limit=${lm}`,
        {
          headers: {
            "app-id": apiKey,
          },
        }
      );

      if (200 === response?.status) {
        set_Users(response.data.data);
        set_TotalRecords(response.data.total);
      } else {
        set_Users([]);
        set_TotalRecords(0);
      }
    } catch (error) {
      alert(`ERROR WHILE FETCHING USERS, ${error}`);
      set_Users([]);
      set_TotalRecords(0);
    }

    setLoading(false);
  };

  const handlePrev = async () => {
    const target = Number(_page) - 1;
    await search(String(target), _limit);
    Router.push(`/users?page=${String(target)}&limit=${_limit}`, undefined, {
      shallow: true,
    });
    set_Page(String(target));
  };

  const handleNext = async () => {
    const target = Number(_page) + 1;
    await search(String(target), _limit);
    Router.push(`/users?page=${Number(_page) + 1}&limit=${_limit}`, undefined, {
      shallow: true,
    });
    set_Page(String(target));
  };

  return (
    <div className="users-outer">
      <Navbar />
      <center>
        <h1>Users Page</h1>
      </center>
      {loading ? (
        <h2>LOADING.....</h2>
      ) : _users.length == 0 ? (
        <h2>No user found</h2>
      ) : (
        <ul className={"user-cards-wrapper " + deviceType}>
          {_users.map((u) => {
            return deviceType === "mobile" ? (
              <MobileUserCard user={u} key={u.id} />
            ) : (
              <DesktopUserCard user={u} key={u.id} />
            );
          })}
        </ul>
      )}
      <center>
        <p>{`${Number(_page) + 1} of ${
          Math.floor(Number(_totalRecords) / Number(_limit)) + 1
        } pages`}</p>
      </center>
      <div className="pagination">
        <button className="prev" onClick={handlePrev} disabled={_page == 0}>
          Prev
        </button>
        <span>
          <h2>{Number(_page) + 1}</h2>
        </span>
        <button
          className="next"
          onClick={handleNext}
          disabled={
            Number(_page) >= Math.floor(Number(_totalRecords) / Number(_limit))
          }
        >
          Next
        </button>
      </div>
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
  limit = limit ? limit : "5";

  let users = [];
  let totalRecords = 0;

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
      users = response.data.data;
      totalRecords = response.data.total;
    }
  } catch (error) {
    console.log("Error serverside fetch, ", error);
  }

  return {
    props: {
      deviceType: isMobile ? "mobile" : "desktop",
      users,
      totalRecords,
      page,
      limit,
    },
  };
}
export default Users;
