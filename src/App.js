
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Menu from './components/Menu.js';
import Reservations from './components/Reservations.js';
import OrderOnline from './components/OrderOnline.js';
import Login from './components/Login.js';
import './App.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <Header></Header>
          <Routes>
            <Route path='/Home' element={<Home/>}></Route>
            <Route path='/About' element={<About/>}></Route>
            <Route path='/Menu' element={<Menu/>}></Route>
            <Route path='/Reservations' element={<Reservations/>}></Route>
            <Route path='/OrderOnline' element={<OrderOnline/>}></Route>
            <Route path='/Login' element={<Login/>}></Route>
          </Routes>
          <footer></footer>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
