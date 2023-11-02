import React, { useState } from "react";

function FormRepairDetail(props) {
    const handleFieldChange = (e) => {
        const { name, value, type, checked } = e.target;

        // If the field is a checkbox, handle checked property
        const fieldValue = type === "checkbox" ? checked : value;

        console.log("Field Name:", name);
        console.log("Field Value:", fieldValue);

        props.onFieldChange(name, fieldValue);
    };

    const [warranty, setWarranty] = useState(false);

    const handleWarrantyChange = (e) => {
        setWarranty(e.target.checked);
        props.onWarrantyChange(e.target.checked);
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];

        if (file) {
            props.setUploadedFileName(file.name);
            const reader = new FileReader();
            reader.onload = (e) => {
                props.setUploadedImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleWarrantyDisable = (purchaseDate) => {
        const warrantyExpiryDate = new Date(purchaseDate);
        warrantyExpiryDate.setMonth(warrantyExpiryDate.getMonth() + 24); // 24 months from the purchase date

        const today = new Date();
        today.setHours(0, 0, 0, 0); // Set the time to 00:00:00 for accurate comparison

        if (today > warrantyExpiryDate) {
            document.getElementById("warranty").disabled = true;
        } else {
            document.getElementById("warranty").disabled = false;
        }
    };

    //Component UI: HTML Rendering
    return (
        <>
            <h2>Repair Details</h2>
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">
                    Purchase Date *
                </label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="date"
                    id="purchaseDate"
                    name="purchaseDate"
                    max={
                        new Date(Date.now())
                            .toISOString()
                            .split("T")[0]
                    } // Purchase date must be before today
                    //min={new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split("T")[0]}
                    title="Please enter a valid date"
                    required
                    onChange={(e) => {
                        const purchaseDate = new Date(e.target.value);
                        if (isNaN(purchaseDate.getTime())) {
                            alert("Please enter a valid date");
                        }
                        handleWarrantyDisable(purchaseDate);
                        handleFieldChange(e);
                    }}
                />
            </div>

            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">
                    Repair Date/Time *
                </label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="datetime-local"
                    id="repairDateTime"
                    name="repairDateTime"
                    title="Please enter a valid date and time"
                    onChange={(e) => {
                        const repairDate = new Date(e.target.value);
                        if (isNaN(repairDate.getTime())) {
                            alert("Please enter a valid date and time");
                        }
                        handleFieldChange(e);
                    }}
                    min={new Date(Date.now())
                        .toISOString()
                        .slice(0, 16)} // Minimum date and time is the current date and time
                    required
                />
            </div>

            {/*Under Warranty*/}
            <div className="row">
                <fieldset className="border border-primary col-12 col-lg-11 ms-1 me-4 mb-3">
                    <legend className="col-11 float-none w-auto">
                        Under Warranty
                    </legend>
                    <div>
                        <label className="col-12 col-md-12 col-lg-4">
                            Warranty
                        </label>
                        <input
                            type="checkbox"
                            id="warranty"
                            name="warranty"
                            checked={warranty}
                            onChange={(e) => {
                                handleWarrantyChange(e);
                                handleFieldChange(e);
                            }}
                        />
                    </div>
                </fieldset>
            </div>
            {/*Other details*/}
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">IMEI *</label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="text"
                    id="imei"
                    name="imei"
                    pattern="^[0-9]{15}$"
                    onChange={(e) => {
                        handleFieldChange(e);
                    }}
                    title="Please enter a valid IEMI for the repair. Must be 15 digits long."
                    required
                />
            </div>
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">Make *</label>
                <select
                    id="mobileMake"
                    name="mobileMake"
                    className="col-12 col-md-12 col-lg-7"
                    title="Please select a phone make."
                    required
                    onChange={(e) => {
                        handleFieldChange(e);
                    }}
                    defaultValue=""
                >
                    <option value="" disabled>
                        Select a make
                    </option>
                    <option value="Apple">Apple</option>
                    <option value="LG">LG</option>
                    <option value="Motorola">Motorola</option>
                    <option value="Nokia">Nokia</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Sony">Sony</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">
                    Model Number
                </label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="text"
                    id="modelNumber"
                    name="modelNumber"
                    onChange={(e) => {
                        handleFieldChange(e);
                    }}
                />
            </div>
            <div className="row mt-1">
                <label
                    htmlFor="fault-category"
                    className="col-12 col-md-12 col-lg-4"
                >
                    Fault Category
                </label>
                <select
                    id="faultCategory"
                    name="faultCategory"
                    className="col-12 col-md-12 col-lg-7"
                    defaultValue=""
                    onChange={(e) => {
                        handleFieldChange(e);
                    }}
                >
                    <option value="" disabled>
                        Select a fault
                    </option>
                    <option value="Battery">Battery</option>
                    <option value="Charging">Charging</option>
                    <option value="Screen">Screen</option>
                    <option value="SD-storage">SD-storage</option>
                    <option value="Software">Software</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className="row mt-1">
                <label
                    className="col-12 col-md-12 col-lg-4"
                    htmlFor="description"
                >
                    Description *
                </label>
                <textarea
                    id="description"
                    name="description"
                    className="col-12 col-md-12 col-lg-7"
                    title="Please enter a description for the repair."
                    required
                    onChange={(e) => {
                        handleFieldChange(e);
                    }}
                ></textarea>
            </div>
            {/* Add the image upload input */}
            <div className="row mt-2">
                <label className="col-12 col-md-12 col-lg-4">
                    Upload Image
                </label>
                <div
                    className="col-12 col-md-12 col-lg-7"
                    style={{ display: "flex", alignItems: "center" }}
                >
                    <button
                        onClick={() => props.fileInput.current.click()}
                        style={{ cursor: "pointer" }}
                        type="button"
                    >
                        Choose File
                    </button>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        ref={props.fileInput}
                        style={{ display: "none" }}
                    />
                </div>
            </div>
            {props.uploadedImage && (
                <div className="row mt-2">
                    <div className="col-12 col-md-12 col-lg-7">
                        <p>File Name: {props.uploadedFileName}</p>{" "}
                        {/* Display the file name */}
                        <img
                            src={props.uploadedImage}
                            alt=""
                            style={{ maxWidth: "100%", maxHeight: "300px" }}
                        />
                        <button
                            type="button"
                            onClick={props.clearUploadedImage}
                        >
                            Remove Image
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default FormRepairDetail;
