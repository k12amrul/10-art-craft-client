import React, { useEffect } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FcRating } from 'react-icons/fc';
import { NavLink } from 'react-router-dom';

const Card = ({data}) => {



  // console.log(data)

  const   { _id,image, subcategory_Name, item_name, customization,description,imageURL,price,rating ,processing_time,stockStatus,discount} =data
 
  return (
    
    <div className='p-2 border'>
    <div className='p-2'  >
      
      <img className='rounded-lg ' src={image} alt="" />
    </div>

    <div className='p-2 border mt-2 rounded-sm'  >
        <div ><h2 className='py-2'> {item_name} </h2></div>
        <div ><h2 className='py-2'> {subcategory_Name} </h2></div>
        <div className=' px- flex justify-between' > <p className=' flex  justify-center items-center gap-2' > <FcRating   />{rating} </p>    <p>{price} $</p> </div>

    </div>

    <div className=' flex justify-between mt-2' >

<div className='flex  items-center '>
 
  <div className="badge badge-secondary">{ stockStatus} </div>
</div>


<div className='flex  items-center '>
  <NavLink to={`/artDetails/${_id}`} className='flex items-center' >

    <button className='btn' >
      Details
      <BsArrowRight />
    </button>
    {/* <h4 className=' ml-2'> Details</h4> */}
  </NavLink>
</div>




</div>
    
    </div>
  );
};

export default Card;