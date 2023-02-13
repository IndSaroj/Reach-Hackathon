// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Register from './Register/Register';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import PaymentWallet from './PaymentWallet/PaymentWallet';



function App() {
  return (

    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='Paymentwallet' element={<PaymentWallet />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>

  );
}

export default App;
