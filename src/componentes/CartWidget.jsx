import { MdOutlineShoppingCart } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import CartComponent from './CartComponent'; 
import './CartWidget.css'

export default function CartWidget() {
    const { cart } = useContext(CartContext);
    const [cartVisible, setCartVisible] = useState(false); 

    const toggleCart = () => {
        setCartVisible(!cartVisible); // visibilidad del carrito
    };

    return (
        <>
            <Button onClick={toggleCart} style={{  width:'20px', height:'36px', display:'flex', justifyContent:'center', alignItems:'center' }}>
                <MdOutlineShoppingCart className='carrito' />
                <p className="contadorCarrito">{cart.length}</p>
            </Button>

            {cartVisible && <CartComponent />} 
        </>
    );
}
