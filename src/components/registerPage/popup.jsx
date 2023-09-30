import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Popup.css"; // Create a CSS file for styling
import congrat from "../../images/congratulation.png";

const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        {/* <button className="close-button" onClick={onClose}>
          Close
        </button> */}
        <div className="popupWrapper">
          <div className="popupImageContainer">
            <img src={congrat} alt="" />
          </div>
          <div className="popupRests">
            <h2>Congratulations </h2>
            <h2>you have successfully Registered</h2>
            <p>
              Yes, it was easy and you did it! <br /> check your mail box for
              next step &#x1F609;
            </p>
            <div className="popupButtonContainer">
              <Link className="popupButton" to={"/"}>
                Back
              </Link>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Popup;
