import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.inti';
import Loading from '../Shared/Loading';

const MyAppointment = () => {
    const [appointments, setAppointments] = useState([]);
    const [user, loading ] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`)
                .then(res => res.json())
                .then(data => setAppointments(data))
        }
    }, [user])
    return (
        
        <div>
            <h1 className="text-2xl ">My appointment: {appointments.length}</h1>
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* <!-- head --> */}
    {/* {!user || Loading } */}

    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>Time</th>
        <th>Treatment</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      {
        appointments.map((a, index) =><tr key={index}>
        <th>{index + 1}</th>
        <td>{a.patientName || a.patient}</td>
        <td>{a.date}</td>
        <td>{a.slot}</td>
        <td>{a.treatment}</td>
      </tr>    
       )
      }
       
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointment;