import React from "react";
import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <nav>
        <Link href="/aboutus">
          <a>About Us</a>
        </Link>
      </nav>
    </>
  );
}
