function Navbar() {
  return (
    <>
      {/* Hover Effect Styling */}
      <style>
        {`
          .nav-hover {
            transition: all 0.3s ease;
            border-radius: 8px;
            padding: 6px 12px;
          }

          .nav-hover:hover {
            background-color: #117dd4;
            color: white !important;
            transform: translateY(-2px);
          }

          .nav-hover i {
            transition: transform 0.3s ease;
          }

          .nav-hover:hover i {
            transform: scale(1.2);
          }
        `}
      </style>

      <nav
        className="navbar navbar-expand-lg sticky-top shadow-sm"
        style={{ backgroundColor: "#063da3" }}
      >
        <div className="container-fluid">

          {/* Left Side: Brand */}
          <a
            className="navbar-brand text-light"
            href="#"
            style={{
              fontWeight: "bold",
              fontSize: "1.3rem",
              fontFamily: "Arial, sans-serif",
            }}
          >
            React{" "}
            <span
              style={{
                color: "black",
                padding: "5px",
                backgroundColor: "yellow",
                borderRadius: "10px",
              }}
            >
              Project
            </span>
          </a>

          {/* Toggle Button */}
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Content */}
          <div className="collapse navbar-collapse" id="navbarContent">

            {/* Nav Links */}
            <ul
              className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex gap-3"
              style={{
                fontSize: "1.1rem",
                fontFamily: "Verdana, sans-serif",
              }}
            >
              <li className="nav-item">
                <a
                  className="nav-link active text-light d-flex align-items-center gap-1 nav-hover"
                  href="#home"
                >
                  <i className="bi bi-house-door"></i> Home
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link text-light d-flex align-items-center gap-1 nav-hover"
                  href="#about"
                >
                  <i className="bi bi-info-circle"></i> About
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link text-light d-flex align-items-center gap-1 nav-hover"
                  href="./Signin.jsx"
                >
                  <i className="bi bi-person-plus"></i> Sign Up
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link text-light d-flex align-items-center gap-1 nav-hover"
                  href="./Login.jsx"
                >
                  <i className="bi bi-box-arrow-in-right"></i> Login
                </a>
              </li>
            </ul>

            {/* Search Form */}
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
              />

              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>

          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;