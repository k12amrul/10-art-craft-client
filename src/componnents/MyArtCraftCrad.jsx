import React, { useState } from 'react';

import { BsArrowRight } from 'react-icons/bs';
import { FcRating } from 'react-icons/fc';
import { Link, NavLink } from 'react-router-dom';

const MyArtCraftCrad = ({ data }) => {

  const [ arts ,setArts] = useState(data)
  const { image, _id, userEmail, userName, subcategory_Name, item_name, customization, description, imageURL, price, rating, processing_time, stockStatus, discount } = data


// console.log(data ,'12' )
console.log(data ,'12' ,_id )

  const handleDelate = (id) => {

    console.log(id)
    

    fetch(`http://localhost:5000/arts/${id}`, {
      method: "DELETE",


    })
      .then(res => res.json())
      .then(d => {
        console.log(d ,"28")

        // if (data.deletedCount > 0) {
        //   alert('delete successfully')
        //   const remaining = arts.filter( art => art._id   !== id)
        //  setArts( remaining)

        // //  console.log( remaining)
          

        // }


      }


      )


  }

  const handleUpdate = (id) => {
    console.log(id)
  }


  return (

    <div className='p-2 border'>
      <div className='p-2'  >
        <h1>{data.length} </h1>
        <img className='rounded-lg ' src={image} alt="" />
      </div>

      <div className='p-2 border mt-2 rounded-sm'  >
        <div ><h2 className='py-2'> {item_name} </h2></div>
        <div ><h2 className='py-2'> {subcategory_Name} </h2></div>
        <div className=' px- flex justify-between' > <p className=' flex  justify-center items-center gap-2' > <FcRating />{rating} </p>    <p>{price} $</p> </div>

      </div>

      <div className=' flex justify-between mt-2' >

        <div className='flex  items-center '>

          <div className="badge badge-secondary">{stockStatus} </div>
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
      <div className=' flex justify-between mt-2 '>
      {/* <Link to={`/update/${data._id}`}> <button className=' bg-green-500'  > update </button></Link> */}
        {/* <button onClick={() => handleUpdate(_id)} className='btn'> updtate </button> */}
        <button onClick={() => handleDelate(data?._id)} className=' btn'> delate </button>


      </div>

    </div>
  );
};

export default MyArtCraftCrad;
