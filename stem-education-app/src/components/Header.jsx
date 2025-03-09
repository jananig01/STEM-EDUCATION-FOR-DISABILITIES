import React from "react";

function Header() {
  return (
    <header>
      <h1>Accessible Education App</h1>
      <nav>
        <a href="#content" aria-label="Skip to content">Skip to Content</a>
      </nav>
    </header>
  );
}

export default Header;