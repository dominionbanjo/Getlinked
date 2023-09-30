import "./Faq.css";
import faq from "../../images/faq.png";
import bigQ from "../../images/bigQ.png";
import Q from "../../images/Q.png";
import star7 from "../../images/star pu.png";
import star8 from "../../images/sata gra.png";
import star9 from "../../images/star.png";
import { useState } from "react";
const Faq = () => {
  const [show, setShow] = useState({
    faq1: false,
    faq2: false,
    faq3: false,
    faq4: false,
    faq5: false,
    faq6: false,
  });
  return (
    <div className="faqContainer">
      <img className="star7" src={star7} alt="" />
      <img className="star8" src={star8} alt="" />
      <img className="star9" src={star9} alt="" />
      <div className="faq">
        <div className="faqImageContainer">
          <div className="questionImage">
            <div className="qImgConts">
              <img src={bigQ} alt="" />
              <img className="midQim" src={Q} alt="" />
              <img src={bigQ} alt="" />
            </div>
          </div>
          <img src={faq} alt="idea" />
        </div>
        <div className="faqTextsContainer">
          <h2>
            Frequently Ask <br /> <span>Question</span>
          </h2>
          <p className="qText">
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>
          <ul className="faqUl">
            <li>
              <p style={{ display: "flex", justifyContent: "space-between" }}>
                Can I work on a project I started before the hackathon?{" "}
                <span
                  className="plus"
                  onClick={() => setShow({ ...show, faq1: !show.faq1 })}
                >
                  {" "}
                  +
                </span>
              </p>
              {show.faq1 && (
                <p className="faq1">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Molestias, ex! Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Magnam asperiores nihil voluptas repudiandae
                  animi fugit.
                </p>
              )}
              <hr />
            </li>
            <li>
              <p style={{ display: "flex", justifyContent: "space-between" }}>
                What happens if I need help during the hackathon?
                <span
                  className="plus"
                  onClick={() => setShow({ ...show, faq2: !show.faq2 })}
                >
                  {" "}
                  +
                </span>
              </p>
              {show.faq2 && (
                <p className="faq1">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Molestias, ex! Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Dolores provident in labore voluptate, saepe
                  repellendus.
                </p>
              )}
              <hr />
            </li>
            <li>
              <p style={{ display: "flex", justifyContent: "space-between" }}>
                What happens if I don't have an idea for a project?
                <span
                  className="plus"
                  onClick={() => setShow({ ...show, faq3: !show.faq3 })}
                >
                  {" "}
                  +
                </span>
              </p>
              {show.faq3 && (
                <p className="faq1">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Molestias, ex! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Maiores minus minima, amet nemo laudantium
                  quod.
                </p>
              )}
              <hr />
            </li>
            <li>
              <p style={{ display: "flex", justifyContent: "space-between" }}>
                Can I join a team or do I have to come with one?
                <span
                  className="plus"
                  onClick={() => setShow({ ...show, faq4: !show.faq4 })}
                >
                  {" "}
                  +
                </span>
              </p>
              {show.faq4 && (
                <p className="faq1">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Molestias, ex! Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Libero corrupti dolorem culpa iure unde
                  perferendis.
                </p>
              )}
              <hr />
            </li>
            <li>
              <p style={{ display: "flex", justifyContent: "space-between" }}>
                What happens after the hackathon ends
                <span
                  className="plus"
                  onClick={() => setShow({ ...show, faq5: !show.faq5 })}
                >
                  {" "}
                  +
                </span>
              </p>
              {show.faq5 && (
                <p className="faq1">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Molestias, ex! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Iure, quos laborum nostrum dolore quaerat
                  obcaecati?
                </p>
              )}
              <hr />
            </li>
            <li>
              <p style={{ display: "flex", justifyContent: "space-between" }}>
                Can I work on a project I started before the hackathon?
                <span
                  className="plus"
                  onClick={() => setShow({ ...show, faq6: !show.faq6 })}
                >
                  {" "}
                  +
                </span>
              </p>
              {show.faq6 && (
                <p className="faq1">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Molestias, ex! Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Numquam tempora consectetur hic amet nemo
                  quia?
                </p>
              )}
              <hr />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Faq;
