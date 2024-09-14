import React from 'react';
import './User.css';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ServerURL } from '../../serverURL';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css'

function User({insideRegister}) {

  const navigate = useNavigate();

  const schema = z.object({
    name: z.string().min(1, "Name is required").max(20, "Name must be less than 20 characters").optional(),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      if (insideRegister) {
        const response = await axios.post(`${ServerURL}/users/register`, data);
        if (response.status === 200) {
          toast.success('User registered successfully',{position:"top-center"});
          navigate('/ulogin');
        }else{
          toast.error('user already register')
        }
      } else {
        const response = await axios.post(`${ServerURL}/users/login`, data);
        if (response.status === 200) {
          sessionStorage.setItem("existingUser", JSON.stringify(response.data.existingUser));
          sessionStorage.setItem("token", response.data.token);
          toast.success('Login successful',{position:"top-center"});
          navigate('/grievance');
        } 
      }
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      toast.error("Request failed",{position:"top-center"});
    }
  };


  return (
    <div className='f11'>
    <div className="user-form">
      <h3>User</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='validation'>
          {insideRegister &&
            <div>
              <label>Name</label>
              <input type="text" {...register("name")} />
              {errors.name && <p>{errors.name.message}</p>}
            </div>
          }
          <div>
            <label>Email</label>
            <input type="text" {...register("email")} />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div>
            <label>Password</label>
            <input type="password" {...register("password")} />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <div>

{      insideRegister ?      <div>
            <button
              type="submit"
            >
              Sign Up
            </button>
            <p>alrady login your <Link to={'/ulogin'}>Login</Link></p>

            </div>
            :
            <div>
            <button
              type="submit"
            >
              Login
            </button>
            <p>please register <Link to={'/user'}>Register</Link></p>

            </div>
}            
          </div>
        </div>
      </form>

    </div>
<ToastContainer/>

    </div>
  );
}

export default User;