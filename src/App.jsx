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


import Hint2 from './Hints/Hint2';import Hint3 from './Hints/Hint3';
import Hint4 from './Hints/Hint4';import Hint5 from './Hints/Hint5';



function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
        <Route path='/Story' element={<Story/>}/>
        <Route path='/WhoAreWe' element={<WhoAreWe/>}/>
        <Route path='/Documentation' element={<Documentation/>}/>
        
        <Route path='/Story/Alessandro' element={<Alessandro/>}/>
        <Route path='/Story/Anastasios-b7HkP' element={<Anastasios/>}/>
        <Route path='/Story/AliOsman-2nL1f' element={<AliOsman/>}/>
        <Route path='/Story/Michael-M5sCp' element={<Michael/>}/>
        <Route path='/Story/Lara-G4tE9' element={<Lara/>}/>
        <Route path='/Story/Unknown' element={<Unknown/>}/>

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
