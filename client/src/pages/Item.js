import React, { useState, useEffect } from "react"; 
import {useParams} from 'react-router-dom';
import { useQuery } from "@apollo/client";

import {QUERY_SINGLE_ITEM} from '../utils/queries'

export default function Item() {
    const [test, setTest ] = useState('');
    const {itemId} = useParams();
    const {loading, data} = useQuery(QUERY_SINGLE_ITEM, {
        variables: {itemId: itemId}
    })
    console.log(loading);
    const item = data?.item || {};
    //console.log(item)
    const [itemState, setItemState]=useState({
        item_id: '',
        item_desc: '',
    });
    useEffect(() => {
       if(data){
        setItemState(data)
       } 
    },[loading])
    if(loading) {
        return <div>Loading...</div>;
    }
    function handleChange(event) {
        const value = event.target.value;
        console.log(value);
        setItemState(value)
    }
    console.log("this is the local state right now", itemState)
    return(
        <div className="flex justify-center gap-10 mt-14">
            <div className="flex flex-col">
                <label>Item ID:</label>
                <input className="border border-2 border-zinc-600 rounded mb-4" value={itemState?.item_id} onChange={handleChange} placeholder={item.item_id}/>
                <label>Description:</label>
                <input className="border border-2 border-zinc-600 rounded mb-4" value={itemState?.item_desc} type="text" onChange={handleChange} placeholder={item.item_desc}/>
                <label>Location:</label>
                <input className="border border-2 border-zinc-600 rounded mb-4" value={item.location} type="text"/>
                <div className="mt-6">
                    <p>Barcodes?</p>
                </div>
            </div>
            <div className="flex flex-col">
                <label>Level 1 Name:</label>
                <input className="border border-2 border-zinc-600 rounded mb-4 w-16" value={item.quantity1_name} type="text"/>
                <label>Level 1 Quantity:</label>
                <input className="border border-2 border-zinc-600 rounded mb-4 w-16" value={item.quantity_lvl_1} type="number"/>
                <label>Level 2 Name:</label>
                <input className="border border-2 border-zinc-600 rounded mb-4 w-16" value={item.quantity2_name} type="text"/>
                <label>Level 2 Quantity:</label>
                <input className="border border-2 border-zinc-600 rounded mb-4 w-16" value={item.quantity_lvl_2} type="number"/>
                <label>Level 3 Name:</label>
                <input className="border border-2 border-zinc-600 rounded mb-4 w-16" value={item.quantity3_name} type="text"/>
                <label>Level 3 Quantity:</label>
                <input className="border border-2 border-zinc-600 rounded mb-4 w-16" value={item.quantity_lvl_3} type="number"/>
            </div>
        </div>
    )
}