import React from 'react';

const Row = ({user, index, refetch}) => {
    const {email, role} = user;

    const makeAdmin = ()=> {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`

            }
        }).then(res => res.json())
        .then(data => {
            

            console.log(data)
            refetch();
        })

    }
    return (
        <tr>
            <th>{index +1}</th>
            <td>{email}</td>
                <td>{role === 'admin'? 'Already admin ' : <button onClick={makeAdmin} className="btn btn-xs btn-outline btn-accent">Make Admin</button>} </td>
            <td><button className="btn btn-xs btn-outline btn-error">Delete</button></td>
        </tr>
    );
};

export default Row;