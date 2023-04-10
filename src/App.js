
import { Route, Routes } from 'react-router';
import './App.css';
import AppNavpar from './components/navBar';
import Products from './components/products';
import Cart from './components/cart';


function App() {
  return (
    <div className="App">
      <AppNavpar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
