import React from "react";
import drag_drop from "../images/drag_drop.png";
import drag_dropped from "../images/drag_dropped.png";

// Function Component
function Demo4() {
    // Get the original width and height of the images
    const dragDropImg = new Image();
    dragDropImg.src = drag_drop;
    const originalDragDropHeight = dragDropImg.height;

    

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
                DEMO 4: Improve UX: Use drag-and-drop API for the “courtesy
                phone” selection.
            </h1>
            <p>Refer to Home Page</p>
            <p style={{ textAlign: "center", fontWeight: "bold" }}>
                Screenshots:
            </p>
            <div style={containerStyle}>
                <img
                    src={drag_drop}
                    alt="courtesy phone drag and drop"
                    style={{
                        ...imageStyle,
                        height: originalDragDropHeight + "px",
                    }}
                />
                <img
                    src={drag_dropped}
                    alt="courtesy phone drag and dropped"
                    style={imageStyle}
                />
            </div>
        </>
    );
}

// Export this component to the entire app, can be re-used or hooked into other components
export default Demo4;
