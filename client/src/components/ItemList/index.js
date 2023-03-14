import React from 'react';
import {Link} from 'react-router-dom';

const ItemList = ({items}) => {
    if(!items.length){
        return <h3>No Items Yet</h3>
    }
    return (
        <div className="">
            {/* <div className="grid grid-row-2 border-2 border-primary rounded">
                <div className="row-span-1 flex">
                    <select className="select select-xs select-primary w-36">
                        <option disabled selected>Bin</option>
                        <option>Freezer</option>
                        <option>Cooler</option>
                        <option>Pantry</option>
                    </select>
                    <div className="flex justify-around w-full">
                        <h2 className="text-sm">Id</h2>
                        <h2 className="text-sm">Desc</h2>
                    </div>
                </div>
                <div className='row-span-1 flex justify-around'>
                    <h2 className="text-sm">Lvl 1 Name</h2>
                    <h2 className="text-sm">Qty</h2>
                    <h2 className="text-sm">Lvl 2 Name</h2>
                    <h2 className="text-sm">Qty</h2>
                    <h2 className="text-sm">Lvl 3 Name</h2>
                    <h2 className="text-sm">Qty</h2>
                </div>
            </div> */}
            {items.map((item) =>(
                <div className="border-2 border-primary rounded flex p-5" 
                    key={item._id}>Bin: {item.location} Id: {item.item_id} Description: {item.item_desc} Name 1: {item.quantity1_name} Qty 1: {item.quantity_lvl_1} Name 2: {item.quantity2_name} Qty 2: {item.quantity_lvl_2} Name 3: {item.quantity3_name} Qty 3: {item.quantity_lvl_3}
                <Link
                to={`/Item/${item._id}`}
                >Edit</Link>
                <button>Verify</button>
                </div>
            ))}
        </div>
    )
}

export default ItemList;