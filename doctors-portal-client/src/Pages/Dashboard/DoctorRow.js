import React from 'react';

const DoctorRow = ({ doctor, index, setDeletingDoctor }) => {
    const { name, specialty, img } = doctor;

    // const handelDelete = email => {
    //     fetch(`http://localhost:5000/doctor/${email}`, {
    //         method: 'DELETE',
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     }).then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         if(data.deletedCount){
    //             toast.success(`Doctor ${name} is delete successfully`)
    //             refetch();
    //         }
    //     })
    // }


    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{name}</td>
                <td><div className="w-8 rounded">
                    <img src={img} alt={name} />
                      
                </div></td>
                <td>{specialty} </td>
                <td>
                    <label onClick={() => setDeletingDoctor(doctor)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
                </td>
            </tr>
        </>

    );
};

export default DoctorRow;