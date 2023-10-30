import React, { useState, useRef } from "react";

function FormRepairDetail(props) {
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

    const clearUploadedImage = () => {
        props.setUploadedImage(null);
        props.setUploadedFileName("");
        props.fileInput.current.value = "";
        console.log("working");
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
                    required
                />
            </div>
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">
                    Repair Date *
                </label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="date"
                    id="repairDate"
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
                            checked={warranty}
                            onChange={handleWarrantyChange}
                        />
                    </div>
                </fieldset>
            </div>
            {/*Other details*/}
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">IMEI *</label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="number"
                    id="imei"
                    required
                />
            </div>
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">Make *</label>
                <select
                    id="mobile-make"
                    name="mobile-make"
                    className="col-12 col-md-12 col-lg-7"
                    required
                    defaultValue=""
                >
                    <option value="" disabled selected>
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
                    id="model-number"
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
                    id="fault-category"
                    name="fault-category"
                    className="col-12 col-md-12 col-lg-7"
                    defaultValue=""
                >
                    <option value="" disabled selected>
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
                    required
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
                        <button type="button" onClick={clearUploadedImage}>
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
