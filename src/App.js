import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header';

import Cal1 from './component/Cal1';
import Cal2 from './component/Cal2';
import Cal3 from './component/Cal3';
import Timer from './component/Timer';
import Shape from './component/Shape';
import Calculator from './component/Calculator';
import Tictec from './component/Tictec';
import Puzzle from './component/Puzzle';
import Tolist from './component/Tolist';


const menuItems = [
        
        { name: 'Cal1', path: '/Cal1' },
        { name: 'Cal2',path: '/Cal2' },
        { name: 'Cal3',path: '/Cal3' },
        { name: 'Timer',path: '/Timer' },
        { name: 'Shape',path: '/Shape' },
        { name: 'Calculator',path: '/Calculator'},
        { name: 'Tictec',path: '/Tictec'},
        { name: 'Puzzle',path: '/Puzzle'},
        { name: 'Tolist',path: '/Tolist' }

        
    ];

function App() {
  return (
      <div className="App">
        <Header menu={menuItems} />
        <Routes>
          <Route path='cal1' element={<Cal1/>}></Route>
          <Route path='cal2' element={<Cal2/>}></Route>
          <Route path='cal3' element={<Cal3/>}></Route>
          <Route path='Timer' element={<Timer/>}></Route>
          <Route path='Shape' element={<Shape/>}></Route>
          <Route path='Calculator' element={<Calculator/>}></Route>
          <Route path='Tictec' element={<Tictec/>}></Route>
          <Route path='Puzzle' element={<Puzzle/>}></Route>
          <Route path='Tolist' element={<Tolist/>}></Route>
          
        </Routes>
      </div>
  );
}

export default App;
