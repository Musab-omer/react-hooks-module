
import './App.css';
import MainNavbar from './component/layout/MainNavbar';
import CarSelector from './component/pages/CarSelector';
import MessageCard from './component/pages/MessageCard';
import SMSApp from './component/pages/SMSApp';
import UserRegistration from './component/pages/UserReagistration';


let App=()=> {
  return (
    <div className="App">
       <MainNavbar/>
      {/* <UserRegistration/> */}
      {/* <CarSelector/> */}
      <MessageCard/>
      {/* <SMSApp/> */}
    </div>
  );
}

export default App;
