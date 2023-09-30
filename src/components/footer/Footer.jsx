import "./Footer.css";
import instagram from "../../images/instagram.png";
import twitter from "../../images/twitter.png";
import linkedin from "../../images/linkedin.png";
import facebook from "../../images/favebook.png";
import location from "../../images/location.png";
import phone from "../../images/phone.png";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <footer>
        <section className="mainSection">
          <section className="left">
            <div className="leftMain">
              <h2>
                get<span>linked</span>
              </h2>
              <p>
                Getlinked Tech Hackathon is a technology innovation program
                established by a group of organizations with the aim of
                showcasing young and talented individuals in the field of
                technology
              </p>
            </div>
            <div className="tou">
              <a href="#">Terms of Use</a>
              <svg
                width="2"
                height="17"
                viewBox="0 0 2 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="1"
                  y1="4.37114e-08"
                  x2="0.999999"
                  y2="17"
                  stroke="#D434FE"
                  strokeWidth="2"
                />
              </svg>
              <a href="#">Privacy Policy</a>
            </div>
          </section>
          <section className="middle">
            <h3 className="rrr">Useful Links</h3>
            <ul>
              <li>
                <a href="#">Overview</a>
              </li>
              <li>
                <a href="#">Timeline</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Register</a>
              </li>
              <li className="socialContainer">
                <p>Follow Us</p>{" "}
                <span className="socials">
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
              </li>
            </ul>
          </section>
          <section className="right">
            <h3>Contact Us</h3>
            <div className="contacts">
              <div className="row">
                <img src={phone} alt="phone" />
                <p>+234 679 81819</p>
              </div>
              <div className="row">
                <img src={location} alt="location" />
                <p>
                  27,Alara Street <br /> Yaba 100012 <br /> Lagos State
                </p>
              </div>
            </div>
          </section>
        </section>
        <div className="bottomTexts">
          <p>All rights reserved. © getlinked Ltd.</p>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
