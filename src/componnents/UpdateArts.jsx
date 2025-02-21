import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../cotexts/AuthProvider';
import Swal from 'sweetalert2';

const UpdateArts = () => {


    const { user } = useContext(AuthContext)
    const updtData = useLoaderData()
    // console.log( updtData)
    const {_id } =updtData


    const handleUpdateItem = (e) => {
        e.preventDefault()
        const form = e.target

        const subcategory_Name = form.subcategory_Name.value
        const item_name = form.item_name.value
        const customization = form.customization.value
        const description = form.description.value
        const imageURL = form.imageURL.value
        const price = form.price.value
        const rating = form.rating.value
        const processing_time = form.processing_time.value
        const stockStatus = form.stockStatus.value
        const discount = form.discount.value
        const user_email = form.user_email.value
        const user_name = form.user_name.value
        // const  = form..value



        const data = { user_email, user_name, subcategory_Name, item_name, customization, description, imageURL, price, rating, processing_time, stockStatus, discount }

        console.log(data)



        fetch(`https://a-11-server-eight.vercel.app/art/${_id}`, {
            method: "PUT",
            headers: {
                // "Content-Type": "application/json",
                "content-type": "application/json",
            },
            body: JSON.stringify(data),


        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    // alert('delete successfully')
                    Swal.fire({
                        title: 'successful ',
                        text: 'successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                        
                    })

                }
            }


            )






    }

    return (
        <div className='max-w-[1150px] mx-auto'  >
            <h1>  Add Craft Item Page </h1>
            <form onSubmit={handleUpdateItem} className=' mt-10 bg-green-200' action="">
                <div className=' grid grid-cols-1 md:grid-cols-2 '>


                    <div className='form-control px-2'>
                        <label className="label">
                            <span className="label-text">Subcategory Name</span>
                        </label>
                        <input name='subcategory_Name' type="text" placeholder="Enter Subcategory Name" className="input input-bordered input-secondary w-full  " />
                        <br />
                    </div>
                    <div className='form-control px-2'>
                        <label className="label">
                            <span className="label-text"> Item Name</span>
                        </label>
                        <input name='item_name' type="text" placeholder="Item Name" className="input input-bordered input-secondary w-full  " />
                        <br />
                    </div>
                    <div className='form-control px-2'>
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <input name='description' type="text" placeholder="Short Description" className="input input-bordered input-secondary w-full  " />
                        <br />
                    </div>
                    <div className='form-control px-2'>
                        <label className="label">
                            <span className="label-text"> Image URL</span>
                        </label>
                        <input name='imageURL' type="text" placeholder=" Image URL" className="input input-bordered input-secondary w-full  " />
                        <br />
                    </div>
                    <div className='form-control px-2'>
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input name='price' type="text" placeholder="Price" className="input input-bordered input-secondary w-full  " />
                        <br />
                    </div>
                    <div className='form-control px-2'>
                        <label className="label">
                            <span className="label-text"> Rating</span>
                        </label>
                        <input name='rating' type="text" placeholder="Rating" className="input input-bordered input-secondary w-full  " />
                        <br />
                    </div>
                    <div className='form-control px-2'>
                        <label className="label">
                            <span className="label-text"> Customization</span>
                        </label>
                        <input name='customization' type="text" placeholder="Customization" className="input input-bordered input-secondary w-full  " />
                        <br />
                    </div>

                    <div className='form-control px-2'>
                        <label className="label">
                            <span className="label-text"> Processing Time</span>
                        </label>
                        <input name='processing_time' type="text" placeholder="Processing Time" className="input input-bordered input-secondary w-full  " />
                        <br />
                    </div>


                    <div className='form-control px-2'>
                        <label className="label">
                            <span className="label-text"> Stock Status</span>
                        </label>
                        <input name='stockStatus' type="text" placeholder="Stock Status" className="input input-bordered input-secondary w-full  " />
                        <br />
                    </div>
                    <div className='form-control px-2'>
                        <label className="label">
                            <span className="label-text"> Discount </span>
                        </label>
                        <input name='discount' type="text" placeholder="Discount " className="input input-bordered input-secondary w-full  " />
                        <br />
                    </div>



                    <div className='form-control px-2'>
                        <label className="label">
                            <span className="label-text"> User Name</span>
                        </label>
                        <input name='user_name' defaultValue={user.displayName}
                            type="text" placeholder="User Name" className="input input-bordered input-secondary w-full  " />
                        <br />
                    </div>

                    <div className='form-control px-2'>
                        <label className="label">
                            <span className="label-text"> User Email</span>
                        </label>
                        <input name='user_email' defaultValue={user?.email} type="text" placeholder="User Name" className="input input-bordered input-secondary w-full  " />
                        <br />
                    </div>

                </div>
                <div className='flex justify-center  items-center  '>

                    <input className='btn btn-block max-w-96 ' type="submit" name="" id="" />
                </div>



            </form>

        </div>
    );
};

export default UpdateArts;