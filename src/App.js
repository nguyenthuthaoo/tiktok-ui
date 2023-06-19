import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/Home'
import NewPage from './pages/New'
import ContactPage from './pages/Contact'

import './App.css';

function App() {
  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new">New</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/new' element={<NewPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
