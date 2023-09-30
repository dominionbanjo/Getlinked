import "./Criteria.css";
import judge from "../../images/judge.png";
import purple5 from "../../images/purple5.png";
import purple6 from "../../images/purple6.png";
import star5 from "../../images/star pu.png";
import star6 from "../../images/star.png";
const Criteria = () => {
  return (
    <div className="criteriaContainer">
      <img className="star5" src={star5} alt="" />
      <img className="star6" src={star6} alt="" />

      <img className="purple5" src={purple5} alt="" />
      <img className="purple6" src={purple6} alt="" />
      <div className="criteria">
        <div className="criteriaImageContainer">
          <img src={judge} alt="idea" />
        </div>
        <div className="criteriaTextsContainer">
          <h2>
            Judging Criteria <br /> <span>Key attributes</span>
          </h2>
          <ul className="criteriaUl">
            <li>
              <span className="judgeSpan">Innovation and Creativity:</span>{" "}
              Evaluate the uniqueness and creativity of the solution. Consider
              whether it addresses a real-world problem in a novel way or
              introduces innovative features.
            </li>
            <li>
              <span className="judgeSpan">Functionality:</span> Assess how well
              the solution works. Does it perform its intended functions
              effectively and without major issues? Judges would consider the
              completeness and robustness of the solution.
            </li>
            <li>
              <span className="judgeSpan">Impact and Relevance:</span> Determine
              the potential impact of the solution in the real world. Does it
              address a significant problem, and is it relevant to the target
              audience? Judges would assess the potential social, economic, or
              environmental benefits.
            </li>
            <li>
              <span className="judgeSpan">Technical Complexity:</span> Evaluate
              the technical sophistication of the solution. Judges would
              consider the complexity of the code, the use of advanced
              technologies or algorithms, and the scalability of the solution.
            </li>
            <li>
              <span className="judgeSpan">Adherence to Hackathon Rules: </span>
              Judges will Ensure that the team adhered to the rules and
              guidelines of the hackathon, including deadlines, use of specific
              technologies or APIs, and any other competition-specific
              requirements.
            </li>
          </ul>
          <button className="judgeButton">Read More</button>
        </div>
      </div>
    </div>
  );
};
export default Criteria;
