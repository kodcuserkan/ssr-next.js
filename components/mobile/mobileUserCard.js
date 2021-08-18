import React from "react";

const MobileUserCard = ({ user }) => {
  return (
    <li className="user-card mobile">
      <ul className="inner">
        <li>
          <h2>{`${user.title}. ${user.firstName} ${user.lastName}`}</h2>
        </li>
        <li>
          <img src={user.picture} alt="profile image" loading="lazy" />
        </li>
      </ul>
    </li>
  );
};

export default MobileUserCard;
