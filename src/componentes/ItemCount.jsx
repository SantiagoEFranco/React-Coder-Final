
import { Button } from "react-bootstrap"
import { useState , useEffect } from "react"
import { useParams } from 'react-router-dom';
import {getProduct} from "./asynMock"

export default function ItemCount({ quantity, setQuantity }){

    
    const [stockProduct , setStockProduct] = useState({})

    const { id } = useParams();

    useEffect(() => {
        const product = getProduct(id);
        setStockProduct(product);
        setQuantity(1); // Reinicia la cantidad al cargar el producto
    }, [id, setQuantity]);

     
   

    const handleClickSuma = () => {
        if (quantity < stockProduct.stock) {
            setQuantity(quantity + 1);
        }
    };

    const handleClickResta = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return(
        <>
             <article style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                <Button bg="danger" onClick={handleClickResta}>-</Button>
                <p style={{ margin: '1rem' }}>{quantity}</p>
                <Button onClick={handleClickSuma}>+</Button>
            </article>
       
        </>
    )
}