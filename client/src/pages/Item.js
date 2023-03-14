import React, { useState, useEffect } from "react"; 
import {useParams} from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";

import {QUERY_SINGLE_ITEM} from '../utils/queries'
import {UPDATE_ITEM} from '../utils/mutations'

export default function Item() {
    const {itemId} = useParams();
    const {loading, data} = useQuery(QUERY_SINGLE_ITEM, {
        variables: {itemId: itemId}
    })

    const item = data?.item || {};

    const[item1Id, setItemId] = useState();
    const[itemDesc, setItemDesc] = useState();
    const[itemLocation, setItemLocation]=useState();
    const[quantity1ItemName, setQuantity1ItemName]=useState();
    const[lvl1Quantity, setLvl1Quantity]=useState();
    const[quantity2ItemName, setQuantity2ItemName]=useState();
    const[lvl2Quantity, setLvl2Quantity]=useState();
    const[quantity3ItemName, setQuantity3ItemName]=useState();
    const[lvl3Quantity, setLvl3Quantity]=useState();
    
    
    const [updateItem, {error}] = useMutation(UPDATE_ITEM, {
        update(cache, {data: {updateItem}}) {
            try{
                const {items} = cache.readQuery({query: QUERY_SINGLE_ITEM});

                cache.writeQuery({
                    query: QUERY_SINGLE_ITEM,
                    data: {items: [updateItem, ...items]}
                })
            } catch (e) {
                console.error(e)
            }
        }
    })

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try{
            const {data} = await updateItem({
                variables: {
                    updateItemId: itemId,
                    itemId: item1Id,
                    itemDesc: itemDesc,
                    location: itemLocation,
                    quantity1Name: quantity1ItemName,
                    quantityLvl1: lvl1Quantity,
                    quantity2Name:quantity2ItemName,
                    quantityLvl2: lvl2Quantity,
                    quantity3Name: quantity3ItemName,
                    quantityLvl3: lvl3Quantity
                }
            })
        } catch (err) {
            console.error(err);
        }
    }
    
    function handleChange(event) {
        const value = event.target.value;
        console.log(value);
        setItemId(value)
    }
    if(loading) {
        return <div>Loading...</div>;
    }
    return(
        <div>
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
            </div>
            <div className="flex justify-center gap-5">
                <button className="btn md:w-36">Update</button>
                <button className="btn md:w-36">Delete</button>
                <button className="btn md:w-36">Cancel</button>
            </div>
        </div>
    )
}