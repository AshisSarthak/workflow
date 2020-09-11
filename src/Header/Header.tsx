import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <section className="header-label">FlowAPP</section>
      <button className="logout-button">Logout</button>
    </header>
  );
}

export default Header;
