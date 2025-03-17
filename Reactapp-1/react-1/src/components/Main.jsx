import React from "react";
import "../App.css";
import img from "../assets/istockphoto-485371557-612x612.jpg";

const Main = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "82vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      className="main"
    >
      <h2
        style={{
          color: "White",
          fontSize: "50px",
          marginTop: "190px",
          fontStyle: "italic",
        }}
      >
        Welcome to First React App
      </h2>
      <h2
        style={{
          color: "White",
          fontSize: "50px",
          rotate: "180deg",
          opacity: "0.5",
          fontStyle: "italic",
        }}
      >
        Welcome to First React App
      </h2>
      <button
        style={{
          padding: "10px 15px",
          margin: "20px",
          border: "none",
          background: "red",
          color: "white",
          borderRadius: "5px",
        }}
      >
        Explore More
      </button>
      <button
        style={{
          padding: "10px 15px",
          border: "none",
          background: "red",
          color: "white",
          rotate: "180deg",
          borderRadius: "5px",
          opacity: "0.5",
        }}
      >
        Explore More
      </button>
      <img
        src={img}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: "-10",
        }}
      ></img>
    </div>
  );
};

export default Main;
