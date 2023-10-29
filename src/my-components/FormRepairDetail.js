import React, { useState, useRef } from "react";

function FormRepairDetail(props) {
    const [warranty, setWarranty] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(null);
    const fileInputRef = useRef(null); // Create a ref for the file input
    const [uploadedFileName, setUploadedFileName] = useState(""); // New state for file name

    const handleWarrantyChange = (e) => {
        setWarranty(e.target.checked);
        props.onWarrantyChange(e.target.checked);
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];

        if (file) {
            setUploadedFileName(file.name); // Set the uploaded file name
            const reader = new FileReader();
            reader.onload = (e) => {
                setUploadedImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        setUploadedImage(null);
        setUploadedFileName(""); // Clear the file name
        fileInputRef.current.value = ""; // Clear the file input's value
    };

    //Component UI: HTML Rendering
    return (
        <>
            <h2>Repair Details</h2>
            <div class="row mt-1">
                <label class="col-12 col-md-12 col-lg-4">Purchase Date *</label>
                <input
                    class="col-12 col-md-12 col-lg-7"
                    type="date"
                    id="purchaseDate"
                    required
                />
            </div>
            <div class="row mt-1">
                <label class="col-12 col-md-12 col-lg-4">Repair Date *</label>
                <input
                    class="col-12 col-md-12 col-lg-7"
                    type="date"
                    id="repairDate"
                    required
                />
            </div>
            {/*Under Warranty*/}
            <div class="row">
                <fieldset class="border border-primary col-12 col-lg-11 ms-1 me-4 mb-3">
                    <legend class="col-11 float-none w-auto">
                        Under Warranty
                    </legend>
                    <div>
                        <label class="col-12 col-md-12 col-lg-4">
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
            <div class="row mt-1">
                <label class="col-12 col-md-12 col-lg-4">IMEI *</label>
                <input
                    class="col-12 col-md-12 col-lg-7"
                    type="number"
                    id="imei"
                    required
                />
            </div>
            <div class="row mt-1">
                <label class="col-12 col-md-12 col-lg-4">Make *</label>
                <select
                    id="mobile-make"
                    name="mobile-make"
                    class="col-12 col-md-12 col-lg-7"
                    required
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
            <div class="row mt-1">
                <label class="col-12 col-md-12 col-lg-4">Model Number</label>
                <input
                    class="col-12 col-md-12 col-lg-7"
                    type="text"
                    id="model-number"
                />
            </div>
            <div class="row mt-1">
                <label for="fault-category" class="col-12 col-md-12 col-lg-4">
                    Fault Category
                </label>
                <select
                    id="fault-category"
                    name="fault-category"
                    class="col-12 col-md-12 col-lg-7"
                >
                    <option value="Battery">Battery</option>
                    <option value="Charging">Charging</option>
                    <option value="Screen">Screen</option>
                    <option value="SD-storage">SD-storage</option>
                    <option value="Software">Software</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div class="row mt-1">
                <label class="col-12 col-md-12 col-lg-4" for="description">
                    Description *
                </label>
                <textarea
                    id="description"
                    name="description"
                    class="col-12 col-md-12 col-lg-7"
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
                        onClick={() => fileInputRef.current.click()}
                        style={{ cursor: "pointer" }}
                    >
                        Choose File
                    </button>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        ref={fileInputRef}
                        style={{ display: "none" }}
                    />
                </div>
            </div>
            {uploadedImage && (
                <div className="row mt-2">
                    <div className="col-12 col-md-12 col-lg-7">
                        <p>File Name: {uploadedFileName}</p>{" "}
                        {/* Display the file name */}
                        <img
                            src={uploadedImage}
                            alt="Uploaded Image"
                            style={{ maxWidth: "100%", maxHeight: "300px" }}
                        />
                        <button onClick={removeImage}>Remove Image</button>
                    </div>
                </div>
            )}
        </>
    );
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default FormRepairDetail;
