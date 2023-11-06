import React, { useCallback } from "react";

const AutoComplete = ({ updateCustomerDetails }) => {
    const updateCustomerDetailsForStreetNum = useCallback(
        (value) => {
            const updatedDetails = {
                streetNum: value,
                streetName: document.getElementById("streetname").value,
                suburb: document.getElementById("suburb").value,
                city: document.getElementById("city").value,
                postCode: document.getElementById("postcode").value,
            };
            updateCustomerDetails(updatedDetails);
        },
        [updateCustomerDetails]
    );

    const updateCustomerDetailsForStreetName = useCallback(
        (value) => {
            const updatedDetails = {
                streetNum: document.getElementById("streetnum").value,
                streetName: value,
                suburb: document.getElementById("suburb").value,
                city: document.getElementById("city").value,
                postCode: document.getElementById("postcode").value,
            };
            updateCustomerDetails(updatedDetails);
        },
        [updateCustomerDetails]
    );

    const updateCustomerDetailsForCity = useCallback(
        (value) => {
            const updatedDetails = {
                streetNum: document.getElementById("streetnum").value,
                streetName: document.getElementById("streetname").value,
                suburb: document.getElementById("suburb").value,
                city: value,
                postCode: document.getElementById("postcode").value,
            };
            updateCustomerDetails(updatedDetails);
        },
        [updateCustomerDetails]
    );

    const updateCustomerDetailsForSuburb = useCallback(
        (value) => {
            const updatedDetails = {
                streetNum: document.getElementById("streetnum").value,
                streetName: document.getElementById("streetname").value,
                suburb: value,
                city: document.getElementById("city").value,
                postCode: document.getElementById("postcode").value,
            };
            updateCustomerDetails(updatedDetails);
        },
        [updateCustomerDetails]
    );

    const updateCustomerDetailsForPostCode = useCallback(
        (value) => {
            const updatedDetails = {
                streetNum: document.getElementById("streetnum").value,
                streetName: document.getElementById("streetname").value,
                suburb: document.getElementById("suburb").value,
                city: document.getElementById("city").value,
                postCode: value,
            };
            updateCustomerDetails(updatedDetails);
        },
        [updateCustomerDetails]
    );

    return (
        <div>
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">
                    Search for address:
                </label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    name="address"
                    id="input"
                />
            </div>
            {/* Display selected address components */}
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">
                    Street Number: *
                </label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="text"
                    id="streetnum"
                    name="streetNum"
                    title="Please enter a street number"
                    onChange={(e) =>
                        updateCustomerDetailsForStreetNum(e.target.value)
                    }
                    required
                />
            </div>
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">
                    Street Name: *
                </label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="text"
                    id="streetname"
                    name="streetName"
                    title="Please enter a street name"
                    onChange={(e) =>
                        updateCustomerDetailsForStreetName(e.target.value)
                    }
                    required
                />
            </div>
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">Suburb:</label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="text"
                    id="suburb"
                    name="suburb"
                    // Add an onChange handler for suburb field
                    onChange={(e) =>
                        updateCustomerDetailsForSuburb(e.target.value)
                    }
                />
            </div>
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">City: *</label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="text"
                    id="city"
                    name="City"
                    title="Please enter a city"
                    // Add an onChange handler for suburb field
                    onChange={(e) =>
                        updateCustomerDetailsForCity(e.target.value)
                    }
                    required
                />
            </div>
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">
                    Post Code: *
                </label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="text"
                    id="postcode"
                    name="postCode"
                    pattern="^\d{4}$"
                    title="Please enter a 4-digit postcode"
                    required
                    // Add an onChange handler for post code field
                    onChange={(e) =>
                        updateCustomerDetailsForPostCode(e.target.value)
                    }
                />
            </div>
        </div>
    );
};

export default AutoComplete;
