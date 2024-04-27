import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card';

const Home = () => {

    const data=useLoaderData()

    return (
        <div>
            <Banner></Banner>
            {
                data.map( d => <Card></Card> )
            }
            
        </div>
    );
};

export default Home;