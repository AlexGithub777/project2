import React from "react";
import { useLocation } from "react-router-dom";

function Invoice() {
    // Use the useLocation hook to access the location object
    const location = useLocation();

    // Extract the data from the location state
    const {
        bond,
        serviceFee,
        totalCost,
        gst,
        totalGST,
        customerDetails,
        repairDetails,
    } = location.state;

    return (
        <div>
            <h2>Invoice</h2>
            <div>
                <h3>Customer Details:</h3>
                <p>Title: {customerDetails.title}</p>
                <p>First Name: {customerDetails.firstName}</p>
                <p>Last Name: {customerDetails.lastName}</p>
                <p>Street Number: {customerDetails.streetNum}</p>
                <p>Street Name: {customerDetails.streetName}</p>
                <p>Suburb: {customerDetails.suburb}</p>
                <p>City: {customerDetails.city}</p>
                <p>Post Code: {customerDetails.postCode}</p>
                <p>Phone Number: {customerDetails.phoneNumber}</p>
                <p>Email: {customerDetails.email}</p>
            </div>
            <div>
                <h3>Repair Details:</h3>
                <p>
                    Purchase Date:{" "}
                    {new Date(repairDetails.purchaseDate).toLocaleDateString(
                        "en-NZ",
                        { day: "2-digit", month: "2-digit", year: "numeric" }
                    )}
                </p>

                <p>
                    Repair Date and Time:{" "}
                    {new Date(repairDetails.repairDateTime)
                        .toLocaleString("en-NZ", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                            hour12: true,
                        })
                        .replace(",", " -")}
                </p>

                <p>
                    Under Warranty:{" "}
                    {repairDetails.underWarranty ? "Yes ✓" : "No ✖"}
                </p>

                <p>IMEI Number: {repairDetails.imei}</p>
                <p>Device Make: {repairDetails.mobileMake}</p>
                <p>Model Number: {repairDetails.modelNumber}</p>
                <p>Faulty Category: {repairDetails.faultCategory}</p>
                <p>Description: {repairDetails.description}</p>
            </div>

            <div>
                <h3>Cost Details:</h3>
                <p>Bond: ${bond}</p>
                <p>Service Fee: ${serviceFee}</p>
                <p>Total Cost: ${totalCost}</p>
                <p>GST: ${gst}</p>
                <p>Total (+GST): ${totalGST}</p>
            </div>
        </div>
    );
}

export default Invoice;
