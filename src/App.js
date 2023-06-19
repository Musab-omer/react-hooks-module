
import './App.css';
import MainNavbar from './component/layout/MainNavbar';
import AuthUser from './component/pages/AuthUser';
import Customers from './component/pages/Customers';
import EmployeeCard from './component/pages/EmployeeCard';
import Hobies from './component/pages/Hobies';
import HobiesRadio from './component/pages/HobiesRadio';



let App=()=> {
  return (
    <div className="App">
       <MainNavbar/>
     {/* <Hobies/> */}
     {/* <HobiesRadio/> */}
     {/* <AuthUser/> */}
     {/* <EmployeeCard/> */}

     <Customers/>
    </div>
  );
}

export default App;
