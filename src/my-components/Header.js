//Import all dependencies, other Components
import { Link, useLocation } from "react-router-dom";

//Function Component
function Header() {
    const location = useLocation();

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

    const buttonStyle = {
        textDecoration: "none"
    }

    let phoneFixServicesText;

    switch (location.pathname) {
        case "/advancedJS":
            phoneFixServicesText = "JavaScript Extension";
            break;
        case "/faq":
            phoneFixServicesText = "Phone Fix Booking FAQs";
            break;
        default:
            phoneFixServicesText = "Phone Fix Booking System"; // Default value
            break;
    }

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
                        {phoneFixServicesText}
                    </div>

                    <div class="col-12 col-md-12 col-lg-4">
                        <div class="row">
                            {/*Button 1*/}
                            <Link
                                to="/"
                                class={`col-12 col-md-6 col-lg-6 p-0 m-0 border border-dark text-center 
                            text-white ${
                                location.pathname === "/"
                                    ? "bg-success"
                                    : "bg-info"
                            }`}
                                style={buttonStyle}
                            >
                                HOME
                            </Link>
                            {/*Button 2*/}
                            <Link
                                to="/advancedJS"
                                class={`col-12 col-md-6 col-lg-6 p-0 m-0 border border-dark 
                            text-center text-white ${
                                location.pathname === "/advancedJS"
                                    ? "bg-success"
                                    : "bg-info"
                            }`}
                                style={buttonStyle}
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
