import './App.css';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar'
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import OtpValidation from './components/OtpValidation'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<><Home /></>}></Route>
          <Route path='/signup' element={<><SignUp /></>}></Route>
          <Route path='/login' element={<><Login /></>}></Route>
          <Route path='/validateotp/:id' element={<><OtpValidation/></>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
