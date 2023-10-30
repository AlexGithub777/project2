import React, { useState } from "react";

const componentStyles = {
    dropContainer: {
        border: "2px solid black",
        backgroundColor: "white",
        padding: "10px",
        margin: "10px",
        minHeight: "100px",
    },
    courtesyItem: {
        border: "1px solid black",
        backgroundColor: "white",
        margin: "5px",
        padding: "5px",
        cursor: "pointer",
    },
    selected: {
        backgroundColor: "lightgray",
    },
    selectedItems: {
        marginTop: "20px",
    },
    selectedItem: {
        border: "1px solid black",
        backgroundColor: "lightgray",
        margin: "5px",
        padding: "5px",
        display: "inline-block",
        cursor: "pointer",
    },
};

function FormCourtesyPhone({
    passDataToParent,
    setSelectedItems,
    selectedItems,
}) {
    const [courtesyList] = useState([
        { id: 1, type: "phone", name: "iPhone", bond: 275 },
        { id: 2, type: "phone", name: "Samsung Galaxy", bond: 100 },
        { id: 3, type: "phone", name: "Nokia", bond: 100 },
        { id: 4, type: "charger", name: "iPhone Charger", bond: 30 },
        { id: 5, type: "charger", name: "Samsung Charger", bond: 30 },
        { id: 6, type: "charger", name: "Nokia Charger", bond: 30 },
    ]);

    const handleDragStart = (e, item) => {
        e.dataTransfer.setData("text/plain", item.id.toString());
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const itemId = e.dataTransfer.getData("text/plain");
        const selectedItem = courtesyList.find(
            (item) => item.id === parseInt(itemId, 10)
        );

        // Check if the selected item is already in the array
        if (
            selectedItem &&
            !selectedItems.some((item) => item.id === selectedItem.id)
        ) {
            setSelectedItems([...selectedItems, selectedItem]);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const removeItem = (item) => {
        const updatedItems = selectedItems.filter(
            (selectedItem) => selectedItem.id !== item.id
        );
        setSelectedItems(updatedItems);
    };

    // Calculate total bond whenever selected items change
    const totalBond = selectedItems.reduce(
        (total, item) => total + item.bond,
        0
    );

    // Notify the parent component about the updated total bond
    passDataToParent(totalBond);

    return (
        <div>
            <h2>Courtesy Phone</h2>
            <p style={{ color: "yellow" }}>
                You can select a maximum of 1 unit per item.
            </p>

            <div className="row mt-2 ms-3">
                {courtesyList.map((item) => (
                    <div
                        style={componentStyles.courtesyItem}
                        key={item.id}
                        draggable
                        onDragStart={(e) => handleDragStart(e, item)}
                        className={`courtesy-item ${
                            selectedItems.includes(item) ? "selected" : ""
                        }`}
                    >
                        {item.name} - Bond: ${item.bond}
                    </div>
                ))}
            </div>
            <div
                className="drop-container"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                style={componentStyles.dropContainer}
            >
                <h4>Drag and drop items here:</h4>
                <div
                    className="selected-items"
                    style={componentStyles.selectedItems}
                >
                    <h4>Selected items:</h4>
                    {selectedItems.map((item) => (
                        <div
                            key={item.id}
                            className="selected-item"
                            style={componentStyles.selectedItem}
                        >
                            {item.name} - Bond: ${item.bond}
                            <button onClick={() => removeItem(item)}>
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FormCourtesyPhone;
