import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const Card = ({data}) => {
  console.log(data)

  const   { _id, subcategory_Name, item_name, customization,description,imageURL,price,rating ,processing_time,stockStatus,discount} =data
  return (
    
    <div className='p-2 border'>
    <div className='p-2'  >
      <h1>img</h1>
      <img className='rounded-lg ' src="https://www.shutterstock.com/image-photo/craft-sign-various-art-supplies-260nw-1648769173.jpg" alt="" />
    </div>

    <div className='p-2 border mt-2 rounded-sm'  >
        <div ><h2 className='py-2'> {item_name} </h2></div>
        <div ><h2 className='py-2'> {subcategory_Name} </h2></div>
        <div className=' px- flex justify-between' ><button className=' border p-2 ' > Add Cart</button> <p>{price} $</p> </div>

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