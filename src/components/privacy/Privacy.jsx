import "./Privacy.css";
import privacy from "../../images/privacy.png";
import purple11 from "../../images/purple11.png";
import security from "../../images/security.png";
const Privacy = () => {
  return (
    <div className="privacyContainer">
      <img className="purple11" src={purple11} alt="" />
      <div className="privacy">
        <div className="privacyImageContainer">
          <img className="security" src={security} alt="" />
          <img className="keyman" src={privacy} alt="idea" />
        </div>
        <div className="privacyTextsContainer">
          <div className="topPrivacyGroup">
            <h2>
              Privacy Policy and <br /> <span>Terms</span>
            </h2>
            <p className="midP">Last updated on September 12, 2023</p>
            <p className="lowP">
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
            </p>
          </div>

          <div className="bottomPrivacyGroup">
            <p className="privacyOne">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <h3 className="privacyH3">Licensing Policy</h3>
            <p className="licencing1">
              Here are terms of our Standard License:
            </p>
            <div className="licenceTextGroup">
              <svg
                className="svgg"
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
                <path d="M5 8L7 10.5L13.5 6" stroke="white" strokeWidth="2" />
              </svg>
              <p className="licenseText">
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </p>
            </div>
            <div className="licenceTextGroup">
              <svg
                className="svgg"
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
                <path d="M5 8L7 10.5L13.5 6" stroke="white" strokeWidth="2" />
              </svg>
              <p className="licenseText">
                You are licensed to use the item available at any free source
                sites, for your project developement
              </p>
            </div>
            <div className="privacyButtonContainer">
              <button className="privacyButton">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Privacy;
