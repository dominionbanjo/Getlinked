import "./Prizes.css";
import trophy from "../../images/trophy.png";
import rewardImg from "../../images/Rewards.png";
import purple7 from "../../images/purple7.png";
import purple8 from "../../images/purple8.png";
const Prizes = () => {
  return (
    <div className="prizeSectionContainer">
      <img className="purple7" src={purple7} alt="" />
      <img className="purple8" src={purple8} alt="" />
      <div className="prizesSection">
        <div className="prizesTexts">
          <h2>
            Prizes and <br /> <span>Rewards</span>{" "}
          </h2>
          <p>
            Highlight of the prizes or rewards for winners and for participants.
          </p>
        </div>
        <div className="prizesImages">
          <div className="trophyContainer">
            <img src={trophy} alt="" />
          </div>
          <div className="rewardImgContainer">
            <img src={rewardImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Prizes;
