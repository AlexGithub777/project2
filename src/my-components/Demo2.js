import { useState } from "react";

// Function Component
function Demo2() {
    const [bgColor, setbgColor] = useState(
        localStorage.getItem("color_preference") != null
            ? localStorage.getItem("color_preference")
            : "white"
    );
    const [textSize, setTextSize] = useState(
        localStorage.getItem("size_preference") != null
            ? localStorage.getItem("size_preference")
            : "16px"
    );

    //Handle "onChange" event
    let changeBgColor = (selectedOption) => {
        setbgColor(selectedOption); // Change the background color accordingly
        localStorage.setItem("color_preference", selectedOption); //Store this color locally & permanently on client side
    };

    let changeText = (selectedOption) => {
        setTextSize(selectedOption);
        localStorage.setItem("size_preference", selectedOption);
    };

    // Component UI: HTML Rendering

    return (
        <>
            <h1>
                DEMO 2: Remember user preferences by using Local Storage API
            </h1>
            <div
                id="customization-card"
                style={{ backgroundColor: bgColor, fontSize: textSize }}
            >
                <p>Lorem Ipsum</p>
                <img
                    src="https://play-lh.googleusercontent.com/mRQg4up-ykXfRh7S0mE8w62iLk-0UpGz9V-SsBT0FZ4t1HFdL__WF3oB9blXsP5DSw"
                    alt="Image"
                    height="200px"
                />
                <p>
                    Nullam hendrerit leo tellus. Aliquam ultrices pharetra
                    ligula, et accumsan elit. Ut sit amet nisl eros. Nullam
                    pulvinar velit non accumsan finibus.
                </p>
            </div>

            <p>YOUR PERSONAL PREFERENCES:</p>
            <label>Select background color: </label>
            <select onChange={(event) => changeBgColor(event.target.value)}>
                <option value="red">RED</option>
                <option value="green">GREEN</option>
                <option value="yellow">YELLOW</option>
                <option value="Ivory">IVORY</option>
                <option value="pink">PINK</option>
                <option value="purple">PURPLE</option>
            </select>
            <br />
            <label>Select Text Size: </label>
            <select
                id="sizeOption"
                onChange={(event) => changeText(event.target.value)}
            >
                <option value="35px">VERY BIG</option>
                <option value="25px">BIG</option>
                <option value="16px">NORMAL</option>
            </select>
        </>
    );
}

//Export this component to the entire app, can be re-used or hooked into other components
export default Demo2;
