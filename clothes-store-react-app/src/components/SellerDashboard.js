import React, { useState } from 'react';
// import axios from 'axios';

export const SellerDashboard = () => {

    const [ itemToSell, setItemToSell ] = useState({
        brand: '',
        condition: '',
        itemType: '',
        size: '',
        description: '',
        image: 'workOutHowToPassImages'

    });
 
const handleChange = (event) => {
    setItemToSell({
        ...itemToSell,
        [event.target.name]: event.target.value
    });
}

const handleSubmit = (event) => {
    event.preventDefault();
    console.log(itemToSell);
    // axios.post('http://localhost:9000/api/clothesManagement/')
}


    return (
        <div>
        <h1>Seller Dashboard</h1>

        <h3>How it works:</h3>
        <p>Infographic</p>

        <form onSubmit={event => handleSubmit(event)}>
            <label>Brand:</label>
            <input 
            type="text"
            placeholder="eg. Levi's"
            name="brand"
            value={itemToSell.brand}
            onChange={event => handleChange(event)}
            />
            <br/>

            <label>Condition:</label>
            <select name="condition">
                <option value="neverWorn">Never Worn</option>
                <option value="wornOnce">Worn Once</option>
                <option value="perfectCondition">Worn but Perfect</option>
                <option value="good">Good</option>
                <option value="looksWorn">Looks Worn</option>
                <option value="ruggedOrDamaged">Rugged/Damaged(see Description)</option>
            </select>
            <br/>

            <label>Item Type:</label>
            <input 
            type="text"
            placeholder="Denim Jacket"
            name="itemType"
            value={itemToSell.itemType}
            onChange={event => handleChange(event)}
            />
            <br/>

            <label>Size:</label>
            <input 
            type="text"
            name="size"
            placeholder="eg. Medium / 14"
            value={itemToSell.size}
            onChange={event => handleChange(event)}
            />
            <br/>

            <label>Description:</label>
            <textarea 
            type="text"
            placeholder="How long you've had it, the condition it is in, your favourite things about it, etc."
            name="description"
            value={itemToSell.description}
            onChange={event => handleChange(event)}
            />
            <br/>

            {/* <label>Add Images:</label>
            <input
            type="text"
            placeholder="Here will be where you add images... Code Pending!"
            // Make image input actually work!!! 
            /> */}
            <button>Push to MarketPlace</button>
        </form>
        </div>
    )
}