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
        <Link href="/users">
          <a>Users</a>
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
