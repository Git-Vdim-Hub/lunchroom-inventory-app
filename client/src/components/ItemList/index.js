import React from 'react';
import {Link} from 'react-router-dom';

const ItemList = ({items}) => {
    if(!items.length){
        return <h3>No Items Yet</h3>
    }
    return (
        <div className="">
            Bin Item ID Item Description Level 1 Qty Level 1 Qty Level 3 Qty
            {items.map((item) =>(
                <div key={item._id}>{item.location} {item.item_id} {item.item_desc} {item.quantity1_name} {item.quantity_lvl_1} {item.quantity2_name} {item.quantity_lvl_2} {item.quantity3_name} {item.quantity_lvl_3}
                <button>Edit</button>
                <button>Verify</button>
                </div>
            ))}
        </div>
    )
}

export default ItemList;