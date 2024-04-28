import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CardDetails = () => {

    const  data =useLoaderData()
    const {id}=useParams()


    const cardDetails = data.find( details => details._id == id )

    console.log( cardDetails)

const { imageURL ,_id } =cardDetails

    return (
        <div>
            CardDetails {_id}
            <img src={imageURL} alt="" />
        </div>
    );
};

export default CardDetails;