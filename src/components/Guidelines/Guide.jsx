import "./Guide.css";
import guide from "../../images/Guide.png";
import purple3 from "../../images/purple3.png";
import purple4 from "../../images/purple4.png";
import star3 from "../../images/greyStar.png";
import star4 from "../../images/star.png";

const Guide = () => {
  return (
    <div className="guideContainer">
      <img className="star3" src={star3} alt="" />
      <img className="star4" src={star4} alt="" />

      <img className="purple4" src={purple4} alt="" />

      <img className="purple3" src={purple3} alt="" />
      <div className="guide">
        <div className="guideImageContainer">
          <img src={guide} alt="idea" />
        </div>
        <div className="guideTextsContainer">
          <h2>
            Rules and <br /> <span>Guidelines</span>
          </h2>
          <p>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </div>
    </div>
  );
};
export default Guide;
