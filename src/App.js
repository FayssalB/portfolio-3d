import './App.scss';
// import Menu from '../src/components/Menu.js';
import Project from './components/Project';
import Home from './components/Home';
import Resume from './components/Resume';
import { Routes, Route} from 'react-router-dom';
import Detail from './components/Detail';
import { Contact } from './components/Contact';


function App() {
  return (
    
      <Routes>
        <Route path='/portfolio3d' exact Component={Home}/>
        <Route path='/project' exact Component={Project}/>
        <Route path='/project/:id'  Component={Detail}/>
        <Route path='/resume' exact Component={Resume}/>
        <Route path='/contact' exact Component={Contact}/>
      </Routes>
    
  );
}

export default App;
