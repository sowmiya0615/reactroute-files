import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './router/Navbar';
import { Home } from './router/Home';
import { About } from './router/About';
import { Services } from './router/Services';
function App() {
  return (
    <div className="App">
      <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Home' element={<Home />}></Route>
      <Route path='/About' element={<About />}></Route>
      <Route path='/Services' element={<Services />}></Route>
    </Routes>
    </div>
  );
}

export default App;
