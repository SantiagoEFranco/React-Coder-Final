import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../componentes/asynMock";
import { CartContext } from "../context/CartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isInCart, setIsInCart] = useState(false);
  const { cart, addItem } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = () => {
      const productData = getProduct(id);
      setProduct(productData);
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    const productInCart = cart.find(item => item.id === product.id);
    if (!productInCart) {
      addItem(product, 1);
      setIsInCart(true);
      toast.success(`${product.title} se ha agregado al carrito`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!product) {
    return <p>Cargando producto...</p>;
  }

  return (
    <div>
      <ToastContainer />
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>Precio: $ {product.price}</p>
      <p>{product.description}</p>
      <p>Año: {product.year}</p>
      <p>Stock: {product.stock}</p>
      <button onClick={handleAddToCart } style={{backgroundColor:'#3ee646', color:'white'}} disabled={isInCart}>
        {isInCart ? "Producto agregado" : "Comprar"}
      </button>
    </div>
  );
}
