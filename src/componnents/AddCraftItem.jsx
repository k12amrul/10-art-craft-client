import React from 'react';

const AddCraftItem = () => {
    return (
        <div>
            <h1>  Add Craft Item Page </h1>
            <form action="">
                <div>
                <label className="label">
                    <span className="label-text">name</span>
                </label>
                <input type="text" name="name" className="input input-bordered w-full max-w-xs" id="" />
                <br />


                <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
                </div>
            </form>
            
        </div>
    );
};

export default addCraftItem;