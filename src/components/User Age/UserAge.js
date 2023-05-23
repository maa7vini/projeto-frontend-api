import './UserAge.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

function UserAge(){

    const [age, setAge] = useState()

    useEffect(() => {
        axios.get('https://randomuser.me/api/')
        .then(res => {
            setAge(res.data.results[0].dob.age)
        })
        .catch(err => {
            console.log('Ops, algo deu errado')
        })
    }, [])

    return (
        <div className='userAge'>
            <label>Age:</label> 
            <h1>{age}</h1> 
        </div>
    )
}

export default UserAge