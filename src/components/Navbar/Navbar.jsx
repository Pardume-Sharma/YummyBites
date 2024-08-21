import { useState, useEffect, useContext } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets.js";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext.jsx";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");

  const { getTotalAmount ,token,setToken} = useContext(StoreContext);
  const navigate = useNavigate();
  
  const logout = ()=>{
    setToken(null);
    localStorage.removeItem("token");
    setShowLogin(true);
    navigate("/");
  }
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("mode") === "dark"
  );

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    const mode = darkMode ? "dark" : "light";
    body.classList.toggle("dark-mode", darkMode);
    
    localStorage.setItem("mode", mode);
  }, [darkMode]);

  const openMenu = () => {
    document.querySelector(".menu-drop").style.transform = "translateY(0)";
    document.querySelector(".menu-drop").style.display = "flex";
    document.querySelector(".header-content").style.display = "none";
  };

  const closeMenu = () => {
    document.querySelector(".menu-drop").style.transform = "translateY(-100%)";
    document.querySelector(".menu-drop").style.display = "none";
    document.querySelector(".header-content").style.display = "flex";
  };

  return (
    <>
      <div className="header">
        <div className="menu-drop">
          <div className="nav-close">
            <Link to="/">
              <div className="header-logo">
                <img src={assets.bakery_icon} alt="CakeBake" className="header-img" />
                <a to="#">
                  <h1 className="title">YummyBites</h1>
                </a>
              </div>
            </Link>
            <i className="fas fa-close nav-cross" onClick={closeMenu}></i>
          </div>
          <nav className="menu-links">
            <Link onClick={() => { setMenu("Home"); closeMenu(); }} to="/" className={menu === "Home" ? "active" : "nav-link"}>Home</Link>
            <Link onClick={() => { setMenu("Services"); closeMenu(); }} to="#services" className={menu === "Services" ? "active" : "nav-link"}>Services</Link>
            <Link onClick={() => { setMenu("X-factor"); closeMenu(); }} to="#x-factor" className={menu === "X-factor" ? "active" : "nav-link"}>X-Factor</Link>
            <Link onClick={() => { setMenu("Feedback"); closeMenu(); }} to="#feedback" className={menu === "Feedback" ? "active" : "nav-link"}>Feedback</Link>
            <Link onClick={() => { setMenu("About"); closeMenu(); }} to="#about" className={menu === "About" ? "active" : "nav-link"}>About</Link>
            <div className="mode" onClick={toggleDarkMode}>
              <div className={`ball ${darkMode ? "right-ball" : ""}`}></div>
            </div>
            {!token ?
            <a>
            <button className="btn-class" onClick={() => { setShowLogin(true); closeMenu(); }}>Sign In</button>
            </a>:
            <div className="navbar-profile">
              <img src={assets.profile_icon}/>
              <ul className="nav-profile-dropdown">
                <li>
                  <img onClick={()=>{navigate('/myorders')}} src={assets.bag_icon}/>
                  <p>Orders</p>
                </li>
                <hr/>
                <li>
                  <img src={assets.logout_icon}/>
                  <p onClick={logout}>Logout</p>
                </li>
                <hr/>
                
              </ul>
            </div>
          }
          </nav>
        </div>

        <div className="header-content">
          <Link to="/">
            <div className="header-logo">
              <img src={assets.bakery_icon} alt="CakeBake" className="header-img" />
              <a to="#">
                <h1 className="title">YummyBites</h1>
              </a>
            </div>
          </Link>
          <nav className="navbar">
            <Link onClick={() => setMenu("Home")} to="/" className={menu === "Home" ? "active" : "nav-link"}>Home</Link>
            <Link onClick={() => setMenu("Services")} to="/#services" className={menu === "Services" ? "active" : "nav-link"}>Services</Link>
            <Link onClick={() => setMenu("X-factor")} to="/#x-factor" className={menu === "X-factor" ? "active" : "nav-link"}>X-Factor</Link>
            <Link onClick={() => setMenu("Feedback")} to="/#feedback" className={menu === "Feedback" ? "active" : "nav-link"}>Feedback</Link>
            <Link onClick={() => setMenu("About")} to="/#about" className={menu === "About" ? "active" : "nav-link"}>About</Link>
            <div className="mode" onClick={toggleDarkMode}>
              <div className={`ball ${darkMode ? "right-ball" : ""}`}></div>
            </div>
            <a className="nav-link">
              <button className="btn-class" onClick={() => {
                setShowLogin(true);
              }}>Sign In</button>
            </a>
            <label className="nav">
              <Link className="cart-icon" to="/Cart">
                <i className="fas fa-cart-shopping" id="cart-show"></i>
                <div className={getTotalAmount() === 0 ? "" : "num"}></div>
              </Link>
              <Link to="/PlaceOrder" alt="My orders">
                <i className="fa-solid fa-box myorders"></i>
              </Link>
            </label>
          </nav>
          <div className="menu-btn">
            <Link to="/PlaceOrder" alt="My orders">
              <i className="fa-solid fa-box myorders"></i>
            </Link>
            <Link className="cart-icon" to="/Cart">
              <i className="fas fa-cart-shopping" id="cart-show"></i>
              <div className={getTotalAmount() === 0 ? "" : "num"}></div>
            </Link>
            <i className="fas fa-bars" id="nav-show" onClick={openMenu}></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
