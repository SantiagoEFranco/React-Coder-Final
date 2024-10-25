import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import './CartComponent.css'; 

export default function CartComponent() {
  const { cart, removeItem, clearCart } = useContext(CartContext);

  const handleRemoveItem = (id) => {
    removeItem(id);
  };

  const handleClearCart = () => {
    clearCart();
  };

  if (cart.length === 0) {
    return <p>El carrito está vacío.</p>;
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Productos en el carrito</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <p>{item.title} - $ {item.price} x {item.cantidad}</p>
            <button className="button" onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <button className="button" onClick={handleClearCart}>Vaciar carrito</button>
      <p>Total: $ {cart.reduce((total, item) => total + item.price * item.cantidad, 0)}</p>
      <button className="buttonComprar" >
      Finalizar compra </button>
    </div>
  );
}
