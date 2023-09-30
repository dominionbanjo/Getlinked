import "./Partners.css";
import partners from "../../images/partners.png";
import purple9 from "../../images/purple9.png";
import purple10 from "../../images/purple10.png";
const Partners = () => {
  return (
    <div className="partnerSecrionWrapper">
      <img className="purple9" src={purple9} alt="" />
      <img className="purple10" src={purple10} alt="" />
      <div className="partnersSection">
        <div className="partnersTexts">
          <h2>Partners and Sponsors</h2>
          <p>
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>
        <div className="partnersImageContainer">
          <img src={partners} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Partners;
