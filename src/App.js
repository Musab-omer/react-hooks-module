
import './App.css';
import MainNavbar from './component/layout/MainNavbar';
import DigtalWatch from './component/pages/DigtalWatch';

let App=()=> {
  return (
    <div className="App">
       <MainNavbar/>
      <DigtalWatch/>
    </div>
  );
}

export default App;
