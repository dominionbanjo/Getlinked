import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">Timeline</a>
        </li>
        <li>
          <a href="#">Overview</a>
        </li>
        <li>
          <a href="#">FAQs</a>
        </li>
        <li>
          {/* <a href="#">Contact</a> */}
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
      {/* <button type="button">Register</button> */}
      <Link className="navRegisterButton " to={"/register"}>
        Register
      </Link>
    </nav>
  );
};
export default Navbar;
