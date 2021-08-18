import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <ul className="navbar">
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/users?page=0&limit=5">
          <a>Users</a>
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
