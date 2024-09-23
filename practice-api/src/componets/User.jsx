import React, { useState } from 'react';
import '../componets/User.css' // Corrected path to CSS file
import axios from 'axios';

const User = () => {
    const [users, setUsers] = useState([]); // Corrected initial state to an empty array

    const userInformation = () => {
        let api = "https://jsonplaceholder.typicode.com/users";
        axios.get(api)
            .then((response) => {
                console.log(response.data);
                setUsers(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <div className='user-page'>
                <div className='top-nav'>User Information</div>
                <hr />
                <button className='get-details-button' onClick={userInformation}>Get Details of User</button>
                <div className='main-information'>
                    {users.length > 0 ? (
                        users.map((user) => (
                            <div key={user.id} className='content'>
                                <h1>Name: {user.name}</h1>
                                <h1>Username: {user.username}</h1>
                                <h1>Email: {user.email}</h1>
                                <h1>Phone: {user.phone}</h1>
                                <h1>Website: {user.website}</h1>
                            </div>
                        ))
                    ) : (
                        <h1>Loading.....</h1>
                    )}
                </div>
            </div>
        </>
    );
};

export default User;
