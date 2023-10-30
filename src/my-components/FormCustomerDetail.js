import React, { useState } from "react";
import AutoComplete from "./AutoComplete";

function FormCustomerDetail(props) {
    const [selectedPlace, setSelectedPlace] = useState({});

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

    const updateCustomerDetails = (updatedDetails) => {
        // Merge the new customer details with the existing ones
        setCustomerDetails((prevCustomerDetails) => ({
            ...prevCustomerDetails,
            ...updatedDetails,
        }));
    };

    const handleCustomerDetailsChange = (e) => {
        const { name, value } = e.target;
        // Update the state based on the input field's name
        setCustomerDetails((prevDetails) => {
            const updatedDetails = {
                ...prevDetails,
                [name]: value,
            };
            console.log("Updated Customer Details:", updatedDetails);
            props.onCustomerDetailsChange(updatedDetails);
            return updatedDetails;
        });
    };

    const [customerType, setCustomerType] = useState("customer");

    const handleCustomerTypeChange = (e) => {
        const newCustomerType = e.target.value;
        setCustomerType(newCustomerType);
        props.onCustomerTypeChange(newCustomerType);
    };

    //Component UI: HTML Rendering
    return (
        <>
            <h2>Customer Details</h2>
            {/*Customer type*/}
            <div className="row">
                <fieldset className="border border-primary col-12 col-lg-11 ms-2 me-4">
                    <legend className="col-11 float-none w-auto">
                        Customer type *
                    </legend>
                    <div>
                        <label className="col-12 col-md-12 col-lg-4">
                            Customer
                        </label>
                        <input
                            type="radio"
                            id="customerType"
                            name="customer-type"
                            value="customer"
                            checked={customerType === "customer"}
                            onChange={handleCustomerTypeChange}
                        />
                    </div>
                    <div>
                        <label className="col-12 col-md-12 col-lg-4">
                            Business
                        </label>
                        <input
                            type="radio"
                            id="businessType"
                            name="customer-type"
                            value="business"
                            checked={customerType === "business"}
                            onChange={handleCustomerTypeChange}
                        />
                    </div>
                </fieldset>
            </div>

            {/*Details*/}
            <div className="row mt-2">
                <label className="col-12 col-md-12 col-lg-4">Title: *</label>
                <select
                    name="title"
                    onChange={handleCustomerDetailsChange}
                    className="col-12 col-md-12 col-lg-7"
                    defaultValue=""
                    required
                >
                    <option value="" disabled selected>
                        Select a title
                    </option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Ms">Ms</option>
                    <option value="Miss">Miss</option>
                    <option value="Dr">Dr</option>
                </select>
            </div>
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">
                    First Name: *
                </label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="text"
                    id="fname"
                    onChange={handleCustomerDetailsChange} // Handle input changes
                    name="firstName"
                    required
                />
            </div>
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">
                    Last Name: *
                </label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="text"
                    id="lname"
                    name="lastName"
                    onChange={handleCustomerDetailsChange} // Handle input changes
                    required
                />
            </div>
            <AutoComplete
                selectedPlace={selectedPlace}
                setSelectedPlace={setSelectedPlace}
                updateCustomerDetails={updateCustomerDetails}
                customerDetails={customerDetails} // Pass customerDetails as a prop
            />
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">
                    Phone Number: *
                </label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="number"
                    id="phonenumber"
                    name="phoneNumber"
                    onChange={handleCustomerDetailsChange} // Handle input changes
                    required
                />
            </div>
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">Email: *</label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="text"
                    id="email"
                    name="email"
                    onChange={handleCustomerDetailsChange} // Handle input changes
                    required
                />
            </div>
        </>
    );
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default FormCustomerDetail;
