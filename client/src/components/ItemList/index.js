import React from 'react';
import {Link} from 'react-router-dom';

const ItemList = ({items}) => {
    if(!items.length){
        return <h3>No Items Yet</h3>
    }
    return (
        <div className="lg:flex lg:flex-wrap lg:justify-around mt-40">
            {items.map((item) =>(
                <div className="card bg-base-200 shadow-lg border-2 border-primary mt-5 lg:w-96" key={item._id}>
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
            ))}
        </div>
    )
}

export default ItemList;