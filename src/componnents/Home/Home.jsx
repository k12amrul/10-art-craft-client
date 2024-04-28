import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card';

const Home = () => {

    const data=useLoaderData()

    return (
        <div>
            <Banner  className=' mt-10 ' ></Banner>
            <div className=' max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>

            {
                data?.map( craftData => <Card  data={craftData} 
                    
                    ></Card> )
            }
            
            </div>
        </div>
    );
};

export default Home;