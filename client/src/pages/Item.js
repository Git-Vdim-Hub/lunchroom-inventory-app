import React, { useState } from "react"; 
import {useParams} from 'react-router-dom';
import { useQuery } from "@apollo/client";

import {QUERY_SINGLE_ITEM} from '../utils/queries'

export default function Item() {
    const [test, setTest ] = useState('');
    const {itemId} = useParams();
    const {loading, data} = useQuery(QUERY_SINGLE_ITEM, {
        variables: {itemId: itemId}
    })

    const item = data?.item || {};

    if(loading) {
        return <div>Loading...</div>;
    }
    function handleChange(event) {
        const value = event.target.value;
        setTest(value)
    }

    return(
        <div className="flex justify-center gap-10 mt-14">
            <div className="flex flex-col">
                <label>Item ID:</label>
                <input className="border border-2 border-zinc-600 rounded mb-4" value={item.item_id} onChange={handleChange}/>
                <label>Description:</label>
                <input className="border border-2 border-zinc-600 rounded mb-4" type="text"/>
                <label>Location:</label>
                <input className="border border-2 border-zinc-600 rounded mb-4" type="text"/>
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