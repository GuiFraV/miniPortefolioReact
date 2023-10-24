import Logo from './assets/Logo.svg'
import Header from './components/Header';
import Profile from './pages/Profile'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header logo={Logo} />
      <Profile userName={"GuiFraV"}/>
    </div>
  );
}

export default App;
