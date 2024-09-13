import React from 'react';
import './Admin.css';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Admin({ insideAdminRegister }) {
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
      if (insideAdminRegister) {
        const response = await axios.post('http://localhost:4000/admins/register', data);
        if (response.status === 200) {
          alert('User registered successfully');
          navigate('/login');
        }
      } else {
        const response = await axios.post('http://localhost:4000/admins/login', data);
        if (response.status === 200) {
          sessionStorage.setItem("existingAdmin", JSON.stringify(response.data.existingAdmin));
          sessionStorage.setItem("token", response.data.token);
          alert('Login successful');
          navigate('/list');
        } else {
          alert('Login failed: ' + response.statusText);
        }
      }
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      alert('Error: ' + (error.response ? error.response.data.message || "Request failed" : "Request failed"));
    }
  };

  return (
    <div className='ff22'>
    <div className="user-form">
      <h3>{insideAdminRegister ? 'Admin Register' : 'Admin Login'}</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='validation'>
          {insideAdminRegister && (
            <div>
              <label>Name</label>
              <input type="text" {...register("name")} />
              {errors.name && <p>{errors.name.message}</p>}
            </div>
          )}
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
            {insideAdminRegister ? (
              <div>
                <button type="submit">Sign Up</button>
                <p>Already registered? <Link to='/login'>Login</Link></p>
              </div>
            ) : (
              <div>
                <button type="submit">Login</button>
                <p>Don't have an account? <Link to='/admin'>Register</Link></p>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>

    </div>
  );
}

export default Admin;
