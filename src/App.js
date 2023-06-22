import './App.css';
import MainNavbar from './component/layout/MainNavbar';
import ContactApp from './component/contact-app/ContactApp';

let App = () => {
  return (
    <div className="App">
      <MainNavbar />
      <ContactApp/>
    </div>
  );
}

export default App;
