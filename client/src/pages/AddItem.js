import React, { useState } from "react";

export default function AddItem() {
    const [item_id, setItemId] = useState('');
    const [item_desc, setItemDesc] = useState ('');
    const [location, setLocation] = useState('');
    const [quantity1Name, setQuantity1Name] = useState('');
    const [quantityLvl1, setQuantityLvl1] = useState('');
    const [quantity2Name, setQuantity2Name] = useState('');
    const [quantityLvl2, setQuantityLvl2] = useState('');
    const [quantity3Name, setQuantity3Name] = useState('');
    const [quantityLvl3, setQuantityLvl3] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            item_id: item_id,
            item_desc: item_desc,
            location: location,
            quantity1Name: quantity1Name,
            quantity2Name: quantity2Name,
            quantity3Name: quantity3Name,
            quantityLvl1: quantityLvl1,
            quantityLvl2: quantityLvl2,
            quantityLvl3: quantityLvl3
        };
        console.log(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="item-id">Item ID:</label>
          <input id="item-id" type="text" value={item_id} onChange={(e) => setItemId(e.target.value)} />
    
          <label htmlFor="item-desc">Item Description:</label>
          <input id="item-desc" type="text" value={item_desc} onChange={(e) => setItemDesc(e.target.value)} />
    
          <label htmlFor="location">Location:</label>
          <input id="location" type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
    
          <label htmlFor="quantity1-name">Quantity 1 Name:</label>
          <input id="quantity1-name" type="text" value={quantity1Name} onChange={(e) => setQuantity1Name(e.target.value)} />
    
          <label htmlFor="quantity-lvl-1">Quantity Level 1:</label>
          <input id="quantity-lvl-1" type="text" value={quantityLvl1} onChange={(e) => setQuantityLvl1(e.target.value)} />
    
          <label htmlFor="quantity2-name">Quantity 2 Name:</label>
          <input id="quantity2-name" type="text" value={quantity2Name} onChange={(e) => setQuantity2Name(e.target.value)} />
    
          <label htmlFor="quantity-lvl-2">Quantity Level 2:</label>
          <input id="quantity-lvl-2" type="text" value={quantityLvl2} onChange={(e) => setQuantityLvl2(e.target.value)} />
    
          <label htmlFor="quantity3-name">Quantity 3 Name:</label>
          <input id="quantity3-name" type="text" value={quantity3Name} onChange={(e) => setQuantity3Name(e.target.value)} />
    
          <label htmlFor="quantity-lvl-3">Quantity Level 3:</label>
          <input id="quantity-lvl-3" type="text" value={quantityLvl3} onChange={(e) => setQuantityLvl3(e.target.value)} />
    
          <button type="submit">Submit</button>
        </form>
      );
}