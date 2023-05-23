import './UserName.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function UserName(){

    const [name, setName] = useState()

    useEffect(() => {
        axios.get('https://randomuser.me/api/')
        .then(res => {
            setName(res.data.results[0].name.first)
        })
        .catch(err => {
            console.log('Ops, algo deu errado!') 
        })
    }, [])

    return (
        <div className='userName'>
            <label>Name:</label> 
            <h1>{name}</h1> 
        </div>
    )
}

export default UserName