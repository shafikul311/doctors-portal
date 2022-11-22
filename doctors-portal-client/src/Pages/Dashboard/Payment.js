import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { useQuery } from '@tanstack/react-query';
import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IhkmNJyOPkAyBp9rJOXZV0NhMcXf2z1XScXuVltrD8CyeHIq2ZLWe2s1wXZ5z8WL1ZtBaiKUE1AMXWAN6OIWd7G000ZjpVsw3');

const Payment = () => {

    const { id } = useParams();

    const url = `http://localhost:5000/booking/${id}`;

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }




    return (
        <div className="ml-5">
        <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
            <div className="card-body">
                <p className="text-success font-bold">Hello, {appointment.patientName}</p>
                <h2 className="card-title">Please Pay for {appointment.treatment}</h2>
                <p>Your Appointment: <span className='text-orange-700'>{appointment.date}</span> at {appointment.slot}</p>
                <p>Please pay: ${appointment.price}</p>
            </div>
        </div>
        <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
            <div className="card-body">
                <Elements stripe={stripePromise}>
                    <CheckoutForm appointment={appointment} />
                </Elements>
            </div>
        </div>
    </div>

        
    );
};

export default Payment;