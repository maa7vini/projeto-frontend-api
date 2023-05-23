import './UserPicture.css'
import axios from 'axios';
import { useState, useEffect } from 'react';

function UserPicture(){

    const [picture, setPicture] = useState()

    useEffect(() => {
        axios.get('https://randomuser.me/api/')
            .then(res => {
            setPicture(res.data.results[0].picture.large)
            })
            .catch(err => {
            console.log('Ops, algo deu errado')
            })
    }, [])

    return (
        <div className='userPicture'>
            <img src={picture}></img>
        </div> 
    )
}

export default UserPicture;