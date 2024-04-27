
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllArtAndCraft = () => {

const  data = useLoaderData()
    return (
        <div>
             AllArtAndCraft.jsx {data.length}
        </div>
    );
};

export default AllArtAndCraft;