
import { useState } from 'react';
import './App.css';
import MainNavbar from './component/layout/MainNavbar';
import DigtalWatch from './component/pages/DigtalWatch';
import Acomponent from './component/pages/propDrilling/Acomponent';
import OneComponent from './component/pages/contextApi/OneComponent';
import UserContext from './component/pages/contextApi/UserContext';

let App = () => {
  let [personalInfo, setPersonalnfo] = useState({
    firstName: 'Musab',
    lastName: 'Omer',
    gender: 'Male'
  })
  return (
    <div className="App">
      <MainNavbar />
      {/* <DigtalWatch/> */}

      {/* ----------- prop drilling example  */}
      {/* <div className='container mt-3'>
        <div className='row'>
          <div className='col'>
            <div className='card'>
              <div className='card-body bg-primary'>
                <p className='h4'>App Component</p>
                <pre>{JSON.stringify(personalInfo)}</pre>
                <Acomponent resivePersonalInfo={personalInfo}/>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* --------- context Api example ------ */}
          <div className='container mt-3'>
            <div className='row'>
              <div className='col'>
                <div className='card'>
                  <div className='card-body bg-primary'>
                    <p className='h4'>App Component</p>
                    <pre>{JSON.stringify(personalInfo)}</pre>
                    <UserContext.Provider value={personalInfo}>
                      <OneComponent />
                    </UserContext.Provider>
                  </div>
                </div>
              </div>
            </div>
          </div>

    </div>
  );
}

export default App;
