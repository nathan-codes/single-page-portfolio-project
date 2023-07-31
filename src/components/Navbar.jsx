import "./Navbar.css";

function Navbar() {
  return (
    <nav className="Navbar navbar navbar-expand-lg pt-3">
      <div className="container-fluid ">
        <a className="navbar-brand" href="#">
          nathanturkson
        </a>

        <ul className="navbar-nav d-flex flex-row">
          <li className="nav-item">
            <a className="nav-link" href="">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
