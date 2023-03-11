import React from "react"; 

export default function Item() {
    return(
        <div className="flex justify-center gap-16 mt-14">
            <div>
                <h2>Item ID:</h2>
                <h2>Description:</h2>
                <h2>Location:</h2>
                <div className="mt-6">
                    <p>Barcodes</p>
                </div>
            </div>
            <div>
                <p>Level 1 Name:</p>
                <p>Level 1 Quantity:</p>
                <p>Level 2 Name:</p>
                <p>Level 2 Quantity:</p>
                <p>Level 3 Name:</p>
                <p>Level 3 Quantity:</p>
            </div>
        </div>
    )
}