import React, { useEffect } from "react";

function FormCost(props) {
    const { sharedBond, warranty, customerType, onCostChange } = props;

    // Calculate the service fee based on warranty status
    const serviceFee = warranty ? 0 : 85;

    // Calculate the bond based on the customer type
    const bond = customerType === "business" ? 0 : sharedBond;

    // Calculate the total cost by adding the bond and service fee
    const totalCost = bond + serviceFee;

    // Calculate the GST
    const gst = (totalCost * 15) / 100;

    // Calculate GST + total
    const totalGST = gst + totalCost;

    // Format the calculated values to two decimal points
    const formattedBond = bond.toFixed(2);
    const formattedServiceFee = serviceFee.toFixed(2);
    const formattedTotalCost = totalCost.toFixed(2);
    const formattedGST = gst.toFixed(2);
    const formattedTotalGST = totalGST.toFixed(2);

    useEffect(() => {
        // Call the callback function in the parent component
        onCostChange({
            bond: formattedBond,
            serviceFee: formattedServiceFee,
            totalCost: formattedTotalCost,
            gst: formattedGST,
            totalGST: formattedTotalGST,
        });
    }, [
        onCostChange,
        formattedBond,
        formattedServiceFee,
        formattedTotalCost,
        formattedGST,
        formattedTotalGST,
    ]);

    //Component UI: HTML Rendering
    return (
        <>
            <h2>Cost</h2>
            <div className="row mt-2  ms-3">
                <label className="col-12 col-md-12 col-lg-4">Bond: ($)</label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="number"
                    value={formattedBond}
                    readOnly
                />
            </div>
            <div className="row mt-1  ms-3">
                <label className="col-12 col-md-12 col-lg-4">
                    Service Fee: ($)
                </label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="number"
                    value={formattedServiceFee}
                    readOnly
                />
            </div>
            <div className="row mt-1  ms-3">
                <label className="col-12 col-md-12 col-lg-4">Total: ($)</label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="number"
                    value={formattedTotalCost}
                    readOnly
                />
            </div>
            <div className="row mt-1 ms-3">
                <label className="col-12 col-md-12 col-lg-4">GST:</label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="number"
                    value={formattedGST}
                    readOnly
                />
            </div>
            <div className="row mt-1 ms-3">
                <label className="col-12 col-md-12 col-lg-4">
                    Total(+GST):
                </label>
                <input
                    className="col-12 col-md-12 col-lg-7"
                    type="number"
                    value={formattedTotalGST}
                    readOnly
                />
            </div>
        </>
    );
}

export default FormCost;
