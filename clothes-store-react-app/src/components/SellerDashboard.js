import React from 'react';

export const SellerDashboard = () => {

    return (
        <div>
        <h1>Seller Dashboard</h1>

        <h3>How it works:</h3>
        <p>Infographic</p>

        <form>
            <label>Brand:</label>
            <input 
            type="text"
            placeholder="eg. Levi's"
            name="brand"
            />
            <br/>

            <label>Condition:</label>
            <select>
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
            />
            <br/>

            <label>Size:</label>
            <input 
            type="text"
            placeholder="eg. Medium / 14"
            />
            <br/>

            <label>Description:</label>
            <textarea 
            type="text"
            placeholder="How long you've had it, the condition it is in, your favourite things about it, etc."
            name="description"
            />
            <br/>

            <label>Add Images:</label>
            <input
            type="text"
            placeholder="Here will be where you add images... Code Pending!"
            />

            <button>Push to MarketPlace</button>
        </form>
        </div>
    )
}