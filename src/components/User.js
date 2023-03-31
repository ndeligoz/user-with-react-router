import { useEffect, useState } from "react";

import { useParams } from 'react-router-dom'
import axios from "axios";


function User() {
    const [user, setUser] = useState({});
    const { id } = useParams();

    useEffect(() => {
        console.log("asdasd");
        axios(`https://jsonplaceholder.typicode.com/users/${id}`).then((res, err) => {

            if (err) {
                return;
            }

            setUser(res.data);
        });

    }, [])
    return (
        <div>
            <h1>User Detail</h1>
            <code>{JSON.stringify(user)}</code>

        </div>
    )
}

export default User;