import React from 'react';

const AddProduct = () => {

const handleAddProduct =( e) =>{
    e.preventDefault()
    const form= e.target

    const subcategory_Name = form.subcategory_Name.value
        const item_name = form.item_name.value
        console.log(subcategory_Name, item_name)
    

}

    return (
        <div className='max-w-[1150px] mx-auto'  >
        <h1>  Add Craft Item Page </h1>
        <form  onSubmit={handleAddProduct}  className=' mt-10 bg-green-200' action="">
            <div className=' grid grid-cols-1 md:grid-cols-2 '>

            
            <div  className='form-control px-2'>
            <label className="label">
                <span className="label-text">Subcategory Name</span>
            </label>
            <input name='subcategory_Name' type="text" placeholder="Enter Subcategory Name" className="input input-bordered input-secondary w-full  " />
            <br />
            </div>
            <div  className='form-control px-2'>
            <label className="label">
                <span className="label-text"> Item Name</span>
            </label>
            <input name='item_name' type="text" placeholder="Item Name" className="input input-bordered input-secondary w-full  " />
            <br />
            </div>
            <div  className='form-control px-2'>
            <label className="label">
                <span className="label-text">Short Description</span>
            </label>
            <input name='description' type="text" placeholder="Short Description" className="input input-bordered input-secondary w-full  " />
            <br />
            </div>
            <div  className='form-control px-2'>
            <label className="label">
                <span className="label-text"> Image URL</span>
            </label>
            <input name=' imageURL' type="text" placeholder=" Image URL" className="input input-bordered input-secondary w-full  " />
            <br />
            </div>
            <div  className='form-control px-2'>
            <label className="label">
                <span className="label-text">Price</span>
            </label>
            <input name='price' type="text" placeholder="Price" className="input input-bordered input-secondary w-full  " />
            <br />
            </div>
            <div  className='form-control px-2'>
            <label className="label">
                <span className="label-text"> Rating</span>
            </label>
            <input name='rating' type="text" placeholder="Rating" className="input input-bordered input-secondary w-full  " />
            <br />
            </div>
            <div  className='form-control px-2'>
            <label className="label">
                <span className="label-text"> Customization</span>
            </label>
            <input name='customization' type="text" placeholder="Customization" className="input input-bordered input-secondary w-full  " />
            <br />
            </div>

            <div  className='form-control px-2'>
            <label className="label">
                <span className="label-text"> Processing Time</span>
            </label>
            <input name='processing_time' type="text" placeholder="Processing Time" className="input input-bordered input-secondary w-full  " />
            <br />
            </div>


            <div  className='form-control px-2'>
            <label className="label">
                <span className="label-text"> Stock Status</span>
            </label>
            <input name='stockStatus' type="text" placeholder="Stock Status" className="input input-bordered input-secondary w-full  " />
            <br />
            </div>
            <div  className='form-control px-2'>
            <label className="label">
                <span className="label-text"> Discount </span>
            </label>
            <input name='discount' type="text" placeholder="Discount " className="input input-bordered input-secondary w-full  " />
            <br />
            </div>
            
            
            
            <div  className='form-control px-2'>
            <label className="label">
                <span className="label-text"> User Name</span>
            </label>
            <input name='userName' type="text" placeholder="User Name" className="input input-bordered input-secondary w-full  " />
            <br />
            </div>

            <div  className='form-control px-2'>
            <label className="label">
                <span className="label-text"> User Email</span>
            </label>
            <input name='userEmail' type="text" placeholder="User Name" className="input input-bordered input-secondary w-full  " />
            <br />
            </div>

            </div>
            <input  className='btn btn-block ' type="submit" name="" id="" />

            

        </form>
        
    </div>
    );
};

export default AddProduct;