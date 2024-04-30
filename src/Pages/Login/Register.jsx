import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../cotexts/AuthProvider';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaEye } from 'react-icons/fa6';

const Register = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()


  const { createUser, setloading } = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [showPas, setShowPas] = useState(false)




  const handleRegister = (data) => {
    // e.preventDefault()
    console.log(data.email, data.password)
    // console.log(errors)
    const name = data.name
    const email = data.email
    const password = data.password

    const user = { name, email }

    // fetch('https://a-11-server-eight.vercel.app/users',{
    //     method: "POST", // or 'PUT'
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(user),
    //   })
    //   .then( res => res.json())
    //   .then( data => console.log(data ))



    // setError('')
    // setSuccess('')
    createUser(email, password)

      .then(result => {
        const user = result.user
        toast.success('Register Successfully')
        navigate(location.state ? location.state : '/')
        setSuccess('create User Success')
        setloading(false)
        // e.target.reset()
        console.log(user)
      })
      .catch(err => {
        toast.error('Register error')
        setError(err.message)
        console.log(err)
      })

  }

  return (
    <div>
      <div className=" hero min-h-screen bg-base-200 bg-[url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJ4AqAMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAADAgABBAb/xAAZEAEBAQEBAQAAAAAAAAAAAAAAAQIRAxL/xAAZAQEAAwEBAAAAAAAAAAAAAAACAAEDBQT/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARECEv/aAAwDAQACEQMRAD8A+wi4iLy2dukyTI8kyNCkhIOEyFZ0kXEZXAoUkXBxcEKSLg4SCNVFRMVBGuxSVILsdjjIjMzIpmZkF8fCZFkmXudelhMihcjWdJCZHCZCs6vJIPJIFCryuIi8iNXFxEXFUKuKicqgi6qJVFC6zMiMzNUUzMyC+OlJkOTZe+uvS5JgeSZCs6SVeRwkGs6TK4PK4A0kJkcXkQpMqyiLyNCryuIioIqVERcULrM6pHGZxBdZqyC+MyXIsmy6NdmkyTIoXIVlSReRxcGhSZJBZJAoUmVwcXBoUsVkeVwaNJFxEXAoKVExShdjrkdUpq5Ha4g1xmZFPjYXI4vLpV2aXJMjyuBWdJCQeVwQpMrg4vI2BSSrgoTIUKWKiJVwaFJCQWSZCjVxURFwaDsdcdFTVx2uVBrjMyC+Oi4iLy6jtUkVlEUIUspILK5RsCkzSSihINgUkq8ji5QsClyuChMhQpITIskgUKSLiIvIUa6pyOjRcrldrlQa4zMgvjorKVR1sdqri4OLg4JIuDlXBsCkzVyjlXKNgUkXkcXBsCllJmilXAsClyWBzSZZ2BSxcHlcZ0KSOuRQUU1xSVDXGZli+OdlS7HYx2iRUHFxWDVxeaiKlHBpJVyjlVKNgUspJQyrlGxnTZpIHNXmhYFPkmaHNLhlYNNFwUJGdCljqYtlQcrlUmiNSzVlg+Njsc6ztu4uKg1RWDSSqg5VdTGdJKuUUrsqsZ2mzVyglJNDYztPKvNefOi50zvIWvRmmxXmzS5rLrkdenNJmgzTZY9RVNlY8kjGhWcrrlAais1ZYPjHUs72O4t2VHW6mBaTrvR9aaTGVpetKP6b6TGdp5pU0CaVND5ZWvTnS86eWaJnQ3lna9edGxXizs+NMuuR17cU/nXi89PT56efvlNezJIDzpsvN1Eqk1TlZDR1m0ywf//Z)] ">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmbqvtbD5x30z-T4SFenlgb0m-bgMKRKfJtw&s" alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(handleRegister)} className="card-body">

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input {...register("name")} type="text" placeholder="name" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input {...register("email")}


                  type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                
                <input type={showPas ? 'text' : "password"} 
                  {...register("password",
                    {
                      required: 'Password min-6 characters',
                      pattern: { value: /(?=.*[A-Z])(?=.*[a-z])/, message: ' Must have an Uppercase & Lowercase letter  in the password' },
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long.",
                      },



                    }

                  )}



                  placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                </label>
                <span className='flex items-center' onClick={() => setShowPas(!showPas)} > <h4 className='mr-2'>show password </h4>  <FaEye className='' /></span>
              </div>


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input {...register("image")} type="text" placeholder="image" className="input input-bordered" required />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-success text-white ">Register</button>
                <button className='  mt-1  btn btn-warning text-white bg-[#0c20f5]'> <NavLink to='/login' >Login</NavLink>  </button>
              </div>



            </form>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Register;