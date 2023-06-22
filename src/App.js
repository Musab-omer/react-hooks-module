import './App.css';
import MainNavbar from './component/layout/MainNavbar';
import GithubSearchApp from './component/github/GithubSearchApp'
let App = () => {
  return (
    <div className="App">
      <MainNavbar />
      <GithubSearchApp/>
    </div>
  );
}

export default App;
