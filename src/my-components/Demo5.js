import React from "react";
import file_upload from "../images/file_upload.png";
import file_uploaded from "../images/file_uploaded.png";

const demoStyle = {
    backgroundColor: "gray",
    padding: "15px",
    border: "3px solid #586e8c",
    marginBottom: "10px",
};

// Function Component
function Demo5() {
    // Component UI: HTML Rendering
    const imageStyle = {
        margin: "10px", // Adjust the margin value to control the spacing
        maxWidth: "100%", // Maintain the original aspect ratio
        height: "auto", // Maintain the original height
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
                    <div className="col-12 col-md-6">
                        <img
                            className="img-fluid"
                            src={file_upload}
                            alt="damaged phone, file upload"
                            style={imageStyle}
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <img
                            className="img-fluid"
                            src={file_uploaded}
                            alt="damaged phone, file upload"
                            style={imageStyle}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

// Export this component to the entire app, can be re-used or hooked into other components
export default Demo5;
