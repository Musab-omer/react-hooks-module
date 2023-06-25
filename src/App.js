import './App.css';
import MainNavbar from './component/layout/MainNavbar';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import Home from './component/views/Home';
import About from './component/views/About';
import EmployeesList from './component/views/employees/EmployeesList';
import EmployeesDetails from './component/views/employees/EmployeeDetails';
import Stocks from './component/views/stocks/Stocks';
import Contact from './component/views/Contact';
import StockDetails from './component/views/stocks/StockDetails';

let App = () => {
  return (
    <div className="App">

      <BrowserRouter>
        <MainNavbar />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/about' Component={About} />
          <Route exact path='/employees/list' Component={EmployeesList} />
          <Route exact path='/employees/:id' Component={EmployeesDetails} />
          <Route exact path='/stocks/list' Component={Stocks} />
          <Route exact path='/stocks/:id' Component={StockDetails} />
          <Route exact path='/contact' Component={Contact} />
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
