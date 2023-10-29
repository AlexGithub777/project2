import React from "react";

function FormCost(props) {
    const {
        sharedPropBond,
        warranty,
        customerType,
        onCostChange, // No need to destructure individual properties
    } = props;

    // Calculate the service fee based on warranty status
    const serviceFee = warranty ? 0 : 85;

    // Calculate the bond based on the customer type
    const bond = customerType === "business" ? 0 : sharedPropBond;

    // Calculate the total cost by adding the bond and service fee
    const totalCost = bond + serviceFee;

    // Calculate the GST
    const gst = (totalCost * 15) / 100;

    // Calculate GST + total
    const totalGST = gst + totalCost;

    // Pass the calculated values to the parent component
    onCostChange({
        bond,
        serviceFee,
        totalCost,
        gst,
        totalGST,
    });

    //Component UI: HTML Rendering
    return (
        <>
            <h2>Cost</h2>
            <div class="row mt-2  ms-3">
                <label class="col-12 col-md-12 col-lg-4">Bond: ($)</label>
                <input
                    class="col-12 col-md-12 col-lg-7"
                    type="number"
                    value={bond}
                    readOnly
                />
            </div>
            <div class="row mt-1  ms-3">
                <label class="col-12 col-md-12 col-lg-4">
                    Service Fee: ($)
                </label>
                <input
                    class="col-12 col-md-12 col-lg-7"
                    type="number"
                    value={serviceFee}
                    readOnly
                />
            </div>
            <div class="row mt-1  ms-3">
                <label class="col-12 col-md-12 col-lg-4">Total: ($)</label>
                <input
                    class="col-12 col-md-12 col-lg-7"
                    type="number"
                    value={totalCost}
                    readOnly
                />
            </div>
            <div class="row mt-1 ms-3">
                <label class="col-12 col-md-12 col-lg-4">GST:</label>
                <input
                    class="col-12 col-md-12 col-lg-7"
                    type="number"
                    value={gst}
                    readOnly
                />
            </div>
            <div class="row mt-1 ms-3">
                <label class="col-12 col-md-12 col-lg-4">Total(+GST):</label>
                <input
                    class="col-12 col-md-12 col-lg-7"
                    type="number"
                    value={totalGST}
                    readOnly
                />
            </div>
        </>
    );
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default FormCost;
