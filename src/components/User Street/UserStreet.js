import './UserStreet.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

function UserStreet(){

    const [street, setStreet] = useState()

    useEffect(() => {
        axios.get('https://randomuser.me/api/')
        .then(res => {
            setStreet(res.data.results[0].location.street.name)
        })
        .catch(err => {
            console.log('Ops, deu algo de errado')
        })
    }, [])

    return (
        <div className='userStreet'>
            <label>Street:</label>
            <h1>{street}</h1> 
        </div>
    )
}

export default UserStreet