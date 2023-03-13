import React, { useState, useEffect } from "react"; 
import {useParams} from 'react-router-dom';
import { useQuery } from "@apollo/client";

import {QUERY_SINGLE_ITEM} from '../utils/queries'
import {UPDATE_ITEM} from '../utils/mutations'

export default function Item() {
    const {itemId} = useParams();
    const {loading, data} = useQuery(QUERY_SINGLE_ITEM, {
        variables: {itemId: itemId}
    })
    console.log(loading);
    const item = data?.item || {};

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
        <div className="flex flex-col md:flex-row justify-center gap-10 mt-14 m-8">
            <div className="flex flex-col justify-center w-72">
                <label>Item ID:</label>
                <input className="input input-bordered border-2 border-primary mb-4 hover:border-primary-focus"  value={itemState?.item_id} onChange={handleChange} placeholder={item.item_id}/>
                <label>Description:</label>
                <textarea className="input input-bordered border-2 border-primary mb-4 h-28 hover:border-primary-focus" value={itemState?.item_desc} type="text" onChange={handleChange} placeholder={item.item_desc}/>
                <label>Location:</label>
                <input className="input input-bordered border-2 border-primary mb-4 hover:border-primary-focus" value={itemState?.location} onChange={handleChange} placeholder={item.location} type="text"/>
                <div className="mt-6">
                    <p>Barcodes?</p>
                </div>
            </div>
            <div className="grid grid-cols-2 justify-items-center md:gap-5">
                <div className="flex flex-col">
                    <label>Level 1 Name:</label>
                    <input className="input input-bordered border-2 border-primary mb-4 w-32 hover:border-primary-focus" value={itemState?.quantity1_name} type="text" onChange={handleChange} placeholder={item.quantity1_name}/>
                </div>
                <div className="flex flex-col">
                    <label>Level 1 Quantity:</label>
                    <input className="input input-bordered border-2 border-primary mb-4 w-32 hover:border-primary-focus"  value={itemState?.quantity_lvl_1} type="number" onChange={handleChange} placeholder={item.quantity_lvl_1}/>
                </div>
                <div className="flex flex-col">
                    <label>Level 2 Name:</label>
                    <input className="input input-bordered border-2 border-primary mb-4 w-32 hover:border-primary-focus" value={itemState?.quantity2_name} type="text" onChange={handleChange} placeholder={item.quantity2_name}/>
                </div>
                <div className="flex flex-col">
                    <label>Level 2 Quantity:</label>
                    <input className="input input-bordered border-2 border-primary mb-4 w-32 hover:border-primary-focus" value={itemState?.quantity_lvl_2} type="number" onChange={handleChange} placeholder={item.quantity_lvl_2}/>
                </div>
                <div className="flex flex-col">
                    <label>Level 3 Name:</label>
                    <input className="input input-bordered border-2 border-primary mb-4 w-32 hover:border-primary-focus" value={itemState?.quantity3_name} type="text" onChange={handleChange} placeholder={item.quantity3_name}/>
                </div>
                <div className="flex flex-col">
                    <label>Level 3 Quantity:</label>
                    <input className="input input-bordered border-2 border-primary mb-4 w-32 hover:border-primary-focus" value={itemState?.quantity_lvl_3} type="number" onChange={handleChange} placeholder={item.quantity_lvl_3}/>
                </div>
            </div>
            <div>
                <button>Update</button>
                <button>Delete</button>
                <button>Cancel</button>
            </div>
        </div>
    )
}