import './App.css';
import MainNavbar from './component/layout/MainNavbar';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import ButtonExample from './component/views/ButtonExample';
import AcceptTerms from './component/views/AcceptTerms';
import MessageOne from './component/views/MessageOne';
import MessageTwo from './component/views/MessageTwo';
import MessageThree from './component/views/MessageThree';
import MessageFour from './component/views/MessageFour';
import MessageFive from './component/views/MessageFive';



let App = () => {
  return (
    <div className="App">
      <MainNavbar />
      {/* <ButtonExample/> */}
      {/* <AcceptTerms/> */}
      <MessageOne/>
      <MessageTwo/>
      <MessageThree/>
      <MessageFour/>
      <MessageFive/>
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
