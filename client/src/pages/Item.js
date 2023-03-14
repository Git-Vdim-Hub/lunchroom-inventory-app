import React, { useState} from "react"; 
import {useParams} from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";

import Auth from "../utils/auth";
import { redirect } from "../utils/helpers";

import { QUERY_SINGLE_ITEM } from "../utils/queries";
import { UPDATE_ITEM } from "../utils/mutations";

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
                const {item} = cache.readQuery({query: QUERY_SINGLE_ITEM, variables: {itemId: itemId}});
                console.log(item);

                cache.writeQuery({
                    query: QUERY_SINGLE_ITEM,
                    data: {item: [updateItem, item]}
                })
            } catch (e) {
                console.error(e)
            }
        }
    })

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try{
            return await updateItem({
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
    
    if(loading) {
        return <div>Loading...</div>;
    }
    return(
        <div className="flex justify-center gap-10 mt-14">
            <form onSubmit={handleFormSubmit}
            >
                <div className="flex flex-col">
                    <label>Item ID:</label>
                    <input className="border border-2 border-zinc-600 rounded mb-4" onChange={(event)=>{const value = event.target.value;
                    setItemId(value);}} placeholder={item.item_id}/>
                    <label>Description:</label>
                    <input className="border border-2 border-zinc-600 rounded mb-4" type="text" onChange={(event)=>{const value = event.target.value; setItemDesc(value);}} placeholder={item.item_desc}/>
                    <label>Location:</label>
                    <input className="border border-2 border-zinc-600 rounded mb-4" onChange={(event)=>{const value = event.target.value; setItemLocation(value)}} placeholder={item.location} type="text"/>
                    <div className="mt-6">
                        <p>Barcodes?</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <label>Level 1 Name:</label>
                    <input className="border border-2 border-zinc-600 rounded mb-4 w-16" onChange={(event)=>{const value=event.target.value; setQuantity1ItemName(value)}} placeholder={item.quantity1_name} type="text"/>
                    <label>Level 1 Quantity:</label>
                    <input className="border border-2 border-zinc-600 rounded mb-4 w-16" type="number" onChange={(event)=>{const value=event.target.value; setLvl1Quantity(value)}} placeholder={item.quantity_lvl_1}/>
                    <label>Level 2 Name:</label>
                    <input className="border border-2 border-zinc-600 rounded mb-4 w-16" type="text" onChange={(event)=>{const value = event.target.value; setQuantity2ItemName(value)}} placeholder={item.quantity2_name}/>
                    <label>Level 2 Quantity:</label>
                    <input className="border border-2 border-zinc-600 rounded mb-4 w-16" type="number" onChange={(event)=>{const value = event.target.value; setLvl2Quantity(value);}} placeholder={item.quantity_lvl_2}/>
                    <label>Level 3 Name:</label>
                    <input className="border border-2 border-zinc-600 rounded mb-4 w-16" type="text" onChange={(event)=>{const value= event.target.value; setQuantity3ItemName(value);}} placeholder={item.quantity3_name}/>
                    <label>Level 3 Quantity:</label>
                    <input className="border border-2 border-zinc-600 rounded mb-4 w-16" type="number" onChange={(event)=>{const value = event.target.value; setLvl3Quantity(value)}} placeholder={item.quantity_lvl_3}/>
                </div>
                <button type="submit">Update</button>
                <button>Delete</button>
                <button>Cancel</button>
            </form>
        </div>
    )
}
