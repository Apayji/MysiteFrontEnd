export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <a href="/" id="navbar__logo" style={{ marginLeft: -100 }}>
          <img
            src="Save the earth.png"
            alt="Logo"
            width="80"
            height="60"
            style={{ verticalAlign: "bottom" }}
          />
          EcoKaz
        </a>
        <div className="navbar__toggle" id="mobile-menu">
          <span className="bar"></span> <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="navbar__menu">
          <li className="navbar__item">
            <a href="/" className="navbar__links">
              Home
            </a>
          </li>
          <li className="navbar__item">
            <a href="/comments" className="navbar__links">
              Comments
            </a>
          </li>
          <li className="navbar__btn">
            <a href="/" className="button">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
