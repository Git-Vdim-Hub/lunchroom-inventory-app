import React from 'react';
import {Link} from 'react-router-dom';

const ItemList = ({items}) => {
    if(!items.length){
        return <h3>No Items Yet</h3>
    }
    return (
        <div className="lg:flex lg:flex-wrap lg:justify-around mt-40">
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
                <div className="card bg-base-200 shadow-lg border-2 border-primary mt-5 lg:w-96">
                    <div className="card-body p-3">
                        <h2 className="card-title">Bin: {item.location} Id: {item.item_id}</h2>
                        <p><b>Description:</b> {item.item_desc}</p>
                        <div className="grid grid-cols-2">
                            <p><b>Name 1:</b> {item.quantity1_name}</p>
                            <p><b>Qty 1:</b> {item.quantity_lvl_1}</p>
                            <p><b>Name 2:</b> {item.quantity2_name}</p>
                            <p><b>Qty 2:</b> {item.quantity_lvl_2}</p>
                            <p><b>Name 3:</b> {item.quantity3_name}</p>
                            <p><b>Qty 3:</b> {item.quantity_lvl_3}</p>
                        </div>
                        <div className="card-actions justify-end mt-2">
                            <Link to={`/Item/${item._id}`} className="btn btn-sm md:btn-md btn-primary">Edit</Link>
                        </div>
                    </div>
                </div>
                // <div className="border-2 border-primary rounded flex p-5 mt-4" 
                //     key={item._id}>Bin: {item.location} Id: {item.item_id} Description: {item.item_desc} Name 1: {item.quantity1_name} Qty 1: {item.quantity_lvl_1} Name 2: {item.quantity2_name} Qty 2: {item.quantity_lvl_2} Name 3: {item.quantity3_name} Qty 3: {item.quantity_lvl_3}
                // <Link
                // to={`/Item/${item._id}`}
                // >Edit</Link>
                // <button>Verify</button>
                // </div>
            ))}
        </div>
    )
}

export default ItemList;