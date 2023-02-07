import './App.css';
import Login from './components/Login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup/Signup';

import { createBrowserHistory } from "history";
import Home from './components/Dashboard/Home';

function App() {
  const history = createBrowserHistory();
  return (
    <BrowserRouter>
    <Routes history={history}>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
