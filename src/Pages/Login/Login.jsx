



import React, { useContext, useState } from 'react';
// import { AuthContext } from '../context/AuthProvider';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from "react-hot-toast"
import { AuthContext } from '../../cotexts/AuthProvider';
// import { Helmet } from 'react-helmet-async';
import { FaEye, FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa6';

const Login = () => {
    // const { reset} = useForm()

    const { register, reset, handleSubmit, formState: { errors } } = useForm()

    const { error,
        setError, logIn, googleLogin, githubLogin, setloading } = useContext(AuthContext)

        const [success, setSuccess] = useState(null)
        const navigate = useNavigate()
        const location = useLocation();
        console.log(location)
        const [showPas, setShowPas] = useState(false)
    // const form = location?.state?.path?.form || '/'


    const handleLogin = (data) => {



        logIn(data.email, data.password)
            .then(result => {
                const user = result.user
                // data.target.reset()
                toast.success('Successfully logIn!');
                reset()
                navigate(location?.state ? location.state : '/')
                setloading(false)


                // console.log(user)
            })
            .catch(err => {
                setError(err.message)
                console.log(err.message)
                alert(error)
                toast.error('Login error :')

            })

    }


    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) =>  {
                toast.success('google login successfully')
                navigate(location.state ? location.state : '/')
               

                console.log(result)
            } 
        )
            .catch((err) => console.log(err))
    }
    const handleGithubLogin = () => {
        githubLogin()
            .then((result) =>{
                toast.success('github login successfully')
                navigate(location.state ? location.state : '/')
               
                console.log(result)

            }
            )
            .catch((err) => console.log(err))
    }






  return (
    <div><div className="hero min-h-screen bg-base-200 bg-[url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJ4AqAMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAADAgABBAb/xAAZEAEBAQEBAQAAAAAAAAAAAAAAAQIRAxL/xAAZAQEAAwEBAAAAAAAAAAAAAAACAAEDBQT/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARECEv/aAAwDAQACEQMRAD8A+wi4iLy2dukyTI8kyNCkhIOEyFZ0kXEZXAoUkXBxcEKSLg4SCNVFRMVBGuxSVILsdjjIjMzIpmZkF8fCZFkmXudelhMihcjWdJCZHCZCs6vJIPJIFCryuIi8iNXFxEXFUKuKicqgi6qJVFC6zMiMzNUUzMyC+OlJkOTZe+uvS5JgeSZCs6SVeRwkGs6TK4PK4A0kJkcXkQpMqyiLyNCryuIioIqVERcULrM6pHGZxBdZqyC+MyXIsmy6NdmkyTIoXIVlSReRxcGhSZJBZJAoUmVwcXBoUsVkeVwaNJFxEXAoKVExShdjrkdUpq5Ha4g1xmZFPjYXI4vLpV2aXJMjyuBWdJCQeVwQpMrg4vI2BSSrgoTIUKWKiJVwaFJCQWSZCjVxURFwaDsdcdFTVx2uVBrjMyC+Oi4iLy6jtUkVlEUIUspILK5RsCkzSSihINgUkq8ji5QsClyuChMhQpITIskgUKSLiIvIUa6pyOjRcrldrlQa4zMgvjorKVR1sdqri4OLg4JIuDlXBsCkzVyjlXKNgUkXkcXBsCllJmilXAsClyWBzSZZ2BSxcHlcZ0KSOuRQUU1xSVDXGZli+OdlS7HYx2iRUHFxWDVxeaiKlHBpJVyjlVKNgUspJQyrlGxnTZpIHNXmhYFPkmaHNLhlYNNFwUJGdCljqYtlQcrlUmiNSzVlg+Njsc6ztu4uKg1RWDSSqg5VdTGdJKuUUrsqsZ2mzVyglJNDYztPKvNefOi50zvIWvRmmxXmzS5rLrkdenNJmgzTZY9RVNlY8kjGhWcrrlAais1ZYPjHUs72O4t2VHW6mBaTrvR9aaTGVpetKP6b6TGdp5pU0CaVND5ZWvTnS86eWaJnQ3lna9edGxXizs+NMuuR17cU/nXi89PT56efvlNezJIDzpsvN1Eqk1TlZDR1m0ywf//Z)]">
      <div className="hero-content  flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmbqvtbD5x30z-T4SFenlgb0m-bgMKRKfJtw&s" alt="" />
        </div>

        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(handleLogin)} className="card-body">


            <div className="form-control">

              <label className="label">
                <span className="label-text">Email</span>
              </label>


              <input className="input input-bordered"
                {...register("email", { required: "Email Address is required" })}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && <p role="alert">{errors.email.message}</p>}


            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type={showPas ? 'text' : "password"} 
              placeholder="password" {...register("password",
             
             //  value: /^[A-Za-z]+$/i,
               
               {
                  required: 'Password min-6 characters',
                  pattern: {  message: ' Must have an Uppercase & Lowercase letter  in the password' },
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long.",
                  },

                }


              )} className="input input-bordered" required />
              <span className='flex items-center' onClick={() => setShowPas(!showPas)} > <h4 className='mr-2'>show password </h4>  <FaEye className='' /></span>
              {/* <span className='flex items-center' onClick={() => setShowPas(!showPas)} > show pas   <FaEye className='' /></span> */}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
              {errors.password && <p role="alert">{errors.password.message}</p>}

            </div>
            <div className="form-control mt-1">
              <button className='flex justify-center items-center  w-22 h-11  rounded-md bg-[#0c20f5] text-white text ' >
                Login</button>

            </div>
            <button className='mt-1 btn btn-warning'>
              <NavLink to='/register' >Register</NavLink>  </button>
            {/* {
                                error && <div> <h3 className='text-red-500 '>{error} </h3> </div>
                            } */}
            {
              success && <div> <h3 className='text-green-500 '>{success} </h3> </div>
            }
          </form>

          <div className='flex space-x-2 items-center justify-around ' >
            <h4>Or login with</h4>
            <button onClick={handleGoogleLogin} className='flex justify-center items-center  w-8 h-8  rounded-full bg-[#f2807e] text-white text ' >
              <FaGoogle />


            </button>
            <button onClick={handleGithubLogin} className='flex justify-center items-center  w-8 h-8  rounded-full bg-[#3d3d40] text-white text ' >
              <FaGithub /> </button>
            <button className='flex justify-center items-center  w-8 h-8  rounded-full bg-[#0c20f5] text-white text ' >

              <FaFacebook /> </button>



          </div>

          {/* <button onClick={handleGoogleLogin} className=' mt-1 btn bg-orange-300'> Google Login </button> */}
          {/* <button onClick={handleGithubLogin} className='mt-1 btn btn-success'> Github Login </button> */}

          <div className="form-control mt-1">

            <div>

              {
                error && <p className='text-red-600' > {error}</p>
              }
            </div>
          </div>



        </div>

      </div>
    </div>



    </div>
  );
};

export default Login;