import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <div className="header-navbar">
        <div className="header-title">
          <Link to="/">
            <h1>DMDb</h1>
          </Link>
        </div>
        <div className="header-menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/addMovie">Add Movie</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
