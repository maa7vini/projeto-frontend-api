import './App.css';
import UserPicture from './components/User Picture/UserPicture';
import UserName from './components/User Name/UserName';
import UserAge from './components/User Age/UserAge';
import UserCity from './components/User City/UserCity';
import UserPhone from './components/User Phone/UsePhone';
import UserStreet from './components/User Street/UserStreet';
import UserCountry from './components/User Country/UserCountry';

function App() {

  function Refresh(){

    window.location.reload()

  }

  return (
    <div className='App'>
      <div className='container'>
        <div className='containerTop'>

        <UserPicture></UserPicture>

        </div>

        <div className='containerBottom'>
          <div className='containerLeft'>

            <UserName></UserName>

            <UserAge></UserAge>

            <UserCity></UserCity>

          </div>

          <div className='containerRight'>

          <UserPhone></UserPhone>

          <UserStreet></UserStreet>

          <UserCountry></UserCountry>

          </div>
        </div>
      </div>

      <button onClick={Refresh}>Refresh</button>
    </div>
  );
}

export default App;
