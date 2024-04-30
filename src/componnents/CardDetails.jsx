import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CardDetails = () => {

    const data = useLoaderData()
    const { id } = useParams()



    const cardDetails = data.find(details => details._id == id)

    console.log(cardDetails)
    const { _id, subcategory_Name, short_description, item_name, customization, description, imageURL, price, rating, processing_time, stockStatus, discount } = cardDetails

    // const { imageURL ,_id } =cardDetails

    return (
        <div data-aos="fade-up" className='mt-20 '  >
            <div className="hero max-h-[ 500px]" >
                <img className='p-1 w-[90%]   border ' src={imageURL} alt="" />
            </div>
            <div className=' mt-11 border p-10 mx-auto ' >
                <div>

                    <h1 className="text-2xl font-bold">  Overview </h1>
                    <hr />
                    <h1 className="text-3xl font-bold"> {item_name} </h1>
                    <h1 className="text-3xl my-2  font-bold"> {subcategory_Name} </h1>
                    <h1 className="text-3xl font-bold"> {processing_time} </h1>
                    <h1 className="text-3xl font-bold"> {stockStatus} </h1>

                </div>
                <h4 className="text-1xl font-bold" > details :   {short_description} </h4>
                <hr />


                <div className=' s ' >
                    <h1 className="text-2xl font-bold mt-2 ">  Description {description} </h1>
                    <h4 className='text-1xl font-bold mt-2 ' > price  : {price} </h4>
                    {/* <h4 text-1xl  mt-2> status  : {status} </h4> */}
                    <div className="badge badge-secondary p-4">{customization} </div>





                </div>


                <div>
                </div>








            </div>
        </div>
    );
};

export default CardDetails;