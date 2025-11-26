import { Link } from "react-router-dom";
import "../assets/styles/Navbar.css";

function Navbar() {
    return (
      <nav>
        <h2>Travis J. Kessler</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/research">Research</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="https://github.com/tjkessler" target="_blank" rel="noopener noreferrer">
            <img src="/images/github.png" width="28px"/>
          </Link></li>
          <li><Link to="https://linkedin.com/in/traviskessler" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin.png" width="26px"/>
          </Link></li>
        </ul>
      </nav>
    )
}

export default Navbar
