import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './componentes/NavBar';
import HomeView from './views/HomeView';
import ItemDetailContainer from './views/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer';
import ProductsContext from './context/ProductsContext';
import ItemsContainer from './componentes/ItemsContainer';
import { CartProvider } from './context/CartContext';
import CartComponent from './componentes/CartComponent'; 

function App() {
  const [cartVisible, setCartVisible] = useState(false); //  controla la visibilidad

  const toggleCart = () => {
    setCartVisible(!cartVisible); // Alterna la visibilidad del carrito
  };

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <ProductsContext>
            <NavBar toggleCart={toggleCart} /> 
            <Routes>
              <Route path='/' element={<HomeView />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
            </Routes>
            <ItemsContainer />
            {cartVisible && <CartComponent />} 
          </ProductsContext>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
