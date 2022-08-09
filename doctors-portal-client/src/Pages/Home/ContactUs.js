import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";
import bgApp from '../../assets/images/appointment.png'
const ContactUs = () => {
   return (
    <div style={{
        background:`url(${bgApp})`
    }} className='bg-primary px-10 py-14 '>
      <div className='text-center pb-14 text-white'>
        <p className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary'>
          Contact Us
        </p>
        <h1 className='text-4xl'>Stay connected with us</h1>
      </div>
      <div className='grid grid-cols-1 justify-items-center gap-5'>
        <input
          type='text'
          placeholder='Email Address'
          className='input w-full max-w-md'
        />
        <input
          type='text'
          placeholder='Subject'
          className='input w-full max-w-md'
        />
        <textarea
          className='textarea w-full max-w-md'
          placeholder='Your message'
          rows={6}
        ></textarea>
        <PrimaryButton>Submit</PrimaryButton>
      </div>
    </div>
   );
};

export default ContactUs;
