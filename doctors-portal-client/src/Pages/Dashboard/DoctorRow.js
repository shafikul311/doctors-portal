import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, refetch, index }) => {
    const { name, specialty, img, email } = doctor;

    const handelDelete = email => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount){
                toast.success(`Doctor ${name} is delete successfully`)
                refetch();
            }
        })
    }

    
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{name}</td>
                <td><div className="w-8 rounded">
                <img src={img} alt={name} />
            </div></td>
                <td>{specialty} </td>
                <td><button onClick={()=> handelDelete(email)} className="btn btn-xs btn-error">Delete</button></td>
            </tr>
        </>

    );
};

export default DoctorRow;