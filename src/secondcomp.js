import React from "react";
import "./second_styles.css";

const Button = ({ children, onGoBackHome }) => {
  const buttonStyle = {
    backgroundColor: "#3f51b5",
    color: "#fff",
    padding: "8px 16px",
    borderRadius: "4px",
    border: "none",
    fontSize: "14px",
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: "0.8px",
    cursor: "pointer",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.25)",
    width: "150px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "background-color 0.3s ease",
    margin: "0 8px",
    marginBottom: "20px",
  };
  const hoverStyle = { backgroundColor: "#283593" };

  return (
    <button
      style={{ ...buttonStyle, ...(onGoBackHome ? hoverStyle : null) }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = hoverStyle.backgroundColor;
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = buttonStyle.backgroundColor;
      }}
      onClick={onGoBackHome} // Call the onGoBackHome function here
    >
      {children}
    </button>
  );
};

const SecondComponent = ({ onGoBackHome }) => (
  <div className="s2body">
    <div className="birthdayCard">
      <div className="cardFront">
        <h3 className="happy">HAPPY BIRTHDAY MIA!</h3>
        <div className="balloons">
          <div className="balloonOne" />
          <div className="balloonTwo" />
          <div className="balloonThree" />
          <div className="balloonFour" />
        </div>
      </div>
      <div className="cardInside">
        <h3 className="back">HAPPY BIRTHDAY MIA!</h3>
        <p>Dear Mia,</p>
        <p style={{ fontFamily: "serif" }}>
          {" "}
          Happy 20th birthday!! I hope your day is filled with lots of joy and
          laughter! Have the best day ever!{" "}
        </p>
        <p className="name">Robby</p>
      </div>
    </div>
  </div>
);

export default SecondComponent;
