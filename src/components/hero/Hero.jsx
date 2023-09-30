import { Link } from "react-router-dom";
import oldlight from "../../images/title.png";
import light from "../../images/light.png";
import chain from "../../images/chain.png";
import boy from "../../images/boy.png";
import net from "../../images/net.png";
import vector from "../../images/vector.png";
import purple1 from "../../images/purple1.png";
import purple2 from "../../images/purple2.png";
import whiteStar from "../../images/whiteStar.png";
import greyStar from "../../images/greyStar.png";

import "./Hero.css";
const Hero = () => {
  return (
    <div className="heroContainer">
      <div className="hero">
        <div className="topTexts">
          <h2 className="runIt">Igniting a Revolution in </h2>
          <div className="secondh2div">
            <h2> HR Innovation</h2>
            <img src={vector} alt="" />
          </div>
          {/* <img src={vector} alt="" /> */}
        </div>
        <section className="midSection">
          <img className="whiteStar1" src={whiteStar} alt="" />
          <img className="greyStar1" src={greyStar} alt="" />
          <img className="greyStar2" src={greyStar} alt="" />
          {/* <img className="purple1" src={purple1} alt="" /> */}
          {/* <img className="purple2" src={purple2} alt="" /> */}
          <div className="leftHero">
            <div className="leftHeroH1Container">
              <h1>
                getlinked Tech <br /> Hackathon
                <span>
                  1.0 <img className="chain" src={chain} alt="bulb" />
                </span>
              </h1>
              <img className="light" src={light} alt="bulb" />
            </div>

            <p>
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <Link className="navRegisterButton heroes" to={"/register"}>
              Register
            </Link>

            <h2>
              00<span>H</span> 00<span>M</span> 00<span>S</span>
            </h2>
          </div>
          <div className="rightHero">
            <div className="heroImageContainer">
              <img className="main" src={boy} alt="boy" />
              <img className="sec" src={net} alt="net" />
            </div>
            {/* <img className="pur" src={purple} alt="purple" /> */}
          </div>
        </section>
      </div>
    </div>
  );
};
export default Hero;
