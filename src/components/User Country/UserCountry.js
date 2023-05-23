import './UserCountry.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function UserCountry(){

    const [country, setCountry] = useState()

    useEffect(() => {
        axios.get('https://randomuser.me/api/')
        .then( res => {
            setCountry(res.data.results[0].location.country)
        })
        .catch(err => {
            console.log('Ops, algo deu errado')
        })
    }, [])

    return (
        <div className='userCountry'>
            <label>Country:</label> 
            <h1>{country}</h1> 
        </div>
    )
}

export default UserCountry