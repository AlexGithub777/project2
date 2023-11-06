import React from "react";
import { useLocation } from "react-router-dom";

const screenWidth = window.innerWidth;

console.log(screenWidth);

const tableStyles = {
    border: "1px solid #000",
    borderCollapse: "collapse",
    maxWidth: "400px", // Set your preferred maximum width
    marginLeft: "35px",
};

const cellStyles = {
    border: "1px solid #000",
    padding: "8px",
};

const headerCellStyles = {
    ...cellStyles,
    textAlign: "center", // Center-align the content within the cells
    // Add any specific styles for the column headers here
};

const headerStyles = {
    backgroundColor: "#a0a0a0",
    height: "100px",
    display: "flex",
    justifyContent: "space-between", // Align items to the start and end
    alignItems: "center",
};

const titleStyles = {
    padding: "10px",
};

const headerAmount = {
    textAlign: "right",
    padding: "10px",
};

const customerDetailsStyle = {
    marginLeft: "32px",
    marginTop: "20px",
};

const repairDetailsHeadStyle = {
    marginTop: "20px",
    marginRight: "20px",
};

const labelStyle = {
    fontWeight: "bold", // Make text bold
    display: screenWidth <= 500 ? "" : "inline-block",
    width: "170px", // Adjust the width as needed to align values
    textIndent: "40px", // Indent the first line of text
};

const repairDetailsStyle = {
    marginLeft: "20px",
};

const courtesyStyle = {
    marginLeft: "40px",
};

const detailStyle = {
    width: "230px", // Set the desired width
    display: screenWidth <= 500 ? "" : "inline-block",
    textIndent: "55px", // Set the desired text indent
    fontWeight: "bold", // Make text bold
};

