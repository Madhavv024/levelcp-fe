import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "../styles/_header.scss"
import "../styles/_buttons.scss"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])


  return (
    <header className={`header_area ${isFixed ? "navbar_fixed" : ""}`}>
      <div className="main_menu">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">

            {/* Logo */}
            <Link className="navbar-brand logo_h" to="/home">
              <img src="/assets/logo.png" alt="Logo" />
            </Link>

            {/* TOGGLER — THIS IS OPTION 1 */}
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            {/* COLLAPSE — CONTROLLED BY REACT */}
            <div
              className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
            >
              <ul className="nav navbar-nav menu_nav justify-content-end">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Guide</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Login">Login</Link>
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
