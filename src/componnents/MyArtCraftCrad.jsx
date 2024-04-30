import React, { useState } from 'react';

import { BsArrowRight } from 'react-icons/bs';
import { FcRating } from 'react-icons/fc';
import { Link, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyArtCraftCrad = ({ data, myArts, setmyArts }) => {
  console.log(data)

  // const [ arts ,setArts] = useState(myArts)
  const {  _id, userEmail, userName, subcategory_Name, item_name, customization, description, imageURL, price, rating, processing_time, stockStatus, discount } = data



  console.log(myArts, "15")


  const handleDelete = (id) => {

    // console.log(id)

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5000/arts/${id}`, {
          method: 'DELETE',
          // headers: 

        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              })
             
              const remaningArts = myArts.filter(art => art._id !== _id)
              setmyArts(remaningArts)

            }
          })



      }
    });


  }
  //------------------------
  const handleUpdate = (id) => {
    console.log(id)
  }


  return (

    <div className='p-2 border'>
      <div className='p-2'  >
        <h1>{data.length} </h1>
        <img className='rounded-lg ' src={imageURL} alt="" />
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

      
        <Link to={`/art/${_id}`}> <button className=' bg-green-500'  > update </button></Link>
        {/* <button onClick={() => handleUpdate(_id)} className='btn'> updtate </button> */}
        <button onClick={() => handleDelete(_id)} className=' btn'> delate </button>


      </div>

    </div>
  );
};

export default MyArtCraftCrad;
