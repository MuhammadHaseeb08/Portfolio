import logo from './logo.svg';
import './App.css';
import Main from './Components/Main/Main';
import { Routes,Route } from 'react-router-dom';
import Persone from './Components/Person/Person';
import Contacte from './Components/Contact/Contact';
import Worke from './Components/Work/Work';
import Sidebar from './Components/Sidebar/Sidebar';
import { useLocation } from 'react-router-dom';
import Map from './Components/Map/Map';

function App() {
  let location= useLocation()
  return (
    <div className="App">
      <Sidebar/>
      <Routes location={location} key={location.pathname}>
<Route element={<Main></Main>} path="/"/>
<Route element={<Persone></Persone>} path="/person"/>
<Route element={<Contacte></Contacte>} path="/contact"/>
<Route element={<Worke></Worke>} path="/work"/>
<Route element={<Worke></Worke>} path="/work"/>
<Route element={<Map></Map>} path="/map"/>








      </Routes>
      
    </div>
  );
}

export default App;
