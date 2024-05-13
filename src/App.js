import React, { useState } from "react";
import Reasons from "./reasons";
import mia_bday from "./images/mia_bday_edit.png";
import mia_bday2 from "./images/mia_val_edit_blown.png";
import Imagespage from "./imagespage";
import BirthdayPage1 from "./bdaycard_1";

const Button = ({ children, onClick }) => {
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
      style={{ ...buttonStyle, ...(onClick ? hoverStyle : null) }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = hoverStyle.backgroundColor;
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = buttonStyle.backgroundColor;
      }}
      onClick={onClick}
    >
      {" "}
      {children}{" "}
    </button>
  );
};

function App() {
  const [image, setImage] = useState(mia_bday);
  const [currentPage, setCurrentPage] = useState("home");

  const changeImage = () => {
    setImage(mia_bday2);
  };

  const handleClick = () => {
    console.log("Button clicked");
  };

  const appContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };

  const headerStyle = {
    fontSize: "3rem",
    marginBottom: "2rem",
  };

  const buttonsContainerStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <div style={appContainerStyle}>
            <Button onClick={changeImage}>Blow the candles!</Button>
            <img src={image} alt="Image of candles" height="400" />
            <h1 style={headerStyle}>Happy Birthday Mia!!</h1>
            <div style={buttonsContainerStyle}>
              <Button onClick={() => setCurrentPage("reasons")}>
                Reasons I love you
              </Button>
              <Button onClick={() => setCurrentPage("imagespage")}>
                Picture of us
              </Button>
              <Button onClick={() => setCurrentPage("bday_1")}>
                Birthday Card
              </Button>
            </div>
            <p
              className="footer1"
              style={{ textAlign: "center", fontFamily: "sans-serif" }}
            >
              Check back in on May 30 for an update (6 months)
            </p>
            <div className="spacing"></div>
          </div>
        );
      case "reasons":
        return <Reasons onGoBackHome={() => setCurrentPage("home")} />;
      case "imagespage":
        return <Imagespage onGoBackHome={() => setCurrentPage("home")} />;
      case "bday_1":
        return <BirthdayPage1 onGoBackHome={() => setCurrentPage("home")} />;
      default:
        return null;
    }
  };

  return <div>{renderPage()}</div>;
}

export default App;
