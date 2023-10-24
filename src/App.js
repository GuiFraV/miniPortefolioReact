import Logo from './assets/Logo.svg'
import Header from './components/Header';
import Profile from './pages/Profile';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header logo={Logo} />
        <Routes>
          <Route 
            path='/'
            element={<Profile userName="GuiFraV" />}
          />
          <Route 
            path='/projects'
            element={<Projects userName="GuiFraV" />}
          />
          <Route 
            path='/projects/:name'
            element={<ProjectDetails userName="GuiFraV" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
