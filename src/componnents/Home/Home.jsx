import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card';

const Home = () => {

    const data = useLoaderData()

    return (
        <div>
            <Banner className=' mt-10 ' ></Banner>

           
            <div className=' '>
                <h1 className='  my-auto mb-5  flex justify-center items-center text-3xl'> Art &Craft Categories Section </h1>
            
            <div className=' max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>


                {
                    data?.map((craftData, i) => <Card
                        data={craftData}
                        key={i}

                    ></Card>)
                }

            </div>

            </div>

            {/* Craft items section */}

            <div>
                <div>  <h1> Craft items section</h1></div>
                <div>
                    

                </div>
            </div>
        </div>
    );
};

export default Home;