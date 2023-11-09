import React from "react";
import address_search from "../images/address_search.png";
import address_autofill from "../images/address_autofill.png";



// Function Component
function Demo3() {
    // Component UI: HTML Rendering

    const demoStyle = {
        backgroundColor: "gray",
        padding: "15px",
        border: "3px solid #586e8c",
        marginBottom: "10px",
    };

    const containerStyle = {
        display: "flex",
        justifyContent: "center", // Horizontally center the images
    };

    return (
        <div style={demoStyle}>
            <h1>
                DEMO 3: Improve UX: Use “address search & auto completion” API
                to auto complete the address fields.
            </h1>
            <p>Refer to Home Page</p>
            <p style={{ textAlign: "center", fontWeight: "bold" }}>
                Screenshots:
            </p>
            <div style={containerStyle}>
                <div className="row">
                    <div className="col-12 col-md-6 mb-3">
                        <img
                            className="img-fluid"
                            src={address_search}
                            alt="address search"
                        />
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                        <img
                            className="img-fluid"
                            src={address_autofill}
                            alt="address autofill"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

// Export this component to the entire app, can be re-used or hooked into other components
export default Demo3;
