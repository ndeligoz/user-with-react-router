
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import axios from "axios";

function Users() {


    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then(res => setUsers(res.data))
    }, [])
    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`/user/${user.id}`}>{user.name}</Link>
                    </li>

                ))}



            </ul>


        </div>
    )

}


export default Users