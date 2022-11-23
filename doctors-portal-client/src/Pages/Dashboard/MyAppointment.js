import { signOut } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  // console.log(user) 

  useEffect(() => {
    if (loading) {
      return <Loading></Loading>
    }
    if (user) {
      fetch(`http://localhost:5000/booking?patient=${user.email}`, {
        method: 'GET',
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      }

      )
        .then(res => {
          // console.log('response', res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken')
            navigate('/')

          }
          return res.json()
        })
        .then(data => setAppointments(data))
    }
  }, [loading, navigate, user]);


  return (

    <div>
      <h1 className="text-2xl ">My appointment: {appointments.length}</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}

          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {
              appointments.map((a, index) => <tr key={index}>
                <th>{index + 1}</th>
                <td>{a.patientName || a.patient}</td>
                <td>{a.date}</td>
                <td>{a.slot}</td>
                <td>{a.treatment}</td>

                <td>
                  {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}> <button className="btn btn-sm btn-success">Pay Now</button></Link>}
                  {(a.price && a.paid) && <div>
                    <p><span className='text-success'>Paid</span></p>
                    <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p>
                  </div>}
                </td>
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