//Import all dependencies, other Components
import { useState } from "react";
import Demo1 from "./Demo1";

//Function Component
function AdvancedJS() {
  //State
  const [clickedButton, setClickedButton] = useState(0);
  const toggleDemo = (index) => {
    setClickedButton(index);
  };
  //Component UI: HTML Rendering
  return (
    <>
      <div style={{ minHeight: "60vh" }}>
        {/*BUTTONS AND DEMOS*/}
        <div class="row mt-2 p-0">
          {/*Column 1 */}
          <div class="col-12 col-md-2 bg-primary ">
            <div class="row">
              <button
                class="col-6 col-md-12 btn btn-outline-warning mb-1"
                onClick={() => toggleDemo(1)}
              >
                DEMO-1{" "}
              </button>
              <button
                class="col-6 col-md-12 btn btn-outline-warning mb-1"
                onClick={() => toggleDemo(2)}
              >
                DEMO-2{" "}
              </button>
              <button
                class="col-6 col-md-12 btn btn-outline-warning mb-1"
                onClick={() => toggleDemo(3)}
              >
                DEMO-3{" "}
              </button>
              <button
                class="col-6 col-md-12 btn btn-outline-warning mb-1"
                onClick={() => toggleDemo(4)}
              >
                DEMO-4{" "}
              </button>
              <button
                class="col-6 col-md-12 btn btn-outline-warning mb-1"
                onClick={() => toggleDemo(5)}
              >
                DEMO-5{" "}
              </button>
            </div>
          </div>
          {/*Column 2*/}
          <div class="col-12 col-md-10 bg-secondary ">
            <div class="row" style={{ minHeight: "50vh" }}>
              <div
                class="col-12"
                style={{ display: clickedButton === 1 ? "block" : "none" }}
              >
                <Demo1 />{" "}
              </div>{" "}
              {/*Demo 1 */}
              <div
                class="col-12"
                style={{ display: clickedButton === 2 ? "block" : "none" }}
              >
                COMPONENT DEMO2{" "}
              </div>{" "}
              {/*Demo 2 */}
              <div
                class="col-12"
                style={{ display: clickedButton === 3 ? "block" : "none" }}
              >
                COMPONENT DEMO3{" "}
              </div>{" "}
              {/*Demo 3 */}
              <div
                class="col-12"
                style={{ display: clickedButton === 4 ? "block" : "none" }}
              >
                COMPONENT DEMO4{" "}
              </div>{" "}
              {/*Demo 4 */}
              <div
                class="col-12"
                style={{ display: clickedButton === 5 ? "block" : "none" }}
              >
                COMPONENT DEMO5{" "}
              </div>{" "}
              {/*Demo 5 */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default AdvancedJS;
