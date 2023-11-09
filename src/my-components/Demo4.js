import React from "react";
import drag_drop from "../images/drag_drop.png";
import drag_dropped from "../images/drag_dropped.png";


// Function Component
function Demo4() {
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
                DEMO 4: Improve UX: Use drag-and-drop API for the “courtesy
                phone” selection.
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
                            src={drag_drop}
                            alt="courtesy phone drag and drop"
                        />
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                        <img
                            className="img-fluid"
                            src={drag_dropped}
                            alt="courtesy phone drag and dropped"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

// Export this component to the entire app, can be re-used or hooked into other components
export default Demo4;
