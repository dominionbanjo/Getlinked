import "./Registration.css";
import { useEffect, useState } from "react";
import registerimg from "../../images/registerimg.png";
import movementImg from "../../images/movementImg.png";
import Popup from "./popup";
import extractErrorMessages from "./extractMsg";

const groupSize = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const url = "https://backend.getlinked.ai";
let msg = "";
const Registration = () => {
  const [err, setErr] = useState({
    state: false,
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [signupSuccess, setSignupsuccess] = useState(false);

  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    if (signupSuccess) {
      setPopupOpen(true);
    }
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  useEffect(() => {
    document.title = "Register";
  }, []);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/hackathon/categories-list`);
        const result = await response.json();
        setCategories(result);
      } catch (error) {
        alert("Failed to fetch Categories");
      }
    };
    fetchData();
  }, []);

  const [user, setUser] = useState({
    team_name: "",
    phone_number: "",
    email: "",
    project_topic: "",
    category: "",
    privacy_poclicy_accepted: false,
    group_size: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // console.log(user);
    // window.location.href='./'
    if (
      user.team_name === "" ||
      user.phone_number === "" ||
      user.email === "" ||
      user.project_topic === "" ||
      user.category === "" ||
      user.group_size === ""
    ) {
      alert("Please input all fields !!");
      setIsLoading(false);
      return;
    }
    try {
      const body = JSON.stringify(user);
      const headers = { "Content-Type": "application/json" };
      const response = await fetch(`${url}/hackathon/registration`, {
        method: "POST",
        body,
        headers,
      });
      const result = await response.json();
      //   console.log(result);
      //   console.log(messages);
      if (!response.ok) {
        const messages = extractErrorMessages(result);
        Object.keys(messages).forEach((key) => {
          let errorMessage = messages[key];
          msg = ` ${errorMessage}`;
          // console.log(msg);
          setErr({ state: true, message: msg });
          // console.log(` ${key}: ${errorMessage}`);
        });
      }

      //   console.log(err.message);
      if (response.ok) {
        setSignupsuccess(true);
        setPopupOpen(true);
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      if (error.message === "Failed to fetch") {
        alert("Please check your network");
      }
      //   alert(error.message);
    }
  };
  //   console.log(err.state);
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleGroup = (e) => {
    const group = parseInt(e.target.value);
    setUser({ ...user, [e.target.name]: group });
  };

  const handleCategory = (e) => {
    const category = categories.find((category) => {
      return category.name === e.target.value;
    });
    // console.log(category);
    setUser({ ...user, [e.target.name]: category.id });
  };

  const [regScreenSize, setRegScreenSize] = useState(false);

  return (
    <div className="registrationPageContainer">
      <Popup isOpen={isPopupOpen} onClose={closePopup} />
      <div className="registrationPage">
        <div className="registrationpageLeft">
          <div className="registrationImgContainer">
            <img src={registerimg} alt="" />
          </div>
        </div>

        <div className="registrationpageRight">
          <form className="form2" onSubmit={handleSubmit}>
            <div className="form2Texts">
              <h2>Register</h2>

              <div className="registrationpageLeft2">
                <div className="registrationImgContainer2">
                  <img src={registerimg} alt="" />
                </div>
              </div>

              <div className="movement">
                <p>Be part of this movement</p>
                <img src={movementImg} alt="" />
              </div>
              <h3>CREATE YOUR ACCOUNT</h3>
            </div>
            <div className="mainFormSec">
              <div className="formRow1">
                <div className="inputContainer">
                  <label htmlFor="name">Team's Name</label>
                  <input
                    type="text"
                    name="team_name"
                    value={user.team_name}
                    onChange={handleChange}
                    id="name"
                    placeholder="Enter the name of your group"
                  />
                </div>
                <div className="inputContainer">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    name="phone_number"
                    value={user.phone_number}
                    onChange={handleChange}
                    id="phone"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              <div className="formRow2">
                <div className="inputContainer">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    id="email"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="inputContainer">
                  <label htmlFor="topic">Project Topic</label>
                  <input
                    type="text"
                    name="project_topic"
                    value={user.project_topic}
                    onChange={handleChange}
                    id="topic"
                    placeholder="What is your group project topic"
                  />
                </div>
              </div>
              <div className="formRow3">
                <div className="inputContainer one">
                  <label htmlFor="category">Category</label>
                  <select
                    name="category"
                    value={user.category}
                    onChange={handleCategory}
                    id="category"
                    className="customS"
                  >
                    <option value="" disabled selected>
                      Select your category
                    </option>
                    {categories.map((category) => {
                      return <option key={category.id}>{category.name}</option>;
                    })}
                  </select>
                </div>
                <div className="inputContainer size">
                  <label htmlFor="size">Group Size</label>
                  <select
                    name="group_size"
                    value={user.group_size}
                    onChange={handleGroup}
                    id="size"
                  >
                    <option value="" disabled selected>
                      Select
                    </option>
                    {groupSize.map((num) => {
                      return <option key={num}>{num}</option>;
                    })}
                  </select>
                </div>
              </div>

              <div className="registerFormEnd">
                <p className="review">
                  Please review your registration details before submitting
                </p>
                <div className="checkboxContainer">
                  <input
                    type="checkbox"
                    name="privacy_poclicy_accepted"
                    checked={user.privacy_poclicy_accepted}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        privacy_poclicy_accepted: e.target.checked,
                      })
                    }
                    id="agreement"
                  />
                  <p>
                    I agreed with the event terms and conditions and privacy
                    policy
                  </p>
                </div>
              </div>
              {err.state && (
                <p className="error">
                  {err.message} {"!!!"}
                </p>
              )}

              <button
                onClick={openPopup}
                type="submit"
                className="registerSubmit"
              >
                Register Now
              </button>
            </div>
            {isLoading && <div className="spinner"></div>}
          </form>
        </div>
      </div>
    </div>
  );
};
export default Registration;
