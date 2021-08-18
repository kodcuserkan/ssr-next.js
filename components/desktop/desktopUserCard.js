import React from "react";

const DesktopUserCard = ({user}) => {
  return (
    <li className="user-card desktop" title={`${user.title}. ${user.firstName} ${user.lastName}`}>
      <ul className="inner">
        <li>
          <img src={user.picture} alt="profile image" loading="lazy" />
        </li>
        <li>
          <h2>{`${user.title}. ${user.firstName} ${user.lastName}`}</h2>
        </li>
      </ul>
    </li>
  );
};

export default DesktopUserCard;
