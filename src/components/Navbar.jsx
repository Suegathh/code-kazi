
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="#">
          <img src="public/images/logo.3e67058750a305c31766.png" alt="logo" />
        </a>
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#bulk">Bulk Sms</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
