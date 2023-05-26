import './App.css';
import { useState, useEffect } from 'react';
import api from './services/api'

function App() {

  const [user, setUser] = useState()

  useEffect(() => {
    api
    .get('?exc=login,registered,id')
    .then(res => setUser(res.data.results[0]))
    .catch((err) => {
      console.log('Ops, algo deu errado!') 
    })
  }, [])

  function Refresh(){

    window.location.reload()

  }

  return (
    <div className='App'>
      <header>
        <div className='headerLeft'>
          <div className='headerTxt'>
            <h2>Welcome</h2>
            <h1>{user?.name?.first}</h1> 
          </div>
        </div>

        <div className='headerRight'>
          <img src={user?.picture?.large}></img> 
        </div>
      </header>

      <div className='userContainer'>

        <h1>{user?.name?.first} Info</h1> 

        <div className='userInfo'>
          <div className='userLeft'>

            <div className='userTxt'>
              <label>Name:</label> 
              <div className='userName'>
                <p>{user?.name?.first}</p>
                <div className='lastName'>
                  <p>{user?.name?.last}</p>
                </div>
              </div>
            </div>

            <div className='userTxt'>
              <label>Gender:</label> 
              <p>{user?.gender}</p> 
            </div>

            <div className='userTxt'>
              <label>Age:</label> 
              <p>{user?.dob?.age}</p> 
            </div>

            <div className='userTxt'>
              <label>Nationality:</label> 
              <p>{user?.nat}</p> 
            </div>

          </div>

          <div className='userRight'> 
              <div className='userTxt'>
                  <label>City:</label> 
                  <p>{user?.location?.city}</p> 
              </div>

              <div className='userTxt'>
                  <label>State:</label> 
                  <p>{user?.location?.state}</p> 
              </div>

              <div className='userTxt'>
                  <label>Country:</label> 
                  <p>{user?.location?.country}</p> 
              </div>

              <div className='userTxt'>
                  <label>Phone:</label> 
                  <p>{user?.phone}</p> 
              </div>
          </div>
        </div>

        <button onClick={Refresh}>Refresh</button>

      </div>
    </div>
  );
}

export default App;
