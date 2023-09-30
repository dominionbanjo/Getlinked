import "./ContactUs.css";
import instagram from "../../images/instagram.png";
import twitter from "../../images/twitter.png";
import linkedin from "../../images/linkedin.png";
import facebook from "../../images/favebook.png";
import backarrow from "../../images/backarrow.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const url = "https://backend.getlinked.ai";

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [user, setUser] = useState({
    email: "",
    first_name: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (user.first_name === "" || user.email === "" || user.message === "") {
      alert("Input all fields");
      setIsLoading(false);
      return;
    }
    // console.log(user);
    try {
      const body = JSON.stringify(user);
      const headers = { "Content-Type": "application/json" };
      const response = await fetch(`${url}/hackathon/contact-form`, {
        method: "POST",
        body,
        headers,
      });
      const result = await response.json();
      // console.log(result);

      if (response.ok) {
        alert("Thank you for contacting us");
        setIsLoading(false);
        window.location.href = "/";
      }
    } catch (error) {
      setIsLoading(false);
      alert(error.message);
    }
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    document.title = "Contact Us";
  }, []);
  return (
    <div className="contactUsPageContainer">
      <div className="contactUsPage">
        <div className="contactUsLeftSection">
          <h2>Get in Touch</h2>
          <p className="contactUs1">
            Contact <br /> Information
          </p>
          <p className="contactUs1">
            27,Alara Street <br /> Yaba 100012 <br /> Lagos State
          </p>
          <p className="contactUs1">Call Us : 07067981819</p>
          <p className="contactUs1">
            we are open from Monday-Friday <br /> 08:00am - 05:00pm
          </p>

          <p
            style={{ color: "#d434fe", marginBottom: "0px" }}
            className="share"
          >
            Share on
          </p>
          <div className="socialContainer">
            {" "}
            <span className="socialsContact">
              <a href="https://www.instagram.com">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="https://www.twitter.com">
                <img src={twitter} alt="twitter" />
              </a>
              <a href="https://www.facebook.com">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="https://www.linkedin.com">
                <img src={linkedin} alt="linkedin" />
              </a>
            </span>
          </div>
        </div>
        <div className="contactUsRightSection">
          <form onSubmit={handleSubmit}>
            <Link to={"/"}>
              <div className="circleXcon">
                <div className="cancelWrapperBack">
                  <img className="circlex" src={backarrow} alt="" />
                </div>
              </div>
            </Link>
            <h3>
              Questions or need assistance? <br /> Let us know about it!
            </h3>
            <p className="hiddenContactP">
              Email us below to any question related to our event
            </p>
            <input
              type="text"
              name="first_name"
              value={user.first_name}
              onChange={handleChange}
              id="name"
              placeholder="First Name"
            />
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              id="email"
              placeholder="Mail"
            />
            <textarea
              name="message"
              value={user.message}
              onChange={handleChange}
              id=""
              cols="54"
              rows="7"
              placeholder="Message"
            ></textarea>
            <button type="submit">Submit</button>
            <div className="socialContainer2C">
              <p className="socialContainer2CP">Share On</p>{" "}
              <span className="socialsContact">
                <a href="https://www.instagram.com">
                  <img src={instagram} alt="instagram" />
                </a>
                <a href="https://www.twitter.com">
                  <img src={twitter} alt="twitter" />
                </a>
                <a href="https://www.facebook.com">
                  <img src={facebook} alt="facebook" />
                </a>
                <a href="https://www.linkedin.com">
                  <img src={linkedin} alt="linkedin" />
                </a>
              </span>
            </div>
            {isLoading && <div className="spinner"></div>}
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
