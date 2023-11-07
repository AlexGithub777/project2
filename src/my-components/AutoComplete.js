import React, { useRef, useMemo, useCallback } from "react";
import { Loader } from "@googlemaps/js-api-loader";
const AutoComplete = ({ updateCustomerDetails }) => {
    const loader = new Loader({
        apiKey: "AIzaSyCywE0Rw1TWW9W4zpX_N8ywWew0XEuTlRA",
        version: "weekly",
        libraries: ["places"],
    });

    const inputRef = useRef();

    const options = useMemo(() => {
        return {
            componentRestrictions: { country: "nz" },
            fields: ["address_components", "geometry", "icon", "name"],
            types: ["geocode"],
        };
    }, []);

    const updateAddressComponents = useCallback(
        (addressComponents) => {
            if (updateCustomerDetails && Array.isArray(addressComponents)) {
                const updatedDetails = {
                    streetNum: "",
                    streetName: "",
                    suburb: "",
                    city: "",
                    postCode: "",
                };

                addressComponents.forEach((component) => {
                    const componentType = component.types[0]; // Get the first type
                    switch (componentType) {
                        case "street_number":
                            updatedDetails.streetNum = component.long_name;
                            document.getElementById("streetnum").value =
                                updatedDetails.streetNum;
                            break;
                        case "route":
                            updatedDetails.streetName = component.long_name;
                            document.getElementById("streetname").value =
                                updatedDetails.streetName;
                            break;
                        case "sublocality_level_1":
                            updatedDetails.suburb = component.long_name;
                            document.getElementById("suburb").value =
                                updatedDetails.suburb;
                            break;
                        case "locality":
                            updatedDetails.city = component.long_name;
                            document.getElementById("city").value =
                                updatedDetails.city;
                            break;
                        case "postal_code":
                            updatedDetails.postCode = component.long_name;
                            document.getElementById("postcode").value =
                                updatedDetails.postCode;
                            break;
                        default:
                            break;
                    }
                });

                updateCustomerDetails(updatedDetails);
            } else {
                console.error("Invalid address components:", addressComponents);
            }
        },
        [updateCustomerDetails]
    );

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

    const isResidentialAddress = (place) => {
        // You can add custom logic to determine if it's a residential address
        // For example, checking if it has street number and street name
        const addressComponents = place.address_components;
        if (addressComponents) {
            const hasStreetNumber = addressComponents.some((component) =>
                component.types.includes("street_number")
            );
            const hasStreetName = addressComponents.some((component) =>
                component.types.includes("route")
            );
            return hasStreetNumber && hasStreetName;
        }
        return false;
    };

    /* global google */

    loader
        .importLibrary("places")
        .then(() => {
            const autoComplete = new google.maps.places.Autocomplete(
                inputRef.current,
                options
            );

            autoComplete.addListener("place_changed", async function () {
                const place = await autoComplete.getPlace();

                if (place && isResidentialAddress(place)) {
                    updateAddressComponents(place.address_components);
                } else {
                    console.error(
                        "Invalid place object or missing address_components."
                    );
                }
            });
        })
        .catch((e) => {
            // do something
        });

    

    return (
        <div>
            <div className="row mt-1">
                <label className="col-12 col-md-12 col-lg-4">
                    Search for address:
                </label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    name="address"
                    ref={inputRef}
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
