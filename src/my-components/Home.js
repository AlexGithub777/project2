import React, { useState, useRef } from "react";
import FormCustomerDetail from "./FormCustomerDetail";
import FormRepairDetail from "./FormRepairDetail";
import FormCourtesyPhone from "./FormCourtesyPhone";
import FormCost from "./FormCost";
import FormButtons from "./FormButtons";
//import Invoice from "./Invoice"; // Import the Invoice component
import { useNavigate } from "react-router-dom";

// Function Component
function Home() {
    // Parent Component "Home"
    const [customerType, setCustomerType] = useState("customer"); // Initialize the customer type
    const [warranty, setWarranty] = useState(false); // State to store warranty status
    const [sharedBond, setSharedBond] = useState(0); // Child2 (FormCost) receive data from Child1 (FormCourtesyPhone)
    /*const [formData, setFormData] = useState(null); // State to store form data*/
    const navigate = useNavigate();

    // Define state variables for cost-related data and their setter functions
    const [bond, setBond] = useState(0);
    const [serviceFee, setServiceFee] = useState(0);
    const [totalCost, setTotalCost] = useState(0);
    const [gst, setGst] = useState(0);
    const [totalGST, setTotalGST] = useState(0);

    const [customerDetails, setCustomerDetails] = useState({
        title: "",
        firstName: "",
        lastName: "",
        streetNum: "",
        streetName: "",
        suburb: "",
        city: "",
        postCode: "",
        phoneNumber: "",
        email: "",
    });

    const fileInput = useRef(null);
    const [uploadedImage, setUploadedImage] = useState(null);
    const [uploadedFileName, setUploadedFileName] = useState("");

    const [selectedItems, setSelectedItems] = useState([]);

    const [repairDetails, setRepairDetails] = useState({
        purchaseDate: "",
        repairDate: "",
        warranty: false,
        imei: "",
        mobileMake: "",
        modelNumber: "",
        faultCategory: "",
        description: "",
    });

    const handleFieldChange = (fieldName, fieldValue) => {
        setRepairDetails((prevRepairDetails) => ({
            ...prevRepairDetails,
            [fieldName]: fieldValue,
        }));
    };

    // Home.js
    const clearSelectedItems = () => {
        setSelectedItems([]);
    };

    const clearUploadedImage = () => {
        setUploadedImage(null); // Clear the uploaded image
        setUploadedFileName(""); // Clear the file name
        fileInput.current.value = ""; // Clear the file input's value
    };

    const handleCustomerDetailsChange = (newCustomerDetails) => {
        // Merge the new customer details with the existing ones
        setCustomerDetails((prevCustomerDetails) => ({
            ...prevCustomerDetails,
            ...newCustomerDetails,
        }));
    };

    // Inside the Home component
    // Callback function to handle cost changes and update state
    // Callback function to handle cost changes and update state
    const handleCostChange = (costData) => {
        setBond(costData.bond);
        setServiceFee(costData.serviceFee);
        setTotalCost(costData.totalCost);
        setGst(costData.gst);
        setTotalGST(costData.totalGST);
    };

    /* Callback function to receive form data from child components and update the formData state
    const updateFormData = (newFormData) => {
        setFormData({ ...formData, ...newFormData });
    };*/

    // Define the handleCustomerTypeChange function
    const handleCustomerTypeChange = (newCustomerType) => {
        // Handle the change if needed
        setCustomerType(newCustomerType);
        // For example, you can update state or perform other actions here.
    };
    const updateSharedState = (value) => {
        setSharedBond(value); // Child1 (FormCourtesyPhone) pass data to Child2 (FormCost)
    };

    const handleWarrantyChange = (newWarrantyStatus) => {
        setWarranty(newWarrantyStatus); // Update the warranty status when it changes
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log("Data to be passed to Invoice:", {
                bond,
                serviceFee,
                totalCost,
                gst,
                totalGST,
                customerDetails,
                repairDetails,
            });

            // Open the "Invoice" component and pass the required props
            navigate("/invoice", {
                state: {
                    bond,
                    serviceFee,
                    totalCost,
                    gst,
                    totalGST,
                    customerDetails,
                    repairDetails,
                },
            });
        } catch (e) {
            alert("ERROR!!!");
        }
    };

    // Component UI: HTML Rendering
    return (
        <>
            <div className="container-fluid">
                <form
                    className="row"
                    style={{ minHeight: "60vh" }}
                    onSubmit={onSubmit}
                >
                    {/* Customer Details */}
                    <div
                        className="col-12 col-lg-4 p-4 m-0"
                        style={{
                            minHeight: "30vh",
                            backgroundColor: "#FCF3CF",
                        }}
                    >
                        <FormCustomerDetail
                            onCustomerTypeChange={handleCustomerTypeChange}
                            onCustomerDetailsChange={
                                handleCustomerDetailsChange
                            }
                            customerDetails={customerDetails}
                        />
                    </div>

                    {/* Repair Details */}
                    <div
                        className="col-12 col-lg-4 p-4 m-0"
                        style={{
                            minHeight: "30vh",
                            backgroundColor: "#D5F5E3",
                        }}
                    >
                        <FormRepairDetail
                            onWarrantyChange={handleWarrantyChange}
                            clearUploadedImage={clearUploadedImage}
                            fileInput={fileInput}
                            setUploadedImage={setUploadedImage}
                            setUploadedFileName={setUploadedFileName}
                            uploadedFileName={uploadedFileName}
                            uploadedImage={uploadedImage}
                            onFieldChange={handleFieldChange}
                            repairDetails={repairDetails}

                            /*onFormDataChange={updateFormData}*/
                        />{" "}
                        {/* Pass callback function */}
                    </div>

                    {/* Courtesy Phone & Cost */}
                    <div className="col-12 col-lg-4 p-0 m-0">
                        {/* Courtesy phone */}
                        <div
                            className="p-4"
                            style={{
                                minHeight: "30vh",
                                backgroundColor: "#2874A6",
                            }}
                        >
                            <FormCourtesyPhone
                                passDataToParent={updateSharedState}
                                setSelectedItems={setSelectedItems}
                                selectedItems={selectedItems}
                                customerType={customerType}
                                /*onFormDataChange={updateFormData}*/
                            />{" "}
                            {/* Child1 */}
                        </div>
                        {/* Cost */}
                        <div
                            className="p-4"
                            style={{
                                minHeight: "20vh",
                                backgroundColor: "#EDBB99",
                            }}
                        >
                            <FormCost
                                sharedPropBond={sharedBond}
                                warranty={warranty}
                                customerType={customerType}
                                onCostChange={handleCostChange} // Pass the function
                            />{" "}
                            {/* Pass warranty status */}
                        </div>
                    </div>

                    {/* Button area */}
                    <div
                        className="p-4 text-center"
                        style={{
                            minHeight: "10vh",
                            backgroundColor: "#EDBB99",
                        }}
                    >
                        <FormButtons
                            onSubmit={onSubmit}
                            clearUploadedImage={clearUploadedImage}
                            fileInput={fileInput}
                            clearSelectedItems={clearSelectedItems}
                        />
                    </div>
                    {/* Render the Invoice component when formData is available */}
                    {/*{formData && <Invoice formData={formData} />}*/}
                </form>
            </div>
        </>
    );
}

// Export this component to the entire app, can be re-used or hooked into other Components
export default Home;
