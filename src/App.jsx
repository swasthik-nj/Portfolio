
import { useState } from 'react';
import './App.css'
import Nav from './components/Nav'
import About from './pages/About';
import Resume from './pages/Resume';
import Project from './pages/Project';

function App() {
  const [activePage, setActivePage] = useState("about");

  return (
    <div>
      <Nav onNavClick={setActivePage}/>
      <div>
        {activePage === 'about' && <About />}
        {activePage === 'resume' && <Resume />}
        {activePage === 'projects' && <Project />}
      </div>
    </div>
  )
}

export default App
