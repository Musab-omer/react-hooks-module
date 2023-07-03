import './App.css';
import MainNavbar from './component/layout/MainNavbar';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import ButtonExample from './component/views/ButtonExample';
import AcceptTerms from './component/views/AcceptTerms';



let App = () => {
  return (
    <div className="App">
      <MainNavbar />
      {/* <ButtonExample/> */}
      <AcceptTerms/>
      <FloatingWhatsApp phoneNumber='+917330485402'
        accountName='Code With Musab'
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
    </div>
  );
}

export default App;
