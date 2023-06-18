import { Routes, Route}
    from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage'; import Story from "./Pages/Story"; 
import WhoAreWe from './Pages/WhoAreWe'; import Documentation from './Pages/Documentation';
import Unknown from './Chars/Unknown';
import Alessandro from './Chars/Alessandro';
import Abraham from './Chars/Abraham';import Ettore from './Chars/Ettore';
import Levanja from './Chars/Levanja';import AliOsman from './Chars/AliOsman';
import Dhruv from './Chars/Dhruv';
import Hint1 from './Hints/Hint1';
import Hint2 from './Hints/Hint2';import Hint3 from './Hints/Hint3';
import Hint4 from './Hints/Hint4';import Hint5 from './Hints/Hint5';

import Zint6 from './Hints/Zint6';import Zint7 from './Hints/Zint7';
import Zint8 from './Hints/Zint8';import Zint9 from './Hints/Zint9';
import Zint10 from './Hints/Zint10';import Zint11 from "./Hints/Zint11";
import Zint12 from "./Hints/Zint12";



function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
        <Route path='/Story' element={<Story/>}/>
        <Route path='/WhoAreWe' element={<WhoAreWe/>}/>
        <Route path='/Documentation' element={<Documentation/>}/>
        
        <Route path='/Story/Alessandro' element={<Alessandro/>}/>
        <Route path='/Story/Abraham-b7HkP' element={<Abraham/>}/>
        <Route path='/Story/AliOsman-2nL1f' element={<AliOsman/>}/>
        <Route path='/Story/Dhruv-3t5aq' element={<Dhruv/>}/>
        <Route path='/Story/Ettore-M5sCp' element={<Ettore/>}/>
        <Route path='/Story/Levanja-G4tE9' element={<Levanja/>}/>
        <Route path='/Story/Unknown' element={<Unknown/>}/>

        <Route path='/n7YJ9KdPmX' element={<Hint1/>}/>
        <Route path='/G4fU5vN8cS' element={<Hint2/>}/>
        <Route path='/b2Df5VcPmX' element={<Hint3/>}/>
        <Route path='/L6rM2nT8jW' element={<Hint4/>}/>
        <Route path='/H9kP7tN3mZ' element={<Hint5/>}/>

        <Route path='/u7Fj4B2kP9' element={<Zint6/>}/>
        <Route path='/X3rVtL5yQ6' element={<Zint7/>}/>
        <Route path='/s2Dg9M1wH8' element={<Zint8/>}/>
        <Route path='/R6zK7dY0jI' element={<Zint9/>}/>
        <Route path='/A4vG6cT3eS' element={<Zint10/>}/>
        <Route path='/e9T6W4zR1Q' element={<Zint11/>}/>
        <Route path='/b2X7L5nC3V' element={<Zint12/>}/>

    </Routes>
    </>
  
  );
}

export default App;

