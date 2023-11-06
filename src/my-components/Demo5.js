import React from "react";
import file_upload from "../images/file_upload.png";
import file_uploaded from "../images/file_uploaded.png";

// Function Component
function Demo5() {
    // Get the original width and height of the images
    const fileUploadImg = new Image();
    fileUploadImg.src = file_upload;
    const originalFileUploadHeight = fileUploadImg.height;

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
        <>
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
                <img
                    src={file_upload}
                    alt="damaged phone, file upload"
                    style={{
                        ...imageStyle,
                        height: originalFileUploadHeight + "px",
                    }}
                />
                <img
                    src={file_uploaded}
                    alt="damaged phone, file upload"
                    style={imageStyle}
                />
            </div>
        </>
    );
}

// Export this component to the entire app, can be re-used or hooked into other components
export default Demo5;
