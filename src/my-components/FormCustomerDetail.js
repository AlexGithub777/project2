import React, { useState } from "react";

//Function Component
function FormCustomerDetail(props) {
    const [customerDetails, setCustomerDetails] = useState({
        title: "Mr",
        firstName: "",
        lastName: "",
        street: "",
        suburb: "",
        city: "",
        postCode: "",
        phoneNumber: "",
        email: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // Update the state with the new value and immediately pass it to the parent component
        const updatedCustomerDetails = {
            ...customerDetails,
            [name]: value,
        };
        setCustomerDetails(updatedCustomerDetails);
        props.onCustomerDetailsChange(updatedCustomerDetails);
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
            <div class="row">
                <fieldset class="border border-primary col-12 col-lg-11 ms-2 me-4">
                    <legend class="col-11 float-none w-auto">
                        Customer type *
                    </legend>
                    <div>
                        <label class="col-12 col-md-12 col-lg-4">
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
                        <label class="col-12 col-md-12 col-lg-4">
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
            <div class="row mt-2">
                <label class="col-12 col-md-12 col-lg-4">Title: *</label>
                <select class="col-12 col-md-12 col-lg-7">
                    <option value="Mr" selected>
                        Mr
                    </option>
                    <option value="Mrs">Mrs</option>
                    <option value="Ms">Ms</option>
                    <option value="Miss">Miss</option>
                    <option value="Dr">Dr</option>
                </select>
            </div>
            <div class="row mt-1">
                <label class="col-12 col-md-12 col-lg-4">First Name: *</label>
                <input
                    class="col-12 col-md-12 col-lg-7"
                    type="text"
                    id="fname"
                    onChange={handleInputChange} // Handle input changes
                    name="firstName"
                    required
                />
            </div>
            <div class="row mt-1">
                <label class="col-12 col-md-12 col-lg-4">Last Name: *</label>
                <input
                    class="col-12 col-md-12 col-lg-7"
                    type="text"
                    id="lname"
                    name="lastName"
                    onChange={handleInputChange} // Handle input changes
                    required
                />
            </div>
            <div class="row mt-1">
                <label class="col-12 col-md-12 col-lg-4">Street: *</label>
                <input
                    class="col-12 col-md-12 col-lg-7"
                    type="text"
                    id="street"
                    name="street"
                    onChange={handleInputChange} // Handle input changes
                    required
                />
            </div>
            <div class="row mt-1">
                <label class="col-12 col-md-12 col-lg-4">Suburb:</label>
                <input
                    class="col-12 col-md-12 col-lg-7"
                    type="text"
                    id="suburb"
                    name="suburb"
                    onChange={handleInputChange} // Handle input changes
                />
            </div>
            <div class="row mt-1">
                <label class="col-12 col-md-12 col-lg-4">City: *</label>
                <input
                    class="col-12 col-md-12 col-lg-7"
                    type="text"
                    id="city"
                    name="city"
                    onChange={handleInputChange} // Handle input changes
                    required
                />
            </div>
            <div class="row mt-1">
                <label class="col-12 col-md-12 col-lg-4">Post Code:</label>
                <input
                    class="col-12 col-md-12 col-lg-7"
                    type="text"
                    id="postcode"
                    name="postCode"
                    onChange={handleInputChange} // Handle input changes
                />
            </div>
            <div class="row mt-1">
                <label class="col-12 col-md-12 col-lg-4">Phone Number: *</label>
                <input
                    class="col-12 col-md-12 col-lg-7"
                    type="text"
                    id="phonenumber"
                    name="phoneNumber"
                    onChange={handleInputChange} // Handle input changes
                    required
                />
            </div>
            <div class="row mt-1">
                <label class="col-12 col-md-12 col-lg-4">Email: *</label>
                <input
                    class="col-12 col-md-12 col-lg-7"
                    type="text"
                    id="email"
                    name="email"
                    onChange={handleInputChange} // Handle input changes
                    required
                />
            </div>
        </>
    );
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default FormCustomerDetail;
