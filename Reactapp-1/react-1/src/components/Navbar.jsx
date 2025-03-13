import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        width: "100%",
        height: "60px",
        display: "flex",
        backgroundColor: "blue",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
      }}
    >
      <h2 style={{ paddingLeft: "20px" }}>NAVBAR</h2>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "20px",
          padding: "0 50px",
          margin: 0,
        }}
      >
        <li style={{ cursor: "pointer" }}>Home</li>
        <li style={{ cursor: "pointer" }}>Services</li>
        <li style={{ cursor: "pointer" }}>Contact</li>
        <li style={{ cursor: "pointer" }}>Menu</li>
      </ul>
    </nav>
  );
};

export default Navbar;
