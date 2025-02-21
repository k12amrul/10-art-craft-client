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
        <li><NavLink to='/allArtCraft' > All-Art-Craft</NavLink> </li>
        <li><NavLink to='/addCraftItem' > Add-Craft-Item</NavLink> </li>
        
       
        <li><NavLink to= {`/myArtCraft/${user?.email}`} > My-Art-Craft-List </NavLink> </li>
       

        <li><NavLink to='/register' > Register</NavLink> </li>
        <li><NavLink to='/login' >Login</NavLink> </li>
        {/* <li><NavLink to='/bookings' > Bookings</NavLink> </li> */}
       {
        user  && 
        <>
        <li><NavLink to='/updateprofile' > Update Profile </NavLink> </li>
        <li><NavLink to='/profile' >   Profile </NavLink> </li>
        </>

       }
        {/* <li><NavLink to='/about' >About</NavLink> </li> */}

    </>
    return (
        <div className=' mb-20' >

       
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

            <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
        </div>
      </div>
      {
        user && 
      
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-1 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
        <button onClick={handleLogOUt} className='btn btn-warning'> LogOut </button>
        </li>
        {/* <li><button onClick={handleLogOUt} className='btn btn-warning'> LogOut </button></li> */}
        <li>{user?.displayName} </li>
      </ul>

}
    </div>

            </div>
        </div>

        {/* ---------------------- */}
{/*         
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div> */}
        {/* ---------------------- */}

        </div>

    );
};

export default Navbar;