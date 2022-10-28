import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Shared/Loading';
import Row from './Row';

const Users = () => {

    const { isLoading, error, data: users, refetch } = useQuery(['users'], () =>
        fetch('http://localhost:5000/users', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res =>
            res.json()
        )
    )

    if (isLoading) return <Loading></Loading>;

    if (error) return 'An error has occurred: ' + error.message;

    console.log(users.length)


    return (
        <div>
            <h1 className="text-xl">All Users {users?.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Make Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <Row
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></Row>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;