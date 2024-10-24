import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-wrapper">
      <section className="logo-wrapper">
        <div className="logo">Freshers Party</div>
      </section>
      <section className="nav-menu-wrapper">
        {/* <div className="nav-menu">
          <ul>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Event</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
          </ul>
        </div> */}
        <div className="nav-btn">
          {/* <button>Verify</button> */}
          <button>Join the Party</button>
        </div>
      </section>
    </div>
  );
}

export default Header;
