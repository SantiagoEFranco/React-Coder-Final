import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
      if (existingItemIndex !== -1) {
        // Si el item ya existe, incrementa la cantidad
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].cantidad += quantity;
        return updatedCart;
      } else {
        // Si no existe, agrega el nuevo item
        return [...prevCart, { ...item, cantidad: quantity }];
      }
    });
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
