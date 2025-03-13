import React from "react";
import "../App.css";
import img from "../assets/download.jpeg";

const Main = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="main"
    >
      <h2 style={{ color: "Black", fontSize: "50px", position: "absolute" }}>
        Welcome to React App{" "}
      </h2>
      {/* <img src={img} style={{ width: "100%", height: "100%" }}></img> */}
    </div>
  );
};

export default Main;
