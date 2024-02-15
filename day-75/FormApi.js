import React, { useEffect, useState } from 'react'
import axios from 'axios';

function FormApi() {
    const [User, SetUser] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => SetUser(res.data))
            .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <table border={4}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>E-MAIL</th>
                        <th>PHONE NUMBER</th>
                        <th>WEBSITE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        User.map((user, index) => {
                            return <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <div>
                <input type='text' />
                <button>Submit</button>
            </div>
        </div >
    )
}
export default FormApi