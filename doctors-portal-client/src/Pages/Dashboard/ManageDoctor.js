import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Shared/Loading';
import DoctorRow from './DoctorRow';

const ManageDoctor = () => {


    const { data: doctors, isLoading, error, refetch } = useQuery(['doctors'], () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) return <Loading></Loading>;

    if (error) return 'An error has occurred: ' + error.message;
    console.log(doctors)
    return (
        <div>
            <h1>Manage all of your Doctor {doctors.length}</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>list</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                       

                            {doctors.map((doctor, index) => <DoctorRow
                                key={index} 
                                doctor={doctor}
                                 refetch={refetch}
                                 index={index}
                                  />)}

                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctor;