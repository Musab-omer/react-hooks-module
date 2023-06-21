import './App.css';
import MainNavbar from './component/layout/MainNavbar';
import CustomersCards from './component/pages/CustomersCards';
import UsersList from './component/pages/UsersList';

let App = () => {
  return (
    <div className="App">
      <MainNavbar />
      {/* <UsersList/> */}
      <CustomersCards/>
    </div>
  );
}

export default App;
