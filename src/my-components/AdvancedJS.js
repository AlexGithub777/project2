// Function Component
import React, { useState } from "react"; // Import React and useState

function AdvancedJS() {
  // Define a state variable to track the clicked button
  const [clickedButton, setClickedButton] = useState(null);

  // Define a function to toggle the clicked button
  const toggleDemo = (demoNumber) => {
    setClickedButton(demoNumber);
  };

  // Component UI: HTML Rendering
  return (
    <>
      <div style={{ minHeight: "60vh" }}>
        <div className="row mt-2 p-0">
          {/*col 1*/}
          <div className="col-12 col-md-2 bg-primary">
            <div className="row"></div>
            <button
              className="col-6 col-md-12 btn btn-outline-warning mb-1"
              onClick={() => toggleDemo(1)}
            >
              Demo 1
            </button>
            <button
              className="col-6 col-md-12 btn btn-outline-warning mb-1"
              onClick={() => toggleDemo(2)}
            >
              Demo 2
            </button>
            <button
              className="col-6 col-md-12 btn btn-outline-warning mb-1"
              onClick={() => toggleDemo(3)}
            >
              Demo 3
            </button>
            <button
              className="col-6 col-md-12 btn btn-outline-warning mb-1"
              onClick={() => toggleDemo(4)}
            >
              Demo 4
            </button>
            <button
              className="col-6 col-md-12 btn btn-outline-warning mb-1"
              onClick={() => toggleDemo(5)}
            >
              Demo 5
            </button>
          </div>

          {/* col 2*/}
          <div className="col-12 col-md-8 bg-secondary">
            <div className="row" style={{ minHeight: "50vh" }}>
              <div
                className="col-12"
                style={{ display: clickedButton === 1 ? "block" : "none" }}
              >
                Component DEMO1
              </div>
              <div
                className="col-12"
                style={{ display: clickedButton === 2 ? "block" : "none" }}
              >
                Component DEMO2
              </div>
              <div
                className="col-12"
                style={{ display: clickedButton === 3 ? "block" : "none" }}
              >
                Component DEMO3
              </div>
              <div
                className="col-12"
                style={{ display: clickedButton === 4 ? "block" : "none" }}
              >
                Component DEMO4
              </div>
              <div
                className="col-12"
                style={{ display: clickedButton === 5 ? "block" : "none" }}
              >
                Component DEMO5
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Export this component to the entire app, can be re-used or hooked into other Components
export default AdvancedJS;