const repairHeader = {
    margin: "15px",
};

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
        selectedItems,
    } = location.state;

    const generateJobNumber = () => {
        const currentTime = new Date();
        const year = currentTime.getFullYear().toString().slice(-2); // Last 2 digits of the year
        const month = (currentTime.getMonth() + 1).toString().padStart(2, "0"); // Month (0-11) converted to (1-12)
        const day = currentTime.getDate().toString().padStart(2, "0"); // Day of the month
        const hours = currentTime.getHours().toString().padStart(2, "0");
        const minutes = currentTime.getMinutes().toString().padStart(2, "0");
        const seconds = currentTime.getSeconds().toString().padStart(2, "0");

        // Generate a random 2-digit number
        const randomComponent = Math.floor(10 + Math.random() * 90);

        const jobNumber = `${year}${month}${day}${hours}${minutes}${seconds}${randomComponent}`;
        return jobNumber;
    };

    // Helper function to format a date as "Month Day - HH:MM Year"
    const formatInvoiceDate = (date) => {
        const options = {
            year: "numeric",
            month: "long",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        };
        return date.toLocaleDateString("en-US", options);
    };

    // Helper function to format a date as "Month Day, Year"
    const formatPaymentDueDate = (date) => {
        const options = {
            year: "numeric",
            month: "long",
            day: "2-digit",
        };
        return date.toLocaleDateString("en-US", options);
    };

    // Helper function to calculate the Payment Due Date
    const calculatePaymentDueDate = () => {
        const currentDate = new Date();
        const paymentDueDate = new Date(currentDate);
        paymentDueDate.setDate(paymentDueDate.getDate() + 7); // Add 7 days to the current date

        return formatPaymentDueDate(paymentDueDate);
    };

    // Helper function to get the current date and time in the desired format
    const getCurrentDateTime = () => {
        const now = new Date();
        return formatInvoiceDate(now);
    };

    return (
        <div className="container-fluid m-0">
            <div className="row">
                <div className="col-12 p-0">
                    <div style={headerStyles}>
                        <h1 style={titleStyles}>Repair Booking</h1>
                        <span style={headerAmount}>
                            Amount Due:<br></br>
                            <b>${totalGST}</b>
                        </span>
                    </div>
                </div>

                <div className="col-lg-6">
                    {" "}
                    {/* Use Bootstrap classes */}
                    <div style={customerDetailsStyle}>
                        <p>
                            <b style={{ textTransform: "capitalize" }}>
                                {customerDetails.type}
                            </b>
                        </p>
                        <span>
                            {customerDetails.title} {customerDetails.firstName}{" "}
                            {customerDetails.lastName}
                        </span>
                        <br></br>
                        <span>
                            {customerDetails.streetNum}{" "}
                            {customerDetails.streetName}
                        </span>
                        <br></br>
                        <span>
                            {customerDetails.suburb &&
                                `${customerDetails.suburb}, `}
                            {customerDetails.city} {customerDetails.postCode}
                        </span>
                        <br></br>
                        <span>{customerDetails.phoneNumber}</span>
                        <br></br>
                        <span>{customerDetails.email}</span>
                    </div>
                </div>
                <div className="col-lg-6 d-flex justify-content-lg-end">
                    {/* Use Bootstrap classes */}
                    <div className="ms-4" style={repairDetailsHeadStyle}>
                        <p>
                            <b>Repair Job</b>
                        </p>
                        <span style={labelStyle}>Job Number:</span>{" "}
                        {generateJobNumber()}
                        <br></br>
                        <span style={labelStyle}>Invoice Date:</span>{" "}
                        {getCurrentDateTime()}
                        <br></br>
                        <span style={labelStyle}>Payment Due:</span>{" "}
                        {calculatePaymentDueDate()}
                    </div>
                </div>
            </div>

            <hr className="mt-4" />

            <div className="row">
                <div className="col-lg-6">
                    <div style={repairDetailsStyle}>
                        <h4 style={repairHeader}>Repair Details:</h4>
                        <span style={detailStyle}>Purchase Date:</span>{" "}
                        {new Date(
                            repairDetails.purchaseDate
                        ).toLocaleDateString("en-NZ", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                        })}
                        <br></br>
                        <span style={detailStyle}>
                            Repair Date and Time:
                        </span>{" "}
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
                        <br></br>
                        <span style={detailStyle}>Under Warranty:</span>{" "}
                        {repairDetails.underWarranty ? "Yes ✓" : "No ✖"}
                        <br></br>
                        <span style={detailStyle}>IMEI Number:</span>{" "}
                        {repairDetails.imei}
                        <br />
                        <span style={detailStyle}>Device Make:</span>{" "}
                        {repairDetails.mobileMake}
                        <br />
                        <span style={detailStyle}>Model Number:</span>{" "}
                        {repairDetails.modelNumber}
                        <br />
                        <span style={detailStyle}>Faulty Category:</span>{" "}
                        {repairDetails.faultCategory}
                        <br />
                        <span style={detailStyle}>Description:</span>{" "}
                        {repairDetails.description}
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-lg-12">
                    <div style={courtesyStyle}>
                        <h4>Courtesy Loan Device Details:</h4>
                        <table style={tableStyles} className="mt-3">
                            <thead>
                                <tr>
                                    <th style={headerCellStyles}>Item</th>
                                    <th style={headerCellStyles}>Cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedItems.map((item) => (
                                    <tr key={item.id}>
                                        <td style={cellStyles}>{item.name}</td>
                                        <td style={cellStyles}>${item.bond}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="row mt-4 ms-4 mb-4">
                <div className="col-lg-12 d-flex justify-content-lg-end">
                    <div
                        style={{
                            marginRight: screenWidth >= 600 ? "242px" : "0",
                        }}
                    >
                        <h4>Totals</h4>
                        <spam style={detailStyle}>Bond:</spam> ${bond}
                        <br></br>
                        <span style={detailStyle}>Service Fee:</span> $
                        {serviceFee}
                        <br></br>
                        <span style={detailStyle}>Total Cost:</span> $
                        {totalCost}
                        <br></br>
                        <span style={detailStyle}>GST:</span> ${gst}
                        <br></br>
                        <span style={detailStyle}>Total (+GST):</span> $
                        {totalGST}
                    </div>
                </div>
            </div>

            <hr className="mt-4" />

            <div className="row">
                <div className="col-lg-6">
                    <div className="ms-5 mb-3">
                        <b>Phone Fix Services</b>
                        <br></br>
                        <span>42 Fuxed it Drive</span>
                        <br></br>
                        <span>Alexander</span>
                    </div>
                </div>
                <div className="col-lg-6 d-flex justify-content-lg-end">
                    <div className="me-5 ms-5 mb-3">
                        <b>Contact Us</b>
                        <br></br>
                        <b>Phone:</b> 06876543
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Invoice;
