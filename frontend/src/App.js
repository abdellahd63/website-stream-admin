import logo from './logo.svg';
import './App.css';
import MyAsideBar from "./Components/asideBar";
import MyNavBar from "./Components/navBar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PanneList } from './Pages/PanneList';

function App() {
  return (
    <BrowserRouter>
      <main>
        <MyNavBar />
        <MyAsideBar />
        <Routes>
          <Route path='liste_des_pannes' element={<PanneList />} />
        </Routes>
      </main>
    </BrowserRouter>
      
  );
}

export default App;
