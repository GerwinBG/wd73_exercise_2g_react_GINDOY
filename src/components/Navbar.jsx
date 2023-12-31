function Navbar () {
  return(
    <nav className="navbar navbar-expand-lg bg-light d-flex">
    <div className="container-fluid">
      <a className="navbar-brand ms-5" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>

    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item mx-5">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item mx-5">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item mx-5">
            <a className="nav-link" href="#">Pricing</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar