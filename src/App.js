/***************************************************
 *        FileName : App.js
 *        Date : 11.29
 *
 *   npm install @mui/material @emotion/react @emotion/styled
 *   npm install react-router-dom
 *   npm install @mui/icons-material
 *
 *   * rafc 사용
 *
 *
 *
 ***************************************************/

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Formpage from './Formpage';
import Appheader from './Appheader';
import Auto from './Auto';
import Comcheckbox from './Comcheckbox';
import Modalpopup from './Modalpopup';
import Muitable from './MuiTable';
import Floatingbutton from './Flatingbutton';
import Ratingctl from './Ratingctl';
import Alertpage from './AlertPage';
import SecondMenu from './Menu/SecondMenu';
import MuiBox_01 from './SecondMenu/MuiBox_01';
import ThirdMenu from './Menu/ThirdMenu';
import Dialog_01 from './ThirdMenu/Dialog_01';

//
//
function App() {
  return (
    <BrowserRouter>
      <Appheader></Appheader>
      <div style={{ marginTop: 5 }}>
        <SecondMenu></SecondMenu>
      </div>
      <div style={{ marginTop: 5 }}>
        <ThirdMenu></ThirdMenu>
      </div>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/form' element={<Formpage></Formpage>}></Route>
        <Route path='/auto' element={<Auto></Auto>}></Route>
        <Route path='/check' element={<Comcheckbox></Comcheckbox>}></Route>
        <Route path='/popup' element={<Modalpopup></Modalpopup>}></Route>
        <Route path='/table' element={<Muitable></Muitable>}></Route>
        <Route path='/fab' element={<Floatingbutton></Floatingbutton>}></Route>
        <Route path='/rating' element={<Ratingctl></Ratingctl>}></Route>
        <Route path='/alert' element={<Alertpage></Alertpage>}></Route>
        {/* ========================================
         */}
        <Route path='/MuiBox_01' element={<MuiBox_01></MuiBox_01>}></Route>

        {/* ============           ===================== */}

        <Route path='/dialog_01' element={<Dialog_01></Dialog_01>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
