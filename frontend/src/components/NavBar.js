import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <div className="header-navbar">
        <Link to="/">
          <h1>DMDb</h1>
        </Link>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/addMovie">Add Movie</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
