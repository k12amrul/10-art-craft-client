import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import { AuthContext } from '../../cotexts/AuthProvider';
// import { AuthContext } from '../../cotexts/AuthProvider';

// import { AuthContext } from '../../context/AuthProvider';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    // console.log(user?.displayName, user?.photoURL)
    const handleLogOUt = () => {
        logOut()
            .then(() => console.log('Successfully LogOUt'))
            .catch(() => console.log('error in LogOUt'))
    }

    const defaultImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZV0vdfGCjIlcD0LdVuAP3yeB0GMNp0cVJAPZm-HbTohNttxwDszvCCkajLQ&s'

    const navLinks = <>
        <li><NavLink to='/home' >Home</NavLink> </li>
        <li><NavLink to='/allPrinting' > All-Printing</NavLink> </li>
        <li><NavLink to='/addPrinting' > Add-Printing</NavLink> </li>
       {
        user &&
        <li><NavLink to='/myArtCraft' > My-Art-Craft</NavLink> </li>
       }
        <li><NavLink to='/allArtCraft' > All-Art-Craft</NavLink> </li>
        <li><NavLink to='/register' > Register</NavLink> </li>
        <li><NavLink to='/login' >Login</NavLink> </li>
        <li><NavLink to='/bookings' > Bookings</NavLink> </li>
       {
        user && 
        <>
        <li><NavLink to='/updateprofile' > Update Profile </NavLink> </li>
        <li><NavLink to='/profile' >   Profile </NavLink> </li>
        </>

       }
        <li><NavLink to='/about' >About</NavLink> </li>

    </>
    return (

        <div className="navbar bg-base-200   ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className=" menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navLinks
                        }


                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Artista</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" menu-horizontal px-1">
                    {
                        navLinks
                    }
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ?
                        <>
                            <h4 className=' mr-5 border'> {user?.displayName} </h4>
                            <div>

                                <div className=" w-10 h-10  rounded-full">
                                    <img title={user?.displayName} className=' rounded-full' alt="Tailwind CSS Navbar component" src={user.photoURL || defaultImg} />
                                </div>
                            </div>
                            {/* <NavLink to='/logout' >Logout</NavLink> */}
                            <button onClick={handleLogOUt} className='btn btn-warning'> LogOut </button>
                        </>
                        :
                        <NavLink to='/login' >login</NavLink>

                }

            </div>
        </div>

    );
};

export default Navbar;