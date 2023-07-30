import "./Navbar.css"

function Navbar() {
  return (
    <nav className="Navbar navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          nathanturkson
        </a>

        <ul className="navbar-nav d-flex flex-row">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">
              Home <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link">Disabled</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar
