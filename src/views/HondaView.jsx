import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getCategory } from '../componentes/asynMock';
import ProductList from '../componentes/ProductList';
export default function ItemDetailContainer() {
  const [products, setProducts] = useState([]);

  const {categoryId} = useParams();

  useEffect(() => {
   if(categoryId){
    setProducts(getCategory(categoryId))
   }else{
    setProducts(getProducts())
   }
  }, [categoryId]);

  console.log(products)

  return (
    <>
      <article style={{ border: '1px solid white', padding: 40 }}>
    
      </article>
    </>
  );
}