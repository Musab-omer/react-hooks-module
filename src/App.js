import './App.css';
import MainNavbar from './component/layout/MainNavbar';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import Home from './component/views/home/Home';
import ProductsList from './component/views/product/ProductsList';
import ProductAdmin from './component/views/product/ProductAdmin';
import CreateProduct from './component/views/product/CreateProduct';
import UpdateProduct from './component/views/product/UpdateProduct';


let App = () => {
  return (
    <div className="App">

      <BrowserRouter>
        <MainNavbar />
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route exact path='/products/list' Component={ProductsList}/>
          <Route exact path='/products/admin' Component={ProductAdmin}/>
          <Route exact path='products/create' Component={CreateProduct}/>
          <Route exact path='products/:id' Component={UpdateProduct}/>
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
