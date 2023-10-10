//Import all dependencies, other Components
import { Link } from "react-router-dom";

//Function Component
function Header() {
  const headerStyle = {
    minHeight: "20vh",
    backgroundColor: "#2C3E50",
  };
  const taglineStyle = {
    minHeight: "20vh",
    backgroundColor: "#2C3E50",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  //Component UI: HTML Rendering
  return (
    <>
      <div class="container-fluid">
        <header class="row" style={headerStyle}>
          <div
            class="col-12 col-md-12 col-lg-8  
                    text-center text-white display-5"
            style={taglineStyle}
          >
            {" "}
            Phone Fix Booking System
          </div>

          <div class="col-12 col-md-12 col-lg-4">
            <div class="row">
              {/*Button 1*/}
              <Link
                to="/"
                class="col-12 col-md-6 col-lg-6 p-0 m-0 bg-info border border-dark text-center 
                            text-white"
                style={{ textDecoration: "none" }}
              >
                HOME
              </Link>
              {/*Button 2*/}
              <Link
                to="/advancedJS"
                class="col-12 col-md-6 col-lg-6 p-0 m-0 bg-info border border-dark 
                            text-center text-white"
                style={{ textDecoration: "none" }}
              >
                EXTENSION
              </Link>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default Header;
