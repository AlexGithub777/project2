import React, { useState } from "react";
import FormCustomerDetail from "./FormCustomerDetail";
import FormRepairDetail from "./FormRepairDetail";
import FormCourtesyPhone from "./FormCourtesyPhone";
import FormCost from "./FormCost";
import FormButtons from "./FormButtons";
import { useNavigate } from "react-router-dom";

// Function Component
function Home() {
  // Parent Component "Home"
  const [sharedBond, setSharedBond] = useState(0); // Child2 (FormCost) receive data from Child1 (FormCourtesyPhone)
  const navigate = useNavigate();

  const updateSharedState = (value) => {
    setSharedBond(value); // Child1 (FormCourtesyPhone) pass data to Child2 (FormCost)
  };

  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent the browser from sending data to the server
    try {
      // Open the "Invoice" component
      navigate("/invoice");
    } catch (e) {
      alert("ERROR!!!");
    }
  };

  // Component UI: HTML Rendering
  return (
    <>
      <div className="container-fluid">
        <form className="row" style={{ minHeight: "60vh" }} onSubmit={onSubmit}>
          {/* Customer Details */}
          <div
            className="col-12 col-lg-4 p-4 m-0"
            style={{ minHeight: "30vh", backgroundColor: "#FCF3CF" }}
          >
            <FormCustomerDetail />
          </div>

          {/* Repair Details */}
          <div
            className="col-12 col-lg-4 p-4 m-0"
            style={{ minHeight: "30vh", backgroundColor: "#D5F5E3" }}
          >
            <FormRepairDetail />
          </div>

          {/* Courtesy Phone & Cost */}
          <div className="col-12 col-lg-4 p-0 m-0">
            {/* Courtesy phone */}
            <div
              className="p-4"
              style={{ minHeight: "30vh", backgroundColor: "#2874A6" }}
            >
              <FormCourtesyPhone passDataToParent={updateSharedState} />{" "}
              {/* Child1 */}
            </div>
            {/* Cost */}
            <div
              className="p-4"
              style={{ minHeight: "20vh", backgroundColor: "#EDBB99" }}
            >
              <FormCost sharedPropBond={sharedBond} /> {/* Child2 */}
            </div>
          </div>

          {/* Button area */}
          <div
            className="p-4 text-center"
            style={{ minHeight: "10vh", backgroundColor: "#EDBB99" }}
          >
            <FormButtons />
          </div>
        </form>
      </div>
    </>
  );
}

// Export this component to the entire app, can be re-used or hooked into other Components
export default Home;
