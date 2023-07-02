import './App.css';
import MainNavbar from './component/layout/MainNavbar';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import ButtonExample from './component/views/ButtonExample';



let App = () => {
  return (
    <div className="App">
      <MainNavbar />
      <ButtonExample/>
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
