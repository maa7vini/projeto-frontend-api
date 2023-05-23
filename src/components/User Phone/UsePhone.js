import './UserPhone.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

function UserPhone(){

    const [phone, setPhone] = useState()

    useEffect(() => {
        axios.get('https://randomuser.me/api/')
        .then(res => {
            setPhone(res.data.results[0].phone)
        })
        .catch(err => {
            console.log('Ops, algo deu errado')
        })
    }, [])

    return (
        <div className='userPhone'>
            <label>Phone:</label> 
            <h1>{phone}</h1> 
        </div>
    )
}

export default UserPhone