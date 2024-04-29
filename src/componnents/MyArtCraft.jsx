import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../cotexts/AuthProvider';
import { set } from 'firebase/database';
import MyArtCraftCrad from './MyArtCraftCrad';
import { useLoaderData } from 'react-router-dom';

const MyArtCraft = () => {

    const { user } = useContext(AuthContext) || {}
    const data = useLoaderData()
console.log( data)
    const [myArts, setmyArts] = useState(data)
    // console.log(user?.email)
    console.log(myArts)


//     useEffect( ( ) => {
// console.log( myArts ,'uE')
//      } ,[myArts])


    // useEffect(() => {
    //     // fetch(`http://localhost:5000/myArtCraft?email=${user?.email}`)
    //     fetch(`http://localhost:5000/myArtCraft/${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data)
    //             setmyArts(data)
    //         })
    // }, [user])


    return (
        <div className=' max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>

            {
                myArts?.map((artItem, ix) => <MyArtCraftCrad
                    data={artItem}
                    key={ix}
                    myArts={myArts}
                    setmyArts={setmyArts}

                ></MyArtCraftCrad>)
            }
        </div>
    );
};

export default MyArtCraft;
