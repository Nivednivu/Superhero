import React from 'react'
import './Grievance.css'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
function Grievance() {

  const schema = z.object({
    name:z.string().min(1, "user is required").max(20 , "user must be less"),
    email:z.string().email(1, "Invalid email address"),
    description:z.string().min(1,"please fill"),
    phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(15, { message: "Phone number can't exceed 15 digits" })
    .regex(/^[0-9]+$/, { message: "Phone number must contain only digits" })  }) 
const {register,handleSubmit,formState:{errors} }=useForm({
  resolver:zodResolver(schema)
})


const onSubmit = (data) =>{
  console.log(data);
}

  return (
    <div>
<div className="grievance-form">
  <h3>Grievance Submission</h3>
  <div className='validation'>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <label>Name</label>
      <input type="text" {...register("name")}/>
      {errors.name && <p>{errors.name.message}</p>}
    </div>
    <div>
      <label>email</label>
      <input type="text" {...register("email")}/>
      {errors.email && <p>{errors.email.message}</p>}

    </div>
    <div>
      <label>phone</label>
      <input type="text" {...register("phone")} />
      {errors.phone && <p>{errors.phone.message}</p>}
    </div>
    <div className='text-area'>
      <label>Issue of description</label>
      <input type="text" {...register("description")}/>
      {errors.description && <p>{errors.description.message}</p>}

    </div>
    <button type="submit">Submit</button> 


    </form>
  </div>
</div>    </div>
  )
}

export default Grievance
