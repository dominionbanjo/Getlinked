import "./Intro.css";
import idea from "../../images/idea.png";
import star1 from "../../images/sata gra.png";
import star2 from "../../images/star pu.png";
const Intro = () => {
  return (
    <div className="introContainer">
      <img className="star1" src={star1} alt="" />
      <img className="star2" src={star2} alt="" />
      <div className="intro">
        <div className="introImageContainer">
          <p className="innerP">
            The Big <br /> Idea!
          </p>
          <img src={idea} alt="idea" />
        </div>
        <div className="introTextsContainer">
          <h2>
            Introduction to getlinked <br /> <span>tech Hackathon 1.0</span>
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
export default Intro;
