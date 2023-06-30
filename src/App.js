import './App.css';
import MainNavbar from './component/layout/MainNavbar';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { FloatingWhatsApp } from 'react-floating-whatsapp';


let App = () => {
  return (
    <div className="App">

      <BrowserRouter>
        <MainNavbar />
        <Routes>
          
        </Routes>
      </BrowserRouter>
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
