import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import NavBar from './Shared/NavBar';
import { CartProvider } from './contexts/CartContext';
import { InputProvider } from './contexts/CalculatorContext';
import Paymen from './Components/Paymen';



function App() {
  return (
    <CartProvider>
      <InputProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="Payment" exact element={<Paymen />} />
          </Routes>
        </Router>
      </InputProvider>
    </CartProvider>
  );
}

export default App;
