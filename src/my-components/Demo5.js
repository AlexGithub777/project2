import React from "react";
import file_upload from "../images/file_upload.png";
import file_uploaded from "../images/file_uploaded.png";



// Function Component
function Demo5() {
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
                DEMO 5: Improve UX: Use “file upload” feature allows users to
                upload the image of the repair phones & display the image on the
                page for viewing as well.
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
                            src={file_upload}
                            alt="damaged phone, file upload"
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <img
                            className="img-fluid mb-3"
                            src={file_uploaded}
                            alt="damaged phone, file upload"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

// Export this component to the entire app, can be re-used or hooked into other components
export default Demo5;
