
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
//pages
import Navbar from './components/Navbar/Navbar';
import Footer from "./pages/Footer/Footer";
import Homepage from './pages/Homepage/Homepage';
import Restraunt from "./pages/Restraunt/Restraunt";


function App() {
  return (
    //1.Navbar
    //2.Button
    

    <BrowserRouter>
    <div>
      <Navbar/>
      <Routes>
        <Route exact path='/:cityName/delivery' element={<Homepage/>}></Route>
      </Routes>
      <Routes>
        <Route exact path='/:cityName/restaurant' element={<Restraunt/>}></Route>
      </Routes>
     <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
