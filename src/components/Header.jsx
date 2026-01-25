import { useState } from "react"
import { Link } from "react-router-dom"
import "../styles/_header.scss"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)
  const [blogOpen, setBlogOpen] = useState(false)

  return (
    <header className="header_area">
      <div className="main_menu">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            {/* Logo */}
            <Link className="navbar-brand logo_h" to="/home">
              <img src="/assets/logo.png" alt="Logo" />
            </Link>

            {/* Mobile toggle */}
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            {/* Menu */}
            <div
              className={`collapse navbar-collapse offset ${
                menuOpen ? "show" : ""
              }`}
            >
              <ul className="nav navbar-nav menu_nav justify-content-end">
                <li className="nav-item">
                  <Link className="nav-link" to="/home">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/contest">
                    Contest
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/Login">
                    Login
                  </Link>
                </li>
                

                {/* Pages dropdown */}
                <li
                  className={`nav-item submenu dropdown ${
                    pagesOpen ? "show" : ""
                  }`}
                >
                  <button
                    className="nav-link dropdown-toggle btn btn-link"
                    onClick={() => setPagesOpen(!pagesOpen)}
                  >
                    Pages
                  </button>

                  <ul className={`dropdown-menu ${pagesOpen ? "show" : ""}`}>
                    <li className="nav-item">
                      <Link className="nav-link" to="/elements">
                        Elements
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/portfolio-details"
                      >
                        Portfolio Details
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Blog dropdown */}
                <li
                  className={`nav-item submenu dropdown ${
                    blogOpen ? "show" : ""
                  }`}
                >
                  <button
                    className="nav-link dropdown-toggle btn btn-link"
                    onClick={() => setBlogOpen(!blogOpen)}
                  >
                    Blog
                  </button>

                  <ul className={`dropdown-menu ${blogOpen ? "show" : ""}`}>
                    <li className="nav-item">
                      <Link className="nav-link" to="/blog">
                        Blog
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/blog-details"
                      >
                        Blog Details
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
