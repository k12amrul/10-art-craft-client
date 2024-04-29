
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FcRating } from 'react-icons/fc';
import { NavLink } from 'react-router-dom';

import { useLoaderData } from 'react-router-dom';
import AllArtAndCraftCard from './AllArtAndCraftCard';

const AllArtAndCraft = () => {

const alldata = useLoaderData()

// console.log(data)
    return (
        
        // <div className=' max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3' >
            
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th> No </th>
        <th>item_name </th>
        <th>subcategory_Name</th>
        <th> price</th>
        <th> Details</th>
      </tr>
    </thead>

            
            {
                alldata?.map( (data ,index)  => 
                
                
                <AllArtAndCraftCard
                data={data}
                key={index}
                index={index}
                > 

                </AllArtAndCraftCard> )

            }
            
            
  </table>

        
        // </div>
    );
};

export default AllArtAndCraft;