import React, { useRef, useEffect, useState } from "react";

const AutoComplete = ({ updateCustomerDetails }) => {
    const autoCompleteRef = useRef();
    const inputRef = useRef();
    const [selectedPlace, setSelectedPlace] = useState({});

    const options = {
        componentRestrictions: { country: "nz" },
        fields: ["address_components", "geometry", "icon", "name"],
        types: ["geocode"], // Restrict to geocode type for street addresses
    };
    const updateAddressComponents = (addressComponents) => {
        if (
            updateCustomerDetails &&
            Array.isArray(addressComponents) &&
            addressComponents.length > 0
        ) {
            const updatedDetails = {
                streetNum: addressComponents[0]?.long_name || "",
                streetName: addressComponents[1]?.long_name || "",
                suburb: addressComponents[2]?.long_name || "",
                city: addressComponents[3]?.long_name || "",
                postCode: addressComponents[6]?.long_name || "",
            };

            updateCustomerDetails(updatedDetails);
        } else {
            console.error("Invalid address components:", addressComponents);
        }
    };

    useEffect(() => {
        autoCompleteRef.current = new window.google.maps.places.Autocomplete(
            inputRef.current,
            options
        );

        autoCompleteRef.current.addListener("place_changed", async function () {
            const place = await autoCompleteRef.current.getPlace();

            if (place && isResidentialAddress(place)) {
                setSelectedPlace(place);
                updateAddressComponents(place.address_components);
            } else {
                console.error(
                    "Invalid place object or missing address_components."
                );
            }
        });
    }, []);

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

    return (
        <div>
            <div class="row mt-1">
                <label class="col-12 col-md-12 col-lg-4">Enter address:</label>
                <input
                    class="col-12 col-md-12 col-lg-7"
                    name="address"
                    required
                    ref={inputRef}
                    onChange={updateAddressComponents}
                />
            </div>
            {/* Display selected address components */}
            <div class="row mt-1">
                <label class="col-12 col-md-12 col-lg-4">
                    Street Number: *
                </label>
                <input
                    class="col-12 col-md-12 col-lg-7"
                    type="text"
                    id="streetnum"
                    name="streetNum"
                    value={
                        selectedPlace.address_components?.[0].long_name || ""
                    }
                    onChange={updateAddressComponents}
                    required
                />
            </div>
            <div class="row mt-1">
                <label class="col-12 col-md-12 col-lg-4">Street Name: *</label>
                <input
                    class="col-12 col-md-12 col-lg-7"
                    type="text"
                    id="streetname"
                    name="streetName"
                    value={
                        selectedPlace.address_components?.[1].long_name || ""
                    }
                    onChange={updateAddressComponents}
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
                    value={
                        selectedPlace.address_components?.[2].long_name || ""
                    }
                    onChange={updateAddressComponents}
                />
            </div>
            <div class="row mt-1">
                <label class="col-12 col-md-12 col-lg-4">City: *</label>
                <input
                    class="col-12 col-md-12 col-lg-7"
                    type="text"
                    id="city"
                    name="city"
                    value={
                        selectedPlace.address_components?.[3].long_name || ""
                    }
                    onChange={updateAddressComponents}
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
                    value={
                        selectedPlace.address_components?.[6].long_name || ""
                    }
                    onChange={updateAddressComponents}
                />
            </div>
        </div>
    );
};

export default AutoComplete;
