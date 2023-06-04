import { Routes, Route, Link, NavLink, useNavigate}
    from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage'; import Story from "./Pages/Story"; 
import WhoAreWe from './Pages/WhoAreWe'; import Documentation from './Pages/Documentation';
import Modal from './Pages/Modal';
import Unknown from './Chars/Unknown';
import Alessandro from './Chars/Alessandro';
import Anastasios from './Chars/Anastasios';import Michael from './Chars/Michael';
import Lara from './Chars/Lara';import AliOsman from './Chars/AliOsman';

import Hint1 from './Hints/Hint1';import Hint2 from './Hints/Hint2';import Hint3 from './Hints/Hint3';
import Hint4 from './Hints/Hint4';import Hint5 from './Hints/Hint5';


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
        <Route path='/story' element={<Story/>}/>
        <Route path='/whoarewe' element={<WhoAreWe/>}/>
        <Route path='/documentation' element={<Documentation/>}/>
        
        <Route path='/story/alessandro' element={<Alessandro/>}/>
        <Route path='/story/anastasios' element={<Anastasios/>}/>
        <Route path='/story/aliosman' element={<AliOsman/>}/>
        <Route path='/story/michael' element={<Michael/>}/>
        <Route path='/story/lara' element={<Lara/>}/>
        <Route path='/story/unknown' element={<Unknown/>}/>

      <Route path='/n7YJ9KdPmX' element={<Hint1/>}/>
      <Route path='/G4fU5vN8cS' element={<Hint2/>}/>
      <Route path='/b2Df5VcPmX' element={<Hint3/>}/>
      <Route path='/L6rM2nT8jW' element={<Hint4/>}/>
      <Route path='/H9kP7tN3mZ' element={<Hint5/>}/>

    </Routes>
    </>
  
  );
}

export default App;
