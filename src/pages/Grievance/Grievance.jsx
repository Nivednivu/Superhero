import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import './Grievance.css';
import axios from 'axios';
import Chat from '../../components/Chat/Chat';

const grievanceSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(15, { message: "Phone number is too long" }),
  description: z.string().min(1, { message: "Description must be at least 1 characters long" }),
});

const Grievance = () => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: zodResolver(grievanceSchema),
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/grievances/getGrievance');
        const { name, email, phone, description } = response.data;
        
        setValue('name', name || '');
        setValue('email', email || '');
        setValue('phone', phone || '');
        setValue('description', description || '');
      } catch (error) {
        console.error('Error fetching grievance data:', error);
      }
    };

    fetchData();
  }, [setValue]);

  const onSubmit = async (data) => {
        try {
      const grievanceResponse = await axios.post('http://localhost:4000/grievances/postGrievances', data);
      alert('Grievance submitted successfully and email sent');

      console.log('Grievance submitted and email sent:', grievanceResponse.data);
    } catch (error) {
      console.error('Error submitting grievance:', error);
      alert('Failed to submit grievance');
    }
  };

  return (
    <div className="Grievance">

      <div>
      <h2 className='grievance-h2'>Submit Grievance</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='input'>
          <input
            type="text"
            {...register("name")}
            placeholder="Your Name"
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div className='input'>
          <input
            type="email"
            {...register("email")}
            placeholder="Your Email"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div className='input'>
          <input
            type="text"
            {...register("phone")}
            placeholder="Your Phone Number"
          />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>

        <div className='text-1'>
          <textarea className='text-area'
            {...register("description")}
            placeholder="Describe your grievance"
          />
          {errors.description && <p>{errors.description.message}</p>}
        </div>

        <button className='grivanc-btn' type="submit">Submit Grievance</button>
      </form>

      </div>

      <div className='chat-chat'>
        <Chat/>
      </div>
    
    </div>
  );
};

export default Grievance;
