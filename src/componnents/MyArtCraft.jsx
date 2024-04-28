import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../cotexts/AuthProvider';

const MyArtCraft = () => {

    const { user } = useContext(AuthContext) || {}
console.log(user?.email)


    useEffect(() => {
        // fetch(`http://localhost:5000/myArtCraft?email=${user?.email}`)
        fetch(`http://localhost:5000/myArtCraft/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }, [user])


    return (
        <div>
            MyArtCraft
        </div>
    );
};

export default MyArtCraft;
