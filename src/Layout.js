import { Link, Outlet } from "react-router-dom";
import "./Layout.css"; 

function Layout() {
  const backgroundStyle = {
    backgroundImage: "url('/images/club.png')", 
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    height: "100vh",
    filter: "blur(3px)" 
  };

  const textContainerStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "white",
    zIndex: 1,
  };

  const buttonStyle = {
    background: "transparent",
    border: "2px solid pink",
    color: "pink", 
    padding: "10px 20px",
    margin: "10px",
    textDecoration: "none", 
    transition: "background-color 0.3s ease", 
  };

  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="/images/ecom.jpg" alt="logo" style={{ width: "60px", borderRadius: "40px" }} />
            <span className="ms-2">Online Shopping</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/clothes">
                  Clothes
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="blur-bg" style={backgroundStyle}></div>
        <div className="text-container" style={textContainerStyle}>
          <div className="text-animation">
            <h1 className="animated-text">WELCOME TO ONLINE SHOPPING</h1>
            
            <div className="animated-links">
              <Link className="nav-link animated-link" to="/home">
              <button style={buttonStyle}>Home</button>
              </Link>
              <Link className="nav-link animated-link" to="/clothes">
              <button style={buttonStyle}>Clothes</button>
              </Link>
            </div>
          </div>
        </div>
     

      <div className="container mt-4">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
