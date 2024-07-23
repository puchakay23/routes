
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Labs from './components/Labs';
import Support from './components/Support';
import Notfound from './components/Notfound';
import { NavLink } from 'react-router-dom';
import Mainheader from './components/Mainheader'

function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/support">Support</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/labs">labs</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Mainheader/>}>
          <Route index element={<Home/>}></Route>
          <Route path='/support' element={<Support/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/labs' element={<Labs/>}></Route>
          <Route path='*' element={<Notfound/>}></Route>
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
