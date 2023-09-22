import './App.scss';
import Menu from '../src/components/Menu.js';
import Project from './components/Project';
import Home from './components/Home';
import Resume from './components/Resume';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/project' exact Component={Project}/>
        <Route path='/resume' exact Component={Resume}/>
        {/* <Route path='/resume' exact Component={Resume}/> */}
        {/* <Route path='/contact' exact Component={Contact}/> */}
      </Routes>
    </Router>
  );
}

export default App;
