import './UserCity.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

function UserCity(){

    const [city, setCity] = useState()

    useEffect(() => {
        axios.get('https://randomuser.me/api/')
        .then(res => {
            setCity(res.data.results[0].location.city)
        })
        .catch(err => {
            console.log('Ops, algo deu errado')
        })
    }, [])

    return (
        <div className='userCity'>
            <label>City:</label> 
            <h1>{city}</h1> 
        </div>
    )
}

export default UserCity