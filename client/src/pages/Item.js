import React, { useState } from "react"; 

export default function Item() {
    
    const [test, setTest ] = useState('');
    function handleChange(event) {
        const value = event.target.value;
        setTest(value)
    }

    return(
        <div className="flex justify-center gap-10 mt-14">
            <div className="flex flex-col">
                <label className="label">Item ID:</label>
                <input className="input input-bordered border-2 border-secondary mb-4 hover:border-secondary-focus" value={test} onChange={handleChange}/>
                <label>Description:</label>
                <input className="input input-bordered border-2 mb-4 h-28" type="text"/>
                <label>Location:</label>
                <input className="input input-bordered border-2 mb-4" type="text"/>
                <div className="mt-6">
                    <p>Barcodes?</p>
                </div>
            </div>
            <div className="flex flex-col">
                <label>Level 1 Name:</label>
                <input className="border border-2 border-zinc-600 rounded mb-4 w-16" type="text"/>
                <label>Level 1 Quantity:</label>
                <input className="border border-2 border-zinc-600 rounded mb-4 w-16" type="number"/>
                <label>Level 2 Name:</label>
                <input className="border border-2 border-zinc-600 rounded mb-4 w-16" type="text"/>
                <label>Level 2 Quantity:</label>
                <input className="border border-2 border-zinc-600 rounded mb-4 w-16" type="number"/>
                <label>Level 3 Name:</label>
                <input className="border border-2 border-zinc-600 rounded mb-4 w-16" type="text"/>
                <label>Level 3 Quantity:</label>
                <input className="border border-2 border-zinc-600 rounded mb-4 w-16" type="number"/>
            </div>
        </div>
    )
}