import logo from './logo.svg';
import './App.css';
import  MainNavbar  from './component/layout/MainNavbar';
import CounterClass from './component/pages/CounterClass';
import Counter from './component/pages/Counter';
import MessageCard from './component/pages/MessageCard';
import Product from './component/pages/Product';

let App=()=> {
  return (
    <div className="App">
       <MainNavbar/>
       {/* <CounterClass/> */}
       {/* <Counter/> */}
       {/* <MessageCard/> */}
       <Product/>
    </div>
  );
}

export default App;
