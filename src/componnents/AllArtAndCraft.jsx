
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
        <div className=' max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3' >
            {
                alldata?.map( (data ,i)  => <AllArtAndCraftCard
                data={data}
                key={i}
                > 

                </AllArtAndCraftCard> )

            }
            
        

        
        </div>
    );
};

export default AllArtAndCraft;