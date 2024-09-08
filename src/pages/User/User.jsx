import React, { useState } from 'react'
import './User.css'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
function User() {

  const [action,setAction] =useState("Sing up")

  const schema = z.object({
    name:z.string().min(1, "user is required").max(20 , "user must be less"),
    email:z.string().email(1, "Invalid email address"),
    password:z.string().min(6, "Password must be at least 6 characters long")
  }) 
const {register,handleSubmit,formState:{errors} }=useForm({
  resolver:zodResolver(schema)
})


const onSubmit = (data) =>{
  console.log(data);
}



  return (
    <div className="user-from">
  <div>
  </div>
    <form onSubmit={handleSubmit(onSubmit )}>
  <h3>{action}</h3>
  <div className='validation'>
    {
      action==="Login"?<div></div>: 
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
      <input type="text" {...register("password")}/>
      {errors.password && errors.password.message}
    </div>
    {
      action==="Sing Up"? <div></div>
      :  <a href="">Lost PasswordClick Here!</a>  

    }
    <div >
    <button type="submit" className={action==="Login"?"Submit":"Submit"} onClick={()=>{setAction("Sing Up")}}>Sing Up</button> 
    <button type="submit" className={action==="Sign Up"?"Submit":"Submit"} onClick={()=>setAction("Login")}>Login</button> 

    </div>
</div>  
  </form>
  </div>
  )
}

export default User
