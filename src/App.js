import Header from './components/Header';
import './App.css';
import Logo from './assets/Logo.svg'

function App() {
  return (
    <div className="App">
      <Header logo={Logo} />
    </div>
  );
}

export default App;
