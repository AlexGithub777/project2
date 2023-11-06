//Import all dependencies, other Components
import { useState } from "react";
import Demo1 from "./Demo1";
import Demo2 from "./Demo2";
import Demo3 from "./Demo3";
import Demo4 from "./Demo4";
import Demo5 from "./Demo5";

const btnStyle = {
    backgroundColor: "#6e9ad3",
    color: "darkblue",
    borderRadius: "0", // Remove button roundedness
};

const selectedBtnStyle = {
    backgroundColor: "#f2c228",
    color: "darkblue",
    borderRadius: "0", // Remove button roundedness
};

//Function Component
function AdvancedJS() {
    //State
    const [clickedButton, setClickedButton] = useState(0);
    const toggleDemo = (index) => {
        setClickedButton(index);
    };
    //Component UI: HTML Rendering
    return (
        <div className="container-fluid" style={{ minHeight: "60vh" }}>
            {/*BUTTONS AND DEMOS*/}
            <div className="row mt-2 p-0">
                {/*Column 1 */}
                <div className="col-12 col-md-2 bg-white ">
                    <div className="row">
                        <button
                            className="col-6 col-md-12 btn btn-outline-primary mb-1 ms-md-2"
                            style={
                                clickedButton === 1
                                    ? selectedBtnStyle
                                    : btnStyle
                            }
                            onClick={() => toggleDemo(1)}
                        >
                            DEMO-1{" "}
                        </button>
                        <button
                            className="col-6 col-md-12 btn btn-outline-primary mb-1 ms-md-2"
                            style={
                                clickedButton === 2
                                    ? selectedBtnStyle
                                    : btnStyle
                            }
                            onClick={() => toggleDemo(2)}
                        >
                            DEMO-2{" "}
                        </button>
                        <button
                            className="col-6 col-md-12 btn btn-outline-primary mb-1 ms-md-2"
                            style={
                                clickedButton === 3
                                    ? selectedBtnStyle
                                    : btnStyle
                            }
                            onClick={() => toggleDemo(3)}
                        >
                            DEMO-3{" "}
                        </button>
                        <button
                            className="col-6 col-md-12 btn btn-outline-primary mb-1 ms-md-2"
                            style={
                                clickedButton === 4
                                    ? selectedBtnStyle
                                    : btnStyle
                            }
                            onClick={() => toggleDemo(4)}
                        >
                            DEMO-4{" "}
                        </button>
                        <button
                            className="col-6 col-md-12 btn btn-outline-primary mb-1 ms-md-2"
                            style={
                                clickedButton === 5
                                    ? selectedBtnStyle
                                    : btnStyle
                            }
                            onClick={() => toggleDemo(5)}
                        >
                            DEMO-5{" "}
                        </button>
                    </div>
                </div>
                {/*Column 2*/}
                <div className="col-12 col-md-10 bg-white">
                    <div className="row" style={{ minHeight: "50vh" }}>
                        {/* Display Statement of Authenticity when no button is clicked */}
                        <div
                            className="col-12"
                            style={{
                                display: clickedButton === 0 ? "block" : "none",
                            }}
                        >
                            <div
                                style={{
                                    backgroundColor: "gray",
                                    padding: "10px",
                                    border: "3px solid #586e8c",
                                }}
                            >
                                <h1>Statement of Authenticity</h1>
                                <p>
                                    I <b>Alex Scott</b> confirm that:
                                    <ul>
                                        <li>
                                            This is an original assessment and
                                            is entirely my own work.
                                        </li>
                                        <li>
                                            It contains no material previously
                                            published or written by another
                                            person or myself except where due
                                            acknowledgment is made in the text.
                                        </li>
                                        <li>
                                            No material which, to a substantial
                                            extent, has been submitted for any
                                            other academic course, is included
                                            without acknowledgment.
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-12"
                            style={{
                                display: clickedButton === 1 ? "block" : "none",
                            }}
                        >
                            <Demo1 />{" "}
                        </div>{" "}
                        {/*Demo 1 */}
                        <div
                            className="col-12"
                            style={{
                                display: clickedButton === 2 ? "block" : "none",
                            }}
                        >
                            <Demo2 />{" "}
                        </div>{" "}
                        {/*Demo 2 */}
                        <div
                            className="col-12"
                            style={{
                                display: clickedButton === 3 ? "block" : "none",
                            }}
                        >
                            <Demo3 />{" "}
                        </div>{" "}
                        {/*Demo 3 */}
                        <div
                            className="col-12"
                            style={{
                                display: clickedButton === 4 ? "block" : "none",
                            }}
                        >
                            <Demo4 />{" "}
                        </div>{" "}
                        {/*Demo 4 */}
                        <div
                            className="col-12"
                            style={{
                                display: clickedButton === 5 ? "block" : "none",
                            }}
                        >
                            <Demo5 />{" "}
                        </div>{" "}
                        {/*Demo 5 */}
                    </div>
                </div>
            </div>
        </div>
    );
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default AdvancedJS;
