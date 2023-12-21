import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import AuthProvider from './context/auth';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/' element={<PrivateRoute Cmp={Home} />} />
          <Route exact path='/home' element={<PrivateRoute Cmp={Home} />} />
          <Route exact path='/Gifphy_app' element={<PrivateRoute Cmp={Home} />} />
          <Route exact path='/profile' element={<PrivateRoute Cmp={Profile} />} />
        </Routes>
      </AuthProvider>     
    </>

  );
}

export default App;
